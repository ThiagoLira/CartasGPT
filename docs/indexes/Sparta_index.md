---
layout: default
permalink: /Sparta/
---

<h1>Cartas da Gestora Sparta</h1>
<ul>
{%for item in site.Sparta%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
