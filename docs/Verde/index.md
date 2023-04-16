---
layout: default
title: Verde 
category: Verde
---


{% for post in site.posts %}
  {% if post.categories contains page.category %}
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  {% endif %}
{% endfor %}

{{ site.categories | inspect }}
