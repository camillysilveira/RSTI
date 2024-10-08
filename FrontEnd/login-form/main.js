const form = document.getElementById('loginForm')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const errorEmailElement = document.querySelector('.error-Email')
  const errorSenhaElement = document.querySelector('.error-Senha')

  const errorEmail = document.createElement('pre')
  const erroSenha = document.createElement('pre')

  errorEmailElement.innerHTML = ''
  errorSenhaElement.innerHTML = ''

  let valid = true

  if (!validatedEmail(email)) {
    valid = false
    errorEmailMessage.textContent = 'E-mail inválido!'
    errorEmailElement.appendChild(errorEmailMessage)
  }

  if (password.length < 6) {
    valid = false
    errorSenhaMessage.textContent = 'Senha inválida!'
    errorSenhaElement.appendChild(errorSenhaMessage)
  }
})

const loggedUser = localStorage.getItem('login-form')

if (valid) {
  alert('Formulário enviado com sucesso!')
  localStorage.setItem('login-form', 'loggedUser')
}

/*   if (valid) {
    alert("Formulário enviado com sucesso!");
    localStorage.setItem("login-form", "loggedUser");
  } */

function validatedEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

/* function tooglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const customType =
    password.getAttribute("type") == "password" ? "text" : "password";

  password.setAttribute("type", customType);

  console.log(customType);
}
 */
