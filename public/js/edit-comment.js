  const editFormFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_id = document.querySelector('#comment-id').value.trim();
    const comment_content = document.querySelector('#comment-content').value.trim();
  
    if (comment_id && comment_content) {
      
      const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'PUT',
        body: JSON.stringify({ comment_content }),
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
    .querySelector('#edit-comment')
    .addEventListener('submit', editFormFormHandler);
  