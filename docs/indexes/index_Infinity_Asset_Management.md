---
layout: default
permalink: /Infinity_Asset_Management/
---

{% assign category_name = "Infinity_Asset_Management" %}
{% assign modified_string = category_name| replace: "_", " " %}
<h1>{{modified_string}}</h1>
{% if site.Infinity_Asset_Management %}
{% assign sorted_posts = site.Infinity_Asset_Management | where_exp: "post", "post.category == category_name" | sort: "tags" | group_by: "tags" %}
{% for tag in sorted_posts %}
{% assign cleaned_string = tag.name | remove: "[" | remove: "]" | remove: '"' | replace: "_", " " %}
<h2>{{ cleaned_string }}</h2>
{% assign posts_by_date = tag.items | sort: "date" %}
<ul>
{% for post in posts_by_date %}
{% assign clean_title = post.title | replace: "_", " " %}
<li><a href="{{ post.url | relative_url }}">{{ clean_title }} </a><span>{{ post.date | date: "%B, %Y" }}</span></li>
{% endfor %}
</ul>
{% endfor %}
{% endif %}
