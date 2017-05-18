(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _mycomponent = require('./mycomponent');

var _mycomponent2 = _interopRequireDefault(_mycomponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

[].concat(_toConsumableArray(document.querySelectorAll('.mycomponent'))).forEach(function (elem) {
  new _mycomponent2.default(elem);
});

},{"./mycomponent":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mycomponent = function () {
  function Mycomponent(elem) {
    _classCallCheck(this, Mycomponent);

    this.elem = elem;
    this.button = elem.querySelector('button');

    this.events();
  }

  _createClass(Mycomponent, [{
    key: 'events',
    value: function events() {
      var _this = this;

      this.button.addEventListener('click', function (e) {
        return _this.getElementHTML(e.target);
      });
    }
  }, {
    key: 'getElementHTML',
    value: function getElementHTML(elem) {
      return elem.innerHTML;
    }
  }, {
    key: 'addClassToElement',
    value: function addClassToElement(elem, className) {
      return elem.classList.add(className);
    }
  }]);

  return Mycomponent;
}();

exports.default = Mycomponent;

},{}]},{},[1]);
