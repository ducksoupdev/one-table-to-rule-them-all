(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '1234567890';
  var charset = letters + letters.toUpperCase() + numbers;

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generate() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
    var r = '';

    for (var i = 0; i < length; i++) {
      r += randomElement(charset);
    }

    return r;
  }
  function generateId(prefix) {
    return "".concat(prefix ? prefix + '-' : '').concat(generate());
  }

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]';
  /** Detect free variable `global` from Node.js. */

  var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
  /** Detect free variable `self`. */

  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */

  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }
  /** Used for built-in method references. */


  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var objectToString = objectProto.toString;
  /** Built-in value references. */

  var _Symbol = root.Symbol,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */

  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];

      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }

    return result;
  }
  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */


  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */


  function flatten(array) {
    var length = array ? array.length : 0;
    return length ? baseFlatten(array, 1) : [];
  }
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */


  function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */


  var isArray = Array.isArray;
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */

  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */


  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */


  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject$1(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */


  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */


  function isObject$1(value) {
    var type = _typeof(value);

    return !!value && (type == 'object' || type == 'function');
  }
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */


  function isObjectLike(value) {
    return !!value && _typeof(value) == 'object';
  }

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /** `Object#toString` result references. */

  var argsTag$1 = '[object Arguments]',
      funcTag$1 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]';
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */

  function arrayEach(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }
  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */


  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */


  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  /** Used for built-in method references. */


  var objectProto$1 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var objectToString$1 = objectProto$1.toString;
  /** Built-in value references. */

  var propertyIsEnumerable$1 = objectProto$1.propertyIsEnumerable;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeKeys = overArg(Object.keys, Object);
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = isArray$1(value) || isArguments$1(value) ? baseTimes(value.length, String) : [];
    var length = result.length,
        skipIndexes = !!length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }
  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */


  var baseEach = createBaseEach(baseForOwn);
  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */

  var baseFor = createBaseFor();
  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */

  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */


  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }
  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */


  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }

      if (!isArrayLike$1(collection)) {
        return eachFunc(collection, iteratee);
      }

      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }

      return collection;
    };
  }
  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */


  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];

        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }

      return object;
    };
  }
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */


  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */


  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$1;
    return value === proto;
  }
  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _([1, 2]).forEach(function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */


  function forEach(collection, iteratee) {
    var func = isArray$1(collection) ? arrayEach : baseEach;
    return func(collection, typeof iteratee == 'function' ? iteratee : identity);
  }
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */


  function isArguments$1(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject$1(value) && hasOwnProperty$1.call(value, 'callee') && (!propertyIsEnumerable$1.call(value, 'callee') || objectToString$1.call(value) == argsTag$1);
  }
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */


  var isArray$1 = Array.isArray;
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */

  function isArrayLike$1(value) {
    return value != null && isLength$1(value.length) && !isFunction$1(value);
  }
  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */


  function isArrayLikeObject$1(value) {
    return isObjectLike$1(value) && isArrayLike$1(value);
  }
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */


  function isFunction$1(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject$2(value) ? objectToString$1.call(value) : '';
    return tag == funcTag$1 || tag == genTag$1;
  }
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */


  function isLength$1(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */


  function isObject$2(value) {
    var type = _typeof(value);

    return !!value && (type == 'object' || type == 'function');
  }
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */


  function isObjectLike$1(value) {
    return !!value && _typeof(value) == 'object';
  }
  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */


  function keys(object) {
    return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */


  function identity(value) {
    return value;
  }

  /* global Node */

  var h = function h(tag, attrs) {
    var elm = document.createElement(tag);

    for (var key in attrs) {
      if (key.slice(0, 2) === 'on') {
        var evtName = key.slice(2);
        var cb = attrs[key];
        if (cb == null) continue; // we can use null or undefined to suppress

        elm.addEventListener(evtName, cb);
      } else if (['disabled', 'autocomplete', 'selected', 'checked'].indexOf(key) > -1) {
        if (attrs[key]) {
          elm.setAttribute(key, key);
        }
      } else {
        if (attrs[key] == null) continue; // Don't set undefined or null attributes

        elm.setAttribute(key, attrs[key]);
      }
    }

    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    if (children.length === 0) {
      return elm;
    }

    forEach(flatten(children), function (child) {
      if (child instanceof Node) {
        elm.appendChild(child);
      } else {
        elm.appendChild(document.createTextNode(child));
      }
    });
    return elm;
  };

  function copy(o, to) {
    to = to || {};

    for (var key in o) {
      to[key] = o[key];
    }

    return to;
  }

  var COERCE_TO_TYPES = toHash(['string', 'number', 'integer', 'boolean', 'null']);

  function toHash(arr) {
    var hash = {};

    for (var i = 0; i < arr.length; i++) {
      hash[arr[i]] = true;
    }

    return hash;
  }

  var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
  var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
  var HOSTNAME = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
  var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i; // uri-template: https://tools.ietf.org/html/rfc6570

  var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i; // For the source: https://gist.github.com/dperini/729294
  // For test cases: https://mathiasbynens.be/demo/url-regex
  // @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
  // var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;

  var URL = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
  var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
  var JSON_POINTER$1 = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
  var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
  var RELATIVE_JSON_POINTER$1 = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;

  function formats(mode) {
    mode = mode == 'full' ? 'full' : 'fast';
    return copy(formats[mode]);
  }

  formats.fast = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
    'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
    'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    'uri-template': URITEMPLATE,
    url: URL,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    hostname: HOSTNAME,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: regex,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: UUID,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    'json-pointer': JSON_POINTER$1,
    'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    'relative-json-pointer': RELATIVE_JSON_POINTER$1
  };
  formats.full = {
    date: date,
    time: time,
    'date-time': date_time,
    uri: uri,
    'uri-reference': URIREF,
    'uri-template': URITEMPLATE,
    url: URL,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: hostname,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: regex,
    uuid: UUID,
    'json-pointer': JSON_POINTER$1,
    'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
    'relative-json-pointer': RELATIVE_JSON_POINTER$1
  };

  function isLeapYear(year) {
    // https://tools.ietf.org/html/rfc3339#appendix-C
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  function date(str) {
    // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
    var matches = str.match(DATE);
    if (!matches) return false;
    var year = +matches[1];
    var month = +matches[2];
    var day = +matches[3];
    return month >= 1 && month <= 12 && day >= 1 && day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
  }

  function time(str, full) {
    var matches = str.match(TIME);
    if (!matches) return false;
    var hour = matches[1];
    var minute = matches[2];
    var second = matches[3];
    var timeZone = matches[5];
    return (hour <= 23 && minute <= 59 && second <= 59 || hour == 23 && minute == 59 && second == 60) && (!full || timeZone);
  }

  var DATE_TIME_SEPARATOR = /t|\s/i;

  function date_time(str) {
    // http://tools.ietf.org/html/rfc3339#section-5.6
    var dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
  }

  function hostname(str) {
    // https://tools.ietf.org/html/rfc1034#section-3.5
    // https://tools.ietf.org/html/rfc1123#section-2
    return str.length <= 255 && HOSTNAME.test(str);
  }

  var NOT_URI_FRAGMENT = /\/|:/;

  function uri(str) {
    // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
    return NOT_URI_FRAGMENT.test(str) && URI.test(str);
  }

  var Z_ANCHOR = /[^\\]\\Z/;

  function regex(str) {
    if (Z_ANCHOR.test(str)) return false;

    try {
      return true;
    } catch (e) {
      return false;
    }
  }

  var formats$1 = formats();

  var validate = function () {
    var pattern0 = new RegExp('^https?://');
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
      var vErrors = null;
      var errors = 0;

      if (data && _typeof(data) === "object" && !Array.isArray(data)) {
        {
          var valid1 = true;

          if (data.striped === undefined) {
            valid1 = true;
          } else {
            var errs_1 = errors;

            if (typeof data.striped !== "boolean") {
              validate.errors = [{
                keyword: 'type',
                dataPath: (dataPath || '') + '.striped',
                schemaPath: '#/properties/striped/type',
                params: {
                  type: 'boolean'
                },
                message: 'should be boolean'
              }];
              return false;
            }

            var valid1 = errors === errs_1;
          }

          if (valid1) {
            if (data.dark === undefined) {
              valid1 = true;
            } else {
              var errs_1 = errors;

              if (typeof data.dark !== "boolean") {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.dark',
                  schemaPath: '#/properties/dark/type',
                  params: {
                    type: 'boolean'
                  },
                  message: 'should be boolean'
                }];
                return false;
              }

              var valid1 = errors === errs_1;
            }

            if (valid1) {
              if (data.bordered === undefined) {
                valid1 = true;
              } else {
                var errs_1 = errors;

                if (typeof data.bordered !== "boolean") {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.bordered',
                    schemaPath: '#/properties/bordered/type',
                    params: {
                      type: 'boolean'
                    },
                    message: 'should be boolean'
                  }];
                  return false;
                }

                var valid1 = errors === errs_1;
              }

              if (valid1) {
                if (data.hover === undefined) {
                  valid1 = true;
                } else {
                  var errs_1 = errors;

                  if (typeof data.hover !== "boolean") {
                    validate.errors = [{
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.hover',
                      schemaPath: '#/properties/hover/type',
                      params: {
                        type: 'boolean'
                      },
                      message: 'should be boolean'
                    }];
                    return false;
                  }

                  var valid1 = errors === errs_1;
                }

                if (valid1) {
                  if (data.fixedHeight === undefined) {
                    valid1 = true;
                  } else {
                    var errs_1 = errors;

                    if (typeof data.fixedHeight !== "boolean") {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.fixedHeight',
                        schemaPath: '#/properties/fixedHeight/type',
                        params: {
                          type: 'boolean'
                        },
                        message: 'should be boolean'
                      }];
                      return false;
                    }

                    var valid1 = errors === errs_1;
                  }

                  if (valid1) {
                    if (data.headers === undefined) {
                      valid1 = true;
                    } else {
                      var errs_1 = errors;

                      if (typeof data.headers !== "boolean") {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.headers',
                          schemaPath: '#/properties/headers/type',
                          params: {
                            type: 'boolean'
                          },
                          message: 'should be boolean'
                        }];
                        return false;
                      }

                      var valid1 = errors === errs_1;
                    }

                    if (valid1) {
                      if (data.footers === undefined) {
                        valid1 = true;
                      } else {
                        var errs_1 = errors;

                        if (typeof data.footers !== "boolean") {
                          validate.errors = [{
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.footers',
                            schemaPath: '#/properties/footers/type',
                            params: {
                              type: 'boolean'
                            },
                            message: 'should be boolean'
                          }];
                          return false;
                        }

                        var valid1 = errors === errs_1;
                      }

                      if (valid1) {
                        if (data.displayedEntries === undefined) {
                          valid1 = true;
                        } else {
                          var errs_1 = errors;

                          if (typeof data.displayedEntries !== "boolean") {
                            validate.errors = [{
                              keyword: 'type',
                              dataPath: (dataPath || '') + '.displayedEntries',
                              schemaPath: '#/properties/displayedEntries/type',
                              params: {
                                type: 'boolean'
                              },
                              message: 'should be boolean'
                            }];
                            return false;
                          }

                          var valid1 = errors === errs_1;
                        }

                        if (valid1) {
                          var data1 = data.schema;

                          if (data1 === undefined) {
                            valid1 = false;
                            validate.errors = [{
                              keyword: 'required',
                              dataPath: (dataPath || '') + "",
                              schemaPath: '#/required',
                              params: {
                                missingProperty: 'schema'
                              },
                              message: 'should have required property \'schema\''
                            }];
                            return false;
                          } else {
                            var errs_1 = errors;
                            var errs__1 = errors,
                                prevValid1 = false,
                                valid1 = false,
                                passingSchemas1 = null;
                            var errs_2 = errors;

                            if (errors === errs_2) {
                              if (typeof data1 === "string") {
                                if (!pattern0.test(data1)) {
                                  var err = {
                                    keyword: 'pattern',
                                    dataPath: (dataPath || '') + '.schema',
                                    schemaPath: '#/properties/schema/oneOf/0/pattern',
                                    params: {
                                      pattern: '^https?://'
                                    },
                                    message: 'should match pattern "^https?://"'
                                  };
                                  if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                  errors++;
                                } else {
                                  if (!formats$1.uri.test(data1)) {
                                    var err = {
                                      keyword: 'format',
                                      dataPath: (dataPath || '') + '.schema',
                                      schemaPath: '#/properties/schema/oneOf/0/format',
                                      params: {
                                        format: 'uri'
                                      },
                                      message: 'should match format "uri"'
                                    };
                                    if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                    errors++;
                                  }
                                }
                              } else {
                                var err = {
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.schema',
                                  schemaPath: '#/properties/schema/oneOf/0/type',
                                  params: {
                                    type: 'string'
                                  },
                                  message: 'should be string'
                                };
                                if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                errors++;
                              }
                            }

                            var valid2 = errors === errs_2;

                            if (valid2) {
                              valid1 = prevValid1 = true;
                              passingSchemas1 = 0;
                            }

                            var errs_2 = errors;

                            if (!data1 || _typeof(data1) !== "object" || Array.isArray(data1)) {
                              var err = {
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.schema',
                                schemaPath: '#/properties/schema/oneOf/1/type',
                                params: {
                                  type: 'object'
                                },
                                message: 'should be object'
                              };
                              if (vErrors === null) vErrors = [err];else vErrors.push(err);
                              errors++;
                            }

                            var valid2 = errors === errs_2;

                            if (valid2 && prevValid1) {
                              valid1 = false;
                              passingSchemas1 = [passingSchemas1, 1];
                            } else {
                              if (valid2) {
                                valid1 = prevValid1 = true;
                                passingSchemas1 = 1;
                              }
                            }

                            if (!valid1) {
                              var err = {
                                keyword: 'oneOf',
                                dataPath: (dataPath || '') + '.schema',
                                schemaPath: '#/properties/schema/oneOf',
                                params: {
                                  passingSchemas: passingSchemas1
                                },
                                message: 'should match exactly one schema in oneOf'
                              };
                              if (vErrors === null) vErrors = [err];else vErrors.push(err);
                              errors++;
                              validate.errors = vErrors;
                              return false;
                            } else {
                              errors = errs__1;

                              if (vErrors !== null) {
                                if (errs__1) vErrors.length = errs__1;else vErrors = null;
                              }
                            }

                            var valid1 = errors === errs_1;
                          }

                          if (valid1) {
                            var data1 = data.start;

                            if (data1 === undefined) {
                              valid1 = true;
                            } else {
                              var errs_1 = errors;

                              if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                validate.errors = [{
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.start',
                                  schemaPath: '#/properties/start/type',
                                  params: {
                                    type: 'integer'
                                  },
                                  message: 'should be integer'
                                }];
                                return false;
                              }

                              var valid1 = errors === errs_1;
                            }

                            if (valid1) {
                              var data1 = data.size;

                              if (data1 === undefined) {
                                valid1 = true;
                              } else {
                                var errs_1 = errors;
                                var errs__1 = errors,
                                    prevValid1 = false,
                                    valid1 = false,
                                    passingSchemas1 = null;
                                var errs_2 = errors;

                                if (typeof data1 === "number") {
                                  if (data1 > 10 || data1 !== data1) {
                                    var err = {
                                      keyword: 'maximum',
                                      dataPath: (dataPath || '') + '.size',
                                      schemaPath: '#/properties/size/oneOf/0/maximum',
                                      params: {
                                        comparison: '<=',
                                        limit: 10,
                                        exclusive: false
                                      },
                                      message: 'should be <= 10'
                                    };
                                    if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                    errors++;
                                  } else {
                                    if (data1 < 10 || data1 !== data1) {
                                      var err = {
                                        keyword: 'minimum',
                                        dataPath: (dataPath || '') + '.size',
                                        schemaPath: '#/properties/size/oneOf/0/minimum',
                                        params: {
                                          comparison: '>=',
                                          limit: 10,
                                          exclusive: false
                                        },
                                        message: 'should be >= 10'
                                      };
                                      if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                      errors++;
                                    }
                                  }
                                } else {
                                  var err = {
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.size',
                                    schemaPath: '#/properties/size/oneOf/0/type',
                                    params: {
                                      type: 'number'
                                    },
                                    message: 'should be number'
                                  };
                                  if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                  errors++;
                                }

                                var valid2 = errors === errs_2;

                                if (valid2) {
                                  valid1 = prevValid1 = true;
                                  passingSchemas1 = 0;
                                }

                                var errs_2 = errors;

                                if (typeof data1 === "number") {
                                  if (data1 > 25 || data1 !== data1) {
                                    var err = {
                                      keyword: 'maximum',
                                      dataPath: (dataPath || '') + '.size',
                                      schemaPath: '#/properties/size/oneOf/1/maximum',
                                      params: {
                                        comparison: '<=',
                                        limit: 25,
                                        exclusive: false
                                      },
                                      message: 'should be <= 25'
                                    };
                                    if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                    errors++;
                                  } else {
                                    if (data1 < 25 || data1 !== data1) {
                                      var err = {
                                        keyword: 'minimum',
                                        dataPath: (dataPath || '') + '.size',
                                        schemaPath: '#/properties/size/oneOf/1/minimum',
                                        params: {
                                          comparison: '>=',
                                          limit: 25,
                                          exclusive: false
                                        },
                                        message: 'should be >= 25'
                                      };
                                      if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                      errors++;
                                    }
                                  }
                                } else {
                                  var err = {
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.size',
                                    schemaPath: '#/properties/size/oneOf/1/type',
                                    params: {
                                      type: 'number'
                                    },
                                    message: 'should be number'
                                  };
                                  if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                  errors++;
                                }

                                var valid2 = errors === errs_2;

                                if (valid2 && prevValid1) {
                                  valid1 = false;
                                  passingSchemas1 = [passingSchemas1, 1];
                                } else {
                                  if (valid2) {
                                    valid1 = prevValid1 = true;
                                    passingSchemas1 = 1;
                                  }

                                  var errs_2 = errors;

                                  if (typeof data1 === "number") {
                                    if (data1 > 50 || data1 !== data1) {
                                      var err = {
                                        keyword: 'maximum',
                                        dataPath: (dataPath || '') + '.size',
                                        schemaPath: '#/properties/size/oneOf/2/maximum',
                                        params: {
                                          comparison: '<=',
                                          limit: 50,
                                          exclusive: false
                                        },
                                        message: 'should be <= 50'
                                      };
                                      if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                      errors++;
                                    } else {
                                      if (data1 < 50 || data1 !== data1) {
                                        var err = {
                                          keyword: 'minimum',
                                          dataPath: (dataPath || '') + '.size',
                                          schemaPath: '#/properties/size/oneOf/2/minimum',
                                          params: {
                                            comparison: '>=',
                                            limit: 50,
                                            exclusive: false
                                          },
                                          message: 'should be >= 50'
                                        };
                                        if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                        errors++;
                                      }
                                    }
                                  } else {
                                    var err = {
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.size',
                                      schemaPath: '#/properties/size/oneOf/2/type',
                                      params: {
                                        type: 'number'
                                      },
                                      message: 'should be number'
                                    };
                                    if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                    errors++;
                                  }

                                  var valid2 = errors === errs_2;

                                  if (valid2 && prevValid1) {
                                    valid1 = false;
                                    passingSchemas1 = [passingSchemas1, 2];
                                  } else {
                                    if (valid2) {
                                      valid1 = prevValid1 = true;
                                      passingSchemas1 = 2;
                                    }
                                  }
                                }

                                if (!valid1) {
                                  var err = {
                                    keyword: 'oneOf',
                                    dataPath: (dataPath || '') + '.size',
                                    schemaPath: '#/properties/size/oneOf',
                                    params: {
                                      passingSchemas: passingSchemas1
                                    },
                                    message: 'should match exactly one schema in oneOf'
                                  };
                                  if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                  errors++;
                                  validate.errors = vErrors;
                                  return false;
                                } else {
                                  errors = errs__1;

                                  if (vErrors !== null) {
                                    if (errs__1) vErrors.length = errs__1;else vErrors = null;
                                  }
                                }

                                var valid1 = errors === errs_1;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        validate.errors = [{
          keyword: 'type',
          dataPath: (dataPath || '') + "",
          schemaPath: '#/type',
          params: {
            type: 'object'
          },
          message: 'should be object'
        }];
        return false;
      }

      validate.errors = vErrors;
      return errors === 0;
    };
  }();

  validate.schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "striped": {
        "type": "boolean"
      },
      "dark": {
        "type": "boolean"
      },
      "bordered": {
        "type": "boolean"
      },
      "hover": {
        "type": "boolean"
      },
      "fixedHeight": {
        "type": "boolean"
      },
      "headers": {
        "type": "boolean"
      },
      "footers": {
        "type": "boolean"
      },
      "displayedEntries": {
        "type": "boolean"
      },
      "schema": {
        "oneOf": [{
          "type": "string",
          "format": "uri",
          "pattern": "^https?://"
        }, {
          "type": "object"
        }]
      },
      "start": {
        "type": "integer"
      },
      "size": {
        "oneOf": [{
          "type": "number",
          "minimum": 10,
          "maximum": 10
        }, {
          "type": "number",
          "minimum": 25,
          "maximum": 25
        }, {
          "type": "number",
          "minimum": 50,
          "maximum": 50
        }]
      }
    },
    "required": ["schema"]
  };
  validate.errors = null;

  function validateOptions(options) {
    var valid = validate(options);
    var dataValid = options.data && typeof options.data === 'function';

    if (!valid || !dataValid) {
      console.error(validate.errors);
      throw new Error('Invalid options supplied!');
    }
  }
  function getTitle(k, v) {
    return v && v.title || k;
  }

  var ClassBuilder =
  /*#__PURE__*/
  function () {
    function ClassBuilder() {
      _classCallCheck(this, ClassBuilder);

      this.classes = [];
    }

    _createClass(ClassBuilder, [{
      key: "addClass",
      value: function addClass(className) {
        this.classes.push(className);
        return this;
      }
    }, {
      key: "build",
      value: function build() {
        return this.classes.join(' ');
      }
    }]);

    return ClassBuilder;
  }();

  var createTableBodyNode = function createTableBodyNode(d) {
    return h("tr", null, Object.keys(d).map(function (k) {
      return h("td", null, d[k]);
    }));
  };

  var createTitle = function createTitle(f, k, s) {
    if (f) {
      return h("div", null, getTitle(k, s[k]));
    } else {
      return getTitle(k, s[k]);
    }
  };

  var createTableHeadNode = function createTableHeadNode(f, s, d) {
    return h("tr", null, d.map(function (k) {
      return h("th", null, createTitle(f, k, s));
    }));
  };
  var createTableFootNode = function createTableFootNode(f, s, d) {
    return h("tr", null, d.map(function (k) {
      return h("th", null, createTitle(f, k, s));
    }));
  };
  var createEmptyTableRowNode = function createEmptyTableRowNode(l) {
    var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return h("tr", null, h("td", _extends({
      colspan: l
    }, cls), c));
  };

  var createFixedHeightTable = function createFixedHeightTable(s) {
    return h("div", {
      class: "tfh-c tfh-h tfh-f".concat(s.footers ? ' mb-3' : '')
    }, h("div", {
      class: "tfh"
    }, createDefaultTable(s)));
  };

  var buildTableClasses = function buildTableClasses(s) {
    var cb = new ClassBuilder();
    s.striped && cb.addClass('table-striped');
    s.bordered && cb.addClass('table-bordered');
    s.dark && cb.addClass('table-dark');
    s.hover && cb.addClass('table-hover');
    return cb.build();
  };

  var createDefaultTable = function createDefaultTable(s) {
    return h("table", {
      class: "table ".concat(buildTableClasses(s))
    }, h("thead", null), h("tbody", null), s.footers ? h("tfoot", null) : '');
  };

  var createTableNode = function createTableNode(s) {
    return s.fixedHeight ? createFixedHeightTable(s) : createDefaultTable(s);
  };
  var createPaginationNode = function createPaginationNode(s) {
    return h("nav", {
      "aria-label": "Table pagination",
      class: "pagination-container"
    }, h("ul", {
      class: "pagination"
    }, h("li", {
      class: "page-item"
    }, h("a", {
      class: "page-link",
      href: "#"
    }, "Previous")), h("li", {
      class: "page-item"
    }, h("a", {
      class: "page-link",
      href: "#"
    }, "1")), h("li", {
      class: "page-item"
    }, h("a", {
      class: "page-link",
      href: "#"
    }, "Next"))));
  };
  var createDisplayedEntriesNode = function createDisplayedEntriesNode(s) {
    return h("div", {
      class: "mb-2 w-25"
    }, h("span", {
      class: "mr-1"
    }, "Display"), h("select", {
      class: "form-control d-inline-block w-auto",
      size: "1"
    }, h("option", {
      value: "10",
      selected: s.size === 10
    }, "10"), h("option", {
      value: "25",
      selected: s.size === 25
    }, "25"), h("option", {
      value: "50",
      selected: s.size === 50
    }, "50")), h("span", {
      class: "ml-1"
    }, "rows"));
  };

  var Store =
  /*#__PURE__*/
  function () {
    function Store(state) {
      _classCallCheck(this, Store);

      this.state = {
        striped: false,
        dark: false,
        bordered: false,
        hover: false,
        fixedHeight: false,
        headers: true,
        footers: false,
        displayedEntries: false,
        page: 1,
        size: 50,
        pr: null,
        rows: null,
        tableRendered: false,
        headRendered: false,
        footRendered: false,
        paginationRendered: false,
        displayedEntriesRendered: false
      };
      this.observers = [];
      Object.assign(this.state, state);

      if (state.data && _typeof(state.data) === 'object') {
        this.createNodes(state.data);
      }
    }

    _createClass(Store, [{
      key: "registerObserver",
      value: function registerObserver(observer) {
        this.observers.push(observer);
      }
    }, {
      key: "setState",
      value: function setState(state) {
        var notify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        Object.assign(this.state, state);

        if (state.data && _typeof(state.data) === 'object') {
          this.createNodes(state.data);
        }

        if (notify) {
          this.notifyObservers();
        }
      }
    }, {
      key: "notifyObservers",
      value: function notifyObservers() {
        var _this = this;

        this.observers.forEach(function (o) {
          return o.update(_this);
        });
      }
    }, {
      key: "createNodes",
      value: function createNodes(data) {
        this.state.pr = {};
        this.state.rows = [];

        if (data.rows.length > this.state.size && data.rows.length < 50) {
          this.state.size = data.rows.length;
        }

        for (var i = 0; i < data.rows.length; i++) {
          var item = data.rows[i];
          var id = generateId();
          var vd = {
            id: id,
            data: item
          };
          this.state.rows.push(vd);
          this.state.pr[vd.id] = createTableBodyNode(item);
        }
      }
    }]);

    return Store;
  }();

  function renderHead(element, store) {
    if (store.state.headers) {
      var thead = element.querySelector('thead');

      if (thead) {
        thead.textContent = '';
        thead.appendChild(createTableHeadNode(store.state.fixedHeight, store.state.schema.properties, Object.keys(store.state.schema.properties)));
        renderDisplayEntries(element, store);
        store.setState({
          headRendered: true
        }, false);
      }
    }
  }

  function renderFoot(element, store) {
    if (store.state.footers) {
      var tfoot = element.querySelector('tfoot');

      if (tfoot) {
        tfoot.textContent = '';
        tfoot.appendChild(createTableFootNode(store.state.fixedHeight, store.state.schema.properties, Object.keys(store.state.schema.properties)));
        store.setState({
          footRendered: true
        }, false);
      }
    }
  }

  function renderTable(element, store) {
    var tn = createTableNode(store.state);
    element.textContent = '';
    element.appendChild(tn);
    store.setState({
      tableRendered: true
    }, false);
  }

  function renderBody(element, store) {
    var tbody = element.querySelector('tbody');

    if (store.state.rows && Array.isArray(store.state.rows)) {
      var pd = store.state.rows.slice(store.state.start, store.state.size).map(function (p) {
        return store.state.pr[p.id];
      });
      tbody.textContent = '';
      pd.forEach(function (d) {
        return tbody.appendChild(d);
      });
    } else {
      tbody.textContent = '';
      tbody.appendChild(createEmptyTableRowNode(Object.keys(store.state.schema.properties).length, {
        class: 'text-center'
      }, 'Loading...'));
    }
  }

  function renderPagination(element, store) {
    if (store.state.rows && store.state.rows.length > store.state.size) {
      var epg = element.querySelector('nav.pagination-container');

      if (epg) {
        epg.remove();
      }

      var pg = createPaginationNode(store.state);
      element.appendChild(pg);
      store.setState({
        paginationRendered: true
      }, false);
    }
  }

  function renderDisplayEntries(element, store) {
    if (store.state.displayedEntries || store.state.rows && store.state.rows.length > 50) {
      var de = createDisplayedEntriesNode(store.state);
      var select = de.querySelector('select');
      select.addEventListener('change', function (e) {
        store.setState({
          size: Number(e.target.value),
          paginationRendered: false
        });
      });
      element.insertBefore(de, element.firstChild);
      store.setState({
        displayedEntriesRendered: true
      }, false);
    }
  }

  function render(element, store) {
    console.time('render');

    if (!store.state.tableRendered) {
      renderTable(element, store);
    }

    if (!store.state.headRendered) {
      renderHead(element, store);
    }

    if (!store.state.displayedEntriesRendered) {
      renderDisplayEntries(element, store);
    }

    if (!store.state.footRendered) {
      renderFoot(element, store);
    }

    if (!store.state.paginationRendered) {
      renderPagination(element, store);
    }

    renderBody(element, store);
    console.timeEnd('render');
  }

  function loadData(store) {
    var dataObj = store.state.data();

    if (!!dataObj && (_typeof(dataObj) === 'object' || typeof dataObj === 'function') && typeof dataObj.then === 'function') {
      dataObj.then(function (data) {
        return store.setState({
          data: data
        });
      });
    } else if (!!dataObj && _typeof(dataObj) === 'object') {
      store.setState({
        data: dataObj
      });
    } else {
      throw new Error('Data is not a Promise or object!');
    }
  }

  var Table =
  /*#__PURE__*/
  function () {
    function Table(element, options) {
      _classCallCheck(this, Table);

      validateOptions(options);
      this.element = element;
      this.store = new Store(options);
      this.store.registerObserver(this);
      this.render();
      loadData(this.store);
    }

    _createClass(Table, [{
      key: "update",
      value: function update() {
        this.render();
      }
    }, {
      key: "render",
      value: function render$$1() {
        render(this.element, this.store);
      }
    }]);

    return Table;
  }();

  window.mosaic = window.mosaic || {};
  window.mosaic.Table = Table;

})));
