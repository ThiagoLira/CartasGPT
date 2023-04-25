---
layout: default
permalink: /Itau/
---

<h1>Cartas da Gestora Itau</h1>
<ul>
{% for item in site.Itau %}
  <li>
    <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
{% endfor %}
</ul>



