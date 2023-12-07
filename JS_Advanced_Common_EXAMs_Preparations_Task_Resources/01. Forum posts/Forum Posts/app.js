window.addEventListener("load", solve);

function solve() {
  const input = {
      title: document.getElementById('post-title'),
      category: document.getElementById('post-category'),
      content: document.getElementById('post-content')
  };

  const lists = {
      review: document.getElementById('review-list'),
      published: document.getElementById('published-list')
  };

  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click', clear);

  function publish(event) {
      event.preventDefault();

      // read input fields
      const title = input.title.value;
      const category = input.category.value;
      const content = input.content.value;

      // validate input
      if (!title || !category || !content) {
          return;
      }

      // create list item
      const li = document.createElement('li');
      li.className = 'rpost';
      li.innerHTML = `<article>
          <h4>${title}</h4>
          <p>Category: ${category}</p>
          <p>Content: ${content}</p>
      </article>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn approve">Approve</button>`;

      // add functionality to buttons
      const editBtn = li.querySelector('.edit');
      editBtn.addEventListener('click', edit);
      const approveBtn = li.querySelector('.approve');
      approveBtn.addEventListener('click', approve);

      // append to first list
      lists.review.appendChild(li);

      // clear input fields
      input.title.value = '';
      input.category.value = '';
      input.content.value = '';

      function edit() {
          // read list item content

          // populate input fields
          input.title.value = title;
          input.category.value = category;
          input.content.value = content;

          // remove list item from list
          // li.remove();
          lists.review.removeChild(li);
      }

      function approve() {
          // remove action buttons

          // editBtn.remove();
          // approveBtn.remove();

          li.removeChild(editBtn);
          li.removeChild(approveBtn);

          // move list item from first list to second one
          lists.published.appendChild(li);
      }
  }

  function clear() {
      // set second list HTML to empty string
      lists.published.innerHTML = ''
  }
}