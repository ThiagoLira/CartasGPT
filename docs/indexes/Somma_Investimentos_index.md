---
layout: default
permalink: /Somma_Investimentos/
---

<h1>Cartas da Gestora Somma_Investimentos</h1>
<ul>
{%for item in site.Somma_Investimentos%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
