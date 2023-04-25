---
layout: default
permalink: /Trafalgar_Investimentos/
---

<h1>Cartas da Gestora Trafalgar_Investimentos</h1>
<ul>
{%for item in site.Trafalgar_Investimentos%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
