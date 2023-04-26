---
layout: default
permalink: /Kapitalo_Kappa/
---

<h1>Cartas da Gestora Kapitalo_Kappa</h1>
{% assign category_name = "Kapitalo_Kappa" %}
{% if site.Kapitalo_Kappa %}
{% assign sorted_posts = site.Kapitalo_Kappa | where_exp: "post", "post.category == category_name" | sort: "tags" | group_by: "tags" %}
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
