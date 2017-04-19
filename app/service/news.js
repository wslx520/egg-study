module.exports = app => (
    class NewsServices extends app.Service {
        *list (page = 1) {
            const {serverUrl, pageSize} = this.app.config.news;
            console.log(serverUrl, pageSize);
            const {data: idList} = yield this.ctx.curl(`${serverUrl}/topstories.json`, {
                data: {
                    orderBy: '"$key"',
                    startAt: `"${pageSize * (page -1)}"`,
                    endAt: `"${pageSize * page - 1}"`
                },
                dataType: 'json'
            });

            const newsList = yield Object.keys(idList).map(key => {
                const url = `${serverUrl}/item/${idList[key]}.json`;
                return this.ctx.curl(url, {dataType: 'json'});
            });
            return newsList.map(res => res.data)
        }
    }
)