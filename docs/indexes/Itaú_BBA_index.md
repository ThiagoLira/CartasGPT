---
layout: default
permalink: /Itaú_BBA/
---

<h1>Cartas da Gestora Itaú_BBA</h1>
<ul>
{%for item in site.Itaú_BBA%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>