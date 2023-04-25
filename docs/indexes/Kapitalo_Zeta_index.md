---
layout: default
permalink: /Kapitalo_Zeta/
---

<h1>Cartas da Gestora Kapitalo_Zeta</h1>
<ul>
{%for item in site.Kapitalo_Zeta%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
