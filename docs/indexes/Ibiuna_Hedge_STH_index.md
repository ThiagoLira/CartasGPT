---
layout: default
permalink: /Ibiuna_Hedge_STH/
---

<h1>Cartas da Gestora Ibiuna_Hedge_STH</h1>
<ul>
{%for item in site.Ibiuna_Hedge_STH%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
