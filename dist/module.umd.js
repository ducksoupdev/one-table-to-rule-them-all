(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.mosaicDataTable = {})));
}(this, (function (exports) { 'use strict';

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
    var tag = isObject(value) ? objectToString.call(value) : '';
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


  function isObject(value) {
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
    var tag = isObject$1(value) ? objectToString$1.call(value) : '';
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

  var validate = function () {
    return function validate(data, dataPath, parentData, parentDataProperty, rootData) {

      var vErrors = null;
      var errors = 0;

      if (data && _typeof(data) === "object" && !Array.isArray(data)) {
        {
          var valid1 = true;
          var data1 = data.inElement;

          if (data1 === undefined) {
            valid1 = false;
            validate.errors = [{
              keyword: 'required',
              dataPath: (dataPath || '') + "",
              schemaPath: '#/required',
              params: {
                missingProperty: 'inElement'
              },
              message: 'should have required property \'inElement\''
            }];
            return false;
          } else {
            var errs_1 = errors;
            var errs__1 = errors,
                prevValid1 = false,
                valid1 = false,
                passingSchemas1 = null;
            var errs_2 = errors;

            if (typeof data1 !== "string") {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.inElement',
                schemaPath: '#/properties/inElement/oneOf/0/type',
                params: {
                  type: 'string'
                },
                message: 'should be string'
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

            if (!data1 || _typeof(data1) !== "object" || Array.isArray(data1)) {
              var err = {
                keyword: 'type',
                dataPath: (dataPath || '') + '.inElement',
                schemaPath: '#/properties/inElement/oneOf/1/type',
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
                dataPath: (dataPath || '') + '.inElement',
                schemaPath: '#/properties/inElement/oneOf',
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
            if (data.enableHover === undefined) {
              valid1 = true;
            } else {
              var errs_1 = errors;

              if (typeof data.enableHover !== "boolean") {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.enableHover',
                  schemaPath: '#/properties/enableHover/type',
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
                valid1 = true;
              } else {
                var errs_1 = errors;
                var errs__1 = errors,
                    prevValid1 = false,
                    valid1 = false,
                    passingSchemas1 = null;
                var errs_2 = errors;

                if (typeof data1 !== "string") {
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
                var data1 = data.data;

                if (data1 === undefined) {
                  valid1 = false;
                  validate.errors = [{
                    keyword: 'required',
                    dataPath: (dataPath || '') + "",
                    schemaPath: '#/required',
                    params: {
                      missingProperty: 'data'
                    },
                    message: 'should have required property \'data\''
                  }];
                  return false;
                } else {
                  var errs_1 = errors;
                  var errs__1 = errors,
                      prevValid1 = false,
                      valid1 = false,
                      passingSchemas1 = null;
                  var errs_2 = errors;

                  if (typeof data1 !== "string") {
                    var err = {
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.data',
                      schemaPath: '#/properties/data/oneOf/0/type',
                      params: {
                        type: 'string'
                      },
                      message: 'should be string'
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

                  if (!Array.isArray(data1)) {
                    var err = {
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.data',
                      schemaPath: '#/properties/data/oneOf/1/type',
                      params: {
                        type: 'array'
                      },
                      message: 'should be array'
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
                      dataPath: (dataPath || '') + '.data',
                      schemaPath: '#/properties/data/oneOf',
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
      "inElement": {
        "oneOf": [{
          "type": "string"
        }, {
          "type": "object"
        }]
      },
      "enableHover": {
        "type": "boolean"
      },
      "schema": {
        "oneOf": [{
          "type": "string"
        }, {
          "type": "object"
        }]
      },
      "data": {
        "oneOf": [{
          "type": "string"
        }, {
          "type": "array"
        }]
      }
    },
    "required": ["inElement", "data"]
  };
  validate.errors = null;

  function validateOptions(options) {
    var valid = validate(options);

    if (!valid) {
      console.error(validate.errors);
      throw new Error('Options are not valid!');
    }
  }
  function getTitle(k, v) {
    return v && v.title || k;
  }

  //   <tr>
  //     {Object.keys(d).map(k => <td>{d[k]}</td>)}
  //   </tr>
  // )

  var createTableBodyNode = function createTableBodyNode(d) {
    return h.apply(void 0, ['tr', null].concat(_toConsumableArray(Object.keys(d).map(function (k) {
      return h('td', null, d[k]);
    }))));
  };
  var createTableHeadNode = function createTableHeadNode(s, d) {
    return h.apply(void 0, ['tr', null].concat(_toConsumableArray(d.map(function (k) {
      return h('th', null, getTitle(k, s[k]));
    }))));
  };
  var createTableFootNode = function createTableFootNode(s, l) {
    return h('tr', null, h('td', {
      colspan: "".concat(l)
    }));
  };
  var createTableNode = function createTableNode(s) {
    return h('table', {
      class: "table".concat(s.enableHover ? ' table-hover' : '')
    }, h('thead', null), h('tbody', null), h('tfoot', null));
  };
  var createPaginationNode = function createPaginationNode(s) {
    return h('nav', {
      ariaLabel: 'Table pagination'
    }, h('ul', {
      class: 'pagination'
    }, h('li', {
      class: 'page-item'
    }, h('a', {
      class: 'page-link',
      href: '#'
    }, 'Previous')), h('li', {
      class: 'page-item'
    }, h('a', {
      class: 'page-link',
      href: '#'
    }, '1')), h('li', {
      class: 'page-item'
    }, h('a', {
      class: 'page-link',
      href: '#'
    }, 'Next'))));
  };

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

  var state = null;
  function initState(is) {
    state = {
      start: 0,
      size: 50,
      total: 10000,
      pr: {},
      data: null
    };
    Object.assign(state, is);

    if (state.data) {
      for (var i = 0; i < state.data.length; i++) {
        var p = state.data[i];

        if (!p['id']) {
          p['id'] = generateId();
        }

        state.pr[p.id] = createTableBodyNode(p);
      }
    }

    return state;
  }

  var tableRendered = false;
  var headRendered = false;
  var footRendered = false;

  function renderHead(element, state) {
    var thead = element.querySelector('thead');

    if (thead) {
      thead.textContent = '';
      thead.appendChild(createTableHeadNode(state.schema.properties, Object.keys(state.data[0])));
      headRendered = true;
    }
  }

  function renderFoot(element, state) {
    var tfoot = element.querySelector('tfoot');

    if (tfoot) {
      tfoot.textContent = '';
      tfoot.appendChild(createTableFootNode(state, Object.keys(state.data[0]).length));
      footRendered = true;
    }
  }

  function renderTable(element, state) {
    var tn = createTableNode(state);
    element.textContent = '';
    element.appendChild(tn);
    tableRendered = true;
  }

  function renderBody(element, state) {
    if (Array.isArray(state.data)) {
      var pd = state.data.slice(state.start, state.size).map(function (p) {
        return state.pr[p.id];
      });
      var tbody = element.querySelector('tbody');
      tbody.textContent = '';
      pd.forEach(function (d) {
        return tbody.appendChild(d);
      });
    }
  }

  function renderPagination(element, state) {
    var pg = createPaginationNode(state);
    var pgc = element.querySelector('tfoot > nav');
    var tfoot = element.querySelector('tfoot > tr > td');

    if (pgc) {
      pgc.remove();
    }

    tfoot.appendChild(pg);
  }

  function render(element, state) {
    console.time('render');

    if (!tableRendered) {
      renderTable(element, state);
    }

    if (!headRendered) {
      renderHead(element, state);
    }

    if (!footRendered) {
      renderFoot(element, state);
    }

    renderBody(element, state);
    renderPagination(element, state);
    console.timeEnd('render');
  }

  function initPagination(state) {
    var ps = document.querySelectorAll('select[name=pagination]');
    ps.forEach(function (s) {
      s.addEventListener('change', function (e) {
        state.size = Number(e.target.value);
        render(state);
        updatePagination(state.size);
      });
    });
    updatePagination(state.size);
  }
  function updatePagination(size) {
    // TODO: save page size - cookie, local storage etc
    var ps = document.querySelectorAll('select[name=pagination]');
    ps.forEach(function (s) {
      s.value = String(size);
    });
  }

  function initTable(options) {
    // create state
    var state = initState(options); // create pagination

    var pagination = initPagination(state);
    return state;
  }

  function mosaicTable() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaultOptions = {
      inElement: null,
      enableHover: true,
      data: null // validate passed options

    };
    validateOptions(options); // override local vars

    Object.assign(defaultOptions, options);
    var element = defaultOptions.inElement;

    if (typeof defaultOptions.inElement === 'string') {
      element = document.querySelector(defaultOptions.inElement);
    }

    var table = initTable(defaultOptions);
    render(element, table);
  }
  window._moduleLoaded = true;
  window.mosaic = window.mosaic || {};
  window.mosaic.table = mosaicTable;

  exports.mosaicTable = mosaicTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
