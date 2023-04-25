---
layout: default
permalink: /Genoa_Capital/
---

<h1>Cartas da Gestora Genoa_Capital</h1>
<ul>
{%for item in site.Genoa_Capital%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>