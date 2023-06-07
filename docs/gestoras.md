---
layout: page
title: Lista de Gestoras
permalink: /gestoras/
---
<ul class="list-unstyled">
  {% for collection in site.collections %}
    {% if collection.label == 'posts' %}
      {% continue %}
    {% endif %}
    <li>
      {% assign modified_string = collection.label | replace: "_", " " %}
      <a href="{{ site.baseurl }}/{{ collection.label }}/">{{ modified_string }}</a>
    </li>
  {% endfor %}
</ul>
