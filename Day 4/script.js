const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateName() {
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter a valid name.';
        nameError.style.display = 'block';
      } else {
        nameError.style.display = 'none';
      }
    }

    function validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
      } else {
        emailError.style.display = 'none';
      }
    }

    function validatePassword() {
      if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordError.style.display = 'block';
      } else {
        passwordError.style.display = 'none';
      }
    }

    form.addEventListener('submit', function(event) {
      validateName();
      validateEmail();
      validatePassword();

      if (nameError.style.display === 'block' || emailError.style.display === 'block' || passwordError.style.display === 'block') {
        event.preventDefault();
      }
    });