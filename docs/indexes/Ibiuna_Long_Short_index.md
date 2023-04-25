---
layout: default
permalink: /Ibiuna_Long_Short/
---

<h1>Cartas da Gestora Ibiuna_Long_Short</h1>
<ul>
{%for item in site.Ibiuna_Long_Short%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>