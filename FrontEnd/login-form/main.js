const form = document.getElementById('loginForm')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const errorEmailElement = document.querySelector('.error-Email')
  const errorSenhaElement = document.querySelector('.error-Senha')

  errorEmailElement.innerHTML = ''
  errorSenhaElement.innerHTML = ''

  let valid = true

  if (!validatedEmail(email)) {
    valid = false
    const errorEmailMessage = document.createElement('pre')
    errorEmailMessage.textContent = 'E-mail inválido!'
    errorEmailElement.appendChild(errorEmailMessage)
  }

  if (password.length < 6) {
    valid = false
    const errorSenhaMessage = document.createElement('pre')
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

document
  .getElementById('loginForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault()

    const username = document.getElementById('name').value
    const password = document.getElementById('password').value

    const responseElement = document.getElementById('response')
    responseElement.innerHTML = ''

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()

      if (response.ok) {
        responseElement.innerHTML = `<p>Login bem sucedid! Token ${data.accessToken}</p>`
      } else {
        responseElement.innerHTML = `<p>Erro: ${data.message}</p>`
      }
    } catch (error) {
      responseElement.innerHTML = `<p>Erro na requisição: ${error.message}</p>`
    }
  })
