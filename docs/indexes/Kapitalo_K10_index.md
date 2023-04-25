---
layout: default
permalink: /Kapitalo_K10/
---

<h1>Cartas da Gestora Kapitalo_K10</h1>
<ul>
{%for item in site.Kapitalo_K10%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
