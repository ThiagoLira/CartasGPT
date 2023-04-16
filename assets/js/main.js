const octokit = new Octokit({
  auth: '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'
})


window.loadFiles = async function (folder) {
  try {
    const response = await octokit.request(`GET /repos/ThiagoLira/CartasGPT/contents/${folder}?ref=new_struct`, {
      owner: "ThiagoLira",
      repo: "CartasGPT",
      path: folder,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const files = response.data;

    let fileList = "<ul>";
    for (const file of files) {
      if (file.name.endsWith(".md")) {
        fileList += `<li><a href="#" onclick="loadFile('${file.path}')">${file.name}</a></li>`;
      }
    }
    fileList += "</ul>";
    document.getElementById("file-list").innerHTML = fileList;
  } catch (error) {
    console.error("Error fetching files:", error);
  }
}

async function loadFile(filePath) {
  const response = await fetch(filePath);
  const fileContent = await response.text();

  const converter = new showdown.Converter();
  const html = converter.makeHtml(fileContent);
  document.getElementById("content").innerHTML = html;
}
