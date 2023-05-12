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
    {% assign last_resumo = site.resumos | sort: "date" | last %}
    <h2>{{last_resumo.title}}</h2>
    {{last_resumo.content}}

  </div>
  <div class="column">
    <h2>Lista de Gestoras</h2>
    <ul>
      {% assign gestoras = site.gestoras | where: "show_in_gestoras_index", true | sort: "gestora_name" %}
      {% for gestora in gestoras %}
        <li>
          <a href="{{ site.baseurl }}/{{ gestora.gestora_path }}/">{{ gestora.gestora_name }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

