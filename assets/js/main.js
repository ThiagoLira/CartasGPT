const accessToken = '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'; // Replace with your generated token

async function loadFiles(folder) {
	const response = await fetch(`https://api.github.com/repos/ThiagoLira/ThiagoLira.github.io/CartasGPT/${folder}`,
		{
			headers: {
				Authorization: `token ${accessToken}`,
			},
		}

	);
	const files = await response.json();

	if (!Array.isArray(files)) {
		console.error('Error fetching files:', files);
		return;
	}


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
