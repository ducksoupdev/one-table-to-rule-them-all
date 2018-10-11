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

  /** @jsx h */
  var BodyColumn = function BodyColumn(d) {
    return h("tr", null, Object.keys(d).map(function (k) {
      return h("td", null, d[k]);
    }));
  };

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

  /** @jsx h */

  var buildTableClasses = function buildTableClasses(s) {
    var cb = new ClassBuilder();
    s.striped && cb.addClass('table-striped');
    s.bordered && cb.addClass('table-bordered');
    s.dark && cb.addClass('table-dark');
    s.hover && cb.addClass('table-hover');
    return cb.build();
  };

  var TableHead = function TableHead(s) {
    return s.headClassName ? h("thead", {
      class: s.headClassName
    }) : h("thead", null);
  };

  var TableFoot = function TableFoot(s) {
    return s.footClassName ? h("tfoot", {
      class: s.footClassName
    }) : h("tfoot", null);
  };

  var DefaultTable = function DefaultTable(s) {
    return h("table", {
      class: "table ".concat(buildTableClasses(s))
    }, TableHead(s), h("tbody", null), s.footers ? TableFoot(s) : '');
  };

  /** @jsx h */
  var DisplayedEntries = function DisplayedEntries(s) {
    return h("div", {
      class: "mb-2 w-25"
    }, h("span", {
      class: "mr-1"
    }, "Display"), h("select", {
      class: "form-control d-inline-block w-auto",
      size: "1"
    }, h("option", {
      value: "10",
      selected: s.pageSize === 10
    }, "10"), h("option", {
      value: "25",
      selected: s.pageSize === 25
    }, "25"), h("option", {
      value: "50",
      selected: s.pageSize === 50
    }, "50")), h("span", {
      class: "ml-1"
    }, "rows"));
  };

  var EmptyTableRow = function EmptyTableRow(l) {
    var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return h("tr", null, h("td", _extends({
      colspan: l
    }, cls), c));
  };

  /** @jsx h */
  var FixedHeightTable = function FixedHeightTable(s) {
    return h("div", {
      class: "tfh-c tfh-h tfh-f".concat(s.footers ? ' mb-3' : '')
    }, h("div", {
      class: "tfh"
    }, DefaultTable(s)));
  };

  function getTitle(k, v) {
    return v && v.title || k;
  }

  /** @jsx h */
  var Title = function Title(f, k, s) {
    if (f) {
      return h("div", null, getTitle(k, s[k]));
    } else {
      return getTitle(k, s[k]);
    }
  };

  /** @jsx h */
  var HeadRow = function HeadRow(f, s, d) {
    return h("tr", null, d.map(function (k) {
      return h("th", null, Title(f, k, s));
    }));
  };

  /** @jsx h */
  var FootRow = function FootRow(f, s, d) {
    return h("tr", null, d.map(function (k) {
      return h("th", null, Title(f, k, s));
    }));
  };

  /** @jsx h */
  var PaginationList = function PaginationList(s) {
    return h("div", {
      class: "row"
    }, h("div", {
      class: "col-sm"
    }, h("div", {
      class: "pagination-info mb-2"
    }, s.info)), h("div", {
      class: "col-sm"
    }, h("ul", {
      class: "pagination mb-0 float-right"
    }, h("li", {
      class: "page-item".concat(!s.isTherePreviousPage ? ' disabled' : '')
    }, h("a", {
      class: "page-link previous-link",
      href: "#",
      tabindex: !s.isTherePreviousPage ? -1 : 0,
      "aria-label": "Previous"
    }, "Previous")), s.pageIndices.map(function (i) {
      return h("li", {
        class: "page-item".concat(i === s.currentPageIndex ? ' active' : '')
      }, h("a", {
        class: "page-link goto-link",
        href: "#",
        "data-page-index": s.pageIndex,
        "data-goto-page-index": i
      }, i + 1));
    }), h("li", {
      class: "page-item".concat(!s.isThereNextPage ? ' disabled' : '')
    }, h("a", {
      class: "page-link next-link",
      href: "#",
      tabindex: !s.isThereNextPage ? -1 : 0,
      "aria-label": "Next"
    }, "Next")))));
  };
  var Pagination = function Pagination(s) {
    return h("nav", {
      "aria-label": "Table pagination",
      class: "pagination-container mb-3 clearfix"
    }, PaginationList(s));
  };

  var Table = function Table(s) {
    return s.fixedHeight ? FixedHeightTable(s) : DefaultTable(s);
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
        headClassName: null,
        footers: false,
        footClassName: null,
        displayedEntries: false,
        pageIndex: 0,
        pageSize: 50,
        visiblePageCount: 4,
        firstVisiblePageIndex: 0,
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

        if (data.rows.length > this.state.pageSize && data.rows.length < 50) {
          this.state.pageSize = data.rows.length;
        }

        for (var i = 0; i < data.rows.length; i++) {
          var item = data.rows[i];
          var id = generateId();
          var vd = {
            id: id,
            data: item
          };
          this.state.rows.push(vd);
          this.state.pr[vd.id] = BodyColumn(item);
        }
      }
    }]);

    return Store;
  }();

  var validate = function () {
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
                      if (data.headClassName === undefined) {
                        valid1 = true;
                      } else {
                        var errs_1 = errors;

                        if (typeof data.headClassName !== "string") {
                          validate.errors = [{
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.headClassName',
                            schemaPath: '#/properties/headClassName/type',
                            params: {
                              type: 'string'
                            },
                            message: 'should be string'
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
                          if (data.footClassName === undefined) {
                            valid1 = true;
                          } else {
                            var errs_1 = errors;

                            if (typeof data.footClassName !== "string") {
                              validate.errors = [{
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.footClassName',
                                schemaPath: '#/properties/footClassName/type',
                                params: {
                                  type: 'string'
                                },
                                message: 'should be string'
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

                                if (!data1 || _typeof(data1) !== "object" || Array.isArray(data1)) {
                                  validate.errors = [{
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.schema',
                                    schemaPath: '#/properties/schema/type',
                                    params: {
                                      type: 'object'
                                    },
                                    message: 'should be object'
                                  }];
                                  return false;
                                }

                                var valid1 = errors === errs_1;
                              }

                              if (valid1) {
                                var data1 = data.pageIndex;

                                if (data1 === undefined) {
                                  valid1 = true;
                                } else {
                                  var errs_1 = errors;

                                  if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                    validate.errors = [{
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.pageIndex',
                                      schemaPath: '#/properties/pageIndex/type',
                                      params: {
                                        type: 'integer'
                                      },
                                      message: 'should be integer'
                                    }];
                                    return false;
                                  }

                                  if (typeof data1 === "number") {
                                    if (data1 < 0 || data1 !== data1) {
                                      validate.errors = [{
                                        keyword: 'minimum',
                                        dataPath: (dataPath || '') + '.pageIndex',
                                        schemaPath: '#/properties/pageIndex/minimum',
                                        params: {
                                          comparison: '>=',
                                          limit: 0,
                                          exclusive: false
                                        },
                                        message: 'should be >= 0'
                                      }];
                                      return false;
                                    }
                                  }

                                  var valid1 = errors === errs_1;
                                }

                                if (valid1) {
                                  var data1 = data.pageSize;

                                  if (data1 === undefined) {
                                    valid1 = true;
                                  } else {
                                    var errs_1 = errors;
                                    var errs__1 = errors,
                                        prevValid1 = false,
                                        valid1 = false,
                                        passingSchemas1 = null;
                                    var errs_2 = errors;

                                    if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                      var err = {
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.pageSize',
                                        schemaPath: '#/properties/pageSize/oneOf/0/type',
                                        params: {
                                          type: 'integer'
                                        },
                                        message: 'should be integer'
                                      };
                                      if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                      errors++;
                                    }

                                    if (typeof data1 === "number") {
                                      if (data1 > 10 || data1 !== data1) {
                                        var err = {
                                          keyword: 'maximum',
                                          dataPath: (dataPath || '') + '.pageSize',
                                          schemaPath: '#/properties/pageSize/oneOf/0/maximum',
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
                                            dataPath: (dataPath || '') + '.pageSize',
                                            schemaPath: '#/properties/pageSize/oneOf/0/minimum',
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
                                    }

                                    var valid2 = errors === errs_2;

                                    if (valid2) {
                                      valid1 = prevValid1 = true;
                                      passingSchemas1 = 0;
                                    }

                                    var errs_2 = errors;

                                    if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                      var err = {
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.pageSize',
                                        schemaPath: '#/properties/pageSize/oneOf/1/type',
                                        params: {
                                          type: 'integer'
                                        },
                                        message: 'should be integer'
                                      };
                                      if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                      errors++;
                                    }

                                    if (typeof data1 === "number") {
                                      if (data1 > 25 || data1 !== data1) {
                                        var err = {
                                          keyword: 'maximum',
                                          dataPath: (dataPath || '') + '.pageSize',
                                          schemaPath: '#/properties/pageSize/oneOf/1/maximum',
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
                                            dataPath: (dataPath || '') + '.pageSize',
                                            schemaPath: '#/properties/pageSize/oneOf/1/minimum',
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

                                      if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                        var err = {
                                          keyword: 'type',
                                          dataPath: (dataPath || '') + '.pageSize',
                                          schemaPath: '#/properties/pageSize/oneOf/2/type',
                                          params: {
                                            type: 'integer'
                                          },
                                          message: 'should be integer'
                                        };
                                        if (vErrors === null) vErrors = [err];else vErrors.push(err);
                                        errors++;
                                      }

                                      if (typeof data1 === "number") {
                                        if (data1 > 50 || data1 !== data1) {
                                          var err = {
                                            keyword: 'maximum',
                                            dataPath: (dataPath || '') + '.pageSize',
                                            schemaPath: '#/properties/pageSize/oneOf/2/maximum',
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
                                              dataPath: (dataPath || '') + '.pageSize',
                                              schemaPath: '#/properties/pageSize/oneOf/2/minimum',
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
                                        dataPath: (dataPath || '') + '.pageSize',
                                        schemaPath: '#/properties/pageSize/oneOf',
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
                                    var data1 = data.visiblePageCount;

                                    if (data1 === undefined) {
                                      valid1 = true;
                                    } else {
                                      var errs_1 = errors;

                                      if (typeof data1 !== "number" || data1 % 1 || data1 !== data1) {
                                        validate.errors = [{
                                          keyword: 'type',
                                          dataPath: (dataPath || '') + '.visiblePageCount',
                                          schemaPath: '#/properties/visiblePageCount/type',
                                          params: {
                                            type: 'integer'
                                          },
                                          message: 'should be integer'
                                        }];
                                        return false;
                                      }

                                      if (typeof data1 === "number") {
                                        if (data1 < 4 || data1 !== data1) {
                                          validate.errors = [{
                                            keyword: 'minimum',
                                            dataPath: (dataPath || '') + '.visiblePageCount',
                                            schemaPath: '#/properties/visiblePageCount/minimum',
                                            params: {
                                              comparison: '>=',
                                              limit: 4,
                                              exclusive: false
                                            },
                                            message: 'should be >= 4'
                                          }];
                                          return false;
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
      "headClassName": {
        "type": "string"
      },
      "footers": {
        "type": "boolean"
      },
      "footClassName": {
        "type": "string"
      },
      "displayedEntries": {
        "type": "boolean"
      },
      "schema": {
        "type": "object"
      },
      "pageIndex": {
        "type": "integer",
        "minimum": 0
      },
      "pageSize": {
        "oneOf": [{
          "type": "integer",
          "minimum": 10,
          "maximum": 10
        }, {
          "type": "integer",
          "minimum": 25,
          "maximum": 25
        }, {
          "type": "integer",
          "minimum": 50,
          "maximum": 50
        }]
      },
      "visiblePageCount": {
        "type": "integer",
        "minimum": 4
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

  var pg = null;
  var store = null;

  function getPaginationState(state) {
    return {
      info: getInfo(state.pageSize, state.pageIndex, state.rows.length),
      pageIndex: state.pageIndex,
      isTherePreviousPage: isTherePreviousPage(),
      isThereNextPage: isThereNextPage(),
      pageIndices: getPageIndices(state.firstVisiblePageIndex, state.rows.length, state.visiblePageCount),
      currentPageIndex: state.pageIndex
    };
  }

  function getInfo(pageSize, pageIndex, totalCount) {
    var i = {
      firstOnPage: totalCount === 0 ? 0 : pageIndex * pageSize + 1,
      lastOnPage: Math.min(totalCount, (pageIndex + 1) * pageSize),
      total: totalCount
    };
    return "Showing entries ".concat(i.firstOnPage, "-").concat(i.lastOnPage, " of ").concat(i.total);
  }

  function isTherePreviousPage() {
    return store.state.pageIndex > 0;
  }

  function isThereNextPage() {
    return store.state.pageIndex + 1 < getPageCount(store.state.rows.length, store.state.pageSize);
  }

  function getPageCount(totalCount, pageSize) {
    return Math.floor(totalCount / pageSize) + Math.sign(totalCount % pageSize);
  }

  function getPageIndices(firstVisiblePageIndex, totalPageCount, visiblePageCount) {
    var result = [];

    for (var i = firstVisiblePageIndex; i < totalPageCount; i++) {
      result.push(i);

      if (result.length >= visiblePageCount) {
        break;
      }
    }

    return result;
  }

  function previousClicked() {
    isTherePreviousPage() && setPageIndex(store.state.pageIndex - 1);
  }

  function nextClicked() {
    isThereNextPage() && setPageIndex(store.state.pageIndex + 1);
  }

  function pageClicked(e) {
    var cpi = Number(e.target.dataset.pageIndex);
    var pageIndex = Number(e.target.dataset.gotoPageIndex);

    if (pageIndex !== cpi) {
      setPageIndex(pageIndex);
    }
  }

  function setPageIndex(pageIndex) {
    // Make sure that the new page index is within the visible page range
    var firstVisiblePageIndex = store.state.firstVisiblePageIndex;

    if (pageIndex < firstVisiblePageIndex) {
      firstVisiblePageIndex = pageIndex;
    }

    if (pageIndex >= firstVisiblePageIndex + store.state.visiblePageCount) {
      firstVisiblePageIndex = Math.max(pageIndex - store.state.visiblePageCount + 1, 0);
    }

    store.setState({
      pageIndex: pageIndex,
      firstVisiblePageIndex: firstVisiblePageIndex
    });
  }

  function setupEventHandlers(element, state) {
    var pl = element.querySelector('.previous-link');
    var nl = element.querySelector('.next-link');
    var gl = element.querySelectorAll('.goto-link');

    if (state.isTherePreviousPage) {
      pl.addEventListener('click', previousClicked);
    }

    if (state.isThereNextPage) {
      nl.addEventListener('click', nextClicked);
    }

    gl.forEach(function (l) {
      return l.addEventListener('click', pageClicked);
    });
  }

  function createPagination(storeRef) {
    store = storeRef;
    var state = getPaginationState(store.state);
    pg = Pagination(state);
    setupEventHandlers(pg, state);
    return pg;
  }
  function updatePagination(store) {
    var state = getPaginationState(store.state);
    var pl = PaginationList(state);
    setupEventHandlers(pl, state);
    pg.textContent = '';
    pg.appendChild(pl);
  }

  function renderHead(element, store) {
    if (store.state.headers) {
      var thead = element.querySelector('thead');

      if (thead) {
        thead.textContent = '';
        thead.appendChild(HeadRow(store.state.fixedHeight, store.state.schema.properties, Object.keys(store.state.schema.properties)));
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
        tfoot.appendChild(FootRow(store.state.fixedHeight, store.state.schema.properties, Object.keys(store.state.schema.properties)));
        store.setState({
          footRendered: true
        }, false);
      }
    }
  }

  function renderTable(element, store) {
    var tn = Table(store.state);
    element.textContent = '';
    element.appendChild(tn);
    store.setState({
      tableRendered: true
    }, false);
  }

  function renderBody(element, store) {
    var tbody = element.querySelector('tbody');

    if (store.state.rows && Array.isArray(store.state.rows)) {
      var start = store.state.pageIndex === 0 ? 0 : store.state.pageIndex * store.state.pageSize;
      var end = Math.min(store.state.rows.length, (store.state.pageIndex + 1) * store.state.pageSize);
      var pd = store.state.rows.slice(start, end).map(function (p) {
        return store.state.pr[p.id];
      });
      tbody.textContent = '';
      pd.forEach(function (d) {
        return tbody.appendChild(d);
      });
    } else {
      tbody.textContent = '';
      tbody.appendChild(EmptyTableRow(Object.keys(store.state.schema.properties).length, {
        class: 'text-center'
      }, 'Loading...'));
    }
  }

  function renderPagination(element, store) {
    if (store.state.rows && store.state.rows.length > store.state.pageSize) {
      if (!store.state.paginationRendered) {
        var pg = createPagination(store);
        element.appendChild(pg);
        store.setState({
          paginationRendered: true
        }, false);
      } else {
        updatePagination(store);
      }
    }
  }

  function renderDisplayEntries(element, store) {
    if (store.state.displayedEntries || store.state.rows && store.state.rows.length > 50) {
      var de = DisplayedEntries(store.state);
      var select = de.querySelector('select');
      select.addEventListener('change', function (e) {
        store.setState({
          pageSize: Number(e.target.value),
          pageIndex: 0
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

    renderPagination(element, store);
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

  var Table$1 =
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
  window.mosaic.Table = Table$1;

})));
