(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var arithmetic = require('arithmetic');
var repeat = require('repeat-string');

var result = arithmetic.add(2, 4);

console.log(result);
document.write(result);
document.write("<br>");

console.log(repeat('A', 100));
document.write(repeat('C', 10));

},{"arithmetic":2,"repeat-string":4}],2:[function(require,module,exports){
'use strict'

var isNumeric = require('is-numeric')

exports.add = function add (num1, num2) {
  areNumbers(num1, num2)

  return (+num1) + (+num2)
}

exports.sum = function sum (numbers) {
  return numbers.reduce(exports.add)
}

exports.subtract = function subtract (num1, num2) {
  areNumbers(num1, num2)

  return (+num1) - (+num2)
}

exports.difference = function difference (numbers) {
  return numbers.reduce(exports.subtract)
}

exports.multiply = function multiply (num1, num2) {
  areNumbers(num1, num2)

  return (+num1) * (+num2)
}

exports.product = function product (numbers) {
  return numbers.reduce(exports.multiply)
}

exports.divide = function divide (num1, num2) {
  areNumbers(num1, num2)

  return (+num1) / (+num2)
}

exports.quotient = function (numbers) {
  return numbers.reduce(exports.divide)
}

function areNumbers (num1, num2) {
  if (!isNumeric(num1) || !isNumeric(num2)) {
    throw new Error('num1 and num2 must be a number')
  }
}

},{"is-numeric":3}],3:[function(require,module,exports){
(function(root) {
  'use strict';

  function isNumeric(v) {
    if (typeof v === 'number') return true;
    var s = (v||'').toString();
    if (!s) return false;
    return !isNaN(s);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isNumeric;
    }
    exports.isNumeric = isNumeric;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isNumeric;
    });
  } else {
    root.isNumeric = isNumeric;
  }

})(this);

},{}],4:[function(require,module,exports){
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

},{}]},{},[1]);
