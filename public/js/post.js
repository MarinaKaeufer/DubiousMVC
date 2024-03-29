  const createFormFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    
    var url =  window.location.toString();
    var id = url.substring(url.lastIndexOf('/') + 1);
    
    if (content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_content: content, comment_post_id: id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to create comment.');
      }
    }
  };

  
  const deletePostHandler = async (event) => {
    event.preventDefault();

    var url =  window.location.toString();
    var id = url.substring(url.lastIndexOf('/') + 1);
    
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/`);
    } else {
      alert('Failed to delete post.');
    }
  };


  document
    .querySelector('#create-comment')
    .addEventListener('submit', createFormFormHandler);

  document
    .querySelector('#delete')
    .addEventListener('click', deletePostHandler);
  