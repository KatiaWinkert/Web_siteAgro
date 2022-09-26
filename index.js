import elementMenu from './module.js'
const result = elementMenu()
console.log(result)

window.onload = () => {
  const contatoDoform = document.querySelector('#ctt-form')
  contatoDoform.addEventListener('submit', onsubmit)
}

function onsubmit(event) {
  event.preventDefault()
  const nome = document.querySelector('#nome').value
  const email = document.querySelector('#email').value
  const telefone = document.querySelector('#telefone').value
  const mensagem = document.querySelector('#mensagem').value
}
