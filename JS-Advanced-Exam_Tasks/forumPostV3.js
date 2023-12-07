function solve() {
 
    const inputs = {
      title: document.getElementById('post-title'),
      category: document.getElementById('post-category'),
      content: document.getElementById('post-content')
   
    }
   
    const buttons = {
      publish: document.getElementById('publish-btn'),
      clear: document.getElementById('clear-btn'),
    }
   
    let reviewList = document.getElementById('review-list')
    let approveList = document.getElementById('published-list')
   
    class Post {
      constructor(title, category, content) {
        this.title = title.value
        this.category = category.value
        this.content = content.value
      }
      createArticle() {
        let article = document.createElement('article')
        let li = document.createElement('li')
        let h4 = document.createElement('h4')
        let pCat = document.createElement('p')
        let pCont = document.createElement('p')
        reviewList.appendChild(li)
        li.appendChild(article)
        li.classList.add('rpost')
        article.appendChild(h4)
        article.appendChild(pCat)
        article.appendChild(pCont)
        h4.textContent = this.title
        pCat.textContent = `Category: ${this.category}`
        pCont.textContent = `Content: ${this.content}`
        let editBttn = document.createElement('button')
        let approveBttn = document.createElement('button')
        editBttn.classList.add('action-btn', 'edit')
        approveBttn.classList.add('action-btn', 'approve')
        editBttn.textContent = 'Edit'
        approveBttn.textContent = 'Approve'
        li.appendChild(approveBttn)
        li.appendChild(editBttn)
        inputs.title.value = ''
        inputs.category.value = ''
        inputs.content.value = ''
        editBttn.addEventListener('click', editPost)
        approveBttn.addEventListener('click', approvePost)
   
   
        function editPost() {
          inputs.title.value = h4.textContent
          inputs.category.value = pCat.textContent.split(" ").filter((x) => x !== 'Category:').join(" ")
          inputs.content.value = pCont.textContent.split(" ").filter((x) => x !== 'Content:').join(" ")
          li.remove()
        }
   
        function approvePost() {
          approveList.appendChild(li)
          editBttn.remove()
          approveBttn.remove()
        }
      }
   
    }
   
    buttons.publish.addEventListener('click', createPost)
   
   
    function createPost() {
      let newPost = new Post(inputs.title, inputs.category, inputs.content)
      newPost.createArticle()
    }
   
    buttons.clear.addEventListener('click', clearAll)
   
    function clearAll() {
   
      Array.from(approveList.children).forEach(el => {
        el.remove()
      });
    }
   
  }
   