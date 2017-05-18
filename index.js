import Mycomponent from './mycomponent';

[...document.querySelectorAll('.mycomponent')].forEach(elem => {
  new Mycomponent(elem)
})