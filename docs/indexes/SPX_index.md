---
layout: default
permalink: /SPX/
---

<h1>Cartas da Gestora SPX</h1>
<ul>
{%for item in site.SPX%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>