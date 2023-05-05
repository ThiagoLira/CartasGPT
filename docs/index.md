---
layout: default
---

<style>
  .column {
    float: left;
    width: 50%;
    padding: 5px;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>

<h1>Gestoras</h1>

<div class="row">
  <div class="column">
    <h2>Contents</h2>
    {% capture contents %}
      {% include contents.md %}
    {% endcapture %}
    {{ contents | markdownify }}
  </div>
  <div class="column">
    <h2>Collections</h2>
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

