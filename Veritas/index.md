---
layout: default
title: Veritas
---

{% for file in site.static_files %}
  {% if file.path contains "/Veritas/" and file.extname == ".md" %}
    <a href="{{ site.baseurl }}{{ file.path }}">{{ file.name | remove: ".md" | date: "%Y-%m-%d" }}</a><br>
  {% endif %}
{% endfor %}
