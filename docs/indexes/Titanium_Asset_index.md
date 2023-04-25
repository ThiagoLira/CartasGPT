---
layout: default
permalink: /Titanium_Asset/
---

<h1>Cartas da Gestora Titanium_Asset</h1>
<ul>
{%for item in site.Titanium_Asset%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
