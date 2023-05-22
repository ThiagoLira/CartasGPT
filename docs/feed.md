---
layout: page
title: Feed
permalink: /feed/
---

<h2>Últimas Morning Calls e Cartas</h2>
{% assign all_posts = "" | split: "" %}

{% for collection in site.collections %}
  {% assign all_posts = all_posts | concat: collection.docs %}
{% endfor %}

{% assign sorted_posts = all_posts | sort: "date" | reverse %}

{% for post in sorted_posts limit:30 %}
<a href="{{ post.url }}"> {{ post.title | replace: "_", " " }} - ({{ post.category | replace: "_", " " }})</a><br><span>{{ post.date | date: "%B, %d %Y" }}</span>
  <br>
  <br>
{% endfor %}
