---
layout: default
permalink: /Dahlia_Capital/
---

<h1>Cartas da Gestora Dahlia_Capital</h1>
<ul>
{%for item in site.Dahlia_Capital%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
