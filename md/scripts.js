function isMdFileName(filename) {
  return filename.toLowerCase().endsWith('.md');
}

function isMdContentType(contentType) {
  if (!contentType) return false;
  contentType = contentType.toLowerCase();
  return contentType.includes('markdown') || contentType.includes('text/plain');
}

function renderMarkdown(md, container) {
  container.innerHTML = marked.parse(md);
}

function setupLocalFileInput(container) {
  const fileInput = document.getElementById('fileInput');
  if (!fileInput) return;

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;

    if (!isMdFileName(file.name)) {
      alert('Ошибка: выберите markdown файл с расширением .md');
      fileInput.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => renderMarkdown(reader.result, container);
    reader.readAsText(file);
  });
}

function setupUrlLoader(container) {
  const urlInput = document.getElementById('urlInput');
  const loadUrlBtn = document.getElementById('loadUrlBtn');
  if (!urlInput || !loadUrlBtn) return;

  loadUrlBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (!url) return alert('Введите URL файла');

    if (!isMdFileName(url)) {
      return alert('Ошибка: URL должен указывать на файл с расширением .md');
    }

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки файла');

        const contentType = response.headers.get('Content-Type');
        if (!isMdContentType(contentType)) {
          throw new Error(`Неверный Content-Type: ${contentType}. Ожидался markdown.`);
        }

        return response.text();
      })
      .then(text => renderMarkdown(text, container))
      .catch(err => alert('Ошибка: ' + err.message));
  });
}

function loadFromUrlParam(container) {
  const params = new URLSearchParams(window.location.search);
  const fileUri = params.get('fileuri');

  if (!fileUri) {
    container.textContent = 'Ошибка: параметр "fileuri" не указан в URL';
    return;
  }

  if (!isMdFileName(fileUri)) {
    container.textContent = 'Ошибка: URL должен указывать на markdown-файл (.md)';
    return;
  }

  fetch(fileUri)
    .then(res => {
      if (!res.ok) throw new Error('Ошибка загрузки файла');

      const ct = res.headers.get('Content-Type');
      if (!isMdContentType(ct)) {
        throw new Error(`Неверный Content-Type: ${ct}. Ожидался markdown.`);
      }

      return res.text();
    })
    .then(md => renderMarkdown(md, container))
    .catch(err => {
      container.textContent = 'Ошибка: ' + err.message;
    });
}

export {
  setupLocalFileInput,
  setupUrlLoader,
  loadFromUrlParam
};
