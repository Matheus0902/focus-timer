let darkMode = true

const buttonToggleMode = document.getElementById('toggle-view-mode')

const mode = darkMode? 'Light' : 'Dark'

buttonToggleMode.addEventListener('click', (event) => {
  event.currentTarget.querySelector('span').textContent = `${mode} ativado!`

  document.documentElement.classList.toggle('light')

  darkMode = !darkMode
})