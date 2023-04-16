import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const octokit = new Octokit({
  auth: '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'
})

await octokit.request('GET /repos/{owner}/{repo}/pages', {
  owner: 'ThiagoLira',
  repo: 'CartasGPT',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
},
});



async function loadFiles(folder) {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
      owner: "OWNER",
      repo: "REPO",
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
