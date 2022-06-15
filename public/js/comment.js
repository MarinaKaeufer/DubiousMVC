async function deleteCommentHandler(event){
    console.log(`Deleting...`);
    event.preventDefault();

    console.log(`Deleting comment`);

    var url =  window.location.toString();
    var postId = url.substring(url.lastIndexOf('/') + 1);

    var commentId = document
    .querySelector('#id').innerHTML;
    
    
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert('Failed to delete comment.');
    }
  };

    document.querySelector('.delete-comment').addEventListener('click', deleteCommentHandler);