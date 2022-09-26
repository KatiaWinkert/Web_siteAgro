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
 fetch('https://otterwise-fake-api.herokuapp.com/contact', {
   method: 'POST',
   body: JSON.stringify({
     name: nome,
     email: email,
     telefone: telefone,
     mensagem: mensagem,
   }),
   headers: {
     'Content-type': 'application/json; charset=UTF-8',
   },
 }) .then(response => response.json())
    .then(json => {
      const responseForm = document.querySelector('#response-contact-form')
      if (json.type === 'Sucesso') {
        responseForm.innerText =
          'Recebemos a sua mensagem! Aguarde nosso contato.'
        const contactForm = document.querySelector('#contact-form')
        contactForm.reset()
      } else {
        responseForm.innerText = `Por favor, verifique as suas informações.`
        const idError = json.message
          .replace('O campo ', '')
          .replace(' não pode estar vazio!!', '')
        document.querySelector('#' + idError).classList = 'error'
        setTimeout(
          () => document.querySelector('#' + idError).removeAttribute('class'),
          2000
        )
      }
    })
