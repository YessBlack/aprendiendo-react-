// Vanilla JavaScript

// Recuperar boton

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Recuperar el id del atributo HTML
    const id = button.getAttribute('data-id')

    // Llamar un servicio para actualizar su me gusta

    //toggleLike(id)

    if(button.classList.contains('liked')) {
      button.classList.remove('liked')
      button.innerHTML = 'Me gusta'
    } else {
      button.classList.add('liked')
      button.innerHTML = 'Quitar me gusta'
    }
  })
})