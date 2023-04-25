---
layout: default
permalink: /Canvas_Vector/
---

<h1>Cartas da Gestora Canvas_Vector</h1>
<ul>
{%for item in site.Canvas_Vector%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
