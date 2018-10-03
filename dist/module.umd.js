(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Color = function () {
    function Color() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      classCallCheck(this, Color);

      this.set(r, g, b);
    }

    createClass(Color, [{
      key: 'copy',
      value: function copy(color) {
        this.set(color.r, color.g, color.b);
      }
    }, {
      key: 'set',
      value: function set$$1(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
      }
    }, {
      key: 'toHex',
      value: function toHex() {
        var hex = this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
        return '#' + ('000000' + hex.toString(16)).slice(-6);
      }
    }]);
    return Color;
  }();

  var Vector2 = function () {
    function Vector2() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      classCallCheck(this, Vector2);

      this.set(x, y);
    }

    createClass(Vector2, [{
      key: 'set',
      value: function set$$1(x, y) {
        this.x = x;
        this.y = y;
      }
    }]);
    return Vector2;
  }();

  var Shape = function () {
    function Shape() {
      classCallCheck(this, Shape);

      this.color = new Color();
      this.position = new Vector2();
      this.size = new Vector2(10, 10);
    }

    createClass(Shape, [{
      key: 'draw',
      value: function draw(context) {
        context.fillStyle = this.color.toHex();

        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
      }
    }]);
    return Shape;
  }();

  var PURPLE = new Color(103 / 255, 58 / 255, 183 / 255);
  var PINK = new Color(228 / 255, 41 / 255, 144 / 255);

  window._moduleLoaded = true;

  var canvas = document.getElementById('screen');
  var context = canvas.getContext('2d');

  var shapes = [];

  var rect = new Shape();
  rect.color.copy(PURPLE);
  rect.size.set(200, 60);
  rect.position.set(20, 10);
  shapes.push(rect);

  var square = new Shape();
  square.color.copy(PINK);
  square.size.set(120, 120);
  square.position.set(200, 100);
  shapes.push(square);

  shapes.forEach(function (shape) {
    shape.draw(context);
  });

})));
