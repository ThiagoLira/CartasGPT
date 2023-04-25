---
layout: default
permalink: /Meta_Asset_Management/
---

<h1>Cartas da Gestora Meta_Asset_Management</h1>
<ul>
{%for item in site.Meta_Asset_Management%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>