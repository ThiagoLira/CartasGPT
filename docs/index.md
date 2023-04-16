---
layout: default
title: Cartas GPT 
---

{{ site.categories | inspect }}
{{ site.categories  }}
<ul>
{% for category in site.categories %}
    <li><a href="/{{ category[0] }}">{{ category[0] }}</a></li>
{% endfor %}
</ul>
