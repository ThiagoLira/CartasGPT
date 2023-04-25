---
layout: default
permalink: /Kinea/
---

<h1>Cartas da Gestora Kinea</h1>
<ul>
{%for item in site.Kinea%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
