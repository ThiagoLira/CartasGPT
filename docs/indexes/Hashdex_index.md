---
layout: default
permalink: /Hashdex/
---

<h1>Cartas da Gestora Hashdex</h1>
<ul>
{%for item in site.Hashdex%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
