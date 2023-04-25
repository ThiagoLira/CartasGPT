---
layout: default
permalink: /AZ_Quest/
---

<h1>Cartas da Gestora AZ_Quest</h1>
<ul>
{%for item in site.AZ_Quest%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
