---
layout: default
title: Home
---
<script type="module" src="https://cdn.skypack.dev/@octokit/core"></script>
<script src="{{ "/assets/js/main.js" | relative_url }}"></script>
<div id="menu">
  <ul>
    <li><a href="#" onclick="loadFiles('Verde')">Option 1</a></li>
    <li><a href="#" onclick="loadFiles('Veritas')">Option 2</a></li>
    <!-- Add more options as needed -->
  </ul>
</div>
<div id="file-list"></div>
<div id="content"></div>
