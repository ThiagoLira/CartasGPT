---
layout: default
permalink: /Atmosphere_Capital/
---

<h1>Cartas da Gestora Atmosphere_Capital</h1>
{% assign category_name = "Atmosphere_Capital" %}
{% if site.Atmosphere_Capital %}
{% assign sorted_posts = site.Atmosphere_Capital | where_exp: "post", "post.category == category_name" | sort: "tags" | group_by: "tags" %}
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
