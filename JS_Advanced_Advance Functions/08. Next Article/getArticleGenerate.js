function getArticleGenerator(articles) {
    
  let divElement = document.getElementById("content");
  return function () {
    let article = articles.shift();
    if (article !== undefined) {
      let element = document.createElement("article");
      element.textContent = article;
      divElement.appendChild(element);
    }
  }

}
