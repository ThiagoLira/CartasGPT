---
layout: default
permalink: /JGP_Idex-CDI/
---

<h1>Cartas da Gestora JGP_Idex-CDI</h1>
<ul>
{%for item in site.JGP_Idex-CDI%}
  <li>
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
<span>{{ item.date | date: "%B %-d, %Y" }}</span>
  </li>
    {% endfor %}
</ul>
