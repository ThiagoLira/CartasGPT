---
layout: default
permalink: /ASA_Investments/
---

{% assign category_name = "ASA_Investments" %}
{% assign modified_string = category_name| replace: "_", " " %}
<h1>{{modified_string}}</h1>
{% if site.ASA_Investments %}
{% assign sorted_posts = site.ASA_Investments | where_exp: "post", "post.category == category_name" | sort: "tags" | group_by: "tags" %}
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
