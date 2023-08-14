/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/* harmony default export */ var esm_browser_v4 = __webpack_exports__["a"] = (v4);

/***/ }),

/***/ "FtRg":
/***/ (function(module, exports, __webpack_require__) {



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

/**
 * Given an instance of EquivalentKeyMap, returns its internal value pair tuple
 * for a key, if one exists. The tuple members consist of the last reference
 * value for the key (used in efficient subsequent lookups) and the value
 * assigned for the key at the leaf node.
 *
 * @param {EquivalentKeyMap} instance EquivalentKeyMap instance.
 * @param {*} key                     The key for which to return value pair.
 *
 * @return {?Array} Value pair, if exists.
 */
function getValuePair(instance, key) {
  var _map = instance._map,
      _arrayTreeMap = instance._arrayTreeMap,
      _objectTreeMap = instance._objectTreeMap; // Map keeps a reference to the last object-like key used to set the
  // value, which can be used to shortcut immediately to the value.

  if (_map.has(key)) {
    return _map.get(key);
  } // Sort keys to ensure stable retrieval from tree.


  var properties = Object.keys(key).sort(); // Tree by type to avoid conflicts on numeric object keys, empty value.

  var map = Array.isArray(key) ? _arrayTreeMap : _objectTreeMap;

  for (var i = 0; i < properties.length; i++) {
    var property = properties[i];
    map = map.get(property);

    if (map === undefined) {
      return;
    }

    var propertyValue = key[property];
    map = map.get(propertyValue);

    if (map === undefined) {
      return;
    }
  }

  var valuePair = map.get('_ekm_value');

  if (!valuePair) {
    return;
  } // If reached, it implies that an object-like key was set with another
  // reference, so delete the reference and replace with the current.


  _map.delete(valuePair[0]);

  valuePair[0] = key;
  map.set('_ekm_value', valuePair);

  _map.set(key, valuePair);

  return valuePair;
}
/**
 * Variant of a Map object which enables lookup by equivalent (deeply equal)
 * object and array keys.
 */


var EquivalentKeyMap =
/*#__PURE__*/
function () {
  /**
   * Constructs a new instance of EquivalentKeyMap.
   *
   * @param {Iterable.<*>} iterable Initial pair of key, value for map.
   */
  function EquivalentKeyMap(iterable) {
    _classCallCheck(this, EquivalentKeyMap);

    this.clear();

    if (iterable instanceof EquivalentKeyMap) {
      // Map#forEach is only means of iterating with support for IE11.
      var iterablePairs = [];
      iterable.forEach(function (value, key) {
        iterablePairs.push([key, value]);
      });
      iterable = iterablePairs;
    }

    if (iterable != null) {
      for (var i = 0; i < iterable.length; i++) {
        this.set(iterable[i][0], iterable[i][1]);
      }
    }
  }
  /**
   * Accessor property returning the number of elements.
   *
   * @return {number} Number of elements.
   */


  _createClass(EquivalentKeyMap, [{
    key: "set",

    /**
     * Add or update an element with a specified key and value.
     *
     * @param {*} key   The key of the element to add.
     * @param {*} value The value of the element to add.
     *
     * @return {EquivalentKeyMap} Map instance.
     */
    value: function set(key, value) {
      // Shortcut non-object-like to set on internal Map.
      if (key === null || _typeof(key) !== 'object') {
        this._map.set(key, value);

        return this;
      } // Sort keys to ensure stable assignment into tree.


      var properties = Object.keys(key).sort();
      var valuePair = [key, value]; // Tree by type to avoid conflicts on numeric object keys, empty value.

      var map = Array.isArray(key) ? this._arrayTreeMap : this._objectTreeMap;

      for (var i = 0; i < properties.length; i++) {
        var property = properties[i];

        if (!map.has(property)) {
          map.set(property, new EquivalentKeyMap());
        }

        map = map.get(property);
        var propertyValue = key[property];

        if (!map.has(propertyValue)) {
          map.set(propertyValue, new EquivalentKeyMap());
        }

        map = map.get(propertyValue);
      } // If an _ekm_value exists, there was already an equivalent key. Before
      // overriding, ensure that the old key reference is removed from map to
      // avoid memory leak of accumulating equivalent keys. This is, in a
      // sense, a poor man's WeakMap, while still enabling iterability.


      var previousValuePair = map.get('_ekm_value');

      if (previousValuePair) {
        this._map.delete(previousValuePair[0]);
      }

      map.set('_ekm_value', valuePair);

      this._map.set(key, valuePair);

      return this;
    }
    /**
     * Returns a specified element.
     *
     * @param {*} key The key of the element to return.
     *
     * @return {?*} The element associated with the specified key or undefined
     *              if the key can't be found.
     */

  }, {
    key: "get",
    value: function get(key) {
      // Shortcut non-object-like to get from internal Map.
      if (key === null || _typeof(key) !== 'object') {
        return this._map.get(key);
      }

      var valuePair = getValuePair(this, key);

      if (valuePair) {
        return valuePair[1];
      }
    }
    /**
     * Returns a boolean indicating whether an element with the specified key
     * exists or not.
     *
     * @param {*} key The key of the element to test for presence.
     *
     * @return {boolean} Whether an element with the specified key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      if (key === null || _typeof(key) !== 'object') {
        return this._map.has(key);
      } // Test on the _presence_ of the pair, not its value, as even undefined
      // can be a valid member value for a key.


      return getValuePair(this, key) !== undefined;
    }
    /**
     * Removes the specified element.
     *
     * @param {*} key The key of the element to remove.
     *
     * @return {boolean} Returns true if an element existed and has been
     *                   removed, or false if the element does not exist.
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      if (!this.has(key)) {
        return false;
      } // This naive implementation will leave orphaned child trees. A better
      // implementation should traverse and remove orphans.


      this.set(key, undefined);
      return true;
    }
    /**
     * Executes a provided function once per each key/value pair, in insertion
     * order.
     *
     * @param {Function} callback Function to execute for each element.
     * @param {*}        thisArg  Value to use as `this` when executing
     *                            `callback`.
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _this = this;

      var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

      this._map.forEach(function (value, key) {
        // Unwrap value from object-like value pair.
        if (key !== null && _typeof(key) === 'object') {
          value = value[1];
        }

        callback.call(thisArg, value, key, _this);
      });
    }
    /**
     * Removes all elements.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map = new Map();
      this._arrayTreeMap = new Map();
      this._objectTreeMap = new Map();
    }
  }, {
    key: "size",
    get: function get() {
      return this._map.size;
    }
  }]);

  return EquivalentKeyMap;
}();

module.exports = EquivalentKeyMap;


/***/ }),

/***/ 5619:
/***/ (function(module) {



// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/***/ }),

/***/ "dsJ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "store", function() { return /* binding */ build_module_store; });
__webpack_require__.d(__webpack_exports__, "EntityProvider", function() { return /* reexport */ EntityProvider; });
__webpack_require__.d(__webpack_exports__, "useEntityId", function() { return /* reexport */ useEntityId; });
__webpack_require__.d(__webpack_exports__, "useEntityProp", function() { return /* reexport */ useEntityProp; });
__webpack_require__.d(__webpack_exports__, "useEntityBlockEditor", function() { return /* reexport */ useEntityBlockEditor; });
__webpack_require__.d(__webpack_exports__, "__experimentalFetchLinkSuggestions", function() { return /* reexport */ _experimental_fetch_link_suggestions; });
__webpack_require__.d(__webpack_exports__, "__experimentalFetchUrlData", function() { return /* reexport */ _experimental_fetch_url_data; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/core-data/build-module/actions.js
var build_module_actions_namespaceObject = {};
__webpack_require__.r(build_module_actions_namespaceObject);
__webpack_require__.d(build_module_actions_namespaceObject, {
  "__experimentalBatch": function() { return __experimentalBatch; },
  "__experimentalReceiveCurrentGlobalStylesId": function() { return __experimentalReceiveCurrentGlobalStylesId; },
  "__experimentalReceiveThemeBaseGlobalStyles": function() { return __experimentalReceiveThemeBaseGlobalStyles; },
  "__experimentalReceiveThemeGlobalStyleVariations": function() { return __experimentalReceiveThemeGlobalStyleVariations; },
  "__experimentalSaveSpecifiedEntityEdits": function() { return __experimentalSaveSpecifiedEntityEdits; },
  "__unstableCreateUndoLevel": function() { return __unstableCreateUndoLevel; },
  "addEntities": function() { return addEntities; },
  "deleteEntityRecord": function() { return deleteEntityRecord; },
  "editEntityRecord": function() { return editEntityRecord; },
  "receiveAutosaves": function() { return receiveAutosaves; },
  "receiveCurrentTheme": function() { return receiveCurrentTheme; },
  "receiveCurrentUser": function() { return receiveCurrentUser; },
  "receiveEmbedPreview": function() { return receiveEmbedPreview; },
  "receiveEntityRecords": function() { return receiveEntityRecords; },
  "receiveNavigationFallbackId": function() { return receiveNavigationFallbackId; },
  "receiveThemeGlobalStyleRevisions": function() { return receiveThemeGlobalStyleRevisions; },
  "receiveThemeSupports": function() { return receiveThemeSupports; },
  "receiveUploadPermissions": function() { return receiveUploadPermissions; },
  "receiveUserPermission": function() { return receiveUserPermission; },
  "receiveUserQuery": function() { return receiveUserQuery; },
  "redo": function() { return redo; },
  "saveEditedEntityRecord": function() { return saveEditedEntityRecord; },
  "saveEntityRecord": function() { return saveEntityRecord; },
  "undo": function() { return undo; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/core-data/build-module/selectors.js
var build_module_selectors_namespaceObject = {};
__webpack_require__.r(build_module_selectors_namespaceObject);
__webpack_require__.d(build_module_selectors_namespaceObject, {
  "__experimentalGetCurrentGlobalStylesId": function() { return __experimentalGetCurrentGlobalStylesId; },
  "__experimentalGetCurrentThemeBaseGlobalStyles": function() { return __experimentalGetCurrentThemeBaseGlobalStyles; },
  "__experimentalGetCurrentThemeGlobalStylesVariations": function() { return __experimentalGetCurrentThemeGlobalStylesVariations; },
  "__experimentalGetDirtyEntityRecords": function() { return __experimentalGetDirtyEntityRecords; },
  "__experimentalGetEntitiesBeingSaved": function() { return __experimentalGetEntitiesBeingSaved; },
  "__experimentalGetEntityRecordNoResolver": function() { return __experimentalGetEntityRecordNoResolver; },
  "__experimentalGetTemplateForLink": function() { return __experimentalGetTemplateForLink; },
  "canUser": function() { return canUser; },
  "canUserEditEntityRecord": function() { return canUserEditEntityRecord; },
  "getAuthors": function() { return getAuthors; },
  "getAutosave": function() { return getAutosave; },
  "getAutosaves": function() { return getAutosaves; },
  "getBlockPatternCategories": function() { return getBlockPatternCategories; },
  "getBlockPatterns": function() { return getBlockPatterns; },
  "getCurrentTheme": function() { return getCurrentTheme; },
  "getCurrentThemeGlobalStylesRevisions": function() { return getCurrentThemeGlobalStylesRevisions; },
  "getCurrentUser": function() { return getCurrentUser; },
  "getEditedEntityRecord": function() { return getEditedEntityRecord; },
  "getEmbedPreview": function() { return getEmbedPreview; },
  "getEntitiesByKind": function() { return getEntitiesByKind; },
  "getEntitiesConfig": function() { return getEntitiesConfig; },
  "getEntity": function() { return getEntity; },
  "getEntityConfig": function() { return getEntityConfig; },
  "getEntityRecord": function() { return getEntityRecord; },
  "getEntityRecordEdits": function() { return getEntityRecordEdits; },
  "getEntityRecordNonTransientEdits": function() { return getEntityRecordNonTransientEdits; },
  "getEntityRecords": function() { return getEntityRecords; },
  "getLastEntityDeleteError": function() { return getLastEntityDeleteError; },
  "getLastEntitySaveError": function() { return getLastEntitySaveError; },
  "getRawEntityRecord": function() { return getRawEntityRecord; },
  "getRedoEdit": function() { return getRedoEdit; },
  "getReferenceByDistinctEdits": function() { return getReferenceByDistinctEdits; },
  "getThemeSupports": function() { return getThemeSupports; },
  "getUndoEdit": function() { return getUndoEdit; },
  "getUserQueryResults": function() { return getUserQueryResults; },
  "hasEditsForEntityRecord": function() { return hasEditsForEntityRecord; },
  "hasEntityRecords": function() { return hasEntityRecords; },
  "hasFetchedAutosaves": function() { return hasFetchedAutosaves; },
  "hasRedo": function() { return hasRedo; },
  "hasUndo": function() { return hasUndo; },
  "isAutosavingEntityRecord": function() { return isAutosavingEntityRecord; },
  "isDeletingEntityRecord": function() { return isDeletingEntityRecord; },
  "isPreviewEmbedFallback": function() { return isPreviewEmbedFallback; },
  "isRequestingEmbedPreview": function() { return isRequestingEmbedPreview; },
  "isSavingEntityRecord": function() { return isSavingEntityRecord; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/core-data/build-module/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, {
  "__experimentalGetCurrentGlobalStylesId": function() { return resolvers_experimentalGetCurrentGlobalStylesId; },
  "__experimentalGetCurrentThemeBaseGlobalStyles": function() { return resolvers_experimentalGetCurrentThemeBaseGlobalStyles; },
  "__experimentalGetCurrentThemeGlobalStylesVariations": function() { return resolvers_experimentalGetCurrentThemeGlobalStylesVariations; },
  "__experimentalGetTemplateForLink": function() { return resolvers_experimentalGetTemplateForLink; },
  "canUser": function() { return resolvers_canUser; },
  "canUserEditEntityRecord": function() { return resolvers_canUserEditEntityRecord; },
  "getAuthors": function() { return resolvers_getAuthors; },
  "getAutosave": function() { return resolvers_getAutosave; },
  "getAutosaves": function() { return resolvers_getAutosaves; },
  "getBlockPatternCategories": function() { return resolvers_getBlockPatternCategories; },
  "getBlockPatterns": function() { return resolvers_getBlockPatterns; },
  "getCurrentTheme": function() { return resolvers_getCurrentTheme; },
  "getCurrentThemeGlobalStylesRevisions": function() { return resolvers_getCurrentThemeGlobalStylesRevisions; },
  "getCurrentUser": function() { return resolvers_getCurrentUser; },
  "getEditedEntityRecord": function() { return resolvers_getEditedEntityRecord; },
  "getEmbedPreview": function() { return resolvers_getEmbedPreview; },
  "getEntityRecord": function() { return resolvers_getEntityRecord; },
  "getEntityRecords": function() { return resolvers_getEntityRecords; },
  "getNavigationFallbackId": function() { return resolvers_getNavigationFallbackId; },
  "getRawEntityRecord": function() { return resolvers_getRawEntityRecord; },
  "getThemeSupports": function() { return resolvers_getThemeSupports; }
});

;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
// EXTERNAL MODULE: ./node_modules/fast-deep-equal/es6/index.js
var es6 = __webpack_require__(5619);
var es6_default = /*#__PURE__*/__webpack_require__.n(es6);
;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: external ["wp","isShallowEqual"]
var external_wp_isShallowEqual_namespaceObject = window["wp"]["isShallowEqual"];
var external_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_wp_isShallowEqual_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/if-matching-action.js
/** @typedef {import('../types').AnyFunction} AnyFunction */

/**
 * A higher-order reducer creator which invokes the original reducer only if
 * the dispatching action matches the given predicate, **OR** if state is
 * initializing (undefined).
 *
 * @param {Function} isMatch Function predicate for allowing reducer call.
 *
 * @return {Function} Higher-order reducer.
 */
const ifMatchingAction = isMatch => reducer => (state, action) => {
  if (state === undefined || isMatch(action)) {
    return reducer(state, action);
  }

  return state;
};

/* harmony default export */ var if_matching_action = (ifMatchingAction);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/replace-action.js
/**
 * Higher-order reducer creator which substitutes the action object before
 * passing to the original reducer.
 *
 * @param {Function} replacer Function mapping original action to replacement.
 *
 * @return {Function} Higher-order reducer.
 */
const replaceAction = replacer => reducer => (state, action) => {
  return reducer(state, replacer(action));
};

/* harmony default export */ var replace_action = (replaceAction);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/conservative-map-item.js
/**
 * External dependencies
 */

/**
 * Given the current and next item entity, returns the minimally "modified"
 * result of the next item, preferring value references from the original item
 * if equal. If all values match, the original item is returned.
 *
 * @param {Object} item     Original item.
 * @param {Object} nextItem Next item.
 *
 * @return {Object} Minimally modified merged item.
 */

function conservativeMapItem(item, nextItem) {
  // Return next item in its entirety if there is no original item.
  if (!item) {
    return nextItem;
  }

  let hasChanges = false;
  const result = {};

  for (const key in nextItem) {
    if (es6_default()(item[key], nextItem[key])) {
      result[key] = item[key];
    } else {
      hasChanges = true;
      result[key] = nextItem[key];
    }
  }

  if (!hasChanges) {
    return item;
  } // Only at this point, backfill properties from the original item which
  // weren't explicitly set into the result above. This is an optimization
  // to allow `hasChanges` to return early.


  for (const key in item) {
    if (!result.hasOwnProperty(key)) {
      result[key] = item[key];
    }
  }

  return result;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/on-sub-key.js
/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {Function} Higher-order reducer.
 */
const onSubKey = actionProperty => reducer => (state = {}, action) => {
  // Retrieve subkey from action. Do not track if undefined; useful for cases
  // where reducer is scoped by action shape.
  const key = action[actionProperty];

  if (key === undefined) {
    return state;
  } // Avoid updating state if unchanged. Note that this also accounts for a
  // reducer which returns undefined on a key which is not yet tracked.


  const nextKeyState = reducer(state[key], action);

  if (nextKeyState === state[key]) {
    return state;
  }

  return { ...state,
    [key]: nextKeyState
  };
};
/* harmony default export */ var on_sub_key = (onSubKey);

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ var tslib_es6 = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});

;// CONCATENATED MODULE: ./node_modules/lower-case/dist.es2015/index.js
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
        },
    },
};
/**
 * External dependencies
 */

/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array}   items Items received.
 * @param {?Object} edits Optional edits to reset.
 *
 * @return {Object} Action object.
 */

function receiveItems(items, edits) {
  return {
    type: 'RECEIVE_ITEMS',
    items: Object(external_lodash_["castArray"])(items),
    persistedEdits: edits
  };
}
/**
 * Returns an action object used in signalling that entity records have been
 * deleted and they need to be removed from entities state.
 *
 * @param {string}       kind            Kind of the removed entities.
 * @param {string}       name            Name of the removed entities.
 * @param {Array|number} records         Record IDs of the removed entities.
 * @param {boolean}      invalidateCache Controls whether we want to invalidate the cache.
 * @return {Object} Action object.
 */

function removeItems(kind, name, records) {
  let invalidateCache = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return {
    type: 'REMOVE_ITEMS',
    itemIds: Object(external_lodash_["castArray"])(records),
    kind,
    name,
    invalidateCache
  };
}
/**
 * Upper case the first character of an input string.
 */
function upperCaseFirst(input) {
    return input.charAt(0).toUpperCase() + input.substr(1);
}

;// CONCATENATED MODULE: ./node_modules/capital-case/dist.es2015/index.js



function capitalCaseTransform(input) {
    return upperCaseFirst(input.toLowerCase());
}
function capitalCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: " ", transform: capitalCaseTransform }, options));
}

;// CONCATENATED MODULE: ./node_modules/pascal-case/dist.es2015/index.js


function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function dist_es2015_pascalCaseTransformMerge(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "", transform: pascalCaseTransform }, options));
}

;// CONCATENATED MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = (v4);
;// CONCATENATED MODULE: external ["wp","url"]
var external_wp_url_namespaceObject = window["wp"]["url"];
;// CONCATENATED MODULE: external ["wp","deprecated"]
var external_wp_deprecated_namespaceObject = window["wp"]["deprecated"];
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/actions.js
/**
 * Returns an action object used in signalling that items have been received.
 *
 * @param {Array}   items Items received.
 * @param {?Object} edits Optional edits to reset.
 *
 * @return {Object} Action object.
 */
function receiveItems(items, edits) {
  return {
    type: 'RECEIVE_ITEMS',
    items: Array.isArray(items) ? items : [items],
    persistedEdits: edits
  };
}
/**
 * Returns an action object used in signalling that entity records have been
 * deleted and they need to be removed from entities state.
 *
 * @param {string}              kind            Kind of the removed entities.
 * @param {string}              name            Name of the removed entities.
 * @param {Array|number|string} records         Record IDs of the removed entities.
 * @param {boolean}             invalidateCache Controls whether we want to invalidate the cache.
 * @return {Object} Action object.
 */

function removeItems(kind, name, records, invalidateCache = false) {
  return {
    type: 'REMOVE_ITEMS',
    itemIds: Array.isArray(records) ? records : [records],
    kind,
    name,
    invalidateCache
  };
}
/**
 * Returns an action object used in signalling that queried data has been
 * received.
 *
 * @param {Array}   items Queried items received.
 * @param {?Object} query Optional query object.
 * @param {?Object} edits Optional edits to reset.
 *
 * @return {Object} Action object.
 */

function receiveQueriedItems(items, query = {}, edits) {
  return { ...receiveItems(items, edits),
    query
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/batch/default-processor.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Maximum number of requests to place in a single batch request. Obtained by
 * sending a preflight OPTIONS request to /batch/v1/.
 *
 * @type {number?}
 */

let maxItems = null;
/**
 * Default batch processor. Sends its input requests to /batch/v1.
 *
 * @param {Array} requests List of API requests to perform at once.
 *
 * @return {Promise} Promise that resolves to a list of objects containing
 *                   either `output` (if that request was successful) or `error`
 *                   (if not ).
 */

async function defaultProcessor(requests) {
  if (maxItems === null) {
    const preflightResponse = await external_wp_apiFetch_default()({
      path: '/batch/v1',
      method: 'OPTIONS'
    });
    maxItems = preflightResponse.endpoints[0].args.requests.maxItems;
  }

  const results = [];

  for (const batchRequests of Object(external_lodash_["chunk"])(requests, maxItems)) {
    const batchResponse = await external_wp_apiFetch_default()({
      path: '/batch/v1',
      method: 'POST',
      data: {
        validation: 'require-all-validate',
        requests: batchRequests.map(request => ({
          path: request.path,
          body: request.data,
          // Rename 'data' to 'body'.
          method: request.method,
          headers: request.headers
        }))
      }
    });
    let batchResults;

    if (batchResponse.failed) {
      batchResults = batchResponse.responses.map(response => ({
        error: response?.body
      }));
    } else {
      batchResults = batchResponse.responses.map(response => {
        const result = {};

        if (response.status >= 200 && response.status < 300) {
          result.output = response.body;
        } else {
          result.error = response.body;
        }

        return result;
      });
    }

    results.push(...batchResults);
  }

  return results;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/batch/create-batch.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Creates a batch, which can be used to combine multiple API requests into one
 * API request using the WordPress batch processing API (/v1/batch).
 *
 * ```
 * const batch = createBatch();
 * const dunePromise = batch.add( {
 *   path: '/v1/books',
 *   method: 'POST',
 *   data: { title: 'Dune' }
 * } );
 * const lotrPromise = batch.add( {
 *   path: '/v1/books',
 *   method: 'POST',
 *   data: { title: 'Lord of the Rings' }
 * } );
 * const isSuccess = await batch.run(); // Sends one POST to /v1/batch.
 * if ( isSuccess ) {
 *   console.log(
 *     'Saved two books:',
 *     await dunePromise,
 *     await lotrPromise
 *   );
 * }
 * ```
 *
 * @param {Function} [processor] Processor function. Can be used to replace the
 *                               default functionality which is to send an API
 *                               request to /v1/batch. Is given an array of
 *                               inputs and must return a promise that
 *                               resolves to an array of objects containing
 *                               either `output` or `error`.
 */

function createBatch(processor = defaultProcessor) {
  let lastId = 0;
  let queue = [];
  const pending = new ObservableSet();
  return {
    /**
     * Adds an input to the batch and returns a promise that is resolved or
     * rejected when the input is processed by `batch.run()`.
     *
     * You may also pass a thunk which allows inputs to be added
     * asychronously.
     *
     * ```
     * // Both are allowed:
     * batch.add( { path: '/v1/books', ... } );
     * batch.add( ( add ) => add( { path: '/v1/books', ... } ) );
     * ```
     *
     * If a thunk is passed, `batch.run()` will pause until either:
     *
     * - The thunk calls its `add` argument, or;
     * - The thunk returns a promise and that promise resolves, or;
     * - The thunk returns a non-promise.
     *
     * @param {any|Function} inputOrThunk Input to add or thunk to execute.
     *
     * @return {Promise|any} If given an input, returns a promise that
     *                       is resolved or rejected when the batch is
     *                       processed. If given a thunk, returns the return
     *                       value of that thunk.
     */
    add(inputOrThunk) {
      const id = ++lastId;
      pending.add(id);

      const add = input => new Promise((resolve, reject) => {
        queue.push({
          input,
          resolve,
          reject
        });
        pending.delete(id);
      });

      if (Object(external_lodash_["isFunction"])(inputOrThunk)) {
        return Promise.resolve(inputOrThunk(add)).finally(() => {
          pending.delete(id);
        });
      }

      return add(inputOrThunk);
    },

    /**
     * Runs the batch. This calls `batchProcessor` and resolves or rejects
     * all promises returned by `add()`.
     *
     * @return {Promise} A promise that resolves to a boolean that is true
     *                   if the processor returned no errors.
     */
    async run() {
      if (pending.size) {
        await new Promise(resolve => {
          const unsubscribe = pending.subscribe(() => {
            if (!pending.size) {
              unsubscribe();
              resolve();
            }
          });
        });
      }

      let results;

      try {
        results = await processor(queue.map(({
          input
        }) => input));

        if (results.length !== queue.length) {
          throw new Error('run: Array returned by processor must be same size as input array.');
        }
      } catch (error) {
        for (const {
          reject
        } of queue) {
          reject(error);
        }

        throw error;
      }

      let isSuccess = true;

        if (result?.error) {
          queueItem?.reject(result.error);
          isSuccess = false;
        } else {
          var _result$output;

          queueItem?.resolve((_result$output = result?.output) !== null && _result$output !== void 0 ? _result$output : result);
        }
      }

      queue = [];
      return isSuccess;
    }

  };
}

class ObservableSet {
  constructor(...args) {
    this.set = new Set(...args);
    this.subscribers = new Set();
  }

  get size() {
    return this.set.size;
  }

  add() {
    this.set.add(...arguments);
    this.subscribers.forEach(subscriber => subscriber());
    return this;
  }

  delete() {
    const isSuccess = this.set.delete(...arguments);
    this.subscribers.forEach(subscriber => subscriber());
    return isSuccess;
  }

  subscribe(subscriber) {
    this.subscribers.add(subscriber);
    return () => {
      this.subscribers.delete(subscriber);
    };
  }

}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/name.js
/**
 * The reducer key used by core data in store registration.
 * This is defined in a separate file to avoid cycle-dependency
 *
 * @type {string}
 */
const STORE_NAME = 'core';

;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/private-selectors.js
/**
 * Internal dependencies
 */

/**
 * Returns the previous edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param state State tree.
 *
 * @return The edit.
 */
function getUndoEdits(state) {
  return state.undo.list[state.undo.list.length - 1 + state.undo.offset];
}
/**
 * Returns the next edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @param state State tree.
 *
 * @return The edit.
 */

function getRedoEdits(state) {
  return state.undo.list[state.undo.list.length + state.undo.offset];
}
/**
 * Retrieve the fallback Navigation.
 *
 * @param state Data state.
 * @return The ID for the fallback Navigation post.
 */

function getNavigationFallbackId(state) {
  return state.navigationFallbackId;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/actions.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */






/**
 * Returns an action object used in signalling that authors have been received.
 *
 * @param {string}       queryID Query ID.
 * @param {Array|Object} users   Users received.
 *
 * @return {Object} Action object.
 */

function receiveUserQuery(queryID, users) {
  return {
    type: 'RECEIVE_USER_QUERY',
    users: Array.isArray(users) ? users : [users],
    queryID
  };
}
/**
 * Returns an action used in signalling that the current user has been received.
 *
 * @param {Object} currentUser Current user object.
 *
 * @return {Object} Action object.
 */

function receiveCurrentUser(currentUser) {
  return {
    type: 'RECEIVE_CURRENT_USER',
    currentUser
  };
}
/**
 * Returns an action object used in adding new entities.
 *
 * @param {Array} entities Entities received.
 *
 * @return {Object} Action object.
 */

function addEntities(entities) {
  return {
    type: 'ADD_ENTITIES',
    entities
  };
}
/**
 * Returns an action object used in signalling that entity records have been received.
 *
 * @param {string}       kind            Kind of the received entity.
 * @param {string}       name            Name of the received entity.
 * @param {Array|Object} records         Records received.
 * @param {?Object}      query           Query Object.
 * @param {?boolean}     invalidateCache Should invalidate query caches.
 * @param {?Object}      edits           Edits to reset.
 * @return {Object} Action object.
 */

function receiveEntityRecords(kind, name, records, query, invalidateCache = false, edits) {
  // Auto drafts should not have titles, but some plugins rely on them so we can't filter this
  // on the server.
  if (kind === 'postType') {
    records = (Array.isArray(records) ? records : [records]).map(record => record.status === 'auto-draft' ? { ...record,
      title: ''
    } : record);
  }

  let action;

  if (query) {
    action = receiveQueriedItems(records, query, edits);
  } else {
    action = receiveItems(records, edits);
  }

  return { ...action,
    kind,
    name,
    invalidateCache
  };
}
/**
 * Returns an action object used in signalling that the current theme has been received.
 *
 * @param {Object} currentTheme The current theme.
 *
 * @return {Object} Action object.
 */

function receiveCurrentTheme(currentTheme) {
  return {
    type: 'RECEIVE_CURRENT_THEME',
    currentTheme
  };
}
/**
 * Returns an action object used in signalling that the current global styles id has been received.
 *
 * @param {string} currentGlobalStylesId The current global styles id.
 *
 * @return {Object} Action object.
 */

function __experimentalReceiveCurrentGlobalStylesId(currentGlobalStylesId) {
  return {
    type: 'RECEIVE_CURRENT_GLOBAL_STYLES_ID',
    id: currentGlobalStylesId
  };
}
/**
 * Returns an action object used in signalling that the theme base global styles have been received
 *
 * @param {string} stylesheet   The theme's identifier
 * @param {Object} globalStyles The global styles object.
 *
 * @return {Object} Action object.
 */

function __experimentalReceiveThemeBaseGlobalStyles(stylesheet, globalStyles) {
  return {
    type: 'RECEIVE_THEME_GLOBAL_STYLES',
    stylesheet,
    globalStyles
  };
}
/**
 * Returns an action object used in signalling that the index has been received.
 *
 * @deprecated since WP 5.9, this is not useful anymore, use the selector direclty.
 *
 * @return {Object} Action object.
 */

function receiveThemeSupports() {
  external_wp_deprecated_default()("wp.data.dispatch( 'core' ).receiveThemeSupports", {
    since: '5.9'
  });
  return {
    type: 'DO_NOTHING'
  };
}
/**
 * Returns an action object used in signalling that the theme global styles CPT post revisions have been received.
 * Ignored from documentation as it's internal to the data store.
 *
 * @ignore
 *
 * @param {number} currentId The post id.
 * @param {Array}  revisions The global styles revisions.
 *
 * @return {Object} Action object.
 */

function receiveThemeGlobalStyleRevisions(currentId, revisions) {
  return {
    type: 'RECEIVE_THEME_GLOBAL_STYLE_REVISIONS',
    currentId,
    revisions
  };
}
/**
 * Returns an action object used in signalling that the preview data for
 * a given URl has been received.
 *
 * @param {string} url     URL to preview the embed for.
 * @param {*}      preview Preview data.
 *
 * @return {Object} Action object.
 */

function receiveEmbedPreview(url, preview) {
  return {
    type: 'RECEIVE_EMBED_PREVIEW',
    url,
    preview
  };
}
/**
 * Action triggered to delete an entity record.
 *
 * @param {string}   kind                      Kind of the deleted entity.
 * @param {string}   name                      Name of the deleted entity.
 * @param {string}   recordId                  Record ID of the deleted entity.
 * @param {?Object}  query                     Special query parameters for the
 *                                             DELETE API call.
 * @param {Object}   [options]                 Delete options.
 * @param {Function} [options.__unstableFetch] Internal use only. Function to
 *                                             call instead of `apiFetch()`.
 *                                             Must return a promise.
 */

const deleteEntityRecord = (kind, name, recordId, query, {
  __unstableFetch = (external_wp_apiFetch_default()),
  throwOnError = false
} = {}) => async ({
  dispatch
}) => {
  const configs = await dispatch(getOrLoadEntitiesConfig(kind));
  const entityConfig = configs.find(config => config.kind === kind && config.name === name);
  let error;
  let deletedRecord = false;

  if (!entityConfig || entityConfig?.__experimentalNoFetch) {
    return;
  }

  const lock = await dispatch.__unstableAcquireStoreLock(STORE_NAME, ['entities', 'records', kind, name, recordId], {
    exclusive: true
  });

  try {
    dispatch({
      type: 'DELETE_ENTITY_RECORD_START',
      kind,
      name,
      recordId
    });
    let hasError = false;

    try {
      let path = `${entityConfig.baseURL}/${recordId}`;

      if (query) {
        path = (0,external_wp_url_namespaceObject.addQueryArgs)(path, query);
      }

      deletedRecord = await __unstableFetch({
        path,
        method: 'DELETE'
      });
      await dispatch(removeItems(kind, name, recordId, true));
    } catch (_error) {
      hasError = true;
      error = _error;
    }

    dispatch({
      type: 'DELETE_ENTITY_RECORD_FINISH',
      kind,
      name,
      recordId,
      error
    });

    if (hasError && throwOnError) {
      throw error;
    }

    return deletedRecord;
  } finally {
    dispatch.__unstableReleaseStoreLock(lock);
  }
};
/**
 * Returns an action object that triggers an
 * edit to an entity record.
 *
 * @param {string}        kind                 Kind of the edited entity record.
 * @param {string}        name                 Name of the edited entity record.
 * @param {number|string} recordId             Record ID of the edited entity record.
 * @param {Object}        edits                The edits.
 * @param {Object}        options              Options for the edit.
 * @param {boolean}       [options.undoIgnore] Whether to ignore the edit in undo history or not.
 *
 * @return {Object} Action object.
 */

const editEntityRecord = (kind, name, recordId, edits, options = {}) => ({
  select,
  dispatch
}) => {
  const entityConfig = select.getEntityConfig(kind, name);

  if (!entityConfig) {
    throw new Error(`The entity being edited (${kind}, ${name}) does not have a loaded config.`);
  }

  const {
    mergedEdits = {}
  } = entityConfig;
  const record = select.getRawEntityRecord(kind, name, recordId);
  const editedRecord = select.getEditedEntityRecord(kind, name, recordId);
  const edit = {
    kind,
    name,
    recordId,
    // Clear edits when they are equal to their persisted counterparts
    // so that the property is not considered dirty.
    edits: Object.keys(edits).reduce((acc, key) => {
      const recordValue = record[key];
      const editedRecordValue = editedRecord[key];
      const value = mergedEdits[key] ? { ...editedRecordValue,
        ...edits[key]
      } : edits[key];
      acc[key] = es6_default()(recordValue, value) ? undefined : value;
      return acc;
    }, {})
  };
  dispatch({
    type: 'EDIT_ENTITY_RECORD',
    ...edit,
    meta: {
      undo: !options.undoIgnore && { ...edit,
        // Send the current values for things like the first undo stack entry.
        edits: Object.keys(edits).reduce((acc, key) => {
          acc[key] = editedRecord[key];
          return acc;
        }, {}),
        isCached: options.isCached
      }
    }
  });
};
/**
 * Action triggered to undo the last edit to
 * an entity record, if any.
 *
 * @return {undefined}
 */

const undo = () => ({
  select,
  dispatch
}) => {
  // Todo: we shouldn't have to pass "root" here.
  const undoEdit = select(state => getUndoEdits(state.root));

  if (!undoEdit) {
    return;
  }

  dispatch({
    type: 'UNDO',
    stackedEdits: undoEdit
  });
};
/**
 * Action triggered to redo the last undoed
 * edit to an entity record, if any.
 *
 * @return {undefined}
 */

const redo = () => ({
  select,
  dispatch
}) => {
  // Todo: we shouldn't have to pass "root" here.
  const redoEdit = select(state => getRedoEdits(state.root));

  if (!redoEdit) {
    return;
  }

  dispatch({
    type: 'REDO',
    stackedEdits: redoEdit
  });
};
/**
 * Forces the creation of a new undo level.
 *
 * @return {Object} Action object.
 */

function actions_unstableCreateUndoLevel() {
  return {
    type: 'CREATE_UNDO_LEVEL'
  };
}
/**
 * Action triggered to save an entity record.
 *
 * @param {string}   kind                       Kind of the received entity.
 * @param {string}   name                       Name of the received entity.
 * @param {Object}   record                     Record to be saved.
 * @param {Object}   options                    Saving options.
 * @param {boolean}  [options.isAutosave=false] Whether this is an autosave.
 * @param {Function} [options.__unstableFetch]  Internal use only. Function to
 *                                              call instead of `apiFetch()`.
 *                                              Must return a promise.
 */

const saveEntityRecord = (kind, name, record, {
  isAutosave = false,
  __unstableFetch = (external_wp_apiFetch_default()),
  throwOnError = false
} = {}) => async ({
  select,
  resolveSelect,
  dispatch
}) => {
  const configs = await dispatch(getOrLoadEntitiesConfig(kind));
  const entityConfig = configs.find(config => config.kind === kind && config.name === name);

  if (!entityConfig || entityConfig?.__experimentalNoFetch) {
    return;
  }

  const entityIdKey = entityConfig.key || DEFAULT_ENTITY_KEY;
  const recordId = record[entityIdKey];
  const lock = await dispatch.__unstableAcquireStoreLock(STORE_NAME, ['entities', 'records', kind, name, recordId || esm_browser_v4()], {
    exclusive: true
  });

  try {
    // Evaluate optimized edits.
    // (Function edits that should be evaluated on save to avoid expensive computations on every edit.)
    for (const [key, value] of Object.entries(record)) {
      if (typeof value === 'function') {
        const evaluatedValue = value(select.getEditedEntityRecord(kind, name, recordId));
        dispatch.editEntityRecord(kind, name, recordId, {
          [key]: evaluatedValue
        }, {
          undoIgnore: true
        });
        record[key] = evaluatedValue;
      }
    }

    dispatch({
      type: 'SAVE_ENTITY_RECORD_START',
      kind,
      name,
      recordId,
      isAutosave
    });
    let updatedRecord;
    let error;
    let hasError = false;

    try {
      const path = `${entityConfig.baseURL}${recordId ? '/' + recordId : ''}`;
      const persistedRecord = select.getRawEntityRecord(kind, name, recordId);

      if (isAutosave) {
        // Most of this autosave logic is very specific to posts.
        // This is fine for now as it is the only supported autosave,
        // but ideally this should all be handled in the back end,
        // so the client just sends and receives objects.
        const currentUser = select.getCurrentUser();
        const currentUserId = currentUser ? currentUser.id : undefined;
        const autosavePost = await resolveSelect.getAutosave(persistedRecord.type, persistedRecord.id, currentUserId); // Autosaves need all expected fields to be present.
        // So we fallback to the previous autosave and then
        // to the actual persisted entity if the edits don't
        // have a value.

        let data = { ...persistedRecord,
          ...autosavePost,
          ...record
        };
        data = Object.keys(data).reduce((acc, key) => {
          if (['title', 'excerpt', 'content', 'meta'].includes(key)) {
            acc[key] = data[key];
          }

          return acc;
        }, {
          status: data.status === 'auto-draft' ? 'draft' : data.status
        });
        updatedRecord = await __unstableFetch({
          path: `${path}/autosaves`,
          method: 'POST',
          data
        }); // An autosave may be processed by the server as a regular save
        // when its update is requested by the author and the post had
        // draft or auto-draft status.

        if (persistedRecord.id === updatedRecord.id) {
          let newRecord = { ...persistedRecord,
            ...data,
            ...updatedRecord
          };
          newRecord = Object.keys(newRecord).reduce((acc, key) => {
            // These properties are persisted in autosaves.
            if (['title', 'excerpt', 'content'].includes(key)) {
              acc[key] = newRecord[key];
            } else if (key === 'status') {
              // Status is only persisted in autosaves when going from
              // "auto-draft" to "draft".
              acc[key] = persistedRecord.status === 'auto-draft' && newRecord.status === 'draft' ? newRecord.status : persistedRecord.status;
            } else {
              // These properties are not persisted in autosaves.
              acc[key] = persistedRecord[key];
            }

            return acc;
          }, {});
          dispatch.receiveEntityRecords(kind, name, newRecord, undefined, true);
        } else {
          dispatch.receiveAutosaves(persistedRecord.id, updatedRecord);
        }
      } else {
        let edits = record;

        if (entityConfig.__unstablePrePersist) {
          edits = { ...edits,
            ...entityConfig.__unstablePrePersist(persistedRecord, edits)
          };
        }

        updatedRecord = await __unstableFetch({
          path,
          method: recordId ? 'PUT' : 'POST',
          data: edits
        });
        dispatch.receiveEntityRecords(kind, name, updatedRecord, undefined, true, edits);
      }
    } catch (_error) {
      hasError = true;
      error = _error;
    }

    dispatch({
      type: 'SAVE_ENTITY_RECORD_FINISH',
      kind,
      name,
      recordId,
      error,
      isAutosave
    });

    if (hasError && throwOnError) {
      throw error;
    }

    return updatedRecord;
  } finally {
    dispatch.__unstableReleaseStoreLock(lock);
  }
};
/**
 * Runs multiple core-data actions at the same time using one API request.
 *
 * Example:
 *
 * ```
 * const [ savedRecord, updatedRecord, deletedRecord ] =
 *   await dispatch( 'core' ).__experimentalBatch( [
 *     ( { saveEntityRecord } ) => saveEntityRecord( 'root', 'widget', widget ),
 *     ( { saveEditedEntityRecord } ) => saveEntityRecord( 'root', 'widget', 123 ),
 *     ( { deleteEntityRecord } ) => deleteEntityRecord( 'root', 'widget', 123, null ),
 *   ] );
 * ```
 *
 * @param {Array} requests Array of functions which are invoked simultaneously.
 *                         Each function is passed an object containing
 *                         `saveEntityRecord`, `saveEditedEntityRecord`, and
 *                         `deleteEntityRecord`.
 *
 * @return {Promise} A promise that resolves to an array containing the return
 *                   values of each function given in `requests`.
 */

const __experimentalBatch = requests => async ({
  dispatch
}) => {
  const batch = createBatch();
  const api = {
    saveEntityRecord(kind, name, record, options) {
      return batch.add(add => dispatch.saveEntityRecord(kind, name, record, { ...options,
        __unstableFetch: add
      }));
    },

    saveEditedEntityRecord(kind, name, recordId, options) {
      return batch.add(add => dispatch.saveEditedEntityRecord(kind, name, recordId, { ...options,
        __unstableFetch: add
      }));
    },

    deleteEntityRecord(kind, name, recordId, query, options) {
      return batch.add(add => dispatch.deleteEntityRecord(kind, name, recordId, query, { ...options,
        __unstableFetch: add
      }));
    }

  };
  const resultPromises = requests.map(request => request(api));
  const [, ...results] = await Promise.all([batch.run(), ...resultPromises]);
  return results;
};
/**
 * Action triggered to save an entity record's edits.
 *
 * @param {string} kind     Kind of the entity.
 * @param {string} name     Name of the entity.
 * @param {Object} recordId ID of the record.
 * @param {Object} options  Saving options.
 */

const saveEditedEntityRecord = (kind, name, recordId, options) => async ({
  select,
  dispatch
}) => {
  if (!select.hasEditsForEntityRecord(kind, name, recordId)) {
    return;
  }

  const configs = await dispatch(getOrLoadEntitiesConfig(kind));
  const entityConfig = configs.find(config => config.kind === kind && config.name === name);

  if (!entityConfig) {
    return;
  }

  const entityIdKey = entity.key || DEFAULT_ENTITY_KEY;
  const edits = select.getEntityRecordNonTransientEdits(kind, name, recordId);
  const record = {
    [entityIdKey]: recordId,
    ...edits
  };
  return await dispatch.saveEntityRecord(kind, name, record, options);
};
/**
 * Action triggered to save only specified properties for the entity.
 *
 * @param {string} kind        Kind of the entity.
 * @param {string} name        Name of the entity.
 * @param {Object} recordId    ID of the record.
 * @param {Array}  itemsToSave List of entity properties to save.
 * @param {Object} options     Saving options.
 */

const __experimentalSaveSpecifiedEntityEdits = (kind, name, recordId, itemsToSave, options) => async ({
  select,
  dispatch
}) => {
  if (!select.hasEditsForEntityRecord(kind, name, recordId)) {
    return;
  }

  const edits = select.getEntityRecordNonTransientEdits(kind, name, recordId);
  const editsToSave = {};

  for (const edit in edits) {
    if (itemsToSave.some(item => item === edit)) {
      editsToSave[edit] = edits[edit];
    }
  }

  return await dispatch.saveEntityRecord(kind, name, editsToSave, options);
};
/**
 * Returns an action object used in signalling that Upload permissions have been received.
 *
 * @param {boolean} hasUploadPermissions Does the user have permission to upload files?
 *
 * @return {Object} Action object.
 */

function receiveUploadPermissions(hasUploadPermissions) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key: 'create/media',
    isAllowed: hasUploadPermissions
  };
}
/**
 * Returns an action object used in signalling that the current user has
 * permission to perform an action on a REST resource.
 *
 * @param {string}  key       A key that represents the action and REST resource.
 * @param {boolean} isAllowed Whether or not the user can perform the action.
 *
 * @return {Object} Action object.
 */

function receiveUserPermission(key, isAllowed) {
  return {
    type: 'RECEIVE_USER_PERMISSION',
    key,
    isAllowed
  };
}
/**
 * Returns an action object used in signalling that the autosaves for a
 * post have been received.
 *
 * @param {number}       postId    The id of the post that is parent to the autosave.
 * @param {Array|Object} autosaves An array of autosaves or singular autosave object.
 *
 * @return {Object} Action object.
 */

function receiveAutosaves(postId, autosaves) {
  return {
    type: 'RECEIVE_AUTOSAVES',
    postId,
    autosaves: Array.isArray(autosaves) ? autosaves : [autosaves]
  };
}
/**
 * Returns an action object signalling that the fallback Navigation
 * Menu id has been received.
 *
 * @param {integer} fallbackId the id of the fallback Navigation Menu
 * @return {Object} Action object.
 */

function receiveNavigationFallbackId(fallbackId) {
  return {
    type: 'RECEIVE_NAVIGATION_FALLBACK_ID',
    fallbackId
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/entities.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const DEFAULT_ENTITY_KEY = 'id';
const POST_RAW_ATTRIBUTES = ['title', 'excerpt', 'content'];
const defaultEntities = [{
  label: Object(external_wp_i18n_["__"])('Base'),
  name: '__unstableBase',
  kind: 'root',
  baseURL: '/'
}, {
  label: Object(external_wp_i18n_["__"])('Site'),
  name: 'site',
  kind: 'root',
  baseURL: '/wp/v2/settings',
  getTitle: record => {
    var _record$title;

    return (_record$title = record?.title) !== null && _record$title !== void 0 ? _record$title : (0,external_wp_i18n_namespaceObject.__)('Site Title');
  }
}, {
  label: Object(external_wp_i18n_["__"])('Post Type'),
  name: 'postType',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/types',
  baseURLParams: {
    context: 'edit'
  },
  rawAttributes: POST_RAW_ATTRIBUTES
}, {
  name: 'media',
  kind: 'root',
  baseURL: '/wp/v2/media',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'mediaItems',
  label: Object(external_wp_i18n_["__"])('Media')
}, {
  name: 'taxonomy',
  kind: 'root',
  key: 'slug',
  baseURL: '/wp/v2/taxonomies',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'taxonomies',
  label: Object(external_wp_i18n_["__"])('Taxonomy')
}, {
  name: 'sidebar',
  kind: 'root',
  baseURL: '/wp/v2/sidebars',
  plural: 'sidebars',
  transientEdits: {
    blocks: true
  },
  label: Object(external_wp_i18n_["__"])('Widget areas')
}, {
  name: 'widget',
  kind: 'root',
  baseURL: '/wp/v2/widgets',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'widgets',
  transientEdits: {
    blocks: true
  },
  label: Object(external_wp_i18n_["__"])('Widgets')
}, {
  name: 'widgetType',
  kind: 'root',
  baseURL: '/wp/v2/widget-types',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'widgetTypes',
  label: Object(external_wp_i18n_["__"])('Widget types')
}, {
  label: Object(external_wp_i18n_["__"])('User'),
  name: 'user',
  kind: 'root',
  baseURL: '/wp/v2/users',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'users'
}, {
  name: 'comment',
  kind: 'root',
  baseURL: '/wp/v2/comments',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'comments',
  label: Object(external_wp_i18n_["__"])('Comment')
}, {
  name: 'menu',
  kind: 'root',
  baseURL: '/wp/v2/menus',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menus',
  label: Object(external_wp_i18n_["__"])('Menu')
}, {
  name: 'menuItem',
  kind: 'root',
  baseURL: '/wp/v2/menu-items',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menuItems',
  label: Object(external_wp_i18n_["__"])('Menu Item'),
  rawAttributes: ['title', 'content']
}, {
  name: 'menuLocation',
  kind: 'root',
  baseURL: '/wp/v2/menu-locations',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'menuLocations',
  label: Object(external_wp_i18n_["__"])('Menu Location'),
  key: 'name'
}, {
  name: 'navigationArea',
  kind: 'root',
  baseURL: '/wp/v2/block-navigation-areas',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'navigationAreas',
  label: Object(external_wp_i18n_["__"])('Navigation Area'),
  key: 'name',
  getTitle: record => record === null || record === void 0 ? void 0 : record.description
}, {
  label: Object(external_wp_i18n_["__"])('Global Styles'),
  name: 'globalStyles',
  kind: 'root',
  baseURL: '/wp/v2/global-styles',
  baseURLParams: {
    context: 'edit'
  },
  plural: 'globalStylesVariations',
  // Should be different than name.
  getTitle: record => record?.title?.rendered || record?.title
}, {
  label: Object(external_wp_i18n_["__"])('Themes'),
  name: 'theme',
  kind: 'root',
  baseURL: '/wp/v2/themes',
  baseURLParams: {
    context: 'edit'
  },
  key: 'stylesheet'
}, {
  label: Object(external_wp_i18n_["__"])('Plugins'),
  name: 'plugin',
  kind: 'root',
  baseURL: '/wp/v2/plugins',
  baseURLParams: {
    context: 'edit'
  },
  key: 'plugin'
}];
const kinds = [{
  name: 'postType',
  loadEntities: loadPostTypeEntities
}, {
  name: 'taxonomy',
  loadEntities: loadTaxonomyEntities
}];
/**
 * Returns a function to be used to retrieve extra edits to apply before persisting a post type.
 *
 * @param {Object} persistedRecord Already persisted Post
 * @param {Object} edits           Edits.
 * @return {Object} Updated edits.
 */

const prePersistPostType = (persistedRecord, edits) => {
  const newEdits = {};

  if (persistedRecord?.status === 'auto-draft') {
    // Saving an auto-draft should create a draft by default.
    if (!edits.status && !newEdits.status) {
      newEdits.status = 'draft';
    } // Fix the auto-draft default title.


    if ((!edits.title || edits.title === 'Auto Draft') && !newEdits.title && (!persistedRecord?.title || persistedRecord?.title === 'Auto Draft')) {
      newEdits.title = '';
    }
  }

  return newEdits;
};
/**
 * Returns the list of post type entities.
 *
 * @return {Promise} Entities promise
 */

async function loadPostTypeEntities() {
  const postTypes = await external_wp_apiFetch_default()({
    path: '/wp/v2/types?context=edit'
  });
  return Object.entries(postTypes !== null && postTypes !== void 0 ? postTypes : {}).map(([name, postType]) => {
    var _postType$rest_namesp;

    const isTemplate = ['wp_template', 'wp_template_part'].includes(name);
    const namespace = (_postType$rest_namesp = postType?.rest_namespace) !== null && _postType$rest_namesp !== void 0 ? _postType$rest_namesp : 'wp/v2';
    return {
      kind: 'postType',
      baseURL: `/${namespace}/${postType.rest_base}`,
      baseURLParams: {
        context: 'edit'
      },
      name,
      label: postType.labels.singular_name,
      transientEdits: {
        blocks: true,
        selection: true
      },
      mergedEdits: {
        meta: true
      },
      rawAttributes: POST_RAW_ATTRIBUTES,
      getTitle: record => {
        var _record$slug;

        return record?.title?.rendered || record?.title || (isTemplate ? capitalCase((_record$slug = record.slug) !== null && _record$slug !== void 0 ? _record$slug : '') : String(record.id));
      },
      __unstablePrePersist: isTemplate ? undefined : prePersistPostType,
      __unstable_rest_base: postType.rest_base
    };
  });
}
/**
 * Returns the list of the taxonomies entities.
 *
 * @return {Promise} Entities promise
 */


async function loadTaxonomyEntities() {
  const taxonomies = await external_wp_apiFetch_default()({
    path: '/wp/v2/taxonomies?context=edit'
  });
  return Object.entries(taxonomies !== null && taxonomies !== void 0 ? taxonomies : {}).map(([name, taxonomy]) => {
    var _taxonomy$rest_namesp;

    const namespace = (_taxonomy$rest_namesp = taxonomy?.rest_namespace) !== null && _taxonomy$rest_namesp !== void 0 ? _taxonomy$rest_namesp : 'wp/v2';
    return {
      kind: 'taxonomy',
      baseURL: `/${namespace}/${taxonomy.rest_base}`,
      baseURLParams: {
        context: 'edit'
      },
      name,
      label: taxonomy.labels.singular_name
    };
  });
}
/**
 * Returns the entity's getter method name given its kind and name.
 *
 * @param {string}  kind      Entity kind.
 * @param {string}  name      Entity name.
 * @param {string}  prefix    Function prefix.
 * @param {boolean} usePlural Whether to use the plural form or not.
 *
 * @return {string} Method name
 */


const getMethodName = (kind, name, prefix = 'get', usePlural = false) => {
  const entityConfig = rootEntitiesConfig.find(config => config.kind === kind && config.name === name);
  const kindPrefix = kind === 'root' ? '' : pascalCase(kind);
  const nameSuffix = pascalCase(name) + (usePlural ? 's' : '');
  const suffix = usePlural && 'plural' in entityConfig && entityConfig?.plural ? pascalCase(entityConfig.plural) : nameSuffix;
  return `${prefix}${kindPrefix}${suffix}`;
};
/**
 * Loads the kind entities into the store.
 *
 * @param {string} kind Kind
 *
 * @return {Array} Entities
 */

const getOrLoadEntitiesConfig = kind => async ({
  select,
  dispatch
}) => {
  let configs = select.getEntitiesConfig(kind);

  if (entities && entities.length !== 0) {
    return entities;
  }

  const loader = additionalEntityConfigLoaders.find(l => l.kind === kind);

  if (!kindConfig) {
    return [];
  }

  entities = await kindConfig.loadEntities();
  dispatch(addEntities(entities));
  return entities;
};

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/get-normalized-comma-separable.js
/**
 * Given a value which can be specified as one or the other of a comma-separated
 * string or an array, returns a value normalized to an array of strings, or
 * null if the value cannot be interpreted as either.
 *
 * @param {string|string[]|*} value
 *
 * @return {?(string[])} Normalized field value.
 */
function getNormalizedCommaSeparable(value) {
  if (typeof value === 'string') {
    return value.split(',');
  } else if (Array.isArray(value)) {
    return value;
  }

  return null;
}

/* harmony default export */ var get_normalized_comma_separable = (getNormalizedCommaSeparable);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/with-weak-map-cache.js
/**
 * External dependencies
 */

/**
 * Given a function, returns an enhanced function which caches the result and
 * tracks in WeakMap. The result is only cached if the original function is
 * passed a valid object-like argument (requirement for WeakMap key).
 *
 * @param {Function} fn Original function.
 *
 * @return {Function} Enhanced caching function.
 */

function withWeakMapCache(fn) {
  const cache = new WeakMap();
  return key => {
    let value;

    if (cache.has(key)) {
      value = cache.get(key);
    } else {
      value = fn(key); // Can reach here if key is not valid for WeakMap, since `has`
      // will return false for invalid key. Since `set` will throw,
      // ensure that key is valid before setting into cache.

      if (Object(external_lodash_["isObjectLike"])(key)) {
        cache.set(key, value);
      }
    }

    return value;
  };
}

/* harmony default export */ var with_weak_map_cache = (withWeakMapCache);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/get-query-parts.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * An object of properties describing a specific query.
 *
 * @typedef {Object} WPQueriedDataQueryParts
 *
 * @property {number}      page      The query page (1-based index, default 1).
 * @property {number}      perPage   Items per page for query (default 10).
 * @property {string}      stableKey An encoded stable string of all non-
 *                                   pagination, non-fields query parameters.
 * @property {?(string[])} fields    Target subset of fields to derive from
 *                                   item objects.
 * @property {?(number[])} include   Specific item IDs to include.
 * @property {string}      context   Scope under which the request is made;
 *                                   determines returned fields in response.
 */

/**
 * Given a query object, returns an object of parts, including pagination
 * details (`page` and `perPage`, or default values). All other properties are
 * encoded into a stable (idempotent) `stableKey` value.
 *
 * @param {Object} query Optional query object.
 *
 * @return {WPQueriedDataQueryParts} Query parts.
 */

function getQueryParts(query) {
  /**
   * @type {WPQueriedDataQueryParts}
   */
  const parts = {
    stableKey: '',
    page: 1,
    perPage: 10,
    fields: null,
    include: null,
    context: 'default'
  }; // Ensure stable key by sorting keys. Also more efficient for iterating.

  const keys = Object.keys(query).sort();

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value = query[key];

    switch (key) {
      case 'page':
        parts[key] = Number(value);
        break;

      case 'per_page':
        parts.perPage = Number(value);
        break;

      case 'context':
        parts.context = value;
        break;

      default:
        // While in theory, we could exclude "_fields" from the stableKey
        // because two request with different fields have the same results
        // We're not able to ensure that because the server can decide to omit
        // fields from the response even if we explicitely asked for it.
        // Example: Asking for titles in posts without title support.
        if (key === '_fields') {
          parts.fields = get_normalized_comma_separable(value); // Make sure to normalize value for `stableKey`

          value = parts.fields.join();
        } // Two requests with different include values cannot have same results.


        if (key === 'include') {
          parts.include = get_normalized_comma_separable(value).map(Number); // Normalize value for `stableKey`.

          value = parts.include.join();
        } // While it could be any deterministic string, for simplicity's
        // sake mimic querystring encoding for stable key.
        //
        // TODO: For consistency with PHP implementation, addQueryArgs
        // should accept a key value pair, which may optimize its
        // implementation for our use here, vs. iterating an object
        // with only a single key.


        parts.stableKey += (parts.stableKey ? '&' : '') + Object(external_wp_url_["addQueryArgs"])('', {
          [key]: value
        }).slice(1);
    }
  }

  return parts;
}
/* harmony default export */ var get_query_parts = (with_weak_map_cache(getQueryParts));

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/reducer.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function getContextFromAction(action) {
  const {
    query
  } = action;

  if (!query) {
    return 'default';
  }

  const queryParts = get_query_parts(query);
  return queryParts.context;
}
/**
 * Returns a merged array of item IDs, given details of the received paginated
 * items. The array is sparse-like with `undefined` entries where holes exist.
 *
 * @param {?Array<number>} itemIds     Original item IDs (default empty array).
 * @param {number[]}       nextItemIds Item IDs to merge.
 * @param {number}         page        Page of items merged.
 * @param {number}         perPage     Number of items per page.
 *
 * @return {number[]} Merged array of item IDs.
 */


function getMergedItemIds(itemIds, nextItemIds, page, perPage) {
  const receivedAllIds = page === 1 && perPage === -1;

  if (receivedAllIds) {
    return nextItemIds;
  }

  const nextItemIdsStartIndex = (page - 1) * perPage; // If later page has already been received, default to the larger known
  // size of the existing array, else calculate as extending the existing.

  const size = Math.max((_itemIds$length = itemIds?.length) !== null && _itemIds$length !== void 0 ? _itemIds$length : 0, nextItemIdsStartIndex + nextItemIds.length); // Preallocate array since size is known.

  const mergedItemIds = new Array(size);

  for (let i = 0; i < size; i++) {
    // Preserve existing item ID except for subset of range of next items.
    const isInNextItemsRange = i >= nextItemIdsStartIndex && i < nextItemIdsStartIndex + nextItemIds.length;
    mergedItemIds[i] = isInNextItemsRange ? nextItemIds[i - nextItemIdsStartIndex] : itemIds?.[i];
  }

  return mergedItemIds;
}
/**
 * Helper function to filter out entities with certain IDs.
 * Entities are keyed by their ID.
 *
 * @param {Object} entities Entity objects, keyed by entity ID.
 * @param {Array}  ids      Entity IDs to filter out.
 *
 * @return {Object} Filtered entities.
 */

function removeEntitiesById(entities, ids) {
  return Object.fromEntries(Object.entries(entities).filter(([id]) => !ids.some(itemId => {
    if (Number.isInteger(itemId)) {
      return itemId === +id;
    }

    return itemId === id;
  })));
}
/**
 * Reducer tracking items state, keyed by ID. Items are assumed to be normal,
 * where identifiers are common across all queries.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */


function items(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      {
        const context = getContextFromAction(action);
        const key = action.key || DEFAULT_ENTITY_KEY;
        return { ...state,
          [context]: { ...state[context],
            ...action.items.reduce((accumulator, value) => {
              const itemId = value[key];
              accumulator[itemId] = conservativeMapItem(state?.[context]?.[itemId], value);
              return accumulator;
            }, {})
          }
        };
      }

    case 'REMOVE_ITEMS':
      return Object.fromEntries(Object.entries(state).map(([itemId, contextState]) => [itemId, removeEntitiesById(contextState, action.itemIds)]));
  }

  return state;
}
/**
 * Reducer tracking item completeness, keyed by ID. A complete item is one for
 * which all fields are known. This is used in supporting `_fields` queries,
 * where not all properties associated with an entity are necessarily returned.
 * In such cases, completeness is used as an indication of whether it would be
 * safe to use queried data for a non-`_fields`-limited request.
 *
 * @param {Object<string,boolean>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Object<string,boolean>} Next state.
 */

function itemIsComplete(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      {
        const context = getContextFromAction(action);
        const {
          query,
          key = DEFAULT_ENTITY_KEY
        } = action; // An item is considered complete if it is received without an associated
        // fields query. Ideally, this would be implemented in such a way where the
        // complete aggregate of all fields would satisfy completeness. Since the
        // fields are not consistent across all entity types, this would require
        // introspection on the REST schema for each entity to know which fields
        // compose a complete item for that entity.

        const queryParts = query ? get_query_parts(query) : {};
        const isCompleteQuery = !query || !Array.isArray(queryParts.fields);
        return { ...state,
          [context]: { ...state[context],
            ...action.items.reduce((result, item) => {
              const itemId = item[key]; // Defer to completeness if already assigned. Technically the
              // data may be outdated if receiving items for a field subset.

              result[itemId] = state?.[context]?.[itemId] || isCompleteQuery;
              return result;
            }, {})
          }
        };
      }

    case 'REMOVE_ITEMS':
      return Object.fromEntries(Object.entries(state).map(([itemId, contextState]) => [itemId, removeEntitiesById(contextState, action.itemIds)]));
  }

  return state;
}
/**
 * Reducer tracking queries state, keyed by stable query key. Each reducer
 * query object includes `itemIds` and `requestingPageByPerPage`.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

const receiveQueries = (0,external_wp_compose_namespaceObject.compose)([// Limit to matching action type so we don't attempt to replace action on
// an unhandled action.
if_matching_action(action => 'query' in action), // Inject query parts into action for use both in `onSubKey` and reducer.
replace_action(action => {
  // `ifMatchingAction` still passes on initialization, where state is
  // undefined and a query is not assigned. Avoid attempting to parse
  // parts. `onSubKey` will omit by lack of `stableKey`.
  if (action.query) {
    return { ...action,
      ...get_query_parts(action.query)
    };
  }

  return action;
}), on_sub_key('context'), // Queries shape is shared, but keyed by query `stableKey` part. Original
// reducer tracks only a single query object.
on_sub_key('stableKey')])((state = null, action) => {
  const {
    type,
    page,
    perPage,
    key = DEFAULT_ENTITY_KEY
  } = action;

  if (type !== 'RECEIVE_ITEMS') {
    return state;
  }

  return getMergedItemIds(state || [], action.items.map(item => item[key]), page, perPage);
});
/**
 * Reducer tracking queries state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Next state.
 */

const queries = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      return receiveQueries(state, action);

    case 'REMOVE_ITEMS':
      const removedItems = action.itemIds.reduce((result, itemId) => {
        result[itemId] = true;
        return result;
      }, {});
      return Object.fromEntries(Object.entries(state).map(([queryGroup, contextQueries]) => [queryGroup, Object.fromEntries(Object.entries(contextQueries).map(([query, queryItems]) => [query, queryItems.filter(queryId => !removedItems[queryId])]))]));

    default:
      return state;
  }
};

/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  items: reducer_items,
  itemIsComplete,
  queries: reducer_queries
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




/**
 * Reducer managing terms state. Keyed by taxonomy slug, the value is either
 * undefined (if no request has been made for given taxonomy), null (if a
 * request is in-flight for given taxonomy), or the array of terms for the
 * taxonomy.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function terms(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_TERMS':
      return { ...state,
        [action.taxonomy]: action.terms
      };
  }

  return state;
}
/**
 * Reducer managing authors state. Keyed by id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function users(state = {
  byId: {},
  queries: {}
}, action) {
  switch (action.type) {
    case 'RECEIVE_USER_QUERY':
      return {
        byId: { ...state.byId,
          ...Object(external_lodash_["keyBy"])(action.users, 'id')
        },
        queries: { ...state.queries,
          [action.queryID]: action.users.map(user => user.id)
        }
      };
  }

  return state;
}
/**
 * Reducer managing current user state.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function currentUser(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_USER':
      return action.currentUser;
  }

  return state;
}
/**
 * Reducer managing taxonomies.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function taxonomies(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TAXONOMIES':
      return action.taxonomies;
  }

  return state;
}
/**
 * Reducer managing the current theme.
 *
 * @param {string} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {string} Updated state.
 */

function currentTheme(state = undefined, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_THEME':
      return action.currentTheme.stylesheet;
  }

  return state;
}
/**
 * Reducer managing the current global styles id.
 *
 * @param {string} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {string} Updated state.
 */

function currentGlobalStylesId(state = undefined, action) {
  switch (action.type) {
    case 'RECEIVE_CURRENT_GLOBAL_STYLES_ID':
      return action.id;
  }

  return state;
}
/**
 * Reducer managing the theme base global styles.
 *
 * @param {string} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {string} Updated state.
 */

function themeBaseGlobalStyles(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_THEME_GLOBAL_STYLES':
      return { ...state,
        [action.stylesheet]: action.globalStyles
      };
  }

  return state;
}
/**
 * Reducer managing the theme global styles variations.
 *
 * @param {Record<string, object>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Record<string, object>} Updated state.
 */

function themeGlobalStyleVariations(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_THEME_GLOBAL_STYLE_VARIATIONS':
      return { ...state,
        [action.stylesheet]: action.variations
      };
  }

  return state;
}

const withMultiEntityRecordEdits = reducer => (state, action) => {
  if (action.type === 'UNDO' || action.type === 'REDO') {
    const {
      stackedEdits
    } = action;
    let newState = state;
    stackedEdits.forEach(({
      kind,
      name,
      recordId,
      property,
      from,
      to
    }) => {
      newState = reducer(newState, {
        type: 'EDIT_ENTITY_RECORD',
        kind,
        name,
        recordId,
        edits: {
          [property]: action.type === 'UNDO' ? from : to
        }
      });
    });
    return newState;
  }

  return reducer(state, action);
};
/**
 * Higher Order Reducer for a given entity config. It supports:
 *
 *  - Fetching
 *  - Editing
 *  - Saving
 *
 * @param {Object} entityConfig Entity config.
 *
 * @return {Function} Reducer.
 */


function entity(entityConfig) {
  return (0,external_wp_compose_namespaceObject.compose)([withMultiEntityRecordEdits, // Limit to matching action type so we don't attempt to replace action on
  // an unhandled action.
  if_matching_action(action => action.name && action.kind && action.name === entityConfig.name && action.kind === entityConfig.kind), // Inject the entity config into the action.
  replace_action(action => {
    return { ...action,
      key: entityConfig.key || DEFAULT_ENTITY_KEY
    };
  })])(Object(external_wp_data_["combineReducers"])({
    queriedData: reducer,
    edits: (state = {}, action) => {
      var _action$query$context;

      switch (action.type) {
        case 'RECEIVE_ITEMS':
          const context = (_action$query$context = action?.query?.context) !== null && _action$query$context !== void 0 ? _action$query$context : 'default';

          if (context !== 'default') {
            return state;
          }

          const nextState = { ...state
          };

          for (const record of action.items) {
            const recordId = record[action.key];
            const edits = nextState[recordId];

            if (!edits) {
              continue;
            }

            const nextEdits = Object.keys(edits).reduce((acc, key) => {
              var _record$key$raw;

              // If the edited value is still different to the persisted value,
              // keep the edited value in edits.
              if ( // Edits are the "raw" attribute values, but records may have
              // objects with more properties, so we use `get` here for the
              // comparison.
              !es6_default()(edits[key], (_record$key$raw = record[key]?.raw) !== null && _record$key$raw !== void 0 ? _record$key$raw : record[key]) && ( // Sometimes the server alters the sent value which means
              // we need to also remove the edits before the api request.
              !action.persistedEdits || !es6_default()(edits[key], action.persistedEdits[key]))) {
                acc[key] = edits[key];
              }

              return acc;
            }, {});

            if (Object.keys(nextEdits).length) {
              nextState[recordId] = nextEdits;
            } else {
              delete nextState[recordId];
            }
          }

          return nextState;

        case 'EDIT_ENTITY_RECORD':
          const nextEdits = { ...state[action.recordId],
            ...action.edits
          };
          Object.keys(nextEdits).forEach(key => {
            // Delete cleared edits so that the properties
            // are not considered dirty.
            if (nextEdits[key] === undefined) {
              delete nextEdits[key];
            }
          });
          return { ...state,
            [action.recordId]: nextEdits
          };
      }

      return state;
    },
    saving: (state = {}, action) => {
      switch (action.type) {
        case 'SAVE_ENTITY_RECORD_START':
        case 'SAVE_ENTITY_RECORD_FINISH':
          return { ...state,
            [action.recordId]: {
              pending: action.type === 'SAVE_ENTITY_RECORD_START',
              error: action.error,
              isAutosave: action.isAutosave
            }
          };
      }

      return state;
    },
    deleting: (state = {}, action) => {
      switch (action.type) {
        case 'DELETE_ENTITY_RECORD_START':
        case 'DELETE_ENTITY_RECORD_FINISH':
          return { ...state,
            [action.recordId]: {
              pending: action.type === 'DELETE_ENTITY_RECORD_START',
              error: action.error
            }
          };
      }

      return state;
    }
  }));
}
/**
 * Reducer keeping track of the registered entities.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */


function entitiesConfig(state = rootEntitiesConfig, action) {
  switch (action.type) {
    case 'ADD_ENTITIES':
      return [...state, ...action.entities];
  }

  return state;
}
/**
 * Reducer keeping track of the registered entities config and data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const entities = (state = {}, action) => {
  const newConfig = entitiesConfig(state.config, action); // Generates a dynamic reducer for the entities.

  let entitiesDataReducer = state.reducer;

  if (!entitiesDataReducer || newConfig !== state.config) {
    const entitiesByKind = newConfig.reduce((acc, record) => {
      const {
        kind
      } = record;

      if (!acc[kind]) {
        acc[kind] = [];
      }

      acc[kind].push(record);
      return acc;
    }, {});
    entitiesDataReducer = (0,external_wp_data_namespaceObject.combineReducers)(Object.entries(entitiesByKind).reduce((memo, [kind, subEntities]) => {
      const kindReducer = (0,external_wp_data_namespaceObject.combineReducers)(subEntities.reduce((kindMemo, entityConfig) => ({ ...kindMemo,
        [entityConfig.name]: entity(entityConfig)
      }), {}));
      memo[kind] = kindReducer;
      return memo;
    }, {}));
  }

  const newData = entitiesDataReducer(state.data, action);

  if (newData === state.data && newConfig === state.config && entitiesDataReducer === state.reducer) {
    return state;
  }

  return {
    reducer: entitiesDataReducer,
    data: newData,
    config: newConfig
  };
};
/**
 * Reducer keeping track of entity edit undo history.
 *
 * @property {number} list   The undo stack.
 * @property {number} offset Where in the undo stack we are.
 * @property {Object} cache  Cache of unpersisted edits.
 */

/** @typedef {Array<Object> & UndoStateMeta} UndoState */

/**
 * @type {UndoState}
 *
 * @return {Object} Updated state.
 */

const UNDO_INITIAL_STATE = {
  list: [],
  offset: 0
};
/**
 * Reducer keeping track of entity edit undo history.
 *
 * @param {UndoState} state  Current state.
 * @param {Object}    action Dispatched action.
 *
 * @return {UndoState} Updated state.
 */

function reducer_undo(state = UNDO_INITIAL_STATE, action) {
  const omitPendingRedos = currentState => {
    return { ...currentState,
      list: currentState.list.slice(0, currentState.offset || undefined),
      offset: 0
    };
  };

  const appendCachedEditsToLastUndo = currentState => {
    if (!currentState.cache) {
      return currentState;
    }

    let nextState = { ...currentState,
      list: [...currentState.list]
    };
    nextState = omitPendingRedos(nextState);
    const previousUndoState = nextState.list.pop();
    const updatedUndoState = currentState.cache.reduce(appendEditToStack, previousUndoState);
    nextState.list.push(updatedUndoState);
    return { ...nextState,
      cache: undefined
    };
  };

  const appendEditToStack = (stack = [], {
    kind,
    name,
    recordId,
    property,
    from,
    to
  }) => {
    const existingEditIndex = stack?.findIndex(({
      kind: k,
      name: n,
      recordId: r,
      property: p
    }) => {
      return k === kind && n === name && r === recordId && p === property;
    });
    const nextStack = [...stack];

    if (existingEditIndex !== -1) {
      // If the edit is already in the stack leave the initial "from" value.
      nextStack[existingEditIndex] = { ...nextStack[existingEditIndex],
        to
      };
    } else {
      nextStack.push({
        kind,
        name,
        recordId,
        property,
        from,
        to
      });
    }

    return nextStack;
  };

  switch (action.type) {
    case 'CREATE_UNDO_LEVEL':
      return appendCachedEditsToLastUndo(state);

    case 'UNDO':
    case 'REDO':
      {
        const nextState = appendCachedEditsToLastUndo(state);
        return { ...nextState,
          offset: state.offset + (action.type === 'UNDO' ? -1 : 1)
        };
      }

    case 'EDIT_ENTITY_RECORD':
      {
        if (!action.meta.undo) {
          return state;
        }

        const edits = Object.keys(action.edits).map(key => {
          return {
            kind: action.kind,
            name: action.name,
            recordId: action.recordId,
            property: key,
            from: action.meta.undo.edits[key],
            to: action.edits[key]
          };
        });

        if (action.meta.undo.isCached) {
          return { ...state,
            cache: edits.reduce(appendEditToStack, state.cache)
          };
        }

        let nextState = omitPendingRedos(state);
        nextState = appendCachedEditsToLastUndo(nextState);
        nextState = { ...nextState,
          list: [...nextState.list]
        }; // When an edit is a function it's an optimization to avoid running some expensive operation.
        // We can't rely on the function references being the same so we opt out of comparing them here.

        const comparisonUndoEdits = Object.values(action.meta.undo.edits).filter(edit => typeof edit !== 'function');
        const comparisonEdits = Object.values(action.edits).filter(edit => typeof edit !== 'function');

        if (!external_wp_isShallowEqual_default()(comparisonUndoEdits, comparisonEdits)) {
          nextState.list.push(edits);
        }

        return nextState;
      }
  }

  return state;
}
/**
 * Reducer managing embed preview data.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function embedPreviews(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_EMBED_PREVIEW':
      const {
        url,
        preview
      } = action;
      return { ...state,
        [url]: preview
      };
  }

  return state;
}
/**
 * State which tracks whether the user can perform an action on a REST
 * resource.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function userPermissions(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_USER_PERMISSION':
      return { ...state,
        [action.key]: action.isAllowed
      };
  }

  return state;
}
/**
 * Reducer returning autosaves keyed by their parent's post id.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function autosaves(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_AUTOSAVES':
      const {
        postId,
        autosaves: autosavesData
      } = action;
      return { ...state,
        [postId]: autosavesData
      };
  }

  return state;
}
function blockPatterns(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_BLOCK_PATTERNS':
      return action.patterns;
  }

  return state;
}
function blockPatternCategories(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_BLOCK_PATTERN_CATEGORIES':
      return action.categories;
  }

  return state;
}
function navigationFallbackId(state = null, action) {
  switch (action.type) {
    case 'RECEIVE_NAVIGATION_FALLBACK_ID':
      return action.fallbackId;
  }

  return state;
}
/**
 * Reducer managing the theme global styles revisions.
 *
 * @param {Record<string, object>} state  Current state.
 * @param {Object}                 action Dispatched action.
 *
 * @return {Record<string, object>} Updated state.
 */

function themeGlobalStyleRevisions(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_THEME_GLOBAL_STYLE_REVISIONS':
      return { ...state,
        [action.currentId]: action.revisions
      };
  }

  return state;
}
/* harmony default export */ var build_module_reducer = ((0,external_wp_data_namespaceObject.combineReducers)({
  terms,
  users: reducer_users,
  currentTheme: reducer_currentTheme,
  currentGlobalStylesId,
  currentUser: reducer_currentUser,
  themeBaseGlobalStyles,
  themeGlobalStyleRevisions,
  taxonomies,
  entities,
  undo: reducer_undo,
  embedPreviews,
  userPermissions,
  autosaves,
  blockPatterns,
  blockPatternCategories,
  navigationFallbackId
}));

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__("pPDe");

// EXTERNAL MODULE: ./node_modules/equivalent-key-map/equivalent-key-map.js
var equivalent_key_map = __webpack_require__("FtRg");
var equivalent_key_map_default = /*#__PURE__*/__webpack_require__.n(equivalent_key_map);
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/set-nested-value.js
/**
 * Sets the value at path of object.
 * If a portion of path doesn’t exist, it’s created.
 * Arrays are created for missing index properties while objects are created
 * for all other missing properties.
 *
 * This function intentionally mutates the input object.
 *
 * Inspired by _.set().
 *
 * @see https://lodash.com/docs/4.17.15#set
 *
 * @param {Object} object Object to modify
 * @param {Array}  path   Path of the property to set.
 * @param {*}      value  Value to set.
 */
function setNestedValue(object, path, value) {
  if (!object || typeof object !== 'object') {
    return object;
  }

  path.reduce((acc, key, idx) => {
    if (acc[key] === undefined) {
      if (Number.isInteger(path[idx + 1])) {
        acc[key] = [];
      } else {
        acc[key] = {};
      }
    }

    if (idx === path.length - 1) {
      acc[key] = value;
    }

    return acc[key];
  }, object);
  return object;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/queried-data/selectors.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Cache of state keys to EquivalentKeyMap where the inner map tracks queries
 * to their resulting items set. WeakMap allows garbage collection on expired
 * state references.
 *
 * @type {WeakMap<Object,EquivalentKeyMap>}
 */

const queriedItemsCacheByState = new WeakMap();
/**
 * Returns items for a given query, or null if the items are not known.
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */

function getQueriedItemsUncached(state, query) {
  const {
    stableKey,
    page,
    perPage,
    include,
    fields,
    context
  } = get_query_parts(query);
  let itemIds;

  if (state.queries?.[context]?.[stableKey]) {
    itemIds = state.queries[context][stableKey];
  }

  if (!itemIds) {
    return null;
  }

  const startOffset = perPage === -1 ? 0 : (page - 1) * perPage;
  const endOffset = perPage === -1 ? itemIds.length : Math.min(startOffset + perPage, itemIds.length);
  const items = [];

  for (let i = startOffset; i < endOffset; i++) {
    const itemId = itemIds[i];

    if (Array.isArray(include) && !include.includes(itemId)) {
      continue;
    } // Having a target item ID doesn't guarantee that this object has been queried.


    if (!state.items[context]?.hasOwnProperty(itemId)) {
      return null;
    }

    const item = state.items[context][itemId];
    let filteredItem;

    if (Array.isArray(fields)) {
      filteredItem = {};

      for (let f = 0; f < fields.length; f++) {
        const field = fields[f].split('.');
        let value = item;
        field.forEach(fieldName => {
          value = value[fieldName];
        });
        setNestedValue(filteredItem, field, value);
      }
    } else {
      // If expecting a complete item, validate that completeness, or
      // otherwise abort.
      if (!state.itemIsComplete[context]?.[itemId]) {
        return null;
      }

      filteredItem = item;
    }

    items.push(filteredItem);
  }

  return items;
}
/**
 * Returns items for a given query, or null if the items are not known. Caches
 * result both per state (by reference) and per query (by deep equality).
 * The caching approach is intended to be durable to query objects which are
 * deeply but not referentially equal, since otherwise:
 *
 * `getQueriedItems( state, {} ) !== getQueriedItems( state, {} )`
 *
 * @param {Object}  state State object.
 * @param {?Object} query Optional query.
 *
 * @return {?Array} Query items.
 */


const getQueriedItems = rememo((state, query = {}) => {
  let queriedItemsCache = queriedItemsCacheByState.get(state);

  if (queriedItemsCache) {
    const queriedItems = queriedItemsCache.get(query);

    if (queriedItems !== undefined) {
      return queriedItems;
    }
  } else {
    queriedItemsCache = new equivalent_key_map_default.a();
    queriedItemsCacheByState.set(state, queriedItemsCache);
  }

  const items = getQueriedItemsUncached(state, query);
  queriedItemsCache.set(query, items);
  return items;
});

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/is-raw-attribute.js
/**
 * Checks whether the attribute is a "raw" attribute or not.
 *
 * @param {Object} entity    Entity data.
 * @param {string} attribute Attribute name.
 *
 * @return {boolean} Is the attribute raw
 */
function isRawAttribute(entity, attribute) {
  return (entity.rawAttributes || []).includes(attribute);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/selectors.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





 // This is an incomplete, high-level approximation of the State type.
// It makes the selectors slightly more safe, but is intended to evolve
// into a more detailed representation over time.
// See https://github.com/WordPress/gutenberg/pull/40025#discussion_r865410589 for more context.

/**
 * Shared reference to an empty object for cases where it is important to avoid
 * returning a new object reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 */

const EMPTY_OBJECT = {};
/**
 * Shared reference to an empty array for cases where it is important to avoid
 * returning a new array reference on every invocation, as in a connected or
 * other pure component which performs `shouldComponentUpdate` check on props.
 * This should be used as a last resort, since the normalized data should be
 * maintained by the reducer result in state.
 *
 * @type {Array}
 */

const EMPTY_ARRAY = [];
/**
 * Returns true if a request is in progress for embed preview data, or false
 * otherwise.
 *
 * @param state Data state.
 * @param url   URL the preview would be for.
 *
 * @return {boolean} Whether a request is in progress for an embed preview.
 */

const isRequestingEmbedPreview = Object(external_wp_data_["createRegistrySelector"])(select => (state, url) => {
  return select(STORE_NAME).isResolving('getEmbedPreview', [url]);
});
/**
 * Returns all available authors.
 *
 * @deprecated since 11.3. Callers should use `select( 'core' ).getUsers({ who: 'authors' })` instead.
 *
 * @param      state Data state.
 * @param      query Optional object of query parameters to
 *                   include with request. For valid query parameters see the [Users page](https://developer.wordpress.org/rest-api/reference/users/) in the REST API Handbook and see the arguments for [List Users](https://developer.wordpress.org/rest-api/reference/users/#list-users) and [Retrieve a User](https://developer.wordpress.org/rest-api/reference/users/#retrieve-a-user).
 * @return Authors list.
 */

function getAuthors(state, query) {
  external_wp_deprecated_default()("select( 'core' ).getAuthors()", {
    since: '5.9',
    alternative: "select( 'core' ).getUsers({ who: 'authors' })"
  });
  const path = Object(external_wp_url_["addQueryArgs"])('/wp/v2/users/?who=authors&per_page=100', query);
  return getUserQueryResults(state, path);
}
/**
 * Returns the current user.
 *
 * @param state Data state.
 *
 * @return {Object} Current user object.
 */

function getCurrentUser(state) {
  return state.currentUser;
}
/**
 * Returns all the users returned by a query ID.
 *
 * @param state   Data state.
 * @param queryID Query ID.
 *
 * @return {Array} Users list.
 */

const getUserQueryResults = rememo((state, queryID) => {
  var _state$users$queries$;

  const queryResults = (_state$users$queries$ = state.users.queries[queryID]) !== null && _state$users$queries$ !== void 0 ? _state$users$queries$ : [];
  return queryResults.map(id => state.users.byId[id]);
}, (state, queryID) => [state.users.queries[queryID], state.users.byId]);
/**
 * Returns whether the entities for the give kind are loaded.
 *
 * @deprecated since WordPress 6.0. Use getEntitiesConfig instead
 * @param      state Data state.
 * @param      kind  Entity kind.
 *
 * @return {Array<Object>} Array of entities with config matching kind.
 */

function getEntitiesByKind(state, kind) {
  external_wp_deprecated_default()("wp.data.select( 'core' ).getEntitiesByKind()", {
    since: '6.0',
    alternative: "wp.data.select( 'core' ).getEntitiesConfig()"
  });
  return getEntitiesConfig(state, kind);
}
/**
 * Returns the loaded entities for the given kind.
 *
 * @param state Data state.
 * @param kind  Entity kind.
 *
 * @return Array of entities with config matching kind.
 */

function getEntitiesConfig(state, kind) {
  return state.entities.config.filter(entity => entity.kind === kind);
}
/**
 * Returns the entity object given its kind and name.
 *
 * @deprecated since WordPress 6.0. Use getEntityConfig instead
 * @param      state Data state.
 * @param      kind  Entity kind.
 * @param      name  Entity name.
 *
 * @return {Object} Entity
 */

function getEntity(state, kind, name) {
  external_wp_deprecated_default()("wp.data.select( 'core' ).getEntity()", {
    since: '6.0',
    alternative: "wp.data.select( 'core' ).getEntityConfig()"
  });
  return getEntityConfig(state, kind, name);
}
/**
 * Returns the entity config given its kind and name.
 *
 * @param state Data state.
 * @param kind  Entity kind.
 * @param name  Entity name.
 *
 * @return Entity config
 */

function getEntityConfig(state, kind, name) {
  return state.entities.config?.find(config => config.kind === kind && config.name === name);
}
/**
 * Returns the Entity's record object by key. Returns `null` if the value is not
 * yet received, undefined if the value entity is known to not exist, or the
 * entity object if it exists and is received.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param key   Record's key
 * @param query Optional query. If requesting specific
 *              fields, fields must always include the ID. For valid query parameters see the [Reference](https://developer.wordpress.org/rest-api/reference/) in the REST API Handbook and select the entity kind. Then see the arguments available "Retrieve a [Entity kind]".
 *
 * @return {Object?} Record.
 */
const getEntityRecord = rememo((state, kind, name, key, query) => {
  var _query$context;

  const queriedState = state.entities.records?.[kind]?.[name]?.queriedData;

  if (!queriedState) {
    return undefined;
  }

  const context = (_query$context = query?.context) !== null && _query$context !== void 0 ? _query$context : 'default';

  if (query === undefined) {
    // If expecting a complete item, validate that completeness.
    if (!queriedState.itemIsComplete[context]?.[key]) {
      return undefined;
    }

    return queriedState.items[context][key];
  }

  const item = queriedState.items[context]?.[key];

  if (item && query._fields) {
    const filteredItem = {};
    const fields = get_normalized_comma_separable(query._fields);

    for (let f = 0; f < fields.length; f++) {
      const field = fields[f].split('.');
      let value = item;
      field.forEach(fieldName => {
        value = value[fieldName];
      });
      setNestedValue(filteredItem, field, value);
    }

    return filteredItem;
  }

  return item;
}, (state, kind, name, recordId, query) => {
  var _query$context2;

  const context = (_query$context2 = query?.context) !== null && _query$context2 !== void 0 ? _query$context2 : 'default';
  return [state.entities.records?.[kind]?.[name]?.queriedData?.items[context]?.[recordId], state.entities.records?.[kind]?.[name]?.queriedData?.itemIsComplete[context]?.[recordId]];
});
/**
 * Returns the Entity's record object by key. Doesn't trigger a resolver nor requests the entity from the API if the entity record isn't available in the local state.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param key   Record's key
 *
 * @return {Object|null} Record.
 */

function __experimentalGetEntityRecordNoResolver(state, kind, name, key) {
  return selectors_getEntityRecord(state, kind, name, key);
}
/**
 * Returns the entity's record object by key,
 * with its attributes mapped to their raw values.
 *
 * @param state State tree.
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param key   Record's key.
 *
 * @return {Object?} Object with the entity's raw attributes.
 */

const getRawEntityRecord = Object(rememo["a" /* default */])((state, kind, name, key) => {
  const record = selectors_getEntityRecord(state, kind, name, key);
  return record && Object.keys(record).reduce((accumulator, _key) => {
    if (isRawAttribute(getEntityConfig(state, kind, name), _key)) {
      var _record$_key$raw;

      // Because edits are the "raw" attribute values,
      // we return those from record selectors to make rendering,
      // comparisons, and joins with edits easier.
      accumulator[_key] = (_record$_key$raw = record[_key]?.raw) !== null && _record$_key$raw !== void 0 ? _record$_key$raw : record[_key];
    } else {
      accumulator[_key] = record[_key];
    }

    return accumulator;
  }, {});
}, (state, kind, name, recordId, query) => {
  var _query$context3;

  const context = (_query$context3 = query?.context) !== null && _query$context3 !== void 0 ? _query$context3 : 'default';
  return [state.entities.config, state.entities.records?.[kind]?.[name]?.queriedData?.items[context]?.[recordId], state.entities.records?.[kind]?.[name]?.queriedData?.itemIsComplete[context]?.[recordId]];
});
/**
 * Returns true if records have been received for the given set of parameters,
 * or false otherwise.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param query Optional terms query. For valid query parameters see the [Reference](https://developer.wordpress.org/rest-api/reference/) in the REST API Handbook and select the entity kind. Then see the arguments available for "List [Entity kind]s".
 *
 * @return {boolean} Whether entity records have been received.
 */

function hasEntityRecords(state, kind, name, query) {
  return Array.isArray(getEntityRecords(state, kind, name, query));
}
/**
 * Returns the Entity's records.
 *
 * @param state State tree
 * @param kind  Entity kind.
 * @param name  Entity name.
 * @param query Optional terms query. If requesting specific
 *              fields, fields must always include the ID. For valid query parameters see the [Reference](https://developer.wordpress.org/rest-api/reference/) in the REST API Handbook and select the entity kind. Then see the arguments available for "List [Entity kind]s".
 *
 * @return {?Array} Records.
 */

function getEntityRecords(state, kind, name, query) {
  // Queried data state is prepopulated for all known entities. If this is not
  // assigned for the given parameters, then it is known to not exist.
  const queriedState = state.entities.records?.[kind]?.[name]?.queriedData;

  if (!queriedState) {
    return EMPTY_ARRAY;
  }

  return getQueriedItems(queriedState, query);
}
/**
 * Returns the  list of dirty entity records.
 *
 * @param state State tree.
 *
 * @return {[{ title: string, key: string, name: string, kind: string }]} The list of updated records
 */

const __experimentalGetDirtyEntityRecords = Object(rememo["a" /* default */])(state => {
  const {
    entities: {
      data
    }
  } = state;
  const dirtyRecords = [];
  Object.keys(data).forEach(kind => {
    Object.keys(data[kind]).forEach(name => {
      const primaryKeys = Object.keys(data[kind][name].edits).filter(primaryKey => // The entity record must exist (not be deleted),
      // and it must have edits.
      selectors_getEntityRecord(state, kind, name, primaryKey) && hasEditsForEntityRecord(state, kind, name, primaryKey));

      if (primaryKeys.length) {
        const entity = getEntity(state, kind, name);
        primaryKeys.forEach(primaryKey => {
          const entityRecord = getEditedEntityRecord(state, kind, name, primaryKey);
          dirtyRecords.push({
            // We avoid using primaryKey because it's transformed into a string
            // when it's used as an object key.
            key: entityRecord ? entityRecord[entityConfig.key || DEFAULT_ENTITY_KEY] : undefined,
            title: entityConfig?.getTitle?.(entityRecord) || '',
            name,
            kind
          });
        });
      }
    });
  });
  return dirtyRecords;
}, state => [state.entities.data]);
/**
 * Returns the list of entities currently being saved.
 *
 * @param state State tree.
 *
 * @return {[{ title: string, key: string, name: string, kind: string }]} The list of records being saved.
 */

const __experimentalGetEntitiesBeingSaved = Object(rememo["a" /* default */])(state => {
  const {
    entities: {
      data
    }
  } = state;
  const recordsBeingSaved = [];
  Object.keys(data).forEach(kind => {
    Object.keys(data[kind]).forEach(name => {
      const primaryKeys = Object.keys(data[kind][name].saving).filter(primaryKey => isSavingEntityRecord(state, kind, name, primaryKey));

      if (primaryKeys.length) {
        const entity = getEntity(state, kind, name);
        primaryKeys.forEach(primaryKey => {
          const entityRecord = getEditedEntityRecord(state, kind, name, primaryKey);
          recordsBeingSaved.push({
            // We avoid using primaryKey because it's transformed into a string
            // when it's used as an object key.
            key: entityRecord ? entityRecord[entityConfig.key || DEFAULT_ENTITY_KEY] : undefined,
            title: entityConfig?.getTitle?.(entityRecord) || '',
            name,
            kind
          });
        });
      }
    });
  });
  return recordsBeingSaved;
}, state => [state.entities.data]);
/**
 * Returns the specified entity record's edits.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {Object?} The entity record's edits.
 */

function getEntityRecordEdits(state, kind, name, recordId) {
  return state.entities.records?.[kind]?.[name]?.edits?.[recordId];
}
/**
 * Returns the specified entity record's non transient edits.
 *
 * Transient edits don't create an undo level, and
 * are not considered for change detection.
 * They are defined in the entity's config.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {Object?} The entity record's non transient edits.
 */

const getEntityRecordNonTransientEdits = Object(rememo["a" /* default */])((state, kind, name, recordId) => {
  const {
    transientEdits
  } = getEntity(state, kind, name) || {};
  const edits = getEntityRecordEdits(state, kind, name, recordId) || {};

  if (!transientEdits) {
    return edits;
  }

  return Object.keys(edits).reduce((acc, key) => {
    if (!transientEdits[key]) {
      acc[key] = edits[key];
    }

    return acc;
  }, {});
}, (state, kind, name, recordId) => [state.entities.config, state.entities.records?.[kind]?.[name]?.edits?.[recordId]]);
/**
 * Returns true if the specified entity record has edits,
 * and false otherwise.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {boolean} Whether the entity record has edits or not.
 */

function hasEditsForEntityRecord(state, kind, name, recordId) {
  return isSavingEntityRecord(state, kind, name, recordId) || Object.keys(getEntityRecordNonTransientEdits(state, kind, name, recordId)).length > 0;
}
/**
 * Returns the specified entity record, merged with its edits.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {Object?} The entity record, merged with its edits.
 */

const selectors_getEditedEntityRecord = Object(rememo["a" /* default */])((state, kind, name, recordId) => ({ ...getRawEntityRecord(state, kind, name, recordId),
  ...getEntityRecordEdits(state, kind, name, recordId)
}), (state, kind, name, recordId, query) => {
  var _query$context4;

  const context = (_query$context4 = query?.context) !== null && _query$context4 !== void 0 ? _query$context4 : 'default';
  return [state.entities.config, state.entities.records?.[kind]?.[name]?.queriedData.items[context]?.[recordId], state.entities.records?.[kind]?.[name]?.queriedData.itemIsComplete[context]?.[recordId], state.entities.records?.[kind]?.[name]?.edits?.[recordId]];
});
/**
 * Returns true if the specified entity record is autosaving, and false otherwise.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {boolean} Whether the entity record is autosaving or not.
 */

function isAutosavingEntityRecord(state, kind, name, recordId) {
  var _state$entities$recor;

  const {
    pending,
    isAutosave
  } = (_state$entities$recor = state.entities.records?.[kind]?.[name]?.saving?.[recordId]) !== null && _state$entities$recor !== void 0 ? _state$entities$recor : {};
  return Boolean(pending && isAutosave);
}
/**
 * Returns true if the specified entity record is saving, and false otherwise.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {boolean} Whether the entity record is saving or not.
 */

function isSavingEntityRecord(state, kind, name, recordId) {
  var _state$entities$recor2;

  return (_state$entities$recor2 = state.entities.records?.[kind]?.[name]?.saving?.[recordId]?.pending) !== null && _state$entities$recor2 !== void 0 ? _state$entities$recor2 : false;
}
/**
 * Returns true if the specified entity record is deleting, and false otherwise.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {boolean} Whether the entity record is deleting or not.
 */

function isDeletingEntityRecord(state, kind, name, recordId) {
  var _state$entities$recor3;

  return (_state$entities$recor3 = state.entities.records?.[kind]?.[name]?.deleting?.[recordId]?.pending) !== null && _state$entities$recor3 !== void 0 ? _state$entities$recor3 : false;
}
/**
 * Returns the specified entity record's last save error.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntitySaveError(state, kind, name, recordId) {
  return state.entities.records?.[kind]?.[name]?.saving?.[recordId]?.error;
}
/**
 * Returns the specified entity record's last delete error.
 *
 * @param state    State tree.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record ID.
 *
 * @return {Object?} The entity record's save error.
 */

function getLastEntityDeleteError(state, kind, name, recordId) {
  return state.entities.records?.[kind]?.[name]?.deleting?.[recordId]?.error;
}
/**
 * Returns the current undo offset for the
 * entity records edits history. The offset
 * represents how many items from the end
 * of the history stack we are at. 0 is the
 * last edit, -1 is the second last, and so on.
 *
 * @param state State tree.
 *
 * @return {number} The current undo offset.
 */

function getCurrentUndoOffset(state) {
  return state.undo.offset;
}
/**
 * Returns the previous edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @deprecated since 6.3
 *
 * @param      state State tree.
 *
 * @return {Object?} The edit.
 */


function getUndoEdit(state) {
  external_wp_deprecated_default()("select( 'core' ).getUndoEdit()", {
    since: '6.3'
  });
  return state.undo.list[state.undo.list.length - 2 + getCurrentUndoOffset(state)]?.[0];
}
/**
 * Returns the next edit from the current undo offset
 * for the entity records edits history, if any.
 *
 * @deprecated since 6.3
 *
 * @param      state State tree.
 *
 * @return {Object?} The edit.
 */

function getRedoEdit(state) {
  external_wp_deprecated_default()("select( 'core' ).getRedoEdit()", {
    since: '6.3'
  });
  return state.undo.list[state.undo.list.length + getCurrentUndoOffset(state)]?.[0];
}
/**
 * Returns true if there is a previous edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param state State tree.
 *
 * @return {boolean} Whether there is a previous edit or not.
 */

function hasUndo(state) {
  return Boolean(getUndoEdits(state));
}
/**
 * Returns true if there is a next edit from the current undo offset
 * for the entity records edits history, and false otherwise.
 *
 * @param state State tree.
 *
 * @return {boolean} Whether there is a next edit or not.
 */

function hasRedo(state) {
  return Boolean(getRedoEdits(state));
}
/**
 * Return the current theme.
 *
 * @param state Data state.
 *
 * @return {Object} The current theme.
 */

function getCurrentTheme(state) {
  return selectors_getEntityRecord(state, 'root', 'theme', state.currentTheme);
}
/**
 * Return the ID of the current global styles object.
 *
 * @param state Data state.
 *
 * @return {string} The current global styles ID.
 */

function __experimentalGetCurrentGlobalStylesId(state) {
  return state.currentGlobalStylesId;
}
/**
 * Return theme supports data in the index.
 *
 * @param state Data state.
 *
 * @return {*} Index data.
 */

function getThemeSupports(state) {
  var _getCurrentTheme$them;

  return (_getCurrentTheme$them = getCurrentTheme(state)?.theme_supports) !== null && _getCurrentTheme$them !== void 0 ? _getCurrentTheme$them : EMPTY_OBJECT;
}
/**
 * Returns the embed preview for the given URL.
 *
 * @param state Data state.
 * @param url   Embedded URL.
 *
 * @return {*} Undefined if the preview has not been fetched, otherwise, the preview fetched from the embed preview API.
 */

function getEmbedPreview(state, url) {
  return state.embedPreviews[url];
}
/**
 * Determines if the returned preview is an oEmbed link fallback.
 *
 * WordPress can be configured to return a simple link to a URL if it is not embeddable.
 * We need to be able to determine if a URL is embeddable or not, based on what we
 * get back from the oEmbed preview API.
 *
 * @param state Data state.
 * @param url   Embedded URL.
 *
 * @return {boolean} Is the preview for the URL an oEmbed link fallback.
 */

function isPreviewEmbedFallback(state, url) {
  const preview = state.embedPreviews[url];
  const oEmbedLinkCheck = '<a href="' + url + '">' + url + '</a>';

  if (!preview) {
    return false;
  }

  return preview.html === oEmbedLinkCheck;
}
/**
 * Returns whether the current user can perform the given action on the given
 * REST resource.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param state    Data state.
 * @param action   Action to check. One of: 'create', 'read', 'update', 'delete'.
 * @param resource REST resource to check, e.g. 'media' or 'posts'.
 * @param id       Optional ID of the rest resource to check.
 *
 * @return {boolean|undefined} Whether or not the user can perform the action,
 *                             or `undefined` if the OPTIONS request is still being made.
 */

function canUser(state, action, resource, id) {
  const key = [action, resource, id].filter(Boolean).join('/');
  return state.userPermissions[key];
}
/**
 * Returns whether the current user can edit the given entity.
 *
 * Calling this may trigger an OPTIONS request to the REST API via the
 * `canUser()` resolver.
 *
 * https://developer.wordpress.org/rest-api/reference/
 *
 * @param state    Data state.
 * @param kind     Entity kind.
 * @param name     Entity name.
 * @param recordId Record's id.
 * @return Whether or not the user can edit,
 * or `undefined` if the OPTIONS request is still being made.
 */

function canUserEditEntityRecord(state, kind, name, recordId) {
  const entity = getEntity(state, kind, name);

  if (!entity) {
    return false;
  }

  const resource = entity.__unstable_rest_base;
  return canUser(state, 'update', resource, recordId);
}
/**
 * Returns the latest autosaves for the post.
 *
 * May return multiple autosaves since the backend stores one autosave per
 * author for each post.
 *
 * @param state    State tree.
 * @param postType The type of the parent post.
 * @param postId   The id of the parent post.
 *
 * @return {?Array} An array of autosaves for the post, or undefined if there is none.
 */

function getAutosaves(state, postType, postId) {
  return state.autosaves[postId];
}
/**
 * Returns the autosave for the post and author.
 *
 * @param state    State tree.
 * @param postType The type of the parent post.
 * @param postId   The id of the parent post.
 * @param authorId The id of the author.
 *
 * @return {?Object} The autosave for the post and author.
 */

function getAutosave(state, postType, postId, authorId) {
  if (authorId === undefined) {
    return;
  }

  const autosaves = state.autosaves[postId];
  return autosaves?.find(autosave => autosave.author === authorId);
}
/**
 * Returns true if the REST request for autosaves has completed.
 *
 * @param state    State tree.
 * @param postType The type of the parent post.
 * @param postId   The id of the parent post.
 *
 * @return {boolean} True if the REST request was completed. False otherwise.
 */

const hasFetchedAutosaves = Object(external_wp_data_["createRegistrySelector"])(select => (state, postType, postId) => {
  return select(STORE_NAME).hasFinishedResolution('getAutosaves', [postType, postId]);
});
/**
 * Returns a new reference when edited values have changed. This is useful in
 * inferring where an edit has been made between states by comparison of the
 * return values using strict equality.
 *
 * @example
 *
 * ```
 * const hasEditOccurred = (
 *    getReferenceByDistinctEdits( beforeState ) !==
 *    getReferenceByDistinctEdits( afterState )
 * );
 * ```
 *
 * @param state Editor state.
 *
 * @return {*} A value whose reference will change only when an edit occurs.
 */

const getReferenceByDistinctEdits = rememo( // This unused state argument is listed here for the documentation generating tool (docgen).
state => [], state => [state.undo.list.length, state.undo.offset]);
/**
 * Retrieve the frontend template used for a given link.
 *
 * @param state Editor state.
 * @param link  Link.
 *
 * @return {Object?} The template record.
 */

function __experimentalGetTemplateForLink(state, link) {
  const records = getEntityRecords(state, 'postType', 'wp_template', {
    'find-template': link
  });
  const template = records !== null && records !== void 0 && records.length ? records[0] : null;

  if (records?.length) {
    return getEditedEntityRecord(state, 'postType', 'wp_template', records[0].id);
  }

  return template;
}
/**
 * Retrieve the current theme's base global styles
 *
 * @param state Editor state.
 *
 * @return {Object?} The Global Styles object.
 */

function __experimentalGetCurrentThemeBaseGlobalStyles(state) {
  const currentTheme = getCurrentTheme(state);

  if (!currentTheme) {
    return null;
  }

  return state.themeBaseGlobalStyles[currentTheme.stylesheet];
}
/**
 * Return the ID of the current global styles object.
 *
 * @param state Data state.
 *
 * @return The current global styles ID.
 */

function __experimentalGetCurrentThemeGlobalStylesVariations(state) {
  const currentTheme = getCurrentTheme(state);

  if (!currentTheme) {
    return null;
  }

  return state.themeGlobalStyleVariations[currentTheme.stylesheet];
}
/**
 * Retrieve the list of registered block patterns.
 *
 * @param state Data state.
 *
 * @return Block pattern list.
 */

function getBlockPatterns(state) {
  return state.blockPatterns;
}
/**
 * Retrieve the list of registered block pattern categories.
 *
 * @param state Data state.
 *
 * @return Block pattern category list.
 */

function getBlockPatternCategories(state) {
  return state.blockPatternCategories;
}
/**
 * Returns the revisions of the current global styles theme.
 *
 * @param state Data state.
 *
 * @return The current global styles.
 */

function getCurrentThemeGlobalStylesRevisions(state) {
  const currentGlobalStylesId = __experimentalGetCurrentGlobalStylesId(state);

  if (!currentGlobalStylesId) {
    return null;
  }

  return state.themeGlobalStyleRevisions[currentGlobalStylesId];
}

;// CONCATENATED MODULE: ./node_modules/camel-case/dist.es2015/index.js


function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascalCaseTransform(input, index);
}
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascalCaseTransformMerge(input);
}
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return pascalCase(input, __assign({ transform: camelCaseTransform }, options));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/utils/forward-resolver.js
/**
 * Higher-order function which forward the resolution to another resolver with the same arguments.
 *
 * @param {string} resolverName forwarded resolver.
 *
 * @return {Function} Enhanced resolver.
 */
const forwardResolver = resolverName => (...args) => async ({
  resolveSelect
}) => {
  await resolveSelect[resolverName](...args);
};

/* harmony default export */ var forward_resolver = (forwardResolver);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/resolvers.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Requests authors from the REST API.
 *
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */

const resolvers_getAuthors = query => async ({
  dispatch
}) => {
  const path = (0,external_wp_url_namespaceObject.addQueryArgs)('/wp/v2/users/?who=authors&per_page=100', query);
  const users = await external_wp_apiFetch_default()({
    path
  });
  dispatch.receiveUserQuery(path, users);
};
/**
 * Requests the current user from the REST API.
 */

const resolvers_getCurrentUser = () => async ({
  dispatch
}) => {
  const currentUser = await external_wp_apiFetch_default()({
    path: '/wp/v2/users/me'
  });
  dispatch.receiveCurrentUser(currentUser);
};
/**
 * Requests an entity's record from the REST API.
 *
 * @param {string}           kind  Entity kind.
 * @param {string}           name  Entity name.
 * @param {number|string}    key   Record's key
 * @param {Object|undefined} query Optional object of query parameters to
 *                                 include with request.
 */

const resolvers_getEntityRecord = (kind, name, key = '', query) => async ({
  select,
  dispatch
}) => {
  const configs = await dispatch(getOrLoadEntitiesConfig(kind));
  const entityConfig = configs.find(config => config.name === name && config.kind === kind);

  if (!entityConfig || entityConfig?.__experimentalNoFetch) {
    return;
  }

  const lock = await dispatch.__unstableAcquireStoreLock(STORE_NAME, ['entities', 'records', kind, name, key], {
    exclusive: false
  });

  try {
    if (query !== undefined && query._fields) {
      // If requesting specific fields, items and query association to said
      // records are stored by ID reference. Thus, fields must always include
      // the ID.
      query = { ...query,
        _fields: [...new Set([...(get_normalized_comma_separable(query._fields) || []), entityConfig.key || DEFAULT_ENTITY_KEY])].join()
      };
    } // Disable reason: While true that an early return could leave `path`
    // unused, it's important that path is derived using the query prior to
    // additional query modifications in the condition below, since those
    // modifications are relevant to how the data is tracked in state, and not
    // for how the request is made to the REST API.
    // eslint-disable-next-line @wordpress/no-unused-vars-before-return


    const path = (0,external_wp_url_namespaceObject.addQueryArgs)(entityConfig.baseURL + (key ? '/' + key : ''), { ...entityConfig.baseURLParams,
      ...query
    });

    if (query !== undefined) {
      query = { ...query,
        include: [key]
      }; // The resolution cache won't consider query as reusable based on the
      // fields, so it's tested here, prior to initiating the REST request,
      // and without causing `getEntityRecords` resolution to occur.

      const hasRecords = select.hasEntityRecords(kind, name, query);

      if (hasRecords) {
        return;
      }
    }

    const record = await external_wp_apiFetch_default()({
      path
    });
    dispatch.receiveEntityRecords(kind, name, record, query);
  } finally {
    dispatch.__unstableReleaseStoreLock(lock);
  }
};
/**
 * Requests an entity's record from the REST API.
 */

const resolvers_getRawEntityRecord = forward_resolver('getEntityRecord');
/**
 * Requests an entity's record from the REST API.
 */

const resolvers_getEditedEntityRecord = forward_resolver('getEntityRecord');
/**
 * Requests the entity's records from the REST API.
 *
 * @param {string}  kind  Entity kind.
 * @param {string}  name  Entity name.
 * @param {Object?} query Query Object.
 */

const resolvers_getEntityRecords = (kind, name, query = {}) => async ({
  dispatch
}) => {
  const configs = await dispatch(getOrLoadEntitiesConfig(kind));
  const entityConfig = configs.find(config => config.name === name && config.kind === kind);

  if (!entityConfig || entityConfig?.__experimentalNoFetch) {
    return;
  }

  const lock = await dispatch.__unstableAcquireStoreLock(STORE_NAME, ['entities', 'records', kind, name], {
    exclusive: false
  });

  try {
    if (query._fields) {
      // If requesting specific fields, items and query association to said
      // records are stored by ID reference. Thus, fields must always include
      // the ID.
      query = { ...query,
        _fields: [...new Set([...(get_normalized_comma_separable(query._fields) || []), entityConfig.key || DEFAULT_ENTITY_KEY])].join()
      };
    }

    const path = (0,external_wp_url_namespaceObject.addQueryArgs)(entityConfig.baseURL, { ...entityConfig.baseURLParams,
      ...query
    });
    let records = Object.values(await external_wp_apiFetch_default()({
      path
    })); // If we request fields but the result doesn't contain the fields,
    // explicitly set these fields as "undefined"
    // that way we consider the query "fullfilled".

    if (query._fields) {
      records = records.map(record => {
        query._fields.split(',').forEach(field => {
          if (!record.hasOwnProperty(field)) {
            record[field] = undefined;
          }
        });

        return record;
      });
    }

    dispatch.receiveEntityRecords(kind, name, records, query); // When requesting all fields, the list of results can be used to
    // resolve the `getEntityRecord` selector in addition to `getEntityRecords`.
    // See https://github.com/WordPress/gutenberg/pull/26575

    if (!query?._fields && !query.context) {
      const key = entityConfig.key || DEFAULT_ENTITY_KEY;
      const resolutionsArgs = records.filter(record => record[key]).map(record => [kind, name, record[key]]);
      dispatch({
        type: 'START_RESOLUTIONS',
        selectorName: 'getEntityRecord',
        args: resolutionsArgs
      });
      dispatch({
        type: 'FINISH_RESOLUTIONS',
        selectorName: 'getEntityRecord',
        args: resolutionsArgs
      });
    }
  } finally {
    dispatch.__unstableReleaseStoreLock(lock);
  }
};

resolvers_getEntityRecords.shouldInvalidate = (action, kind, name) => {
  return (action.type === 'RECEIVE_ITEMS' || action.type === 'REMOVE_ITEMS') && action.invalidateCache && kind === action.kind && name === action.name;
};
/**
 * Requests the current theme.
 */


const resolvers_getCurrentTheme = () => async ({
  dispatch,
  resolveSelect
}) => {
  const activeThemes = await resolveSelect.getEntityRecords('root', 'theme', {
    status: 'active'
  });
  dispatch.receiveCurrentTheme(activeThemes[0]);
};
/**
 * Requests theme supports data from the index.
 */

const resolvers_getThemeSupports = forward_resolver('getCurrentTheme');
/**
 * Requests a preview from the from the Embed API.
 *
 * @param {string} url URL to get the preview for.
 */

const resolvers_getEmbedPreview = url => async ({
  dispatch
}) => {
  try {
    const embedProxyResponse = await external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/oembed/1.0/proxy', {
        url
      })
    });
    dispatch.receiveEmbedPreview(url, embedProxyResponse);
  } catch (error) {
    // Embed API 404s if the URL cannot be embedded, so we have to catch the error from the apiRequest here.
    dispatch.receiveEmbedPreview(url, false);
  }
};
/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string}  action   Action to check. One of: 'create', 'read', 'update',
 *                           'delete'.
 * @param {string}  resource REST resource to check, e.g. 'media' or 'posts'.
 * @param {?string} id       ID of the rest resource to check.
 */

const resolvers_canUser = (requestedAction, resource, id) => async ({
  dispatch,
  registry
}) => {
  const {
    hasStartedResolution
  } = registry.select(STORE_NAME);
  const resourcePath = id ? `${resource}/${id}` : resource;
  const retrievedActions = ['create', 'read', 'update', 'delete'];

  if (!retrievedActions.includes(requestedAction)) {
    throw new Error(`'${requestedAction}' is not a valid action.`);
  } // Prevent resolving the same resource twice.


  for (const relatedAction of retrievedActions) {
    if (relatedAction === requestedAction) {
      continue;
    }

    const isAlreadyResolving = hasStartedResolution('canUser', [relatedAction, resource, id]);

  if (!method) {
    throw new Error(`'${action}' is not a valid action.`);
  }

  const path = id ? `/wp/v2/${resource}/${id}` : `/wp/v2/${resource}`;
  let response;

  try {
    response = await external_wp_apiFetch_default()({
      path,
      // Ideally this would always be an OPTIONS request, but unfortunately there's
      // a bug in the REST API which causes the Allow header to not be sent on
      // OPTIONS requests to /posts/:id routes.
      // https://core.trac.wordpress.org/ticket/45753
      method: id ? 'GET' : 'OPTIONS',
      parse: false
    });
  } catch (error) {
    // Do nothing if our OPTIONS request comes back with an API error (4xx or
    // 5xx). The previously determined isAllowed value will remain in the store.
    return;
  }

  const allowHeader = response.headers?.get('allow');
  const allowedMethods = allowHeader?.allow || allowHeader || '';
  const permissions = {};
  const methods = {
    create: 'POST',
    read: 'GET',
    update: 'PUT',
    delete: 'DELETE'
  };

  if (Object(external_lodash_["hasIn"])(response, ['headers', 'get'])) {
    // If the request is fetched using the fetch api, the header can be
    // retrieved using the 'get' method.
    allowHeader = response.headers.get('allow');
  } else {
    // If the request was preloaded server-side and is returned by the
    // preloading middleware, the header will be a simple property.
    allowHeader = Object(external_lodash_["get"])(response, ['headers', 'Allow'], '');
  }

  const key = Object(external_lodash_["compact"])([action, resource, id]).join('/');
  const isAllowed = Object(external_lodash_["includes"])(allowHeader, method);
  dispatch.receiveUserPermission(key, isAllowed);
};
/**
 * Checks whether the current user can perform the given action on the given
 * REST resource.
 *
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {string} recordId Record's id.
 */

const resolvers_canUserEditEntityRecord = (kind, name, recordId) => async ({
  dispatch
}) => {
  const configs = await dispatch(getOrLoadEntitiesConfig(kind));
  const entityConfig = configs.find(config => config.name === name && config.kind === kind);

  if (!entity) {
    return;
  }

  const resource = entity.__unstable_rest_base;
  await dispatch(resolvers_canUser('update', resource, recordId));
};
/**
 * Request autosave data from the REST API.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

const resolvers_getAutosaves = (postType, postId) => async ({
  dispatch,
  resolveSelect
}) => {
  const {
    rest_base: restBase
  } = await resolveSelect.getPostType(postType);
  const autosaves = await external_wp_apiFetch_default()({
    path: `/wp/v2/${restBase}/${postId}/autosaves?context=edit`
  });

  if (autosaves && autosaves.length) {
    dispatch.receiveAutosaves(postId, autosaves);
  }
};
/**
 * Request autosave data from the REST API.
 *
 * This resolver exists to ensure the underlying autosaves are fetched via
 * `getAutosaves` when a call to the `getAutosave` selector is made.
 *
 * @param {string} postType The type of the parent post.
 * @param {number} postId   The id of the parent post.
 */

const resolvers_getAutosave = (postType, postId) => async ({
  resolveSelect
}) => {
  await resolveSelect.getAutosaves(postType, postId);
};
/**
 * Retrieve the frontend template used for a given link.
 *
 * @param {string} link Link.
 */

const resolvers_experimentalGetTemplateForLink = link => async ({
  dispatch,
  resolveSelect
}) => {
  let template;

  try {
    // This is NOT calling a REST endpoint but rather ends up with a response from
    // an Ajax function which has a different shape from a WP_REST_Response.
    template = await external_wp_apiFetch_default()({
      url: (0,external_wp_url_namespaceObject.addQueryArgs)(link, {
        '_wp-find-template': true
      })
    }).then(({
      data
    }) => data);
  } catch (e) {// For non-FSE themes, it is possible that this request returns an error.
  }

  if (!template) {
    return;
  }

  const record = await resolveSelect.getEntityRecord('postType', 'wp_template', template.id);

  if (record) {
    dispatch.receiveEntityRecords('postType', 'wp_template', [record], {
      'find-template': link
    });
  }
};

resolvers_experimentalGetTemplateForLink.shouldInvalidate = action => {
  return (action.type === 'RECEIVE_ITEMS' || action.type === 'REMOVE_ITEMS') && action.invalidateCache && action.kind === 'postType' && action.name === 'wp_template';
};

const resolvers_experimentalGetCurrentGlobalStylesId = () => async ({
  dispatch,
  resolveSelect
}) => {
  const activeThemes = await resolveSelect.getEntityRecords('root', 'theme', {
    status: 'active'
  });
  const globalStylesURL = activeThemes?.[0]?._links?.['wp:user-global-styles']?.[0]?.href;

  if (globalStylesURL) {
    const globalStylesObject = await external_wp_apiFetch_default()({
      url: globalStylesURL
    });

    dispatch.__experimentalReceiveCurrentGlobalStylesId(globalStylesObject.id);
  }
};
const resolvers_experimentalGetCurrentThemeBaseGlobalStyles = () => async ({
  resolveSelect,
  dispatch
}) => {
  const currentTheme = await resolveSelect.getCurrentTheme();
  const themeGlobalStyles = await external_wp_apiFetch_default()({
    path: `/wp/v2/global-styles/themes/${currentTheme.stylesheet}`
  });

  dispatch.__experimentalReceiveThemeBaseGlobalStyles(currentTheme.stylesheet, themeGlobalStyles);
};
const resolvers_experimentalGetCurrentThemeGlobalStylesVariations = () => async ({
  resolveSelect,
  dispatch
}) => {
  const currentTheme = await resolveSelect.getCurrentTheme();
  const variations = await external_wp_apiFetch_default()({
    path: `/wp/v2/global-styles/themes/${currentTheme.stylesheet}/variations`
  });

  dispatch.__experimentalReceiveThemeGlobalStyleVariations(currentTheme.stylesheet, variations);
};
/**
 * Fetches and returns the revisions of the current global styles theme.
 */

const resolvers_getCurrentThemeGlobalStylesRevisions = () => async ({
  resolveSelect,
  dispatch
}) => {
  const globalStylesId = await resolveSelect.__experimentalGetCurrentGlobalStylesId();
  const record = globalStylesId ? await resolveSelect.getEntityRecord('root', 'globalStyles', globalStylesId) : undefined;
  const revisionsURL = record?._links?.['version-history']?.[0]?.href;

  if (revisionsURL) {
    const resetRevisions = await external_wp_apiFetch_default()({
      url: revisionsURL
    });
    const revisions = resetRevisions?.map(revision => Object.fromEntries(Object.entries(revision).map(([key, value]) => [camelCase(key), value])));
    dispatch.receiveThemeGlobalStyleRevisions(globalStylesId, revisions);
  }
};

resolvers_getCurrentThemeGlobalStylesRevisions.shouldInvalidate = action => {
  return action.type === 'SAVE_ENTITY_RECORD_FINISH' && action.kind === 'root' && !action.error && action.name === 'globalStyles';
};

const resolvers_getBlockPatterns = () => async ({
  dispatch
}) => {
  const restPatterns = await external_wp_apiFetch_default()({
    path: '/wp/v2/block-patterns/patterns'
  });
  const patterns = restPatterns?.map(pattern => Object.fromEntries(Object.entries(pattern).map(([key, value]) => [camelCase(key), value])));
  dispatch({
    type: 'RECEIVE_BLOCK_PATTERNS',
    patterns
  });
};
const resolvers_getBlockPatternCategories = () => async ({
  dispatch
}) => {
  const categories = await external_wp_apiFetch_default()({
    path: '/wp/v2/block-patterns/categories'
  });
  dispatch({
    type: 'RECEIVE_BLOCK_PATTERN_CATEGORIES',
    categories
  });
};
const resolvers_getNavigationFallbackId = () => async ({
  dispatch,
  select
}) => {
  const fallback = await external_wp_apiFetch_default()({
    path: (0,external_wp_url_namespaceObject.addQueryArgs)('/wp-block-editor/v1/navigation-fallback', {
      _embed: true
    })
  });
  const record = fallback?._embedded?.self;
  dispatch.receiveNavigationFallbackId(fallback?.id);

  if (record) {
    // If the fallback is already in the store, don't invalidate navigation queries.
    // Otherwise, invalidate the cache for the scenario where there were no Navigation
    // posts in the state and the fallback created one.
    const existingFallbackEntityRecord = select.getEntityRecord('postType', 'wp_navigation', fallback?.id);
    const invalidateNavigationQueries = !existingFallbackEntityRecord;
    dispatch.receiveEntityRecords('postType', 'wp_navigation', record, undefined, invalidateNavigationQueries); // Resolve to avoid further network requests.

    dispatch.finishResolution('getEntityRecord', ['postType', 'wp_navigation', fallback?.id]);
  }
};

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/utils.js
function deepCopyLocksTreePath(tree, path) {
  const newTree = { ...tree
  };
  let currentNode = newTree;

  for (const branchName of path) {
    currentNode.children = { ...currentNode.children,
      [branchName]: {
        locks: [],
        children: {},
        ...currentNode.children[branchName]
      }
    };
    currentNode = currentNode.children[branchName];
  }

  return newTree;
}
function getNode(tree, path) {
  let currentNode = tree;

  for (const branchName of path) {
    const nextNode = currentNode.children[branchName];

    if (!nextNode) {
      return null;
    }

    currentNode = nextNode;
  }

  return currentNode;
}
function* iteratePath(tree, path) {
  let currentNode = tree;
  yield currentNode;

  for (const branchName of path) {
    const nextNode = currentNode.children[branchName];

    if (!nextNode) {
      break;
    }

    yield nextNode;
    currentNode = nextNode;
  }
}
function* iterateDescendants(node) {
  const stack = Object.values(node.children);

  while (stack.length) {
    const childNode = stack.pop();
    yield childNode;
    stack.push(...Object.values(childNode.children));
  }
}
function hasConflictingLock({
  exclusive
}, locks) {
  if (exclusive && locks.length) {
    return true;
  }

  if (!exclusive && locks.filter(lock => lock.exclusive).length) {
    return true;
  }

  return false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/reducer.js
/**
 * Internal dependencies
 */

const DEFAULT_STATE = {
  requests: [],
  tree: {
    locks: [],
    children: {}
  }
};
/**
 * Reducer returning locks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function locks(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'ENQUEUE_LOCK_REQUEST':
      {
        const {
          request
        } = action;
        return { ...state,
          requests: [request, ...state.requests]
        };
      }

    case 'GRANT_LOCK_REQUEST':
      {
        const {
          lock,
          request
        } = action;
        const {
          store,
          path
        } = request;
        const storePath = [store, ...path];
        const newTree = deepCopyLocksTreePath(state.tree, storePath);
        const node = getNode(newTree, storePath);
        node.locks = [...node.locks, lock];
        return { ...state,
          requests: state.requests.filter(r => r !== request),
          tree: newTree
        };
      }

    case 'RELEASE_LOCK':
      {
        const {
          lock
        } = action;
        const storePath = [lock.store, ...lock.path];
        const newTree = deepCopyLocksTreePath(state.tree, storePath);
        const node = getNode(newTree, storePath);
        node.locks = node.locks.filter(l => l !== lock);
        return { ...state,
          tree: newTree
        };
      }
  }

  return state;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/selectors.js
/**
 * Internal dependencies
 */

function getPendingLockRequests(state) {
  return state.requests;
}
function isLockAvailable(state, store, path, {
  exclusive
}) {
  const storePath = [store, ...path];
  const locks = state.tree; // Validate all parents and the node itself

  for (const node of iteratePath(locks, storePath)) {
    if (hasConflictingLock({
      exclusive
    }, node.locks)) {
      return false;
    }
  } // iteratePath terminates early if path is unreachable, let's
  // re-fetch the node and check it exists in the tree.


  const node = getNode(locks, storePath);

  if (!node) {
    return true;
  } // Validate all nested nodes


  for (const descendant of iterateDescendants(node)) {
    if (hasConflictingLock({
      exclusive
    }, descendant.locks)) {
      return false;
    }
  }

  return true;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/engine.js
/**
 * Internal dependencies
 */


function createLocks() {
  let state = reducer_locks(undefined, {
    type: '@@INIT'
  });

  function processPendingLockRequests() {
    for (const request of getPendingLockRequests(state)) {
      const {
        store,
        path,
        exclusive,
        notifyAcquired
      } = request;

      if (isLockAvailable(state, store, path, {
        exclusive
      })) {
        const lock = {
          store,
          path,
          exclusive
        };
        state = reducer_locks(state, {
          type: 'GRANT_LOCK_REQUEST',
          lock,
          request
        });
        notifyAcquired(lock);
      }
    }
  }

  function acquire(store, path, exclusive) {
    return new Promise(resolve => {
      state = reducer_locks(state, {
        type: 'ENQUEUE_LOCK_REQUEST',
        request: {
          store,
          path,
          exclusive,
          notifyAcquired: resolve
        }
      });
      processPendingLockRequests();
    });
  }

  function release(lock) {
    state = reducer_locks(state, {
      type: 'RELEASE_LOCK',
      lock
    });
    processPendingLockRequests();
  }

  return {
    acquire,
    release
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/locks/actions.js
/**
 * Internal dependencies
 */

function createLocksActions() {
  const locks = createLocks();

  function __unstableAcquireStoreLock(store, path, {
    exclusive
  }) {
    return () => locks.acquire(store, path, exclusive);
  }

  function __unstableReleaseStoreLock(lock) {
    return () => locks.release(lock);
  }

  return {
    __unstableAcquireStoreLock,
    __unstableReleaseStoreLock
  };
}

;// CONCATENATED MODULE: external ["wp","privateApis"]
var external_wp_privateApis_namespaceObject = window["wp"]["privateApis"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/private-apis.js
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,external_wp_privateApis_namespaceObject.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/core-data');

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","blocks"]
var external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_namespaceObject = window["wp"]["blockEditor"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/entity-provider.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/** @typedef {import('@wordpress/blocks').WPBlock} WPBlock */

const EMPTY_ARRAY = [];
let oldFootnotes = {};
/**
 * Internal dependencies
 */


const entity_provider_entities = { ...defaultEntities.reduce((acc, entity) => {
    if (!acc[entity.kind]) {
      acc[entity.kind] = {};
    }

    acc[entity.kind][entity.name] = {
      context: Object(external_wp_element_["createContext"])()
    };
    return acc;
  }, {}),
  ...kinds.reduce((acc, kind) => {
    acc[kind.name] = {};
    return acc;
  }, {})
};

const entity_provider_getEntity = (kind, type) => {
  if (!entity_provider_entities[kind]) {
    throw new Error(`Missing entity config for kind: ${kind}.`);
  }

  if (!entity_provider_entities[kind][type]) {
    entity_provider_entities[kind][type] = {
      context: Object(external_wp_element_["createContext"])()
    };
  }

  return entity_provider_entities[kind][type];
};
/**
 * Context provider component for providing
 * an entity for a specific entity type.
 *
 * @param {Object} props          The component's props.
 * @param {string} props.kind     The entity kind.
 * @param {string} props.type     The entity type.
 * @param {number} props.id       The entity ID.
 * @param {*}      props.children The children to wrap.
 *
 * @return {Object} The provided children, wrapped with
 *                   the entity's context provider.
 */


function EntityProvider({
  kind,
  type: name,
  id,
  children
}) {
  const Provider = getEntityContext(kind, name).Provider;
  return (0,external_wp_element_namespaceObject.createElement)(Provider, {
    value: id
  }, children);
}
/**
 * Hook that returns the ID for the nearest
 * provided entity of the specified type.
 *
 * @param {string} kind The entity kind.
 * @param {string} type The entity type.
 */

function useEntityId(kind, type) {
  return Object(external_wp_element_["useContext"])(entity_provider_getEntity(kind, type).context);
}
/**
 * Hook that returns the value and a setter for the
 * specified property of the nearest provided
 * entity of the specified type.
 *
 * @param {string} kind  The entity kind.
 * @param {string} type  The entity type.
 * @param {string} prop  The property name.
 * @param {string} [_id] An entity ID to use instead of the context-provided one.
 *
 * @return {[*, Function, *]} An array where the first item is the
 *                            property value, the second is the
 *                            setter and the third is the full value
 * 							  object from REST API containing more
 * 							  information like `raw`, `rendered` and
 * 							  `protected` props.
 */

function useEntityProp(kind, type, prop, _id) {
  const providerId = useEntityId(kind, type);
  const id = _id !== null && _id !== void 0 ? _id : providerId;
  const {
    value,
    fullValue
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getEntityRecord,
      getEditedEntityRecord
    } = select(STORE_NAME);
    const entity = getEntityRecord(kind, type, id); // Trigger resolver.

    const editedEntity = getEditedEntityRecord(kind, type, id);
    return entity && editedEntity ? {
      value: editedEntity[prop],
      fullValue: entity[prop]
    } : {};
  }, [kind, type, id, prop]);
  const {
    editEntityRecord
  } = Object(external_wp_data_["useDispatch"])(STORE_NAME);
  const setValue = Object(external_wp_element_["useCallback"])(newValue => {
    editEntityRecord(kind, type, id, {
      [prop]: newValue
    });
  }, [kind, type, id, prop]);
  return [value, setValue, fullValue];
}
/**
 * Hook that returns block content getters and setters for
 * the nearest provided entity of the specified type.
 *
 * The return value has the shape `[ blocks, onInput, onChange ]`.
 * `onInput` is for block changes that don't create undo levels
 * or dirty the post, non-persistent changes, and `onChange` is for
 * peristent changes. They map directly to the props of a
 * `BlockEditorProvider` and are intended to be used with it,
 * or similar components or hooks.
 *
 * @param {string} kind         The entity kind.
 * @param {string} type         The entity type.
 * @param {Object} options
 * @param {string} [options.id] An entity ID to use instead of the context-provided one.
 *
 * @return {[WPBlock[], Function, Function]} The block array and setters.
 */

function useEntityBlockEditor(kind, name, {
  id: _id
} = {}) {
  const providerId = useEntityId(kind, name);
  const id = _id !== null && _id !== void 0 ? _id : providerId;
  const {
    content,
    blocks,
    meta
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedEntityRecord
    } = select(STORE_NAME);
    const editedEntity = getEditedEntityRecord(kind, type, id);
    return {
      blocks: editedRecord.blocks,
      content: editedRecord.content,
      meta: editedRecord.meta
    };
  }, [kind, type, id]);
  const {
    __unstableCreateUndoLevel,
    editEntityRecord
  } = Object(external_wp_data_["useDispatch"])(STORE_NAME);
  Object(external_wp_element_["useEffect"])(() => {
    // Load the blocks from the content if not already in state
    // Guard against other instances that might have
    // set content to a function already or the blocks are already in state.
    if (content && typeof content !== 'function' && !blocks) {
      const parsedContent = Object(external_wp_blocks_["parse"])(content);
      editEntityRecord(kind, type, id, {
        blocks: parsedContent
      }, {
        undoIgnore: true
      });
    }
  }, [content]);
  const updateFootnotes = (0,external_wp_element_namespaceObject.useCallback)(_blocks => {
    const output = {
      blocks: _blocks
    };
    if (!meta) return output; // If meta.footnotes is empty, it means the meta is not registered.

    if (meta.footnotes === undefined) return output;
    const {
      getRichTextValues
    } = unlock(external_wp_blockEditor_namespaceObject.privateApis);

    const _content = getRichTextValues(_blocks).join('') || '';

    const newOrder = []; // This can be avoided when
    // https://github.com/WordPress/gutenberg/pull/43204 lands. We can then
    // get the order directly from the rich text values.

    if (_content.indexOf('data-fn') !== -1) {
      const regex = /data-fn="([^"]+)"/g;
      let match;

      while ((match = regex.exec(_content)) !== null) {
        newOrder.push(match[1]);
      }
    }

    const footnotes = meta.footnotes ? JSON.parse(meta.footnotes) : [];
    const currentOrder = footnotes.map(fn => fn.id);
    if (currentOrder.join('') === newOrder.join('')) return output;
    const newFootnotes = newOrder.map(fnId => footnotes.find(fn => fn.id === fnId) || oldFootnotes[fnId] || {
      id: fnId,
      content: ''
    });

    function updateAttributes(attributes) {
      attributes = { ...attributes
      };

      for (const key in attributes) {
        const value = attributes[key];

        if (Array.isArray(value)) {
          attributes[key] = value.map(updateAttributes);
          continue;
        }

        if (typeof value !== 'string') {
          continue;
        }

        if (value.indexOf('data-fn') === -1) {
          continue;
        } // When we store rich text values, this would no longer
        // require a regex.


        const regex = /(<sup[^>]+data-fn="([^"]+)"[^>]*><a[^>]*>)[\d*]*<\/a><\/sup>/g;
        attributes[key] = value.replace(regex, (match, opening, fnId) => {
          const index = newOrder.indexOf(fnId);
          return `${opening}${index + 1}</a></sup>`;
        });
        const compatRegex = /<a[^>]+data-fn="([^"]+)"[^>]*>\*<\/a>/g;
        attributes[key] = attributes[key].replace(compatRegex, (match, fnId) => {
          const index = newOrder.indexOf(fnId);
          return `<sup data-fn="${fnId}" class="fn"><a href="#${fnId}" id="${fnId}-link">${index + 1}</a></sup>`;
        });
      }

      return attributes;
    }

    function updateBlocksAttributes(__blocks) {
      return __blocks.map(block => {
        return { ...block,
          attributes: updateAttributes(block.attributes),
          innerBlocks: updateBlocksAttributes(block.innerBlocks)
        };
      });
    } // We need to go through all block attributs deeply and update the
    // footnote anchor numbering (textContent) to match the new order.


    const newBlocks = updateBlocksAttributes(_blocks);
    oldFootnotes = { ...oldFootnotes,
      ...footnotes.reduce((acc, fn) => {
        if (!newOrder.includes(fn.id)) {
          acc[fn.id] = fn;
        }

        return acc;
      }, {})
    };
    return {
      meta: { ...meta,
        footnotes: JSON.stringify(newFootnotes)
      },
      blocks: newBlocks
    };
  }, [meta]);
  const onChange = (0,external_wp_element_namespaceObject.useCallback)((newBlocks, options) => {
    const noChange = blocks === newBlocks;

    if (noChange) {
      return __unstableCreateUndoLevel(kind, name, id);
    }

    const {
      selection
    } = options; // We create a new function here on every persistent edit
    // to make sure the edit makes the post dirty and creates
    // a new undo level.

    const edits = {
      selection,
      content: ({
        blocks: blocksForSerialization = []
      }) => (0,external_wp_blocks_namespaceObject.__unstableSerializeAndClean)(blocksForSerialization),
      ...updateFootnotes(newBlocks)
    };
    editEntityRecord(kind, name, id, edits, {
      isCached: false
    });
  }, [kind, name, id, blocks, updateFootnotes, __unstableCreateUndoLevel, editEntityRecord]);
  const onInput = (0,external_wp_element_namespaceObject.useCallback)((newBlocks, options) => {
    const {
      selection
    } = options;
    const footnotesChanges = updateFootnotes(newBlocks);
    const edits = {
      selection,
      ...footnotesChanges
    };
    editEntityRecord(kind, name, id, edits, {
      isCached: true
    });
  }, [kind, name, id, updateFootnotes, editEntityRecord]);
  return [blocks !== null && blocks !== void 0 ? blocks : EMPTY_ARRAY, onInput, onChange];
}

// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__("rmEH");

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-link-suggestions.js
/**
 * WordPress dependencies
 */




/**
 * Filters the search by type
 *
 * @typedef { 'post' | 'term' | 'post-format' } WPLinkSearchType
 */

/**
 * A link with an id may be of kind post-type or taxonomy
 *
 * @typedef { 'post-type' | 'taxonomy' } WPKind
 */

/**
 * @typedef WPLinkSearchOptions
 *
 * @property {boolean}          [isInitialSuggestions] Displays initial search suggestions, when true.
 * @property {WPLinkSearchType} [type]                 Filters by search type.
 * @property {string}           [subtype]              Slug of the post-type or taxonomy.
 * @property {number}           [page]                 Which page of results to return.
 * @property {number}           [perPage]              Search results per page.
 */

/**
 * @typedef WPLinkSearchResult
 *
 * @property {number} id     Post or term id.
 * @property {string} url    Link url.
 * @property {string} title  Title of the link.
 * @property {string} type   The taxonomy or post type slug or type URL.
 * @property {WPKind} [kind] Link kind of post-type or taxonomy
 */

/**
 * @typedef WPEditorSettings
 *
 * @property {boolean} [ disablePostFormats ] Disables post formats, when true.
 */

/**
 * Fetches link suggestions from the API.
 *
 * @async
 * @param {string}              search
 * @param {WPLinkSearchOptions} [searchOptions]
 * @param {WPEditorSettings}    [settings]
 *
 * @example
 * ```js
 * import { __experimentalFetchLinkSuggestions as fetchLinkSuggestions } from '@wordpress/core-data';
 *
 * //...
 *
 * export function initialize( id, settings ) {
 *
 * settings.__experimentalFetchLinkSuggestions = (
 *     search,
 *     searchOptions
 * ) => fetchLinkSuggestions( search, searchOptions, settings );
 * ```
 * @return {Promise< WPLinkSearchResult[] >} List of search suggestions
 */

const fetchLinkSuggestions = async (search, searchOptions = {}, settings = {}) => {
  const {
    isInitialSuggestions = false,
    type = undefined,
    subtype = undefined,
    page = undefined,
    perPage = isInitialSuggestions ? 3 : 20
  } = searchOptions;
  const {
    disablePostFormats = false
  } = settings;
  const queries = [];

  if (!type || type === 'post') {
    queries.push(external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'post',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'post-type',
            subtype
          }
        };
      });
    }).catch(() => []) // fail by returning no results
    );
  }

  if (!type || type === 'term') {
    queries.push(external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'term',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'taxonomy',
            subtype
          }
        };
      });
    }).catch(() => []));
  }

  if (!disablePostFormats && (!type || type === 'post-format')) {
    queries.push(external_wp_apiFetch_default()({
      path: Object(external_wp_url_["addQueryArgs"])('/wp/v2/search', {
        search,
        page,
        per_page: perPage,
        type: 'post-format',
        subtype
      })
    }).then(results => {
      return results.map(result => {
        return { ...result,
          meta: {
            kind: 'taxonomy',
            subtype
          }
        };
      });
    }).catch(() => []));
  }

  return Promise.all(queries).then(results => {
    return results.reduce((accumulator, current) => accumulator.concat(current), //flatten list
    []).filter(
    /**
     * @param {{ id: number }} result
     */
    result => {
      return !!result.id;
    }).slice(0, perPage).map((
    /** @type {WPLinkSearchResultAugmented} */
    result) => {
      const isMedia = result.type === 'attachment';
      return {
        id: result.id,
        url: result.url,
        title: Object(external_wp_htmlEntities_["decodeEntities"])(result.title || '') || Object(external_wp_i18n_["__"])('(no title)'),
        type: result.subtype || result.type,
        kind: result?.meta?.kind
      };
    });
  });
};

/* harmony default export */ var _experimental_fetch_link_suggestions = (fetchLinkSuggestions);

// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/fetch/__experimental-fetch-url-data.js
/**
 * WordPress dependencies
 */


/**
 * A simple in-memory cache for requests.
 * This avoids repeat HTTP requests which may be beneficial
 * for those wishing to preserve low-bandwidth.
 */

const CACHE = new Map();
/**
 * @typedef WPRemoteUrlData
 *
 * @property {string} title contents of the remote URL's `<title>` tag.
 */

/**
 * Fetches data about a remote URL.
 * eg: <title> tag, favicon...etc.
 *
 * @async
 * @param {string}  url     the URL to request details from.
 * @param {Object?} options any options to pass to the underlying fetch.
 * @example
 * ```js
 * import { __experimentalFetchUrlData as fetchUrlData } from '@wordpress/core-data';
 *
 * //...
 *
 * export function initialize( id, settings ) {
 *
 * settings.__experimentalFetchUrlData = (
 * url
 * ) => fetchUrlData( url );
 * ```
 * @return {Promise< WPRemoteUrlData[] >} Remote URL data.
 */

const fetchUrlData = async (url, options = {}) => {
  const endpoint = '/wp-block-editor/v1/url-details';
  const args = {
    url: Object(external_wp_url_["prependHTTP"])(url)
  };

  if (!Object(external_wp_url_["isURL"])(url)) {
    return Promise.reject(`${url} is not a valid URL.`);
  } // Test for "http" based URL as it is possible for valid
  // yet unusable URLs such as `tel:123456` to be passed.


  const protocol = Object(external_wp_url_["getProtocol"])(url);

  if (!Object(external_wp_url_["isValidProtocol"])(protocol) || !protocol.startsWith('http') || !/^https?:\/\/[^\/\s]/i.test(url)) {
    return Promise.reject(`${url} does not have a valid protocol. URLs must be "http" based`);
  }

  if (CACHE.has(url)) {
    return CACHE.get(url);
  }

  return external_wp_apiFetch_default()({
    path: Object(external_wp_url_["addQueryArgs"])(endpoint, args),
    ...options
  }).then(res => {
    CACHE.set(url, res);
    return res;
  });
};

/* harmony default export */ var _experimental_fetch_url_data = (fetchUrlData);

;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/fetch/index.js



;// CONCATENATED MODULE: ./node_modules/memize/dist/index.js
/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {(...args: any[]) => any} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {((...args: Parameters<F>) => ReturnType<F>) & MemizeMemoizedFunction} Memoized function.
 */
function memize(fn, options) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized(/* ...args */) {
		var node = head,
			len = arguments.length,
			args,
			i;

		searchCache: while (node) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if (node.args.length !== arguments.length) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for (i = 0; i < len; i++) {
				if (node.args[i] !== arguments[i]) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== head) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if (node === tail) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ (head).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply(null, args),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if (head) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if (size === /** @type {MemizeOptions} */ (options).maxSize) {
			tail = /** @type {MemizeCacheNode} */ (tail).prev;
			/** @type {MemizeCacheNode} */ (tail).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function () {
		head = null;
		tail = null;
		size = 0;
	};

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}



;// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/hooks/memoize.js
/**
 * External dependencies
 */
 // re-export due to restrictive esModuleInterop setting

/* harmony default export */ var memoize = (memize);



// CONCATENATED MODULE: ./node_modules/@wordpress/core-data/build-module/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */







 // The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecordss)
// Instead of getEntityRecord, the consumer could use more user-frieldly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.

    Object.defineProperty(resolvers, selectorName, {
      get: () => (...args) => {
        const {
          getIsResolving,
          hasFinishedResolution
        } = selectors;
        const isResolving = !!getIsResolving(selectorName, args);
        const hasResolved = !isResolving && hasFinishedResolution(selectorName, args);
        const data = selectors[selectorName](...args);
        let status;

    return getEntityRecords(state, kind, name, ...args);
  };

  return result;
}, {});
const entityResolvers = defaultEntities.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;

  result[getMethodName(kind, name)] = (key, query) => resolvers_getEntityRecord(kind, name, key, query);

  const pluralMethodName = getMethodName(kind, name, 'get', true);

  result[pluralMethodName] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return resolvers_getEntityRecords(kind, name, ...args);
  };

  result[pluralMethodName].shouldInvalidate = function (action) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return resolvers_getEntityRecords.shouldInvalidate(action, kind, name, ...args);
  };

  return result;
}, {});
const entityActions = defaultEntities.reduce((result, entity) => {
  const {
    kind,
    name
  } = entity;

  result[getMethodName(kind, name, 'save')] = key => saveEntityRecord(kind, name, key);

  result[getMethodName(kind, name, 'delete')] = (key, query) => deleteEntityRecord(kind, name, key, query);

  return result;
}, {});

const storeConfig = () => ({
  reducer: build_module_reducer,
  actions: { ...build_module_actions_namespaceObject,
    ...entityActions,
    ...createLocksActions()
  },
  selectors: { ...build_module_selectors_namespaceObject,
    ...entitySelectors
  },
  resolvers: { ...resolvers_namespaceObject,
    ...entityResolvers
  },
  __experimentalUseThunks: true
});
/**
 * Resolves the specified entity record.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param    kind     Kind of the entity, e.g. `root` or a `postType`. See rootEntitiesConfig in ../entities.ts for a list of available kinds.
 * @param    name     Name of the entity, e.g. `plugin` or a `post`. See rootEntitiesConfig in ../entities.ts for a list of available names.
 * @param    recordId ID of the requested entity record.
 * @param    options  Optional hook options.
 * @example
 * ```js
 * import { useEntityRecord } from '@wordpress/core-data';
 *
 * function PageTitleDisplay( { id } ) {
 *   const { record, isResolving } = useEntityRecord( 'postType', 'page', id );
 *
 *   if ( isResolving ) {
 *     return 'Loading...';
 *   }
 *
 *   return record.title;
 * }
 *
 * // Rendered in the application:
 * // <PageTitleDisplay id={ 1 } />
 * ```
 *
 * In the above example, when `PageTitleDisplay` is rendered into an
 * application, the page and the resolution details will be retrieved from
 * the store state using `getEntityRecord()`, or resolved if missing.
 *
 * @example
 * ```js
 * import { useDispatch } from '@wordpress/data';
 * import { useCallback } from '@wordpress/element';
 * import { __ } from '@wordpress/i18n';
 * import { TextControl } from '@wordpress/components';
 * import { store as noticeStore } from '@wordpress/notices';
 * import { useEntityRecord } from '@wordpress/core-data';
 *
 * function PageRenameForm( { id } ) {
 * 	const page = useEntityRecord( 'postType', 'page', id );
 * 	const { createSuccessNotice, createErrorNotice } =
 * 		useDispatch( noticeStore );
 *
 * 	const setTitle = useCallback( ( title ) => {
 * 		page.edit( { title } );
 * 	}, [ page.edit ] );
 *
 * 	if ( page.isResolving ) {
 * 		return 'Loading...';
 * 	}
 *
 * 	async function onRename( event ) {
 * 		event.preventDefault();
 * 		try {
 * 			await page.save();
 * 			createSuccessNotice( __( 'Page renamed.' ), {
 * 				type: 'snackbar',
 * 			} );
 * 		} catch ( error ) {
 * 			createErrorNotice( error.message, { type: 'snackbar' } );
 * 		}
 * 	}
 *
 * 	return (
 * 		<form onSubmit={ onRename }>
 * 			<TextControl
 * 				label={ __( 'Name' ) }
 * 				value={ page.editedRecord.title }
 * 				onChange={ setTitle }
 * 			/>
 * 			<button type="submit">{ __( 'Save' ) }</button>
 * 		</form>
 * 	);
 * }
 *
 * // Rendered in the application:
 * // <PageRenameForm id={ 1 } />
 * ```
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
function useEntityRecord(kind, name, recordId, options = {
  enabled: true
}) {
  const {
    editEntityRecord,
    saveEditedEntityRecord
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  const mutations = (0,external_wp_element_namespaceObject.useMemo)(() => ({
    edit: record => editEntityRecord(kind, name, recordId, record),
    save: (saveOptions = {}) => saveEditedEntityRecord(kind, name, recordId, {
      throwOnError: true,
      ...saveOptions
    })
  }), [editEntityRecord, kind, name, recordId, saveEditedEntityRecord]);
  const {
    editedRecord,
    hasEdits
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    editedRecord: select(store).getEditedEntityRecord(kind, name, recordId),
    hasEdits: select(store).hasEditsForEntityRecord(kind, name, recordId)
  }), [kind, name, recordId]);
  const {
    data: record,
    ...querySelectRest
  } = useQuerySelect(query => {
    if (!options.enabled) {
      return {
        data: null
      };
    }


const build_module_store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, storeConfig());
Object(external_wp_data_["register"])(build_module_store);





/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "pPDe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var LEAF_KEY, hasWeakMap;

/**
 * Resolves the specified entity records.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param    kind      Kind of the entity, e.g. `root` or a `postType`. See rootEntitiesConfig in ../entities.ts for a list of available kinds.
 * @param    name      Name of the entity, e.g. `plugin` or a `post`. See rootEntitiesConfig in ../entities.ts for a list of available names.
 * @param    queryArgs Optional HTTP query description for how to fetch the data, passed to the requested API endpoint.
 * @param    options   Optional hook options.
 * @example
 * ```js
 * import { useEntityRecords } from '@wordpress/core-data';
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */

function useEntityRecords(kind, name, queryArgs = {}, options = {
  enabled: true
}) {
  // Serialize queryArgs to a string that can be safely used as a React dep.
  // We can't just pass queryArgs as one of the deps, because if it is passed
  // as an object literal, then it will be a different object on each call even
  // if the values remain the same.
  const queryAsString = (0,external_wp_url_namespaceObject.addQueryArgs)('', queryArgs);
  const {
    data: records,
    ...rest
  } = useQuerySelect(query => {
    if (!options.enabled) {
      return {
        // Avoiding returning a new reference on every execution.
        data: use_entity_records_EMPTY_ARRAY
      };
    }

    return query(store).getEntityRecords(kind, name, queryArgs);
  }, [kind, name, queryAsString, options.enabled]);
  return {
    records,
    ...rest
  };
}
function __experimentalUseEntityRecords(kind, name, queryArgs, options) {
  external_wp_deprecated_default()(`wp.data.__experimentalUseEntityRecords`, {
    alternative: 'wp.data.useEntityRecords',
    since: '6.1'
  });
  return useEntityRecords(kind, name, queryArgs, options);
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Resolves resource permissions.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param    resource The resource in question, e.g. media.
 * @param    id       ID of a specific resource entry, if needed, e.g. 10.
 *
 * @example
 * ```js
 * import { useResourcePermissions } from '@wordpress/core-data';
 *
 * function PagesList() {
 *   const { canCreate, isResolving } = useResourcePermissions( 'pages' );
 *
 *   if ( isResolving ) {
 *     return 'Loading ...';
 *   }
 *
 *   return (
 *     <div>
 *       {canCreate ? (<button>+ Create a new page</button>) : false}
 *       // ...
 *     </div>
 *   );
 * }
 *
 * // Rendered in the application:
 * // <PagesList />
 * ```
 *
 * @example
 * ```js
 * import { useResourcePermissions } from '@wordpress/core-data';
 *
 * function Page({ pageId }) {
 *   const {
 *     canCreate,
 *     canUpdate,
 *     canDelete,
 *     isResolving
 *   } = useResourcePermissions( 'pages', pageId );
 *
 *   if ( isResolving ) {
 *     return 'Loading ...';
 *   }
 *
 *   return (
 *     <div>
 *       {canCreate ? (<button>+ Create a new page</button>) : false}
 *       {canUpdate ? (<button>Edit page</button>) : false}
 *       {canDelete ? (<button>Delete page</button>) : false}
 *       // ...
 *     </div>
 *   );
 * }
 *
 * // Rendered in the application:
 * // <Page pageId={ 15 } />
 * ```
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["a"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}



 // The entity selectors/resolvers and actions are shortcuts to their generic equivalents
// (getEntityRecord, getEntityRecords, updateEntityRecord, updateEntityRecords)
// Instead of getEntityRecord, the consumer could use more user-friendly named selector: getPostType, getTaxonomy...
// The "kind" and the "name" of the entity are combined to generate these shortcuts.

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

  result[pluralMethodName] = (...args) => resolvers_getEntityRecords(kind, name, ...args);

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),

/***/ "rl8x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["isShallowEqual"]; }());

/***/ }),

const store = (0,external_wp_data_namespaceObject.createReduxStore)(STORE_NAME, storeConfig());
unlock(store).registerPrivateSelectors({
  getNavigationFallbackId: getNavigationFallbackId
});
(0,external_wp_data_namespaceObject.register)(store); // Register store after unlocking private selectors to allow resolvers to use them.


(function() { module.exports = window["wp"]["htmlEntities"]; }());

/***/ }),

/***/ "ywyh":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ })

/******/ });
