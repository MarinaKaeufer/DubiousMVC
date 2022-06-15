  const editFormFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = document.querySelector('#post-id').value.trim();
    const post_title = document.querySelector('#post-title').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();
  
    if (post_title && post_content) {
      
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_title, post_content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/newPost');
      } else {
        alert('Failed to create post.');
      }
    }
  };

  
  document
    .querySelector('#edit-post')
    .addEventListener('submit', editFormFormHandler);
  