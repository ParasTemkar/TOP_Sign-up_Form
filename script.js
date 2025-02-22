const body = document.querySelector('body');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    alert("Form submitted!");
    e.preventDefault();
});

function validateForm() {
    const emailValue = emailInput.value.trim();

    if (!emailValue.includes('@')) {
      showError(emailInput, 'Please enter a valid email address.');
    } else {
      clearError(emailInput);
      alert('Sucessfully uploaded to the Matrix!!!');
    }
  }

  function showError(input, message) {
    const errorDisplay = input.nextElementSibling;
    errorDisplay.innerText = message;
    errorDisplay.style.color = 'red';
  }

  function clearError(input) {
    const errorDisplay = input.nextElementSibling;
    errorDisplay.innerText = '';
  }
