  const createFormFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('#comment-content').value.trim();
    // TODO Get post id
    var url =  window.location.toString();
    var id = url.substring(url.lastIndexOf('/') + 1);
    
    if (comment_content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ content: comment_content, comment_post_id: id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create comment.');
      }
    }
  };

  
  document
    .querySelector('#create-comment')
    .addEventListener('submit', createFormFormHandler);
  