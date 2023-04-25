---
layout: default
permalink: /Atmosphere_Capital/
---

<h1>Cartas da Gestora Atmosphere_Capital</h1>
<ul>
{%for item in site.Atmosphere_Capital%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
