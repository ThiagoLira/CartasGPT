---
layout: default
permalink: /Ibiuna_Crédito/
---

<h1>Cartas da Gestora Ibiuna_Crédito</h1>
<ul>
{%for item in site.Ibiuna_Crédito%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>