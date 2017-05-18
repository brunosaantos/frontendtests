class Mycomponent {
  constructor (elem) {
    this.elem = elem
    this.button = elem.querySelector('button')

    this.events()
  }

  events () {
    this.button.addEventListener('click', e => this.getElementHTML(e.target))
  }

  getElementHTML (elem) {
    return elem.innerHTML
  }

  addClassToElement (elem, className) {
    elem.classList.add(className)
    return elem
  }
}

export default Mycomponent
