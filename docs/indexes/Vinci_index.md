---
layout: default
permalink: /Vinci/
---

<h1>Cartas da Gestora Vinci</h1>
<ul>
{% for item in site.Vinci %}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
{% endfor %}
</ul>



