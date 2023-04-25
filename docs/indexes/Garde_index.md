---
layout: default
permalink: /Garde/
---

<h1>Cartas da Gestora Garde</h1>
<ul>
{%for item in site.Garde%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
