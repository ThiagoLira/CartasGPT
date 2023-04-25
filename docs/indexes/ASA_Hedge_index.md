---
layout: default
permalink: /ASA_Hedge/
---

<h1>Cartas da Gestora ASA_Hedge</h1>
<ul>
{%for item in site.ASA_Hedge%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>
