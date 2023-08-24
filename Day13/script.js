function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthText = document.getElementById("strength");

    // Define the criteria for a strong password
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    // Calculate the password strength based on the criteria
    let strength = 0;

    if (password.length >= minLength) {
      strength++;
    }

    if (hasUppercase) {
      strength++;
    }

    if (hasLowercase) {
      strength++;
    }

    if (hasNumber) {
      strength++;
    }

    if (hasSpecialCharacter) {
      strength++;
    }

    // Display the password strength
    let strengthMessage;

    switch (strength) {
      case 0:
        strengthMessage = "Weak";
        break;
      case 1:
        strengthMessage = "Weak";
        break;
      case 2:
        strengthMessage = "Moderate";
        break;
      case 3:
        strengthMessage = "Good";
        break;
      case 4:
        strengthMessage = "Strong";
        break;
      case 5:
        strengthMessage = "Very Strong";
        break;
      default:
        strengthMessage = "";
    }

    strengthText.innerHTML = strengthMessage;
  }