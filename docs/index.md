---
layout: default
---

<style>
  .column {
    float: left;
    width: 40%;
    padding: 29px;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>


<div class="row">
  <div class="column">
    <h2>Resumo - Abr/23</h2>
    {% capture contents %}
      {% include contents.md %}
    {% endcapture %}
    {{ contents | markdownify }}
  </div>
  <div class="column">
    <h2>Lista de Gestoras</h2>
    <ul>
      {% for collection in site.collections %}
        <li>
          {% assign modified_string = collection.label | replace: "_", " " %}
          <a href="{{ site.baseurl }}/{{ collection.label }}/">{{ modified_string }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

