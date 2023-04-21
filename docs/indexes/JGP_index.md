---
layout: default
permalink: /JGP/
---

<h1>Cartas da Gestora JGP</h1>
<ul>
{% for item in site.JGP %}
  <li>
    <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
    <span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
{% endfor %}
</ul>



