---
layout: page
title: Lista de Gestoras
permalink: /gestoras/
---
<ul>
  {% for collection in site.collections %}
    <li>
      {% assign modified_string = collection.label | replace: "_", " " %}
      <a href="{{ site.baseurl }}/{{ collection.label }}/">{{ modified_string }}</a>
    </li>
  {% endfor %}
</ul>
