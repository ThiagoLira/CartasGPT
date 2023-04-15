---
layout: default
title: Verde
---

{% for file in site.static_files %}
  {% if file.path contains "/option1/" and file.extname == ".md" %}
    <a href="{{ site.baseurl }}{{ file.path }}">{{ file.name | remove: ".md" | date: "%Y-%m-%d" }}</a><br>
  {% endif %}
{% endfor %}
