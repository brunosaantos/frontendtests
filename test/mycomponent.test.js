import { describe, before, beforeEach, it } from 'mocha'
import chai, {expect} from 'chai'
import chaiDom from 'chai-dom'
import { JSDOM } from 'jsdom'

import Mycomponent from '../mycomponent'

chai.use(chaiDom)

describe('mycomponent', () => {
  let dom
  let component
  let mycomponent

  before(() => {
    dom = new JSDOM(`
      <section class="mycomponent">
          <button class="mycomponent__btn">Click me</button>
      </section>
    `)
    component = dom.window.document.querySelector('.mycomponent')
  })

  beforeEach(() => {
    mycomponent = new Mycomponent(component)
  })

  describe('getElementHTML', () => {
    it('should return the element HTML', () => {
      expect(mycomponent.getElementHTML(component.querySelector('button')))
        .to.be.equal('Click me')
    })
  })

  describe('addClassToElement', () => {
    it('should contain "red" on the classlist', () => {
      expect('red').to.be.oneOf(
        [...mycomponent.addClassToElement(
          component.querySelector('button'),
          'red'
        ).classList]
      )
    })

    it('should contain "red" on the classlist', () => {
      expect('blue').to.be.oneOf(
        [...mycomponent.addClassToElement(
          component.querySelector('button'),
          'blue'
        ).classList]
      )
    })
  })
})
