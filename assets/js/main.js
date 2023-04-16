async function loadFiles(folder) {
  const response = await fetch(`https://api.github.com/repos/ThiagoLira/ThiagoLira.github.io/CartasGPT/${folder}`);
  const files = await response.json();

  let fileList = '<ul>';
  for (const file of files) {
    if (file.name.endsWith('.md')) {
      fileList += `<li><a href="#" onclick="loadFile('${folder}/${file.name}')">${file.name}</a></li>`;
    }
  }
  fileList += '</ul>';
  document.getElementById('file-list').innerHTML = fileList;
}

async function loadFile(filePath) {
  const response = await fetch(filePath);
  const fileContent = await response.text();

  const converter = new showdown.Converter();
  const html = converter.makeHtml(fileContent);
  document.getElementById('content').innerHTML = html;
}
