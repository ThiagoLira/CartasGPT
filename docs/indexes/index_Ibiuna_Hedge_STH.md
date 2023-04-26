---
layout: default
permalink: /Ibiuna_Hedge_STH/
---

<h1>Cartas da Gestora Ibiuna_Hedge_STH</h1>
{% assign category_name = "Ibiuna_Hedge_STH" %}
{% if site.Ibiuna_Hedge_STH %}
{% assign sorted_posts = site.Ibiuna_Hedge_STH | where_exp: "post", "post.category == category_name" | sort: "tags" | group_by: "tags" %}
{% for tag in sorted_posts %}
<h2>{{ tag.name }}</h2>
{% assign posts_by_date = tag.items | sort: "date" %}
<ul>
{% for post in posts_by_date %}
<li><a href="{{ post.url | relative_url }}">{{ post.title }}</a><span>{{ post.date | date: "%B %d, %Y" }}</span></li>
{% endfor %}
</ul>
{% endfor %}
{% endif %}
