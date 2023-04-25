---
layout: default
permalink: /Tenax_Capital/
---

<h1>Cartas da Gestora Tenax_Capital</h1>
<ul>
{%for item in site.Tenax_Capital%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
