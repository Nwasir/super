function validateForm() {
    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirm-password');
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

    if (!passwordPattern.test(passwordInput.value)) {
      passwordInput.classList.add('error');
      passwordInput.nextElementSibling.style.display = 'block';
      return false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordInput.classList.add('error');
      confirmPasswordInput.nextElementSibling.style.display = 'block';
      return false;
    }

    return true;
  }