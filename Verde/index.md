---
layout: default
title: Verde
---

{% for file in site.static_files %}
  {% if file.path contains "/Verde/" and file.extname == ".md" %}
    <a href="{{ site.baseurl }}{{ file.path }}">{{ file.name | remove: ".md" | date: "%Y-%m" }}</a><br>
  {% endif %}
{% endfor %}
