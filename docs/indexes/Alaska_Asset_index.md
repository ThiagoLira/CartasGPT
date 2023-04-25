---
layout: default
permalink: /Alaska_Asset/
---

<h1>Cartas da Gestora Alaska_Asset</h1>
<ul>
{%for item in site.Alaska_Asset%}
  <li>
    <a href="{ site.baseurl }{ item.url }">{ item.title }</a>
    <span>{ item.date | date: "%B %-d, %Y" }</span>
  </li>
    {% endfor %}
</ul>