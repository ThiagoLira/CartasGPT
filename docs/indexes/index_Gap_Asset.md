---
layout: default
permalink: /Gap_Asset/
---

{% assign category_name = "Gap_Asset" %}
{% assign modified_string = category_name| replace: "_", " " %}
{{ modified_string }}
<h1>Gestora {{modified_string}}</h1>
{% if site.Gap_Asset %}
{% assign sorted_posts = site.Gap_Asset | where_exp: "post", "post.category == category_name" | sort: "tags" | group_by: "tags" %}
{% for tag in sorted_posts %}
<h2>{{ tag.name }}</h2>
{% assign posts_by_date = tag.items | sort: "date" %}
<ul>
{% for post in posts_by_date %}
<li><a href="{{ post.url | relative_url }}">{{ post.title }} </a><span>{{ post.date | date: "%B, %Y" }}</span></li>
{% endfor %}
</ul>
{% endfor %}
{% endif %}
