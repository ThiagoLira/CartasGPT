---
layout: default
permalink: /Infinity_Asset/
---

{% assign category_name = "Infinity_Asset" %}
{% assign modified_string = category_name| replace: "_", " " %}
{{ modified_string }}
<h1>Cartas da Gestora {{modified_string}}</h1>
{% if site.Infinity_Asset %}
{% assign sorted_posts = site.Infinity_Asset | where_exp: "post", "post.category == category_name" | sort: "tags" | group_by: "tags" %}
{% for tag in sorted_posts %}
<h2>{{ tag.name }}</h2>
{% assign posts_by_date = tag.items | sort: "date" %}
<ul>
{% for post in posts_by_date %}
<li><a href="{{ post.url | relative_url }}">{{ post.title }} </a><span>{{ post.date | date: "%B %d, %Y" }}</span></li>
{% endfor %}
</ul>
{% endfor %}
{% endif %}
