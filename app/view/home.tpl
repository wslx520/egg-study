<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="news-view view">
        {% for item in list %}
            <div class="item"><a href="{{ item.url }}">{{ item.title }}</a><span>{{helper.relativeTime(item.time)}}</span></div>
        {%endfor %}
    </div>
</body>
</html>