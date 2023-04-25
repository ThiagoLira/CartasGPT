---
layout: default
permalink: /Clave_Capital/
---

<h1>Cartas da Gestora Clave_Capital</h1>
<ul>
{%for item in site.Clave_Capital%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>