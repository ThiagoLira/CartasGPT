---
layout: default
---

<div class="container">
	<div class="row">
		<div class="col-12 col-md-6">
      <h2>Resumo - Abr/23</h2>
      {% capture contents %}
        {% include contents.md %}
      {% endcapture %}
      {{ contents | markdownify }}
    </div>
		<div class="col-12 col-md-6">
      <h2>Lista de Gestoras</h2>
      <ul>
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
      <a href="{{ post.url }}"> {{ post.title | replace: "_", " " }} - ({{ post.category | replace: "_", " " }})</a>
      <span>{{ post.date | date: "%B, %d %Y" }}</span>
      <br>
    {% endfor %}
  </div>
</div>


