---
layout: default
permalink: /Indie_Capital/
---

<h1>Cartas da Gestora Indie_Capital</h1>
<ul>
{%for item in site.Indie_Capital%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>