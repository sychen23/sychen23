document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.button-here');
  const feedbackForm = document.getElementById('feedbackForm');

  button.addEventListener('click', function() {
    feedbackForm.style.display = feedbackForm.style.display === 'block' ? 'none' : 'block';
  });
});

