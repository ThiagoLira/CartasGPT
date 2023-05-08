# CartasGPT

### Metadados de posts/páginas

Cada gestora está registrada como uma *collection* dentro do Jekyll. 
As páginas de índice são geradas rodando o script:

```console
./create_indexes_files.sh index_seed.md gestoras.txt
```

Documentos em cada gestora devem ser colocados na pasta de mesmo nome da collection registrada no _config.yml
e devem necessariamente definir os seguintes metadados em seu header:

---
layout: post
title: Carta_do_Gestor
category: Tenax_Capital
tag: Carta_do_Gestor
date: 2023-03-01
---

A tag irá ser usada para separar conteúdos de cada gestora em seu índice, a categoria deve ser identica ao nome da collection da gestora 
registrada no _config.yml. 


O layout *post.html* na pasta layouts irá usar esses metadados para buscar o pdf correspondente à um documento da seguinte forma.
O pdf deve ser nomeado como {{page.tags}} - {{ page.date | date: "%Y-%m-%d" }}, por exemplo:
![image](https://user-images.githubusercontent.com/11686042/236899481-11698df7-fd10-4217-9bea-69345aa7b0e9.png)

