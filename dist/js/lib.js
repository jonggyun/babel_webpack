"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = square;
exports.Person = exports.pi = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// src/js/lib.js
var pi = Math.PI;
exports.pi = pi;

function square(x) {
  return x * x;
}

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};

exports.Person = Person;