---
layout: default
permalink: /XP_Asset_Management/
---

{% assign category_name = "XP_Asset_Management" %}
{% assign modified_string = category_name| replace: "_", " " %}
<h1>{{modified_string}}</h1>
{% if site.XP_Asset_Management %}
{% assign sorted_posts = site.XP_Asset_Management |  sort: "tags" | group_by: "tags" %}
{% for tag in sorted_posts %}
{{tag.name}}
{% assign cleaned_string = tag.name | remove: "[" | remove: "]" | remove: '"' | replace: "_", " " %}
<h2>{{ cleaned_string }}</h2>
{% assign posts_by_date = tag.items | sort: "date" %}
<ul>
{% for post in posts_by_date %}
<li><a href="{{ post.url | relative_url }}">{{ post.title }} </a><span>{{ post.date | date: "%B, %Y" }}</span></li>
{% endfor %}
</ul>
{% endfor %}
{% endif %}
