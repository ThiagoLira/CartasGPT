---
layout: default
permalink: /BNP_Asset_Management/
---

<h1>Cartas da Gestora BNP_Asset_Management</h1>
<ul>
{%for item in site.BNP_Asset_Management%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
