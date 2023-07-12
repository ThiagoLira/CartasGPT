---
layout: default
---

<div class="container">
	<div class="row">
		<div class="col-12 col-lg-7">
      <h2>Resumo - Jun/23</h2>
      {% capture contents %}
        {% include contents.md %}
      {% endcapture %}
      {{ contents | markdownify }}
    </div>
		<div class="col-lg-1"></div>
		<div class="col-12 col-lg-4">
      <h2>Lista de Gestoras</h2>
      <ul class="list-unstyled">
        {% for collection in site.collections %}
          {% if collection.label == 'posts' %}
            {% continue %}
          {% endif %}
          <li>
            {% assign modified_string = collection.label | replace: "_", " " %}
            <a href="{{ site.baseurl }}/{{ collection.label }}/">{{ modified_string }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
	</div>

  <div class="row card border-0">
    <h2>Últimas Cartas e Morning Calls</h2>
    {% assign all_posts = "" | split: "" %}

    {% for collection in site.collections %}
      {% assign all_posts = all_posts | concat: collection.docs %}
    {% endfor %}

    {% assign sorted_posts = all_posts | sort: "date" | reverse %}

    {% for post in sorted_posts limit:10 %}
    {% unless post.category == "Morning_Call" %}
      <a href="{{ post.url }}"> {{ post.title | replace: "_", " " }} - ({{ post.category | replace: "_", " " }})</a>
      <span>{{ post.date | date: "%B, %d %Y" }}</span>
      <br>
      {% endunless %}
    {% endfor %}
  </div>
</div>


