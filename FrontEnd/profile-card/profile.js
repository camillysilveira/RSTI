/*getElementById('githubForm')
addEventListener('submit', function (event) {
  event.preventDefault()

  const username = document.getElementById('username').value
  const url = `${username}`

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Usuário não encontrado')
      }
      const data = response.json()
      return data
    })
    .then((data) => {
      const resultElement = document.getElementById('result')

      resultElement.innerHTML = `
        <h2>${data.login}</h2>
        <p>strong>Nome:</strong>${data.name}</p>
              <img src=${data.avatar_url}" alt="Avatar" width="100">
              <p><strong>Seguidores:</strong> ${data.followers}</p>
        `
    })
})*/

document.addEventListener('DOMContentLoaded', function () {
  const username = 'camillysilveira'
  const url = `https://api.github.com/users/${username}`

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Usuário não encontrado')
      }
      return response.json()
    })
    .then((data) => {
      const username = document.getElementById('name')
      username.textContent = data.name

      const profile = document.getElementById('avatar')
      profile.imgContent = data.profile

      const followers = document.getElementById('followers')
      followers.textContent = data.followers

      const following = document.getElementById('following')
      following.textContent = data.following

      const public = document.getElementById('public')
      public.textContent = data.public_repos
    })

    .catch((error) => {
      console.error(error)
      const resultElement = document.getElementById('result')
      resultElement.innerHTML = `<p>${error.message}</p>`
    })
})
