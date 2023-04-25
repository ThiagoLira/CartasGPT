---
layout: default
permalink: /Verde_Asset_Management/
---

<h1>Cartas da Gestora Verde_Asset_Management</h1>
<ul>
{%for item in site.Verde_Asset_Management%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
