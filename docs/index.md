---
layout: default
---

<h1>Lista de Gestoras</h1>
<ul>
{% for collection in site.collections %}
  <li>
    <a href="{{ site.baseurl }}/{{ collection.label }}/">{{ collection.label }}</a>
  </li>
{% endfor %}
</ul>
