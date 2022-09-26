export function elementMenuOne(elem) {
  if (elem.classList.contains('change')) {
    elem.innerHTML = '<i class="fas fa-bars fa-2x"></i>'
  } else {
    elem.innerHTML = '<i class="fas fa-times fa-2x"></i>'
  }
  document.getElementById('element-Menu-Mobile').classList.toggle('active')
  elem.classList.toggle('change')
}


export function elementMenutwo(elem) {
  const menuMobile = document.getElementById('element-Menu-Mobile')
  const elementPioMobile = document.getElementById('element - mobile')
  elementPioMobile.innerHTML = '<i class="fas fa-bars fa-2x"></i>'
  elementPioMobile.classList.toggle('change')
  menuMobile.classList.toggle('change')
}
