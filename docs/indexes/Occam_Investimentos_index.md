---
layout: default
permalink: /Occam_Investimentos/
---

<h1>Cartas da Gestora Occam_Investimentos</h1>
<ul>
{%for item in site.Occam_Investimentos%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>