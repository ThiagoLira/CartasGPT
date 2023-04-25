---
layout: default
permalink: /Verde/
---

<h1>Cartas da Gestora Verde</h1>
<ul>
{% for item in site.Verde %}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
{% endfor %}
</ul>



