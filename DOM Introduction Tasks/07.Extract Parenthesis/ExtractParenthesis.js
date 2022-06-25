function extract(content) {
  let result = '';
  let text =  document.getElementById('content').textContent;
  let pattern = /\((.+?)\)/g;
  let match = pattern.exec(text);
  while (match !== null){
    result += match[1] + '; '
    match = pattern.exec(text);

  }

   return result;
}