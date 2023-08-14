this["wp"] = this["wp"] || {}; this["wp"]["editWidgets"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "F35A");
/******/ })
/************************************************************************/
/******/ ({

/***/ "//Lo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const blockDefault = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (blockDefault);


/***/ }),

/***/ "1CF3":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dom"]; }());

/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "6aBm":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["mediaUtils"]; }());

/***/ }),

/***/ "Cg8A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cog = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["a"] = (cog);


/***/ }),

/***/ "F35A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "initialize": function() { return /* binding */ initialize; },
  "initializeEditor": function() { return /* binding */ initializeEditor; },
  "reinitializeEditor": function() { return /* binding */ reinitializeEditor; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/edit-widgets/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  "closeModal": function() { return closeModal; },
  "disableComplementaryArea": function() { return disableComplementaryArea; },
  "enableComplementaryArea": function() { return enableComplementaryArea; },
  "openModal": function() { return openModal; },
  "pinItem": function() { return pinItem; },
  "setDefaultComplementaryArea": function() { return setDefaultComplementaryArea; },
  "setFeatureDefaults": function() { return setFeatureDefaults; },
  "setFeatureValue": function() { return setFeatureValue; },
  "toggleFeature": function() { return toggleFeature; },
  "unpinItem": function() { return unpinItem; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, {
  "getActiveComplementaryArea": function() { return getActiveComplementaryArea; },
  "isComplementaryAreaLoading": function() { return isComplementaryAreaLoading; },
  "isFeatureActive": function() { return isFeatureActive; },
  "isItemPinned": function() { return isItemPinned; },
  "isModalActive": function() { return isModalActive; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/edit-widgets/build-module/store/actions.js
var store_actions_namespaceObject = {};
__webpack_require__.r(store_actions_namespaceObject);
__webpack_require__.d(store_actions_namespaceObject, {
  "closeGeneralSidebar": function() { return closeGeneralSidebar; },
  "moveBlockToWidgetArea": function() { return moveBlockToWidgetArea; },
  "persistStubPost": function() { return persistStubPost; },
  "saveEditedWidgetAreas": function() { return saveEditedWidgetAreas; },
  "saveWidgetArea": function() { return saveWidgetArea; },
  "saveWidgetAreas": function() { return saveWidgetAreas; },
  "setIsInserterOpened": function() { return setIsInserterOpened; },
  "setIsListViewOpened": function() { return setIsListViewOpened; },
  "setIsWidgetAreaOpen": function() { return setIsWidgetAreaOpen; },
  "setWidgetAreasOpenState": function() { return setWidgetAreasOpenState; },
  "setWidgetIdForClientId": function() { return setWidgetIdForClientId; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/edit-widgets/build-module/store/resolvers.js
var resolvers_namespaceObject = {};
__webpack_require__.r(resolvers_namespaceObject);
__webpack_require__.d(resolvers_namespaceObject, "getWidgetAreas", function() { return getWidgetAreas; });
__webpack_require__.d(resolvers_namespaceObject, "getWidgets", function() { return getWidgets; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/edit-widgets/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getWidgets", function() { return selectors_getWidgets; });
__webpack_require__.d(selectors_namespaceObject, "getWidget", function() { return getWidget; });
__webpack_require__.d(selectors_namespaceObject, "getWidgetAreas", function() { return selectors_getWidgetAreas; });
__webpack_require__.d(selectors_namespaceObject, "getWidgetAreaForWidgetId", function() { return getWidgetAreaForWidgetId; });
__webpack_require__.d(selectors_namespaceObject, "getParentWidgetAreaBlock", function() { return selectors_getParentWidgetAreaBlock; });
__webpack_require__.d(selectors_namespaceObject, "getEditedWidgetAreas", function() { return selectors_getEditedWidgetAreas; });
__webpack_require__.d(selectors_namespaceObject, "getReferenceWidgetBlocks", function() { return getReferenceWidgetBlocks; });
__webpack_require__.d(selectors_namespaceObject, "isSavingWidgetAreas", function() { return selectors_isSavingWidgetAreas; });
__webpack_require__.d(selectors_namespaceObject, "getIsWidgetAreaOpen", function() { return getIsWidgetAreaOpen; });
__webpack_require__.d(selectors_namespaceObject, "isInserterOpened", function() { return selectors_isInserterOpened; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetInsertionPoint", function() { return __experimentalGetInsertionPoint; });
__webpack_require__.d(selectors_namespaceObject, "canInsertBlockInWidgetArea", function() { return selectors_canInsertBlockInWidgetArea; });
__webpack_require__.d(selectors_namespaceObject, "isListViewOpened", function() { return selectors_isListViewOpened; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/index.js
var widget_area_namespaceObject = {};
__webpack_require__.r(widget_area_namespaceObject);
__webpack_require__.d(widget_area_namespaceObject, "metadata", function() { return widget_area_metadata; });
__webpack_require__.d(widget_area_namespaceObject, "name", function() { return widget_area_name; });
__webpack_require__.d(widget_area_namespaceObject, "settings", function() { return widget_area_settings; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external ["wp","blockLibrary"]
var external_wp_blockLibrary_ = __webpack_require__("QyPg");

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__("jZUy");

// EXTERNAL MODULE: external ["wp","widgets"]
var external_wp_widgets_ = __webpack_require__("GLVC");

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: external ["wp","blocks"]
var external_wp_blocks_namespaceObject = window["wp"]["blocks"];
;// CONCATENATED MODULE: external ["wp","data"]
var external_wp_data_namespaceObject = window["wp"]["data"];
;// CONCATENATED MODULE: external ["wp","deprecated"]
var external_wp_deprecated_namespaceObject = window["wp"]["deprecated"];
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_namespaceObject);
;// CONCATENATED MODULE: external ["wp","blockLibrary"]
var external_wp_blockLibrary_namespaceObject = window["wp"]["blockLibrary"];
;// CONCATENATED MODULE: external ["wp","coreData"]
var external_wp_coreData_namespaceObject = window["wp"]["coreData"];
;// CONCATENATED MODULE: external ["wp","widgets"]
var external_wp_widgets_namespaceObject = window["wp"]["widgets"];
;// CONCATENATED MODULE: external ["wp","preferences"]
var external_wp_preferences_namespaceObject = window["wp"]["preferences"];
;// CONCATENATED MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_namespaceObject = window["wp"]["apiFetch"];
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/store/reducer.js
/**
 * WordPress dependencies
 */

/**
 * Controls the open state of the widget areas.
 *
 * @param {Object} state  Redux state.
 * @param {Object} action Redux action.
 *
 * @return {Array} Updated state.
 */

function widgetAreasOpenState(state = {}, action) {
  const {
    type
  } = action;

  switch (type) {
    case 'SET_WIDGET_AREAS_OPEN_STATE':
      {
        return action.widgetAreasOpenState;
      }

    case 'SET_IS_WIDGET_AREA_OPEN':
      {
        const {
          clientId,
          isOpen
        } = action;
        return { ...state,
          [clientId]: isOpen
        };
      }

    default:
      {
        return state;
      }
  }
}
/**
 * Reducer to set the block inserter panel open or closed.
 *
 * Note: this reducer interacts with the list view panel reducer
 * to make sure that only one of the two panels is open at the same time.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 */

function blockInserterPanel(state = false, action) {
  switch (action.type) {
    case 'SET_IS_LIST_VIEW_OPENED':
      return action.isOpen ? false : state;

    case 'SET_IS_INSERTER_OPENED':
      return action.value;
  }

  return state;
}
/**
 * Reducer to set the list view panel open or closed.
 *
 * Note: this reducer interacts with the inserter panel reducer
 * to make sure that only one of the two panels is open at the same time.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 */

function listViewPanel(state = false, action) {
  switch (action.type) {
    case 'SET_IS_INSERTER_OPENED':
      return action.value ? false : state;

    case 'SET_IS_LIST_VIEW_OPENED':
      return action.isOpen;
  }

  return state;
}
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  blockInserterPanel,
  listViewPanel,
  widgetAreasOpenState: reducer_widgetAreasOpenState
}));

;// CONCATENATED MODULE: external ["wp","i18n"]
var external_wp_i18n_namespaceObject = window["wp"]["i18n"];
;// CONCATENATED MODULE: external ["wp","notices"]
var external_wp_notices_namespaceObject = window["wp"]["notices"];
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4403);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: external ["wp","components"]
var external_wp_components_namespaceObject = window["wp"]["components"];
;// CONCATENATED MODULE: external ["wp","primitives"]
var external_wp_primitives_namespaceObject = window["wp"]["primitives"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__("axFQ");

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/store/transformers.js
/**
 * WordPress dependencies
 */


/**
 * Converts a widget entity record into a block.
 *
 * @param {Object} widget The widget entity record.
 * @return {Object} a block (converted from the entity record).
 */

function transformWidgetToBlock(widget) {
  if (widget.id_base === 'block') {
    const parsedBlocks = Object(external_wp_blocks_["parse"])(widget.instance.raw.content);

    if (!parsedBlocks.length) {
      return Object(external_wp_widgets_["addWidgetIdToBlock"])(Object(external_wp_blocks_["createBlock"])('core/paragraph', {}, []), widget.id);
    }

    return Object(external_wp_widgets_["addWidgetIdToBlock"])(parsedBlocks[0], widget.id);
  }

  let attributes;

  if (widget._embedded.about[0].is_multi) {
    attributes = {
      idBase: widget.id_base,
      instance: widget.instance
    };
  } else {
    attributes = {
      id: widget.id
    };
  }

  return Object(external_wp_widgets_["addWidgetIdToBlock"])(Object(external_wp_blocks_["createBlock"])('core/legacy-widget', attributes, []), widget.id);
}
/**
 * Converts a block to a widget entity record.
 *
 * @param {Object}  block         The block.
 * @param {Object?} relatedWidget A related widget entity record from the API (optional).
 * @return {Object} the widget object (converted from block).
 */

function transformBlockToWidget(block) {
  let relatedWidget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let widget;
  const isValidLegacyWidgetBlock = block.name === 'core/legacy-widget' && (block.attributes.id || block.attributes.instance);

  if (isValidLegacyWidgetBlock) {
    var _block$attributes$id, _block$attributes$idB, _block$attributes$ins;

    widget = { ...relatedWidget,
      id: (_block$attributes$id = block.attributes.id) !== null && _block$attributes$id !== void 0 ? _block$attributes$id : relatedWidget.id,
      id_base: (_block$attributes$idB = block.attributes.idBase) !== null && _block$attributes$idB !== void 0 ? _block$attributes$idB : relatedWidget.id_base,
      instance: (_block$attributes$ins = block.attributes.instance) !== null && _block$attributes$ins !== void 0 ? _block$attributes$ins : relatedWidget.instance
    };
  } else {
    widget = { ...relatedWidget,
      id_base: 'block',
      instance: {
        raw: {
          content: Object(external_wp_blocks_["serialize"])(block)
        }
      }
    };
  } // Delete read-only properties.


  delete widget.rendered;
  delete widget.rendered_form;
  return widget;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/actions.js
/**
 * "Kind" of the navigation post.
 *
 * @type {string}
 */
const KIND = 'root';
/**
 * "post type" of the navigation post.
 *
 * @type {string}
 */

const WIDGET_AREA_ENTITY_TYPE = 'sidebar';
/**
 * "post type" of the widget area post.
 *
 * @type {string}
 */

const enableComplementaryArea = (scope, area) => ({
  registry,
  dispatch
}) => {
  // Return early if there's no area.
  if (!area) {
    return;
  }

  const isComplementaryAreaVisible = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'isComplementaryAreaVisible');

  if (!isComplementaryAreaVisible) {
    registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'isComplementaryAreaVisible', true);
  }

  dispatch({
    type: 'ENABLE_COMPLEMENTARY_AREA',
    scope,
    area
  });
};
/**
 * Builds an ID for a new widget area post.
 *
 * @param {string} scope Complementary area scope.
 */

const disableComplementaryArea = scope => ({
  registry
}) => {
  const isComplementaryAreaVisible = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'isComplementaryAreaVisible');

  if (isComplementaryAreaVisible) {
    registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'isComplementaryAreaVisible', false);
  }
};
/**
 * Pins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 *
 * @return {Object} Action object.
 */

const pinItem = (scope, item) => ({
  registry
}) => {
  // Return early if there's no item.
  if (!item) {
    return;
  }

  const pinnedItems = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems'); // The item is already pinned, there's nothing to do.

  if (pinnedItems?.[item] === true) {
    return;
  }

  registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'pinnedItems', { ...pinnedItems,
    [item]: true
  });
};
/**
 * Unpins an item.
 *
 * @param {string} scope Item scope.
 * @param {string} item  Item identifier.
 */

const unpinItem = (scope, item) => ({
  registry
}) => {
  // Return early if there's no item.
  if (!item) {
    return;
  }

  const pinnedItems = registry.select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems');
  registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, 'pinnedItems', { ...pinnedItems,
    [item]: false
  });
};
/**
 * Builds an ID for a global widget areas post.
 *
 * @return {string} An ID.
 */

function toggleFeature(scope, featureName) {
  return function ({
    registry
  }) {
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).toggleFeature`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).toggle`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).toggle(scope, featureName);
  };
}
/**
 * Builds a query to resolve sidebars.
 *
 * @return {Object} Query.
 */

function setFeatureValue(scope, featureName, value) {
  return function ({
    registry
  }) {
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).setFeatureValue`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).set`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).set(scope, featureName, !!value);
  };
}
/**
 * Builds a query to resolve widgets.
 *
 * @return {Object} Query.
 */

function setFeatureDefaults(scope, defaults) {
  return function ({
    registry
  }) {
    external_wp_deprecated_default()(`dispatch( 'core/interface' ).setFeatureDefaults`, {
      since: '6.0',
      alternative: `dispatch( 'core/preferences' ).setDefaults`
    });
    registry.dispatch(external_wp_preferences_namespaceObject.store).setDefaults(scope, defaults);
  };
}
/**
 * Returns an action object used in signalling that the user opened a modal.
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */

function openModal(name) {
  return {
    type: 'OPEN_MODAL',
    name
  };
}
/**
 * Returns an action object signalling that the user closed a modal.
 *
 * @return {Object} Action object.
 */

function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/selectors.js
/**
 * WordPress dependencies
 */



/**
 * Creates a stub post with given id and set of blocks. Used as a governing entity records
 * for all widget areas.
 *
 * @param {string} id     Post ID.
 * @param {Array}  blocks The list of blocks.
 * @return {Object} A stub post object formatted in compliance with the data layer.
 */

const getActiveComplementaryArea = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope) => {
  const isComplementaryAreaVisible = select(external_wp_preferences_namespaceObject.store).get(scope, 'isComplementaryAreaVisible'); // Return `undefined` to indicate that the user has never toggled
  // visibility, this is the vanilla default. Other code relies on this
  // nuance in the return value.

  if (isComplementaryAreaVisible === undefined) {
    return undefined;
  } // Return `null` to indicate the user hid the complementary area.


  if (isComplementaryAreaVisible === false) {
    return null;
  }

  return state?.complementaryAreas?.[scope];
});
const isComplementaryAreaLoading = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope) => {
  const isVisible = select(external_wp_preferences_namespaceObject.store).get(scope, 'isComplementaryAreaVisible');
  const identifier = state?.complementaryAreas?.[scope];
  return isVisible && identifier === undefined;
});

  const pinnedItems = select(external_wp_preferences_namespaceObject.store).get(scope, 'pinnedItems');
  return (_pinnedItems$item = pinnedItems?.[item]) !== null && _pinnedItems$item !== void 0 ? _pinnedItems$item : true;
});
/**
 * Module Constants
 */
const STORE_NAME = 'core/edit-widgets';

const isFeatureActive = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, scope, featureName) => {
  external_wp_deprecated_default()(`select( 'core/interface' ).isFeatureActive( scope, featureName )`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get( scope, featureName )`
  });
  return !!select(external_wp_preferences_namespaceObject.store).get(scope, featureName);
});
/**
 * Returns true if a modal is active, or false otherwise.
 *
 * @param {Object} state     Global application state.
 * @param {string} modalName A string that uniquely identifies the modal.
 *
 * @return {boolean} Whether the modal is active.
 */

function isModalActive(state, modalName) {
  return state.activeModal === modalName;
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/reducer.js
/**
 * WordPress dependencies
 */

function complementaryAreas(state = {}, action) {
  switch (action.type) {
    case 'SET_DEFAULT_COMPLEMENTARY_AREA':
      {
        const {
          scope,
          area
        } = action; // If there's already an area, don't overwrite it.

        if (state[scope]) {
          return state;
        }

        return { ...state,
          [scope]: area
        };
      }


  return state;
}
/**
 * Reducer for storing the name of the open modal, or null if no modal is open.
 *
 * @param {Object} state  Previous state.
 * @param {Object} action Action object containing the `name` of the modal
 *
 * @return {Object} Updated state
 */

function activeModal(state = null, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return action.name;

    case 'CLOSE_MODAL':
      return null;
  }

  return state;
}
/* harmony default export */ var store_reducer = ((0,external_wp_data_namespaceObject.combineReducers)({
  complementaryAreas,
  activeModal
}));



/**
 * Internal dependencies
 */




/**
 * Persists a stub post with given ID to core data store. The post is meant to be in-memory only and
 * shouldn't be saved via the API.
 *
 * @param {string} id     Post ID.
 * @param {Array}  blocks Blocks the post should consist of.
 * @return {Object} The post object.
 */

const persistStubPost = (id, blocks) => _ref => {
  let {
    registry
  } = _ref;
  const stubPost = createStubPost(id, blocks);
  registry.dispatch(external_wp_coreData_["store"]).receiveEntityRecords(KIND, POST_TYPE, stubPost, {
    id: stubPost.id
  }, false);
  return stubPost;
};
/**
 * Converts all the blocks from edited widget areas into widgets,
 * and submits a batch request to save everything at once.
 *
 * Creates a snackbar notice on either success or error.
 *
 * @return {Function} An action creator.
 */

const actions_saveEditedWidgetAreas = () => async _ref2 => {
  let {
    select,
    dispatch,
    registry
  } = _ref2;
  const editedWidgetAreas = select.getEditedWidgetAreas();

/**
 * Converts all the blocks from specified widget areas into widgets,
 * and submits a batch request to save everything at once.
 *
 * @param {Object[]} widgetAreas Widget areas to save.
 * @return {Function} An action creator.
 */

const saveWidgetAreas = widgetAreas => async _ref3 => {
  let {
    dispatch,
    registry
  } = _ref3;

  try {
    for (const widgetArea of widgetAreas) {
      await dispatch.saveWidgetArea(widgetArea.id);
    }
  } finally {
    // saveEditedEntityRecord resets the resolution status, let's fix it manually
    await registry.dispatch(external_wp_coreData_["store"]).finishResolution('getEntityRecord', KIND, WIDGET_AREA_ENTITY_TYPE, buildWidgetAreasQuery());
  }
};
/**
 * Converts all the blocks from a widget area specified by ID into widgets,
 * and submits a batch request to save everything at once.
 *
 * @param {string} widgetAreaId ID of the widget area to process.
 * @return {Function} An action creator.
 */




function ComplementaryAreaToggle({
  as = external_wp_components_namespaceObject.Button,
  scope,
  identifier,
  icon,
  selectedIcon,
  name,
  ...props
}) {
  const ComponentToUse = as;
  const isSelected = (0,external_wp_data_namespaceObject.useSelect)(select => select(store).getActiveComplementaryArea(scope) === identifier, [identifier]);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  return (0,external_wp_element_namespaceObject.createElement)(ComponentToUse, {
    icon: selectedIcon && isSelected ? selectedIcon : icon,
    onClick: () => {
      if (isSelected) {
        disableComplementaryArea(scope);
      } else {
        enableComplementaryArea(scope, identifier);
      }
    },
    ...props
  });
}

  const areaWidgets = Object.values(widgets).filter(_ref5 => {
    let {
      sidebar
    } = _ref5;
    return sidebar === widgetAreaId;
  }); // Remove all duplicate reference widget instances for legacy widgets.
  // Why? We filter out the widgets with duplicate IDs to prevent adding more than one instance of a widget
  // implemented using a function. WordPress doesn't support having more than one instance of these, if you try to
  // save multiple instances of these in different sidebars you will run into undefined behaviors.

  const usedReferenceWidgets = [];
  const widgetsBlocks = post.blocks.filter(block => {
    const {
      id
    } = block.attributes;

    if (block.name === 'core/legacy-widget' && id) {
      if (usedReferenceWidgets.includes(id)) {
        return false;
      }

/**
 * External dependencies
 */

  const deletedWidgets = [];

  for (const widget of areaWidgets) {
    const widgetsNewArea = select.getWidgetAreaForWidgetId(widget.id);

    if (!widgetsNewArea) {
      deletedWidgets.push(widget);
    }
  }

  const batchMeta = [];
  const batchTasks = [];
  const sidebarWidgetsIds = [];

  for (let i = 0; i < widgetsBlocks.length; i++) {
    const block = widgetsBlocks[i];
    const widgetId = Object(external_wp_widgets_["getWidgetIdFromBlock"])(block);
    const oldWidget = widgets[widgetId];
    const widget = transformBlockToWidget(block, oldWidget); // We'll replace the null widgetId after save, but we track it here
    // since order is important.

const ComplementaryAreaHeader = ({
  smallScreenTitle,
  children,
  className,
  toggleButtonProps
}) => {
  const toggleButton = (0,external_wp_element_namespaceObject.createElement)(complementary_area_toggle, {
    icon: close_small,
    ...toggleButtonProps
  });
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "components-panel__header interface-complementary-area-header__small"
  }, smallScreenTitle && (0,external_wp_element_namespaceObject.createElement)("span", {
    className: "interface-complementary-area-header__small-title"
  }, smallScreenTitle), toggleButton), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: classnames_default()('components-panel__header', 'interface-complementary-area-header', className),
    tabIndex: -1
  }, children, toggleButton));
};

    if (oldWidget) {
      // Update an existing widget.
      registry.dispatch(external_wp_coreData_["store"]).editEntityRecord('root', 'widget', widgetId, { ...widget,
        sidebar: widgetAreaId
      }, {
        undoIgnore: true
      });
      const hasEdits = registry.select(external_wp_coreData_["store"]).hasEditsForEntityRecord('root', 'widget', widgetId);

      if (!hasEdits) {
        continue;
      }

      batchTasks.push(_ref6 => {
        let {
          saveEditedEntityRecord
        } = _ref6;
        return saveEditedEntityRecord('root', 'widget', widgetId);
      });
    } else {
      // Create a new widget.
      batchTasks.push(_ref7 => {
        let {
          saveEntityRecord
        } = _ref7;
        return saveEntityRecord('root', 'widget', { ...widget,
          sidebar: widgetAreaId
        });
      });
    }

/**
 * WordPress dependencies
 */

  const records = await registry.dispatch(external_wp_coreData_["store"]).__experimentalBatch(batchTasks);
  const preservedRecords = records.filter(record => !record.hasOwnProperty('deleted'));
  const failedWidgetNames = [];

  for (let i = 0; i < preservedRecords.length; i++) {
    const widget = preservedRecords[i];
    const {
      block,
      position
    } = batchMeta[i]; // Set __internalWidgetId on the block. This will be persisted to the
    // store when we dispatch receiveEntityRecords( post ) below.

    post.blocks[position].attributes.__internalWidgetId = widget.id;
    const error = registry.select(external_wp_coreData_["store"]).getLastEntitySaveError('root', 'widget', widget.id);

function ActionItemSlot({
  name,
  as: Component = external_wp_components_namespaceObject.ButtonGroup,
  fillProps = {},
  bubblesVirtually,
  ...props
}) {
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Slot, {
    name: name,
    bubblesVirtually: bubblesVirtually,
    fillProps: fillProps
  }, fills => {
    if (!external_wp_element_namespaceObject.Children.toArray(fills).length) {
      return null;
    } // Special handling exists for backward compatibility.
    // It ensures that menu items created by plugin authors aren't
    // duplicated with automatically injected menu items coming
    // from pinnable plugin sidebars.
    // @see https://github.com/WordPress/gutenberg/issues/14457

      failedWidgetNames.push(((_block$attributes = block.attributes) === null || _block$attributes === void 0 ? void 0 : _block$attributes.name) || (block === null || block === void 0 ? void 0 : block.name));
    }

    const initializedByPlugins = [];
    external_wp_element_namespaceObject.Children.forEach(fills, ({
      props: {
        __unstableExplicitMenuItem,
        __unstableTarget
      }
    }) => {
      if (__unstableTarget && __unstableExplicitMenuItem) {
        initializedByPlugins.push(__unstableTarget);
      }
    });
    const children = external_wp_element_namespaceObject.Children.map(fills, child => {
      if (!child.props.__unstableExplicitMenuItem && initializedByPlugins.includes(child.props.__unstableTarget)) {
        return null;
      }

      return child;
    });
    return (0,external_wp_element_namespaceObject.createElement)(Component, { ...props
    }, children);
  });
  dispatch(trySaveWidgetArea(widgetAreaId));
  registry.dispatch(external_wp_coreData_["store"]).receiveEntityRecords(KIND, POST_TYPE, post, undefined);
};

function ActionItem({
  name,
  as: Component = external_wp_components_namespaceObject.Button,
  onClick,
  ...props
}) {
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Fill, {
    name: name
  }, ({
    onClick: fpOnClick
  }) => {
    return (0,external_wp_element_namespaceObject.createElement)(Component, {
      onClick: onClick || fpOnClick ? (...args) => {
        (onClick || noop)(...args);
        (fpOnClick || noop)(...args);
      } : undefined,
      ...props
    });
  });
}

ActionItem.Slot = ActionItemSlot;
/* harmony default export */ var action_item = (ActionItem);

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js


/**
 * Sets the clientId stored for a particular widgetId.
 *
 * @param {number} clientId Client id.
 * @param {number} widgetId Widget id.
 *
 * @return {Object} Action.
 */


function setWidgetIdForClientId(clientId, widgetId) {
  return {
    type: 'SET_WIDGET_ID_FOR_CLIENT_ID',
    clientId,
    widgetId
  };
}
/**
 * Sets the open state of all the widget areas.
 *
 * @param {Object} widgetAreasOpenState The open states of all the widget areas.
 *
 * @return {Object} Action.
 */

function setWidgetAreasOpenState(widgetAreasOpenState) {
  return {
    type: 'SET_WIDGET_AREAS_OPEN_STATE',
    widgetAreasOpenState
  };
}
/**
 * Sets the open state of the widget area.
 *
 * @param {string}  clientId The clientId of the widget area.
 * @param {boolean} isOpen   Whether the widget area should be opened.
 *
 * @return {Object} Action.
 */

function actions_setIsWidgetAreaOpen(clientId, isOpen) {
  return {
    type: 'SET_IS_WIDGET_AREA_OPEN',
    clientId,
    isOpen
  };
}
/**
 * Returns an action object used to open/close the inserter.
 *
 * @param {boolean|Object} value                Whether the inserter should be
 *                                              opened (true) or closed (false).
 *                                              To specify an insertion point,
 *                                              use an object.
 * @param {string}         value.rootClientId   The root client ID to insert at.
 * @param {number}         value.insertionIndex The index to insert at.
 *
 * @return {Object} Action object.
 */

function actions_setIsInserterOpened(value) {
  return {
    type: 'SET_IS_INSERTER_OPENED',
    value
  };
}
/**
 * Returns an action object used to open/close the list view.
 *
 * @param {boolean} isOpen A boolean representing whether the list view should be opened or closed.
 * @return {Object} Action object.
 */

function actions_setIsListViewOpened(isOpen) {
  return {
    type: 'SET_IS_LIST_VIEW_OPENED',
    isOpen
  };
}
/**
 * Returns an action object signalling that the user closed the sidebar.
 *
 * @return {Object} Action creator.
 */


const PluginsMenuItem = ({
  // Menu item is marked with unstable prop for backward compatibility.
  // They are removed so they don't leak to DOM elements.
  // @see https://github.com/WordPress/gutenberg/issues/14457
  __unstableExplicitMenuItem,
  __unstableTarget,
  ...restProps
}) => (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, { ...restProps
});

function ComplementaryAreaMoreMenuItem({
  scope,
  target,
  __unstableExplicitMenuItem,
  ...props
}) {
  return (0,external_wp_element_namespaceObject.createElement)(complementary_area_toggle, {
    as: toggleProps => {
      return (0,external_wp_element_namespaceObject.createElement)(action_item, {
        __unstableExplicitMenuItem: __unstableExplicitMenuItem,
        __unstableTarget: `${scope}/${target}`,
        as: PluginsMenuItem,
        name: `${scope}/plugin-more-menu`,
        ...toggleProps
      });
    },
    role: "menuitemcheckbox",
    selectedIcon: library_check,
    name: target,
    scope: scope,
    ...props
  });
}

  const isDestinationWidgetAreaOpen = select.getIsWidgetAreaOpen(destinationRootClientId);

  if (!isDestinationWidgetAreaOpen) {
    dispatch.setIsWidgetAreaOpen(destinationRootClientId, true);
  } // Move the block.


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function PinnedItems({
  scope,
  ...props
}) {
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Fill, {
    name: `PinnedItems/${scope}`,
    ...props
  });
}

function PinnedItemsSlot({
  scope,
  className,
  ...props
}) {
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Slot, {
    name: `PinnedItems/${scope}`,
    ...props
  }, fills => fills?.length > 0 && (0,external_wp_element_namespaceObject.createElement)("div", {
    className: classnames_default()(className, 'interface-pinned-items')
  }, fills));
}

PinnedItems.Slot = PinnedItemsSlot;
/* harmony default export */ var pinned_items = (PinnedItems);

  for (const widget of widgets) {
    const block = transformWidgetToBlock(widget);
    groupedBySidebar[widget.sidebar] = groupedBySidebar[widget.sidebar] || [];
    groupedBySidebar[widget.sidebar].push(block);
  }

  for (const sidebarId in groupedBySidebar) {
    if (groupedBySidebar.hasOwnProperty(sidebarId)) {
      // Persist the actual post containing the widget block
      dispatch(persistStubPost(buildWidgetAreaPostId(sidebarId), groupedBySidebar[sidebarId]));
    }
  }
};

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
 * Returns all API widgets.
 *
 * @return {Object[]} API List of widgets.
 */

const selectors_getWidgets = Object(external_wp_data_["createRegistrySelector"])(select => () => {
  const widgets = select(external_wp_coreData_["store"]).getEntityRecords('root', 'widget', buildWidgetsQuery());
  return Object(external_lodash_["keyBy"])(widgets, 'id');
});
/**
 * Returns API widget data for a particular widget ID.
 *
 * @param {number} id Widget ID.
 *
 * @return {Object} API widget data for a particular widget ID.
 */

const getWidget = Object(external_wp_data_["createRegistrySelector"])(select => (state, id) => {
  const widgets = select(STORE_NAME).getWidgets();
  return widgets[id];
});
/**
 * Returns all API widget areas.
 *
 * @return {Object[]} API List of widget areas.
 */

const selectors_getWidgetAreas = Object(external_wp_data_["createRegistrySelector"])(select => () => {
  const query = buildWidgetAreasQuery();
  return select(external_wp_coreData_["store"]).getEntityRecords(KIND, WIDGET_AREA_ENTITY_TYPE, query);
});
/**
 * Returns widgetArea containing a block identify by given widgetId
 *
 * @param {string} widgetId The ID of the widget.
 * @return {Object} Containing widget area.
 */

const getWidgetAreaForWidgetId = Object(external_wp_data_["createRegistrySelector"])(select => (state, widgetId) => {
  const widgetAreas = select(STORE_NAME).getWidgetAreas();
  return widgetAreas.find(widgetArea => {
    const post = select(external_wp_coreData_["store"]).getEditedEntityRecord(KIND, POST_TYPE, buildWidgetAreaPostId(widgetArea.id));
    const blockWidgetIds = post.blocks.map(block => Object(external_wp_widgets_["getWidgetIdFromBlock"])(block));
    return blockWidgetIds.includes(widgetId);
  });
});
/**
 * Given a child client id, returns the parent widget area block.
 *
 * @param {string} clientId The client id of a block in a widget area.
 *
 * @return {WPBlock} The widget area block.
 */

function ComplementaryAreaSlot({
  scope,
  ...props
}) {
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Slot, {
    name: `ComplementaryArea/${scope}`,
    ...props
  });
}

function ComplementaryAreaFill({
  scope,
  children,
  className
}) {
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Fill, {
    name: `ComplementaryArea/${scope}`
  }, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: className
  }, children));
}

function useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall) {
  const previousIsSmall = (0,external_wp_element_namespaceObject.useRef)(false);
  const shouldOpenWhenNotSmall = (0,external_wp_element_namespaceObject.useRef)(false);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // If the complementary area is active and the editor is switching from
    // a big to a small window size.
    if (isActive && isSmall && !previousIsSmall.current) {
      disableComplementaryArea(scope); // Flag the complementary area to be reopened when the window size
      // goes from small to big.

      shouldOpenWhenNotSmall.current = true;
    } else if ( // If there is a flag indicating the complementary area should be
    // enabled when we go from small to big window size and we are going
    // from a small to big window size.
    shouldOpenWhenNotSmall.current && !isSmall && previousIsSmall.current) {
      // Remove the flag indicating the complementary area should be
      // enabled.
      shouldOpenWhenNotSmall.current = false;
      enableComplementaryArea(scope, identifier);
    } else if ( // If the flag is indicating the current complementary should be
    // reopened but another complementary area becomes active, remove
    // the flag.
    shouldOpenWhenNotSmall.current && activeArea && activeArea !== identifier) {
      shouldOpenWhenNotSmall.current = false;
    }

    function handleDragEnter(event) {
      // Check if the current target is inside the item element.
      if (elementRef.current.contains(event.target)) {
        setIsDraggingWithin(true);
      } else {
        setIsDraggingWithin(false);
      }
    } // Bind these events to the document to catch all drag events.
    // Ideally, we can also use `event.relatedTarget`, but sadly that doesn't work in Safari.


    ownerDocument.addEventListener('dragstart', handleDragStart);
    ownerDocument.addEventListener('dragend', handleDragEnd);
    ownerDocument.addEventListener('dragenter', handleDragEnter);
    return () => {
      ownerDocument.removeEventListener('dragstart', handleDragStart);
      ownerDocument.removeEventListener('dragend', handleDragEnd);
      ownerDocument.removeEventListener('dragenter', handleDragEnter);
    };
  }, []);
  return isDraggingWithin;
};

/* harmony default export */ var use_is_dragging_within = (useIsDraggingWithin);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/blocks/widget-area/edit/inner-blocks.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function WidgetAreaInnerBlocks(_ref) {
  let {
    id
  } = _ref;
  const [blocks, onInput, onChange] = Object(external_wp_coreData_["useEntityBlockEditor"])('root', 'postType');
  const innerBlocksRef = Object(external_wp_element_["useRef"])();
  const isDraggingWithinInnerBlocks = use_is_dragging_within(innerBlocksRef);
  const shouldHighlightDropZone = isDraggingWithinInnerBlocks; // Using the experimental hook so that we can control the className of the element.

  const innerBlocksProps = Object(external_wp_blockEditor_["useInnerBlocksProps"])({
    ref: innerBlocksRef
  }, {
    value: blocks,
    onInput,
    onChange,
    templateLock: false,
    renderAppender: external_wp_blockEditor_["InnerBlocks"].ButtonBlockAppender
  });
  return Object(external_wp_element_["createElement"])("div", {
    "data-widget-area-id": id,
    className: classnames_default()('wp-block-widget-area__inner-blocks block-editor-inner-blocks editor-styles-wrapper', {
      'wp-block-widget-area__highlight-drop-zone': shouldHighlightDropZone
    })
  }, Object(external_wp_element_["createElement"])("div", innerBlocksProps));
}

function ComplementaryArea({
  children,
  className,
  closeLabel = (0,external_wp_i18n_namespaceObject.__)('Close plugin'),
  identifier,
  header,
  headerClassName,
  icon,
  isPinnable = true,
  panelClassName,
  scope,
  name,
  smallScreenTitle,
  title,
  toggleShortcut,
  isActiveByDefault,
  showIconLabels = false
}) {
  const {
    isLoading,
    isActive,
    isPinned,
    activeArea,
    isSmall,
    isLarge
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getActiveComplementaryArea,
      isComplementaryAreaLoading,
      isItemPinned
    } = select(store);

    function handleDragStart() {
      setIsDragging(true);
    }

    return {
      isLoading: isComplementaryAreaLoading(scope),
      isActive: _activeArea === identifier,
      isPinned: isItemPinned(scope, identifier),
      activeArea: _activeArea,
      isSmall: select(external_wp_viewport_namespaceObject.store).isViewportMatch('< medium'),
      isLarge: select(external_wp_viewport_namespaceObject.store).isViewportMatch('large')
    };
  }, [identifier, scope]);
  useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall);
  const {
    enableComplementaryArea,
    disableComplementaryArea,
    pinItem,
    unpinItem
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // Set initial visibility: For large screens, enable if it's active by
    // default. For small screens, always initially disable.
    if (isActiveByDefault && activeArea === undefined && !isSmall) {
      enableComplementaryArea(scope, identifier);
    } else if (activeArea === undefined && isSmall) {
      disableComplementaryArea(scope, identifier);
    }
  }, [activeArea, isActiveByDefault, scope, identifier, isSmall]);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, isPinnable && (0,external_wp_element_namespaceObject.createElement)(pinned_items, {
    scope: scope
  }, isPinned && (0,external_wp_element_namespaceObject.createElement)(complementary_area_toggle, {
    scope: scope,
    identifier: identifier,
    isPressed: isActive && (!showIconLabels || isLarge),
    "aria-expanded": isActive,
    "aria-disabled": isLoading,
    label: title,
    icon: showIconLabels ? library_check : icon,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined
  })), name && isPinnable && (0,external_wp_element_namespaceObject.createElement)(ComplementaryAreaMoreMenuItem, {
    target: name,
    scope: scope,
    icon: icon
  }, title), isActive && (0,external_wp_element_namespaceObject.createElement)(ComplementaryAreaFill, {
    className: classnames_default()('interface-complementary-area', className),
    scope: scope
  }, (0,external_wp_element_namespaceObject.createElement)(complementary_area_header, {
    className: headerClassName,
    closeLabel: closeLabel,
    onClose: () => disableComplementaryArea(scope),
    smallScreenTitle: smallScreenTitle,
    toggleButtonProps: {
      label: closeLabel,
      shortcut: toggleShortcut,
      scope,
      identifier
    }
  },
  supports: {
    html: false,
    inserter: false,
    customClassName: false,
    reusable: false,
    __experimentalToolbar: false,
    __experimentalParentSelector: false
  },
  editorStyle: "wp-block-widget-area-editor",
  style: "wp-block-widget-area"
};

const {
  name: widget_area_name
} = widget_area_metadata;

;// CONCATENATED MODULE: external ["wp","compose"]
var external_wp_compose_namespaceObject = window["wp"]["compose"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/navigable-region/index.js


/**
 * External dependencies
 */

function NavigableRegion({
  children,
  className,
  ariaLabel,
  as: Tag = 'div',
  ...props
}) {
  return (0,external_wp_element_namespaceObject.createElement)(Tag, {
    className: classnames_default()('interface-navigable-region', className),
    "aria-label": ariaLabel,
    role: "region",
    tabIndex: "-1",
    ...props
  }, children);
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/error-boundary/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function useHTMLClass(className) {
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    const element = document && document.querySelector(`html:not(.${className})`);

    if (!element) {
      return;
    }

    element.classList.toggle(className);
    return () => {
      element.classList.toggle(className);
    };
  }, [className]);
}

const headerVariants = {
  hidden: {
    opacity: 0
  },
  hover: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.2,
      delayChildren: 0.2
    }
  },
  distractionFreeInactive: {
    opacity: 1,
    transition: {
      delay: 0
    }
  }
};

function InterfaceSkeleton({
  isDistractionFree,
  footer,
  header,
  editorNotices,
  sidebar,
  secondarySidebar,
  notices,
  content,
  actions,
  labels,
  className,
  enableRegionNavigation = true,
  // Todo: does this need to be a prop.
  // Can we use a dependency to keyboard-shortcuts directly?
  shortcuts
}, ref) {
  const navigateRegionsProps = (0,external_wp_components_namespaceObject.__unstableUseNavigateRegions)(shortcuts);
  useHTMLClass('interface-interface-skeleton__html-container');
  const defaultLabels = {
    /* translators: accessibility text for the top bar landmark region. */
    header: (0,external_wp_i18n_namespaceObject.__)('Header'),

  componentDidCatch(error) {
    this.setState({
      error
    });
  }

  reboot() {
    this.props.onError();
  }

  render() {
    const {
      error
    } = this.state;

    if (!error) {
      return this.props.children;
    }

    return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["Warning"], {
      className: "edit-widgets-error-boundary",
      actions: [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "recovery",
        onClick: this.reboot,
        variant: "secondary"
      }, Object(external_wp_i18n_["__"])('Attempt Recovery')), Object(external_wp_element_["createElement"])(CopyButton, {
        key: "copy-error",
        text: error.stack
      }, Object(external_wp_i18n_["__"])('Copy Error'))]
    }, Object(external_wp_i18n_["__"])('The editor has encountered an unexpected error.'));
  }

    /* translators: accessibility text for the footer landmark region. */
    footer: (0,external_wp_i18n_namespaceObject.__)('Footer')
  };
  const mergedLabels = { ...defaultLabels,
    ...labels
  };
  return (0,external_wp_element_namespaceObject.createElement)("div", { ...(enableRegionNavigation ? navigateRegionsProps : {}),
    ref: (0,external_wp_compose_namespaceObject.useMergeRefs)([ref, enableRegionNavigation ? navigateRegionsProps.ref : undefined]),
    className: classnames_default()(className, 'interface-interface-skeleton', navigateRegionsProps.className, !!footer && 'has-footer')
  }, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "interface-interface-skeleton__editor"
  }, !!header && (0,external_wp_element_namespaceObject.createElement)(NavigableRegion, {
    as: external_wp_components_namespaceObject.__unstableMotion.div,
    className: "interface-interface-skeleton__header",
    "aria-label": mergedLabels.header,
    initial: isDistractionFree ? 'hidden' : 'distractionFreeInactive',
    whileHover: isDistractionFree ? 'hover' : 'distractionFreeInactive',
    animate: isDistractionFree ? 'hidden' : 'distractionFreeInactive',
    variants: headerVariants,
    transition: isDistractionFree ? {
      type: 'tween',
      delay: 0.8
    } : undefined
  }, header), isDistractionFree && (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "interface-interface-skeleton__header"
  }, editorNotices), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "interface-interface-skeleton__body"
  }, !!secondarySidebar && (0,external_wp_element_namespaceObject.createElement)(NavigableRegion, {
    className: "interface-interface-skeleton__secondary-sidebar",
    ariaLabel: mergedLabels.secondarySidebar
  }, secondarySidebar), !!notices && (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "interface-interface-skeleton__notices"
  }, notices), (0,external_wp_element_namespaceObject.createElement)(NavigableRegion, {
    className: "interface-interface-skeleton__content",
    ariaLabel: mergedLabels.body
  }, content), !!sidebar && (0,external_wp_element_namespaceObject.createElement)(NavigableRegion, {
    className: "interface-interface-skeleton__sidebar",
    ariaLabel: mergedLabels.sidebar
  }, sidebar), !!actions && (0,external_wp_element_namespaceObject.createElement)(NavigableRegion, {
    className: "interface-interface-skeleton__actions",
    ariaLabel: mergedLabels.actions
  }, actions))), !!footer && (0,external_wp_element_namespaceObject.createElement)(NavigableRegion, {
    className: "interface-interface-skeleton__footer",
    ariaLabel: mergedLabels.footer
  }, footer));
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","reusableBlocks"]
var external_wp_reusableBlocks_ = __webpack_require__("diJD");

// EXTERNAL MODULE: external ["wp","keyboardShortcuts"]
var external_wp_keyboardShortcuts_ = __webpack_require__("hF7m");

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcuts/index.js
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function KeyboardShortcuts() {
  const {
    redo,
    undo
  } = Object(external_wp_data_["useDispatch"])(external_wp_coreData_["store"]);
  const {
    saveEditedWidgetAreas
  } = Object(external_wp_data_["useDispatch"])(store);
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-widgets/undo', event => {
    undo();
    event.preventDefault();
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-widgets/redo', event => {
    redo();
    event.preventDefault();
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-widgets/save', event => {
    event.preventDefault();
    saveEditedWidgetAreas();
  });
  return null;
}

function KeyboardShortcutsRegister() {
  // Registering the shortcuts
  const {
    registerShortcut
  } = Object(external_wp_data_["useDispatch"])(external_wp_keyboardShortcuts_["store"]);
  Object(external_wp_element_["useEffect"])(() => {
    registerShortcut({
      name: 'core/edit-widgets/undo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/redo',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/save',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/keyboard-shortcuts',
      category: 'main',
      description: Object(external_wp_i18n_["__"])('Display these keyboard shortcuts.'),
      keyCombination: {
        modifier: 'access',
        character: 'h'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/next-region',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Navigate to the next part of the editor.'),
      keyCombination: {
        modifier: 'ctrl',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'n'
      }]
    });
    registerShortcut({
      name: 'core/edit-widgets/previous-region',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Navigate to the previous part of the editor.'),
      keyCombination: {
        modifier: 'ctrlShift',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'p'
      }]
    });
  }, [registerShortcut]);
  return null;
}

KeyboardShortcuts.Register = KeyboardShortcutsRegister;
/* harmony default export */ var keyboard_shortcuts = (KeyboardShortcuts);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/hooks/use-last-selected-widget-area.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function MoreMenuDropdown({
  as: DropdownComponent = external_wp_components_namespaceObject.DropdownMenu,
  className,

  /* translators: button label text should, if possible, be under 16 characters. */
  label = (0,external_wp_i18n_namespaceObject.__)('Options'),
  popoverProps,
  toggleProps,
  children
}) {
  return (0,external_wp_element_namespaceObject.createElement)(DropdownComponent, {
    className: classnames_default()('interface-more-menu-dropdown', className),
    icon: more_vertical,
    label: label,
    popoverProps: {
      placement: 'bottom-end',
      ...popoverProps,
      className: classnames_default()('interface-more-menu-dropdown__content', popoverProps?.className)
    },
    toggleProps: {
      tooltipPosition: 'bottom',
      ...toggleProps
    }
  }, onClose => children(onClose));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/index.js


/**
 * A react hook that returns the client id of the last widget area to have
 * been selected, or to have a selected block within it.
 *
 * @return {string} clientId of the widget area last selected.
 */

const useLastSelectedWidgetArea = () => Object(external_wp_data_["useSelect"])(select => {
  var _widgetAreasPost$bloc;

  const {
    getBlockSelectionEnd,
    getBlockName
  } = select(external_wp_blockEditor_["store"]);
  const selectionEndClientId = getBlockSelectionEnd(); // If the selected block is a widget area, return its clientId.

  if (getBlockName(selectionEndClientId) === 'core/widget-area') {
    return selectionEndClientId;
  }

  const {
    getParentWidgetAreaBlock
  } = select(store);
  const widgetAreaBlock = getParentWidgetAreaBlock(selectionEndClientId);
  const widgetAreaBlockClientId = widgetAreaBlock === null || widgetAreaBlock === void 0 ? void 0 : widgetAreaBlock.clientId;

  if (widgetAreaBlockClientId) {
    return widgetAreaBlockClientId;
  } // If no widget area has been selected, return the clientId of the first
  // area.


  const {
    getEntityRecord
  } = select(external_wp_coreData_["store"]);
  const widgetAreasPost = getEntityRecord(KIND, POST_TYPE, buildWidgetAreasPostId());
  return widgetAreasPost === null || widgetAreasPost === void 0 ? void 0 : (_widgetAreasPost$bloc = widgetAreasPost.blocks[0]) === null || _widgetAreasPost$bloc === void 0 ? void 0 : _widgetAreasPost$bloc.clientId;
}, []);

/* harmony default export */ var use_last_selected_widget_area = (useLastSelectedWidgetArea);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/constants.js
const ALLOW_REUSABLE_BLOCKS = false;
const ENABLE_EXPERIMENTAL_FSE_BLOCKS = false;

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-provider/index.js


;// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */

function transformBlockToWidget(block, relatedWidget = {}) {
  let widget;
  const isValidLegacyWidgetBlock = block.name === 'core/legacy-widget' && (block.attributes.id || block.attributes.instance);






function WidgetAreasBlockEditorProvider(_ref) {
  let {
    blockEditorSettings,
    children,
    ...props
  } = _ref;
  const {
    hasUploadPermissions,
    reusableBlocks,
    isFixedToolbarActive,
    keepCaretInsideBlock
  } = Object(external_wp_data_["useSelect"])(select => ({
    hasUploadPermissions: Object(external_lodash_["defaultTo"])(select(external_wp_coreData_["store"]).canUser('create', 'media'), true),
    widgetAreas: select(store).getWidgetAreas(),
    widgets: select(store).getWidgets(),
    reusableBlocks: ALLOW_REUSABLE_BLOCKS ? select(external_wp_coreData_["store"]).getEntityRecords('postType', 'wp_block') : [],
    isFixedToolbarActive: select(build_module["i" /* store */]).isFeatureActive('core/edit-widgets', 'fixedToolbar'),
    keepCaretInsideBlock: select(build_module["i" /* store */]).isFeatureActive('core/edit-widgets', 'keepCaretInsideBlock')
  }), []);
  const {
    setIsInserterOpened
  } = Object(external_wp_data_["useDispatch"])(store);
  const settings = Object(external_wp_element_["useMemo"])(() => {
    let mediaUploadBlockEditor;

    if (hasUploadPermissions) {
      mediaUploadBlockEditor = _ref2 => {
        let {
          onError,
          ...argumentsObject
        } = _ref2;
        Object(external_wp_mediaUtils_["uploadMedia"])({
          wpAllowedMimeTypes: blockEditorSettings.allowedMimeTypes,
          onError: _ref3 => {
            let {
              message
            } = _ref3;
            return onError(message);
          },
          ...argumentsObject
        });
      };
    }

    return { ...blockEditorSettings,
      __experimentalReusableBlocks: reusableBlocks,
      hasFixedToolbar: isFixedToolbarActive,
      keepCaretInsideBlock,
      mediaUpload: mediaUploadBlockEditor,
      templateLock: 'all',
      __experimentalSetIsInserterOpened: setIsInserterOpened
    };
  }, [blockEditorSettings, isFixedToolbarActive, keepCaretInsideBlock, hasUploadPermissions, reusableBlocks, setIsInserterOpened]);
  const widgetAreaId = use_last_selected_widget_area();
  const [blocks, onInput, onChange] = Object(external_wp_coreData_["useEntityBlockEditor"])(KIND, POST_TYPE, {
    id: buildWidgetAreasPostId()
  });
  return Object(external_wp_element_["createElement"])(external_wp_keyboardShortcuts_["ShortcutProvider"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorKeyboardShortcuts"].Register, null), Object(external_wp_element_["createElement"])(keyboard_shortcuts.Register, null), Object(external_wp_element_["createElement"])(external_wp_components_["SlotFillProvider"], null, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockEditorProvider"], Object(esm_extends["a" /* default */])({
    value: blocks,
    onInput: onInput,
    onChange: onChange,
    settings: settings,
    useSubRegistry: false
  }, props), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["CopyHandler"], null, children), Object(external_wp_element_["createElement"])(external_wp_reusableBlocks_["ReusableBlocksMenuItems"], {
    rootClientId: widgetAreaId
  }))));
}

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/cog.js
var cog = __webpack_require__("Cg8A");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/block-default.js
var block_default = __webpack_require__("//Lo");

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// EXTERNAL MODULE: external ["wp","dom"]
var external_wp_dom_ = __webpack_require__("1CF3");

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/sidebar/widget-areas.js


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */

const persistStubPost = (id, blocks) => ({
  registry
}) => {
  const stubPost = createStubPost(id, blocks);
  registry.dispatch(external_wp_coreData_namespaceObject.store).receiveEntityRecords(KIND, POST_TYPE, stubPost, {
    id: stubPost.id
  }, false);
  return stubPost;
};
/**
 * Converts all the blocks from edited widget areas into widgets,
 * and submits a batch request to save everything at once.
 *
 * Creates a snackbar notice on either success or error.
 *
 * @return {Function} An action creator.
 */

const saveEditedWidgetAreas = () => async ({
  select,
  dispatch,
  registry
}) => {
  const editedWidgetAreas = select.getEditedWidgetAreas();

  if (!editedWidgetAreas?.length) {
    return;
  }

/**
 * External dependencies
 */

const saveWidgetAreas = widgetAreas => async ({
  dispatch,
  registry
}) => {
  try {
    for (const widgetArea of widgetAreas) {
      await dispatch.saveWidgetArea(widgetArea.id);
    }
  } finally {
    // saveEditedEntityRecord resets the resolution status, let's fix it manually.
    await registry.dispatch(external_wp_coreData_namespaceObject.store).finishResolution('getEntityRecord', KIND, WIDGET_AREA_ENTITY_TYPE, buildWidgetAreasQuery());
  }
};
/**
 * Internal dependencies
 */

const saveWidgetArea = widgetAreaId => async ({
  dispatch,
  select,
  registry
}) => {
  const widgets = select.getWidgets();
  const post = registry.select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord(KIND, POST_TYPE, buildWidgetAreaPostId(widgetAreaId)); // Get all widgets from this area

  const areaWidgets = Object.values(widgets).filter(({
    sidebar
  }) => sidebar === widgetAreaId); // Remove all duplicate reference widget instances for legacy widgets.
  // Why? We filter out the widgets with duplicate IDs to prevent adding more than one instance of a widget
  // implemented using a function. WordPress doesn't support having more than one instance of these, if you try to
  // save multiple instances of these in different sidebars you will run into undefined behaviors.


function ComplementaryAreaTab(_ref) {
  let {
    identifier,
    label,
    isActive
  } = _ref;
  const {
    enableComplementaryArea
  } = Object(external_wp_data_["useDispatch"])(build_module["i" /* store */]);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: () => enableComplementaryArea(store.name, identifier),
    className: classnames_default()('edit-widgets-sidebar__panel-tab', {
      'is-active': isActive
    }),
    "aria-label": isActive ? // translators: %s: sidebar label e.g: "Widget Areas".
    Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s (selected)'), label) : label,
    "data-label": label
  }, label);
}

function Sidebar() {
  const {
    enableComplementaryArea
  } = Object(external_wp_data_["useDispatch"])(build_module["i" /* store */]);
  const {
    currentArea,
    hasSelectedNonAreaBlock,
    isGeneralSidebarOpen,
    selectedWidgetAreaBlock
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getSelectedBlock,
      getBlock,
      getBlockParentsByBlockName
    } = select(external_wp_blockEditor_["store"]);
    const {
      getActiveComplementaryArea
    } = select(build_module["i" /* store */]);
    const selectedBlock = getSelectedBlock();
    const activeArea = getActiveComplementaryArea(store.name);
    let currentSelection = activeArea;

    if (!currentSelection) {
      if (selectedBlock) {
        currentSelection = BLOCK_INSPECTOR_IDENTIFIER;
      } else {
        currentSelection = WIDGET_AREAS_IDENTIFIER;
      }
    }

    let widgetAreaBlock;

    if (selectedBlock) {
      if (selectedBlock.name === 'core/widget-area') {
        widgetAreaBlock = selectedBlock;
      } else {
        widgetAreaBlock = getBlock(getBlockParentsByBlockName(selectedBlock.clientId, 'core/widget-area')[0]);
      }
    }

    return {
      currentArea: currentSelection,
      hasSelectedNonAreaBlock: !!(selectedBlock && selectedBlock.name !== 'core/widget-area'),
      isGeneralSidebarOpen: !!activeArea,
      selectedWidgetAreaBlock: widgetAreaBlock
    };
  }, []); // currentArea, and isGeneralSidebarOpen are intentionally left out from the dependencies,
  // because we want to run the effect when a block is selected/unselected and not when the sidebar state changes.

  Object(external_wp_element_["useEffect"])(() => {
    if (hasSelectedNonAreaBlock && currentArea === WIDGET_AREAS_IDENTIFIER && isGeneralSidebarOpen) {
      enableComplementaryArea('core/edit-widgets', BLOCK_INSPECTOR_IDENTIFIER);
    }

    if (!hasSelectedNonAreaBlock && currentArea === BLOCK_INSPECTOR_IDENTIFIER && isGeneralSidebarOpen) {
      enableComplementaryArea('core/edit-widgets', WIDGET_AREAS_IDENTIFIER);
    }
  }, [hasSelectedNonAreaBlock, enableComplementaryArea]);
  return Object(external_wp_element_["createElement"])(build_module["b" /* ComplementaryArea */], {
    className: "edit-widgets-sidebar",
    header: Object(external_wp_element_["createElement"])("ul", null, Object(external_wp_element_["createElement"])("li", null, Object(external_wp_element_["createElement"])(ComplementaryAreaTab, {
      identifier: WIDGET_AREAS_IDENTIFIER,
      label: selectedWidgetAreaBlock ? selectedWidgetAreaBlock.attributes.name : Object(external_wp_i18n_["__"])('Widget Areas'),
      isActive: currentArea === WIDGET_AREAS_IDENTIFIER
    })), Object(external_wp_element_["createElement"])("li", null, Object(external_wp_element_["createElement"])(ComplementaryAreaTab, {
      identifier: BLOCK_INSPECTOR_IDENTIFIER,
      label: Object(external_wp_i18n_["__"])('Block'),
      isActive: currentArea === BLOCK_INSPECTOR_IDENTIFIER
    }))),
    headerClassName: "edit-widgets-sidebar__panel-tabs"
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    title: Object(external_wp_i18n_["__"])('Settings'),
    closeLabel: Object(external_wp_i18n_["__"])('Close settings'),
    scope: "core/edit-widgets",
    identifier: currentArea,
    icon: cog["a" /* default */],
    isActiveByDefault: SIDEBAR_ACTIVE_BY_DEFAULT
  }, currentArea === WIDGET_AREAS_IDENTIFIER && Object(external_wp_element_["createElement"])(WidgetAreas, {
    selectedWidgetAreaId: selectedWidgetAreaBlock === null || selectedWidgetAreaBlock === void 0 ? void 0 : selectedWidgetAreaBlock.attributes.id
  }), currentArea === BLOCK_INSPECTOR_IDENTIFIER && (hasSelectedNonAreaBlock ? Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockInspector"], null) : // Pretend that Widget Areas are part of the UI by not
  // showing the Block Inspector when one is selected.
  Object(external_wp_element_["createElement"])("span", {
    className: "block-editor-block-inspector__no-blocks"
  }, Object(external_wp_i18n_["__"])('No block selected.'))));
}

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/plus.js
var plus = __webpack_require__("Q4Sy");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/list-view.js
var list_view = __webpack_require__("OzlF");

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/save-button/index.js


      batchTasks.push(({
        saveEditedEntityRecord
      }) => saveEditedEntityRecord('root', 'widget', widgetId));
    } else {
      // Create a new widget.
      batchTasks.push(({
        saveEntityRecord
      }) => saveEntityRecord('root', 'widget', { ...widget,
        sidebar: widgetAreaId
      }));
    }


  for (const widget of deletedWidgets) {
    batchTasks.push(({
      deleteEntityRecord
    }) => deleteEntityRecord('root', 'widget', widget.id, {
      force: true
    }));
  }

/**
 * Internal dependencies
 */



function SaveButton() {
  const {
    hasEditedWidgetAreaIds,
    isSaving
  } = Object(external_wp_data_["useSelect"])(select => {
    var _getEditedWidgetAreas;

    const {
      getEditedWidgetAreas,
      isSavingWidgetAreas
    } = select(store);
    return {
      hasEditedWidgetAreaIds: ((_getEditedWidgetAreas = getEditedWidgetAreas()) === null || _getEditedWidgetAreas === void 0 ? void 0 : _getEditedWidgetAreas.length) > 0,
      isSaving: isSavingWidgetAreas()
    };
  }, []);
  const {
    saveEditedWidgetAreas
  } = Object(external_wp_data_["useDispatch"])(store);
  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    variant: "primary",
    isBusy: isSaving,
    "aria-disabled": isSaving,
    onClick: isSaving ? undefined : saveEditedWidgetAreas,
    disabled: !hasEditedWidgetAreaIds
  }, isSaving ? Object(external_wp_i18n_["__"])('Saving…') : Object(external_wp_i18n_["__"])('Update'));
}

/* harmony default export */ var save_button = (SaveButton);

    if (error) {
      failedWidgetNames.push(block.attributes?.name || block?.name);
    }

// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__("RxS6");

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/header/undo-redo/undo.js


const trySaveWidgetArea = widgetAreaId => ({
  registry
}) => {
  registry.dispatch(external_wp_coreData_namespaceObject.store).saveEditedEntityRecord(KIND, WIDGET_AREA_ENTITY_TYPE, widgetAreaId, {
    throwOnError: true
  });
};
/**
 * WordPress dependencies
 */






function UndoButton() {
  const hasUndo = Object(external_wp_data_["useSelect"])(select => select(external_wp_coreData_["store"]).hasUndo(), []);
  const {
    undo
  } = Object(external_wp_data_["useDispatch"])(external_wp_coreData_["store"]);
  return Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarButton"], {
    icon: !Object(external_wp_i18n_["isRTL"])() ? library_undo["a" /* default */] : library_redo["a" /* default */],
    label: Object(external_wp_i18n_["__"])('Undo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primary('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasUndo,
    onClick: hasUndo ? undo : undefined
  });
}

const closeGeneralSidebar = () => ({
  registry
}) => {
  registry.dispatch(store).disableComplementaryArea(constants_STORE_NAME);
};
/**
 * WordPress dependencies
 */

const moveBlockToWidgetArea = (clientId, widgetAreaId) => async ({
  dispatch,
  select,
  registry
}) => {
  const sourceRootClientId = registry.select(external_wp_blockEditor_namespaceObject.store).getBlockRootClientId(clientId); // Search the top level blocks (widget areas) for the one with the matching
  // id attribute. Makes the assumption that all top-level blocks are widget
  // areas.

  const widgetAreas = registry.select(external_wp_blockEditor_namespaceObject.store).getBlocks();
  const destinationWidgetAreaBlock = widgetAreas.find(({
    attributes
  }) => attributes.id === widgetAreaId);
  const destinationRootClientId = destinationWidgetAreaBlock.clientId; // Get the index for moving to the end of the destination widget area.




function RedoButton() {
  const hasRedo = Object(external_wp_data_["useSelect"])(select => select(external_wp_coreData_["store"]).hasRedo(), []);
  const {
    redo
  } = Object(external_wp_data_["useDispatch"])(external_wp_coreData_["store"]);
  return Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarButton"], {
    icon: !Object(external_wp_i18n_["isRTL"])() ? library_redo["a" /* default */] : library_undo["a" /* default */],
    label: Object(external_wp_i18n_["__"])('Redo'),
    shortcut: external_wp_keycodes_["displayShortcut"].primaryShift('z') // If there are no undo levels we don't want to actually disable this
    // button, because it will remove focus for keyboard users.
    // See: https://github.com/WordPress/gutenberg/issues/3486
    ,
    "aria-disabled": !hasRedo,
    onClick: hasRedo ? redo : undefined
  });
}

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js
var external = __webpack_require__("K+tz");

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/config.js
/**
 * WordPress dependencies
 */

const textFormattingShortcuts = [{
  keyCombination: {
    modifier: 'primary',
    character: 'b'
  },
  description: Object(external_wp_i18n_["__"])('Make the selected text bold.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'i'
  },
  description: Object(external_wp_i18n_["__"])('Make the selected text italic.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'k'
  },
  description: Object(external_wp_i18n_["__"])('Convert the selected text into a link.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'k'
  },
  description: Object(external_wp_i18n_["__"])('Remove a link.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'u'
  },
  description: Object(external_wp_i18n_["__"])('Underline the selected text.')
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js


/**
 * External dependencies
 */

const getWidgetAreas = () => async ({
  dispatch,
  registry
}) => {
  const query = buildWidgetAreasQuery();
  const widgetAreas = await registry.resolveSelect(external_wp_coreData_namespaceObject.store).getEntityRecords(KIND, WIDGET_AREA_ENTITY_TYPE, query);
  const widgetAreaBlocks = [];
  const sortedWidgetAreas = widgetAreas.sort((a, b) => {
    if (a.id === 'wp_inactive_widgets') {
      return 1;
    }




function KeyCombination(_ref) {
  let {
    keyCombination,
    forceAriaLabel
  } = _ref;
  const shortcut = keyCombination.modifier ? external_wp_keycodes_["displayShortcutList"][keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? external_wp_keycodes_["shortcutAriaLabel"][keyCombination.modifier](keyCombination.character) : keyCombination.character;
  return Object(external_wp_element_["createElement"])("kbd", {
    className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, Object(external_lodash_["castArray"])(shortcut).map((character, index) => {
    if (character === '+') {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
        key: index
      }, character);
    }

    return Object(external_wp_element_["createElement"])("kbd", {
      key: index,
      className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-key"
    }, character);
  }));
}

const getWidgets = () => async ({
  dispatch,
  registry
}) => {
  const query = buildWidgetsQuery();
  const widgets = await registry.resolveSelect(external_wp_coreData_namespaceObject.store).getEntityRecords('root', 'widget', query);
  const groupedBySidebar = {};

/* harmony default export */ var keyboard_shortcut_help_modal_shortcut = (Shortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function DynamicShortcut(_ref) {
  let {
    name
  } = _ref;
  const {
    keyCombination,
    description,
    aliases
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      getShortcutKeyCombination,
      getShortcutDescription,
      getShortcutAliases
    } = select(external_wp_keyboardShortcuts_["store"]);
    return {
      keyCombination: getShortcutKeyCombination(name),
      aliases: getShortcutAliases(name),
      description: getShortcutDescription(name)
    };
  }, [name]);

const selectors_getWidgets = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => () => {
  const widgets = select(external_wp_coreData_namespaceObject.store).getEntityRecords('root', 'widget', buildWidgetsQuery());
  return (// Key widgets by their ID.
    widgets?.reduce((allWidgets, widget) => ({ ...allWidgets,
      [widget.id]: widget
    }), {}) || {}
  );
});
/**
 * Returns API widget data for a particular widget ID.
 *
 * @param {number} id Widget ID.
 *
 * @return {Object} API widget data for a particular widget ID.
 */

  return Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_shortcut, {
    keyCombination: keyCombination,
    description: description,
    aliases: aliases
  });
}

/* harmony default export */ var dynamic_shortcut = (DynamicShortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcut-help-modal/index.js


/**
 * External dependencies
 */


  if (!widgetAreas) {
    return [];
  }

  if (ids) {
    widgetAreas = widgetAreas.filter(({
      id
    }) => ids.includes(id));
  }

  return widgetAreas.filter(({
    id
  }) => select(external_wp_coreData_namespaceObject.store).hasEditsForEntityRecord(KIND, POST_TYPE, buildWidgetAreaPostId(id))).map(({
    id
  }) => select(external_wp_coreData_namespaceObject.store).getEditedEntityRecord(KIND, WIDGET_AREA_ENTITY_TYPE, id));
});
/**
 * WordPress dependencies
 */

const getReferenceWidgetBlocks = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => (state, referenceWidgetName = null) => {
  const results = [];
  const widgetAreas = select(constants_STORE_NAME).getWidgetAreas();


    for (const block of post.blocks) {
      if (block.name === 'core/legacy-widget' && (!referenceWidgetName || block.attributes?.referenceWidgetName === referenceWidgetName)) {
        results.push(block);
      }
    }
  }

/**
 * Internal dependencies
 */

const isSavingWidgetAreas = (0,external_wp_data_namespaceObject.createRegistrySelector)(select => () => {
  const widgetAreasIds = select(constants_STORE_NAME).getWidgetAreas()?.map(({
    id
  }) => id);

  if (!widgetAreasIds) {
    return false;
  }

  for (const id of widgetAreasIds) {
    const isSaving = select(external_wp_coreData_namespaceObject.store).isSavingEntityRecord(KIND, WIDGET_AREA_ENTITY_TYPE, id);




const ShortcutList = _ref => {
  let {
    shortcuts
  } = _ref;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_wp_element_["createElement"])("ul", {
      className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-list",
      role: "list"
    }, shortcuts.map((shortcut, index) => Object(external_wp_element_["createElement"])("li", {
      className: "edit-widgets-keyboard-shortcut-help-modal__shortcut",
      key: index
    }, Object(external_lodash_["isString"])(shortcut) ? Object(external_wp_element_["createElement"])(dynamic_shortcut, {
      name: shortcut
    }) : Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_shortcut, shortcut))))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
};

const ShortcutSection = _ref2 => {
  let {
    title,
    shortcuts,
    className
  } = _ref2;
  return Object(external_wp_element_["createElement"])("section", {
    className: classnames_default()('edit-widgets-keyboard-shortcut-help-modal__section', className)
  }, !!title && Object(external_wp_element_["createElement"])("h2", {
    className: "edit-widgets-keyboard-shortcut-help-modal__section-title"
  }, title), Object(external_wp_element_["createElement"])(ShortcutList, {
    shortcuts: shortcuts
  }));
};

const ShortcutCategorySection = _ref3 => {
  let {
    title,
    categoryName,
    additionalShortcuts = []
  } = _ref3;
  const categoryShortcuts = Object(external_wp_data_["useSelect"])(select => {
    return select(external_wp_keyboardShortcuts_["store"]).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return Object(external_wp_element_["createElement"])(ShortcutSection, {
    title: title,
    shortcuts: categoryShortcuts.concat(additionalShortcuts)
  });
};

function KeyboardShortcutHelpModal(_ref4) {
  let {
    isModalActive,
    toggleModal
  } = _ref4;
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-widgets/keyboard-shortcuts', toggleModal, {
    bindGlobal: true
  });

  if (!isModalActive) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    className: "edit-widgets-keyboard-shortcut-help-modal",
    title: Object(external_wp_i18n_["__"])('Keyboard shortcuts'),
    closeLabel: Object(external_wp_i18n_["__"])('Close'),
    onRequestClose: toggleModal
  }, Object(external_wp_element_["createElement"])(ShortcutSection, {
    className: "edit-widgets-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/edit-widgets/keyboard-shortcuts']
  }), Object(external_wp_element_["createElement"])(ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Global shortcuts'),
    categoryName: "global"
  }), Object(external_wp_element_["createElement"])(ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Selection shortcuts'),
    categoryName: "selection"
  }), Object(external_wp_element_["createElement"])(ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Block shortcuts'),
    categoryName: "block",
    additionalShortcuts: [{
      keyCombination: {
        character: '/'
      },
      description: Object(external_wp_i18n_["__"])('Change the block type after adding a new paragraph.'),

      /* translators: The forward-slash character. e.g. '/'. */
      ariaLabel: Object(external_wp_i18n_["__"])('Forward-slash')
    }]
  }), Object(external_wp_element_["createElement"])(ShortcutSection, {
    title: Object(external_wp_i18n_["__"])('Text formatting'),
    shortcuts: textFormattingShortcuts
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/more-menu/index.js


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


external_wp_apiFetch_default().use(function (options, next) {
  if (options.path?.indexOf('/wp/v2/types/widget-area') === 0) {
    return Promise.resolve({});
  }

  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-widgets/keyboard-shortcuts', toggleKeyboardShortcutsModal);
  const isLargeViewport = Object(external_wp_compose_["useViewportMatch"])('medium');
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(build_module["f" /* MoreMenuDropdown */], null, () => Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, isLargeViewport && Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    label: Object(external_wp_i18n_["_x"])('View', 'noun')
  }, Object(external_wp_element_["createElement"])(build_module["g" /* MoreMenuFeatureToggle */], {
    scope: "core/edit-widgets",
    feature: "fixedToolbar",
    label: Object(external_wp_i18n_["__"])('Top toolbar'),
    info: Object(external_wp_i18n_["__"])('Access all block and document tools in a single place'),
    messageActivated: Object(external_wp_i18n_["__"])('Top toolbar activated'),
    messageDeactivated: Object(external_wp_i18n_["__"])('Top toolbar deactivated')
  })), Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    label: Object(external_wp_i18n_["__"])('Tools')
  }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    onClick: () => {
      setIsKeyboardShortcutsModalVisible(true);
    },
    shortcut: external_wp_keycodes_["displayShortcut"].access('h')
  }, Object(external_wp_i18n_["__"])('Keyboard shortcuts')), Object(external_wp_element_["createElement"])(build_module["g" /* MoreMenuFeatureToggle */], {
    scope: "core/edit-widgets",
    feature: "welcomeGuide",
    label: Object(external_wp_i18n_["__"])('Welcome Guide')
  }), Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    role: "menuitem",
    icon: external["a" /* default */],
    href: Object(external_wp_i18n_["__"])('https://wordpress.org/support/article/block-based-widgets-editor/'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, Object(external_wp_i18n_["__"])('Help'), Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
    as: "span"
  },
  /* translators: accessibility text */
  Object(external_wp_i18n_["__"])('(opens in a new tab)')))), Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    label: Object(external_wp_i18n_["__"])('Preferences')
  }, Object(external_wp_element_["createElement"])(build_module["g" /* MoreMenuFeatureToggle */], {
    scope: "core/edit-widgets",
    feature: "keepCaretInsideBlock",
    label: Object(external_wp_i18n_["__"])('Contain text cursor inside block'),
    info: Object(external_wp_i18n_["__"])('Aids screen readers by stopping text caret from leaving blocks.'),
    messageActivated: Object(external_wp_i18n_["__"])('Contain text cursor inside block activated'),
    messageDeactivated: Object(external_wp_i18n_["__"])('Contain text cursor inside block deactivated')
  }), Object(external_wp_element_["createElement"])(build_module["g" /* MoreMenuFeatureToggle */], {
    scope: "core/edit-widgets",
    feature: "themeStyles",
    info: Object(external_wp_i18n_["__"])('Make the editor look like your theme.'),
    label: Object(external_wp_i18n_["__"])('Use theme styles')
  }), isLargeViewport && Object(external_wp_element_["createElement"])(build_module["g" /* MoreMenuFeatureToggle */], {
    scope: "core/edit-widgets",
    feature: "showBlockBreadcrumbs",
    label: Object(external_wp_i18n_["__"])('Display block breadcrumbs'),
    info: Object(external_wp_i18n_["__"])('Shows block breadcrumbs at the bottom of the editor.'),
    messageActivated: Object(external_wp_i18n_["__"])('Display block breadcrumbs activated'),
    messageDeactivated: Object(external_wp_i18n_["__"])('Display block breadcrumbs deactivated')
  })))), Object(external_wp_element_["createElement"])(KeyboardShortcutHelpModal, {
    isModalActive: isKeyboardShortcutsModalActive,
    toggleModal: toggleKeyboardShortcutsModal
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/header/index.js


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


const withMoveToWidgetAreaToolbarItem = (0,external_wp_compose_namespaceObject.createHigherOrderComponent)(BlockEdit => props => {
  const {
    clientId,
    name: blockName
  } = props;
  const {
    widgetAreas,
    currentWidgetAreaId,
    canInsertBlockInWidgetArea
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    // Component won't display for a widget area, so don't run selectors.
    if (blockName === 'core/widget-area') {
      return {};
    }





function Header() {
  const isMediumViewport = Object(external_wp_compose_["useViewportMatch"])('medium');
  const inserterButton = Object(external_wp_element_["useRef"])();
  const widgetAreaClientId = use_last_selected_widget_area();
  const isLastSelectedWidgetAreaOpen = Object(external_wp_data_["useSelect"])(select => select(store).getIsWidgetAreaOpen(widgetAreaClientId), [widgetAreaClientId]);
  const {
    isInserterOpen,
    isListViewOpen
  } = Object(external_wp_data_["useSelect"])(select => {
    const {
      isInserterOpened,
      isListViewOpened
    } = select(store);
    return {
      widgetAreas: selectors.getWidgetAreas(),
      currentWidgetAreaId: widgetAreaBlock?.attributes?.id,
      canInsertBlockInWidgetArea: selectors.canInsertBlockInWidgetArea(blockName)
    };
  }, []);
  const {
    moveBlockToWidgetArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const hasMultipleWidgetAreas = widgetAreas?.length > 1;
  const isMoveToWidgetAreaVisible = blockName !== 'core/widget-area' && hasMultipleWidgetAreas && canInsertBlockInWidgetArea;
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(BlockEdit, { ...props
  }), isMoveToWidgetAreaVisible && (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockControls, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_widgets_namespaceObject.MoveToWidgetArea, {
    widgetAreas: widgetAreas,
    currentWidgetAreaId: currentWidgetAreaId,
    onSelect: widgetAreaId => {
      moveBlockToWidgetArea(props.clientId, widgetAreaId);
    }
  })));
}, 'withMoveToWidgetAreaToolbarItem');
(0,external_wp_hooks_namespaceObject.addFilter)('editor.BlockEdit', 'core/edit-widgets/block-edit', withMoveToWidgetAreaToolbarItem);

  const handleClick = () => {
    if (isInserterOpen) {
      // Focusing the inserter button closes the inserter popover
      setIsInserterOpened(false);
    } else {
      if (!isLastSelectedWidgetAreaOpen) {
        // Select the last selected block if hasn't already.
        selectBlock(widgetAreaClientId); // Open the last selected widget area when opening the inserter.

        setIsWidgetAreaOpen(widgetAreaClientId, true);
      } // The DOM updates resulting from selectBlock() and setIsInserterOpened() calls are applied the
      // same tick and pretty much in a random order. The inserter is closed if any other part of the
      // app receives focus. If selectBlock() happens to take effect after setIsInserterOpened() then
      // the inserter is visible for a brief moment and then gets auto-closed due to focus moving to
      // the selected block.


      window.requestAnimationFrame(() => setIsInserterOpened(true));
    }
  };

  const toggleListView = Object(external_wp_element_["useCallback"])(() => setIsListViewOpened(!isListViewOpen), [setIsListViewOpened, isListViewOpen]);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "edit-widgets-header"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "edit-widgets-header__navigable-toolbar-wrapper"
  }, isMediumViewport && Object(external_wp_element_["createElement"])("h1", {
    className: "edit-widgets-header__title"
  }, Object(external_wp_i18n_["__"])('Widgets')), !isMediumViewport && Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
    as: "h1",
    className: "edit-widgets-header__title"
  }, Object(external_wp_i18n_["__"])('Widgets')), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["NavigableToolbar"], {
    className: "edit-widgets-header-toolbar",
    "aria-label": Object(external_wp_i18n_["__"])('Document tools')
  }, Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarItem"], {
    ref: inserterButton,
    as: external_wp_components_["Button"],
    className: "edit-widgets-header-toolbar__inserter-toggle",
    variant: "primary",
    isPressed: isInserterOpen,
    onMouseDown: event => {
      event.preventDefault();
    },
    onClick: handleClick,
    icon: plus["a" /* default */]
    /* translators: button label text should, if possible, be under 16
    characters. */
    ,
    label: Object(external_wp_i18n_["_x"])('Toggle block inserter', 'Generic label for block inserter button')
  }), isMediumViewport && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(UndoButton, null), Object(external_wp_element_["createElement"])(RedoButton, null), Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarItem"], {
    as: external_wp_components_["Button"],
    className: "edit-widgets-header-toolbar__list-view-toggle",
    icon: list_view["a" /* default */],
    isPressed: isListViewOpen
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('List View'),
    onClick: toggleListView
  })))), Object(external_wp_element_["createElement"])("div", {
    className: "edit-widgets-header__actions"
  }, Object(external_wp_element_["createElement"])(save_button, null), Object(external_wp_element_["createElement"])(build_module["h" /* PinnedItems */].Slot, {
    scope: "core/edit-widgets"
  }), Object(external_wp_element_["createElement"])(MoreMenu, null))));
}

/* harmony default export */ var header = (Header);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/notices/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





function Notices() {
  const {
    removeNotice
  } = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]);
  const {
    notices
  } = Object(external_wp_data_["useSelect"])(select => {
    return {
      notices: select(external_wp_notices_["store"]).getNotices()
    };
  }, []);
  const dismissibleNotices = Object(external_lodash_["filter"])(notices, {
    isDismissible: true,
    type: 'default'
  });
  const nonDismissibleNotices = Object(external_lodash_["filter"])(notices, {
    isDismissible: false,
    type: 'default'
  });
  const snackbarNotices = Object(external_lodash_["filter"])(notices, {
    type: 'snackbar'
  });
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["NoticeList"], {
    notices: nonDismissibleNotices,
    className: "edit-widgets-notices__pinned"
  }), Object(external_wp_element_["createElement"])(external_wp_components_["NoticeList"], {
    notices: dismissibleNotices,
    className: "edit-widgets-notices__dismissible",
    onRemove: removeNotice
  }), Object(external_wp_element_["createElement"])(external_wp_components_["SnackbarList"], {
    notices: snackbarNotices,
    className: "edit-widgets-notices__snackbar",
    onRemove: removeNotice
  }));
}

/* harmony default export */ var components_notices = (Notices);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-content/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function WidgetAreaInnerBlocks({
  id
}) {
  const [blocks, onInput, onChange] = (0,external_wp_coreData_namespaceObject.useEntityBlockEditor)('root', 'postType');
  const innerBlocksRef = (0,external_wp_element_namespaceObject.useRef)();
  const isDraggingWithinInnerBlocks = use_is_dragging_within(innerBlocksRef);
  const shouldHighlightDropZone = isDraggingWithinInnerBlocks; // Using the experimental hook so that we can control the className of the element.

  const innerBlocksProps = (0,external_wp_blockEditor_namespaceObject.useInnerBlocksProps)({
    ref: innerBlocksRef
  }, {
    value: blocks,
    onInput,
    onChange,
    templateLock: false,
    renderAppender: external_wp_blockEditor_namespaceObject.InnerBlocks.ButtonBlockAppender
  });
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    "data-widget-area-id": id,
    className: classnames_default()('wp-block-widget-area__inner-blocks block-editor-inner-blocks editor-styles-wrapper', {
      'wp-block-widget-area__highlight-drop-zone': shouldHighlightDropZone
    })
  }, (0,external_wp_element_namespaceObject.createElement)("div", { ...innerBlocksProps
  }));
}

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__("w95h");

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/hooks/use-widget-library-insertion-point.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const useWidgetLibraryInsertionPoint = () => {
  const firstRootId = Object(external_wp_data_["useSelect"])(select => {
    var _widgetAreasPost$bloc;

function WidgetAreaEdit({
  clientId,
  className,
  attributes: {
    id,
    name
  }
}) {
  const isOpen = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getIsWidgetAreaOpen(clientId), [clientId]);
  const {
    setIsWidgetAreaOpen
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const wrapper = (0,external_wp_element_namespaceObject.useRef)();
  const setOpen = (0,external_wp_element_namespaceObject.useCallback)(openState => setIsWidgetAreaOpen(clientId, openState), [clientId]);
  const isDragging = useIsDragging(wrapper);
  const isDraggingWithin = use_is_dragging_within(wrapper);
  const [openedWhileDragging, setOpenedWhileDragging] = (0,external_wp_element_namespaceObject.useState)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!isDragging) {
      setOpenedWhileDragging(false);
      return;
    }

    if (isDraggingWithin && !isOpen) {
      setOpen(true);
      setOpenedWhileDragging(true);
    } else if (!isDraggingWithin && isOpen && openedWhileDragging) {
      setOpen(false);
    }
  }, [isOpen, isDragging, isDraggingWithin, openedWhileDragging]);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Panel, {
    className: className,
    ref: wrapper
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.PanelBody, {
    title: name,
    opened: isOpen,
    onToggle: () => {
      setIsWidgetAreaOpen(clientId, !isOpen);
    },
    scrollAfterOpen: !isDragging
  }, ({
    opened
  }) => // This is required to ensure LegacyWidget blocks are not
  // unmounted when the panel is collapsed. Unmounting legacy
  // widgets may have unintended consequences (e.g.  TinyMCE
  // not being properly reinitialized)
  (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__unstableDisclosureContent, {
    className: "wp-block-widget-area__panel-body-content",
    visible: opened
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_coreData_namespaceObject.EntityProvider, {
    kind: "root",
    type: "postType",
    id: `widget-area-${id}`
  }, (0,external_wp_element_namespaceObject.createElement)(WidgetAreaInnerBlocks, {
    id: id
  })))));
}
/**
 * A React hook to determine if dragging is active.
 *
 * @param {RefObject<HTMLElement>} elementRef The target elementRef object.
 *
 * @return {boolean} Is dragging within the entire document.
 */


    if (insertionPoint.rootClientId) {
      return insertionPoint;
    }

    const clientId = getBlockSelectionEnd() || firstRootId;
    const rootClientId = getBlockRootClientId(clientId); // If the selected block is at the root level, it's a widget area and
    // blocks can't be inserted here. Return this block as the root and the
    // last child clientId indicating insertion at the end.

    if (clientId && rootClientId === '') {
      return {
        rootClientId: clientId,
        insertionIndex: getBlockOrder(clientId).length
      };
    }

    return {
      rootClientId,
      insertionIndex: getBlockIndex(clientId) + 1
    };
  }, [firstRootId]);
};

/* harmony default export */ var use_widget_library_insertion_point = (useWidgetLibraryInsertionPoint);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/inserter-sidebar.js



/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const settings = {
  title: (0,external_wp_i18n_namespaceObject.__)('Widget Area'),
  description: (0,external_wp_i18n_namespaceObject.__)('A widget area container.'),
  __experimentalLabel: ({
    name: label
  }) => label,
  edit: WidgetAreaEdit
};

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("bWcr");

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/list-view-sidebar.js


/**
 * WordPress dependencies
 */







function CopyButton({
  text,
  children
}) {
  const ref = (0,external_wp_compose_namespaceObject.useCopyToClipboard)(text);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "secondary",
    ref: ref
  }, children);
}

function ErrorBoundaryWarning({
  message,
  error
}) {
  const actions = [(0,external_wp_element_namespaceObject.createElement)(CopyButton, {
    key: "copy-error",
    text: error.stack
  }, (0,external_wp_i18n_namespaceObject.__)('Copy Error'))];
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.Warning, {
    className: "edit-widgets-error-boundary",
    actions: actions
  }, message);
}

class ErrorBoundary extends external_wp_element_namespaceObject.Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }

  componentDidCatch(error) {
    (0,external_wp_hooks_namespaceObject.doAction)('editor.ErrorBoundary.errorLogged', error);
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (0,external_wp_element_namespaceObject.createElement)(ErrorBoundaryWarning, {
      message: (0,external_wp_i18n_namespaceObject.__)('The editor has encountered an unexpected error.'),
      error: this.state.error
    });
  }

  return null;
}

;// CONCATENATED MODULE: external ["wp","reusableBlocks"]
var external_wp_reusableBlocks_namespaceObject = window["wp"]["reusableBlocks"];
;// CONCATENATED MODULE: external ["wp","keyboardShortcuts"]
var external_wp_keyboardShortcuts_namespaceObject = window["wp"]["keyboardShortcuts"];
;// CONCATENATED MODULE: external ["wp","keycodes"]
var external_wp_keycodes_namespaceObject = window["wp"]["keycodes"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/keyboard-shortcuts/index.js
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





const interfaceLabels = {
  /* translators: accessibility text for the widgets screen top bar landmark region. */
  header: Object(external_wp_i18n_["__"])('Widgets top bar'),

  /* translators: accessibility text for the widgets screen content landmark region. */
  body: Object(external_wp_i18n_["__"])('Widgets and blocks'),

  /* translators: accessibility text for the widgets screen settings landmark region. */
  sidebar: Object(external_wp_i18n_["__"])('Widgets settings'),

  /* translators: accessibility text for the widgets screen footer landmark region. */
  footer: Object(external_wp_i18n_["__"])('Widgets footer')
};

function Interface(_ref) {
  let {
    blockEditorSettings
  } = _ref;
  const isMobileViewport = Object(external_wp_compose_["useViewportMatch"])('medium', '<');
  const isHugeViewport = Object(external_wp_compose_["useViewportMatch"])('huge', '>=');
  const {
    setIsInserterOpened,
    setIsListViewOpened,
    closeGeneralSidebar
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    saveEditedWidgetAreas
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    replaceBlocks
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);
  const {
    getBlockName,
    getSelectedBlockClientId,
    getBlockAttributes
  } = (0,external_wp_data_namespaceObject.useSelect)(external_wp_blockEditor_namespaceObject.store);

  const handleTextLevelShortcut = (event, level) => {
    event.preventDefault();
    const destinationBlockName = level === 0 ? 'core/paragraph' : 'core/heading';
    const currentClientId = getSelectedBlockClientId();

    if (currentClientId === null) {
      return;
    }

    const blockName = getBlockName(currentClientId);

    if (blockName !== 'core/paragraph' && blockName !== 'core/heading') {
      return;
    }

    const attributes = getBlockAttributes(currentClientId);
    const textAlign = blockName === 'core/paragraph' ? 'align' : 'textAlign';
    const destinationTextAlign = destinationBlockName === 'core/paragraph' ? 'align' : 'textAlign';
    replaceBlocks(currentClientId, (0,external_wp_blocks_namespaceObject.createBlock)(destinationBlockName, {
      level,
      content: attributes.content,
      ...{
        [destinationTextAlign]: attributes[textAlign]
      }
    }));
  };

  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/edit-widgets/undo', event => {
    undo();
    event.preventDefault();
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/edit-widgets/redo', event => {
    redo();
    event.preventDefault();
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/edit-widgets/save', event => {
    event.preventDefault();
    saveEditedWidgetAreas();
  });
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/edit-widgets/transform-heading-to-paragraph', event => handleTextLevelShortcut(event, 0));
  [1, 2, 3, 4, 5, 6].forEach(level => {
    //the loop is based off on a constant therefore
    //the hook will execute the same way every time
    //eslint-disable-next-line react-hooks/rules-of-hooks
    (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)(`core/edit-widgets/transform-paragraph-to-heading-${level}`, event => handleTextLevelShortcut(event, level));
  });
  return null;
}

function KeyboardShortcutsRegister() {
  // Registering the shortcuts.
  const {
    registerShortcut
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_keyboardShortcuts_namespaceObject.store);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    registerShortcut({
      name: 'core/edit-widgets/undo',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/redo',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      },
      // Disable on Apple OS because it conflicts with the browser's
      // history shortcut. It's a fine alias for both Windows and Linux.
      // Since there's no conflict for Ctrl+Shift+Z on both Windows and
      // Linux, we keep it as the default for consistency.
      aliases: (0,external_wp_keycodes_namespaceObject.isAppleOS)() ? [] : [{
        modifier: 'primary',
        character: 'y'
      }]
    });
    registerShortcut({
      name: 'core/edit-widgets/save',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/keyboard-shortcuts',
      category: 'main',
      description: (0,external_wp_i18n_namespaceObject.__)('Display these keyboard shortcuts.'),
      keyCombination: {
        modifier: 'access',
        character: 'h'
      }
    });
    registerShortcut({
      name: 'core/edit-widgets/next-region',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Navigate to the next part of the editor.'),
      keyCombination: {
        modifier: 'ctrl',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'n'
      }]
    });
    registerShortcut({
      name: 'core/edit-widgets/previous-region',
      category: 'global',
      description: (0,external_wp_i18n_namespaceObject.__)('Navigate to the previous part of the editor.'),
      keyCombination: {
        modifier: 'ctrlShift',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'p'
      }, {
        modifier: 'ctrlShift',
        character: '~'
      }]
    });
    registerShortcut({
      name: 'core/edit-widgets/transform-heading-to-paragraph',
      category: 'block-library',
      description: (0,external_wp_i18n_namespaceObject.__)('Transform heading to paragraph.'),
      keyCombination: {
        modifier: 'access',
        character: `0`
      }
    });
    [1, 2, 3, 4, 5, 6].forEach(level => {
      registerShortcut({
        name: `core/edit-widgets/transform-paragraph-to-heading-${level}`,
        category: 'block-library',
        description: (0,external_wp_i18n_namespaceObject.__)('Transform paragraph to heading.'),
        keyCombination: {
          modifier: 'access',
          character: `${level}`
        }
      });
    });
  }, [registerShortcut]);
  return null;
}

/* harmony default export */ var layout_interface = (Interface);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/layout/unsaved-changes-warning.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Warns the user if there are unsaved changes before leaving the editor.
 *
 * This is a duplicate of the component implemented in the editor package.
 * Duplicated here as edit-widgets doesn't depend on editor.
 *
 * @return {WPComponent} The component.
 */

const useLastSelectedWidgetArea = () => (0,external_wp_data_namespaceObject.useSelect)(select => {
  const {
    getBlockSelectionEnd,
    getBlockName
  } = select(external_wp_blockEditor_namespaceObject.store);
  const selectionEndClientId = getBlockSelectionEnd(); // If the selected block is a widget area, return its clientId.

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/welcome-guide/index.js

  const {
    getParentWidgetAreaBlock
  } = select(store_store);
  const widgetAreaBlock = getParentWidgetAreaBlock(selectionEndClientId);
  const widgetAreaBlockClientId = widgetAreaBlock?.clientId;

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


function WelcomeGuide() {
  var _widgetAreas$filter$l;

  const isActive = Object(external_wp_data_["useSelect"])(select => select(build_module["i" /* store */]).isFeatureActive('core/edit-widgets', 'welcomeGuide'), []);
  const {
    getEntityRecord
  } = select(external_wp_coreData_namespaceObject.store);
  const widgetAreasPost = getEntityRecord(KIND, POST_TYPE, buildWidgetAreasPostId());
  return widgetAreasPost?.blocks[0]?.clientId;
}, []);

  if (!isActive) {
    return null;
  }

  const isEntirelyBlockWidgets = widgetAreas === null || widgetAreas === void 0 ? void 0 : widgetAreas.every(widgetArea => widgetArea.id === 'wp_inactive_widgets' || widgetArea.widgets.every(widgetId => widgetId.startsWith('block-')));
  const numWidgetAreas = (_widgetAreas$filter$l = widgetAreas === null || widgetAreas === void 0 ? void 0 : widgetAreas.filter(widgetArea => widgetArea.id !== 'wp_inactive_widgets').length) !== null && _widgetAreas$filter$l !== void 0 ? _widgetAreas$filter$l : 0;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Guide"], {
    className: "edit-widgets-welcome-guide",
    contentLabel: Object(external_wp_i18n_["__"])('Welcome to block Widgets'),
    finishButtonText: Object(external_wp_i18n_["__"])('Get started'),
    onFinish: () => toggleFeature('core/edit-widgets', 'welcomeGuide'),
    pages: [{
      image: Object(external_wp_element_["createElement"])(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.gif"
      }),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, Object(external_wp_i18n_["__"])('Welcome to block Widgets')), isEntirelyBlockWidgets ? Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", {
        className: "edit-widgets-welcome-guide__text"
      }, Object(external_wp_i18n_["sprintf"])( // Translators: %s: Number of block areas in the current theme.
      Object(external_wp_i18n_["_n"])('Your theme provides %s “block” area for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.', 'Your theme provides %s different “block” areas for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.', numWidgetAreas), numWidgetAreas))) : Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", {
        className: "edit-widgets-welcome-guide__text"
      }, Object(external_wp_i18n_["__"])('You can now add any block to your site’s widget areas. Don’t worry, all of your favorite widgets still work flawlessly.')), Object(external_wp_element_["createElement"])("p", {
        className: "edit-widgets-welcome-guide__text"
      }, Object(external_wp_element_["createElement"])("strong", null, Object(external_wp_i18n_["__"])('Want to stick with the old widgets?')), ' ', Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
        href: Object(external_wp_i18n_["__"])('https://wordpress.org/plugins/classic-widgets/')
      }, Object(external_wp_i18n_["__"])('Get the Classic Widgets plugin.')))))
    }, {
      image: Object(external_wp_element_["createElement"])(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-editor.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-editor.gif"
      }),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, Object(external_wp_i18n_["__"])('Make each block your own')), Object(external_wp_element_["createElement"])("p", {
        className: "edit-widgets-welcome-guide__text"
      }, Object(external_wp_i18n_["__"])('Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected.')))
    }, {
      image: Object(external_wp_element_["createElement"])(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-library.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-library.gif"
      }),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, Object(external_wp_i18n_["__"])('Get to know the block library')), Object(external_wp_element_["createElement"])("p", {
        className: "edit-widgets-welcome-guide__text"
      }, Object(external_wp_element_["createInterpolateElement"])(Object(external_wp_i18n_["__"])('All of the blocks available to you live in the block library. You’ll find it wherever you see the <InserterIconImage /> icon.'), {
        InserterIconImage: Object(external_wp_element_["createElement"])("img", {
          className: "edit-widgets-welcome-guide__inserter-icon",
          alt: Object(external_wp_i18n_["__"])('inserter'),
          src: "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='18' height='18' rx='2' fill='%231E1E1E'/%3E%3Cpath d='M9.22727 4V14M4 8.77273H14' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E%0A"
        })
      })))
    }, {
      image: Object(external_wp_element_["createElement"])(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.gif"
      }),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, Object(external_wp_i18n_["__"])('Learn how to use the block editor')), Object(external_wp_element_["createElement"])("p", {
        className: "edit-widgets-welcome-guide__text"
      }, Object(external_wp_i18n_["__"])('New to the block editor? Want to learn more about using it? '), Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
        href: Object(external_wp_i18n_["__"])('https://wordpress.org/support/article/wordpress-editor/')
      }, Object(external_wp_i18n_["__"])("Here's a detailed guide."))))
    }]
  });
}

;// CONCATENATED MODULE: external ["wp","privateApis"]
var external_wp_privateApis_namespaceObject = window["wp"]["privateApis"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/lock-unlock.js
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,external_wp_privateApis_namespaceObject.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/edit-widgets');

;// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/widget-areas-block-editor-provider/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







const {
  ExperimentalBlockEditorProvider
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);
function WidgetAreasBlockEditorProvider({
  blockEditorSettings,
  children,
  ...props
}) {
  const mediaPermissions = (0,external_wp_coreData_namespaceObject.useResourcePermissions)('media');
  const {
    reusableBlocks,
    isFixedToolbarActive,
    keepCaretInsideBlock
  } = (0,external_wp_data_namespaceObject.useSelect)(select => ({
    widgetAreas: select(store_store).getWidgetAreas(),
    widgets: select(store_store).getWidgets(),
    reusableBlocks: ALLOW_REUSABLE_BLOCKS ? select(external_wp_coreData_namespaceObject.store).getEntityRecords('postType', 'wp_block') : [],
    isFixedToolbarActive: !!select(external_wp_preferences_namespaceObject.store).get('core/edit-widgets', 'fixedToolbar'),
    keepCaretInsideBlock: !!select(external_wp_preferences_namespaceObject.store).get('core/edit-widgets', 'keepCaretInsideBlock')
  }), []);
  const {
    setIsInserterOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const settings = (0,external_wp_element_namespaceObject.useMemo)(() => {
    let mediaUploadBlockEditor;

    if (mediaPermissions.canCreate) {
      mediaUploadBlockEditor = ({
        onError,
        ...argumentsObject
      }) => {
        (0,external_wp_mediaUtils_namespaceObject.uploadMedia)({
          wpAllowedMimeTypes: blockEditorSettings.allowedMimeTypes,
          onError: ({
            message
          }) => onError(message),
          ...argumentsObject
        });
      };
    }

    return { ...blockEditorSettings,
      __experimentalReusableBlocks: reusableBlocks,
      hasFixedToolbar: isFixedToolbarActive,
      keepCaretInsideBlock,
      mediaUpload: mediaUploadBlockEditor,
      templateLock: 'all',
      __experimentalSetIsInserterOpened: setIsInserterOpened
    };
  }, [blockEditorSettings, isFixedToolbarActive, keepCaretInsideBlock, mediaPermissions.canCreate, reusableBlocks, setIsInserterOpened]);
  const widgetAreaId = use_last_selected_widget_area();
  const [blocks, onInput, onChange] = (0,external_wp_coreData_namespaceObject.useEntityBlockEditor)(KIND, POST_TYPE, {
    id: buildWidgetAreasPostId()
  });
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_keyboardShortcuts_namespaceObject.ShortcutProvider, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockEditorKeyboardShortcuts.Register, null), (0,external_wp_element_namespaceObject.createElement)(keyboard_shortcuts.Register, null), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SlotFillProvider, null, (0,external_wp_element_namespaceObject.createElement)(ExperimentalBlockEditorProvider, {
    value: blocks,
    onInput: onInput,
    onChange: onChange,
    settings: settings,
    useSubRegistry: false,
    ...props
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.CopyHandler, null, children), (0,external_wp_element_namespaceObject.createElement)(external_wp_reusableBlocks_namespaceObject.ReusableBlocksMenuItems, {
    rootClientId: widgetAreaId
  }))));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/drawer-left.js


/**
 * WordPress dependencies
 */

const drawerLeft = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8.5 18.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h2.5v13zm10-.5c0 .3-.2.5-.5.5h-8v-13h8c.3 0 .5.2.5.5v12z"
}));
/* harmony default export */ var drawer_left = (drawerLeft);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/drawer-right.js


/**
 * WordPress dependencies
 */

const drawerRight = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4 14.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h8v13zm4.5-.5c0 .3-.2.5-.5.5h-2.5v-13H18c.3 0 .5.2.5.5v12z"
}));
/* harmony default export */ var drawer_right = (drawerRight);

;// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/block-default.js


/**
 * WordPress dependencies
 */

const blockDefault = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ var block_default = (blockDefault);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/index.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


function WidgetAreas({
  selectedWidgetAreaId
}) {
  const widgetAreas = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getWidgetAreas(), []);
  const selectedWidgetArea = (0,external_wp_element_namespaceObject.useMemo)(() => selectedWidgetAreaId && widgetAreas?.find(widgetArea => widgetArea.id === selectedWidgetAreaId), [selectedWidgetAreaId, widgetAreas]);
  let description;

  if (!selectedWidgetArea) {
    description = (0,external_wp_i18n_namespaceObject.__)('Widget Areas are global parts in your site’s layout that can accept blocks. These vary by theme, but are typically parts like your Sidebar or Footer.');
  } else if (selectedWidgetAreaId === 'wp_inactive_widgets') {
    description = (0,external_wp_i18n_namespaceObject.__)('Blocks in this Widget Area will not be displayed in your site.');
  } else {
    description = selectedWidgetArea.description;
  }

  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-widget-areas"
  }, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-widget-areas__top-container"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockIcon, {
    icon: block_default
  }), (0,external_wp_element_namespaceObject.createElement)("div", null, (0,external_wp_element_namespaceObject.createElement)("p", {
    // Use `dangerouslySetInnerHTML` to keep backwards
    // compatibility. Basic markup in the description is an
    // established feature of WordPress.
    // @see https://github.com/WordPress/gutenberg/issues/33106
    dangerouslySetInnerHTML: {
      __html: (0,external_wp_dom_namespaceObject.safeHTML)(description)
    }
  }), widgetAreas?.length === 0 && (0,external_wp_element_namespaceObject.createElement)("p", null, (0,external_wp_i18n_namespaceObject.__)('Your theme does not contain any Widget Areas.')), !selectedWidgetArea && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    href: (0,external_wp_url_namespaceObject.addQueryArgs)('customize.php', {
      'autofocus[panel]': 'widgets',
      return: window.location.pathname
    }),
    variant: "tertiary"
  }, (0,external_wp_i18n_namespaceObject.__)('Manage with live preview')))));
}



const disabledBlocks = ['core/more', 'core/freeform', 'core/template-part', ...(ALLOW_REUSABLE_BLOCKS ? [] : ['core/block'])];
/**
 * Reinitializes the editor after the user chooses to reboot the editor after
 * an unhandled error occurs, replacing previously mounted editor element using
 * an initial state from prior to the crash.
 *
 * @param {Element} target   DOM node in which editor is rendered.
 * @param {?Object} settings Editor settings object.
 */

function reinitializeEditor(target, settings) {
  Object(external_wp_element_["unmountComponentAtNode"])(target);
  const reboot = reinitializeEditor.bind(null, target, settings);
  Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(layout, {
    blockEditorSettings: settings,
    onError: reboot
  }), target);
}
/**
 * Initializes the block editor in the widgets screen.
 *
 * @param {string} id       ID of the root element to render the screen in.
 * @param {Object} settings Block editor settings.
 */

function initialize(id, settings) {
  const target = document.getElementById(id);
  const reboot = reinitializeEditor.bind(null, target, settings);

  const coreBlocks = Object(external_wp_blockLibrary_["__experimentalGetCoreBlocks"])().filter(block => {
    return !(disabledBlocks.includes(block.name) || block.name.startsWith('core/post') || block.name.startsWith('core/query') || block.name.startsWith('core/site') || block.name.startsWith('core/navigation'));
  });

  Object(external_wp_data_["dispatch"])(build_module["i" /* store */]).setFeatureDefaults('core/edit-widgets', {
    fixedToolbar: false,
    welcomeGuide: true,
    showBlockBreadcrumbs: true,
    themeStyles: true
  });

  Object(external_wp_data_["dispatch"])(external_wp_blocks_["store"]).__experimentalReapplyBlockTypeFilters();

  Object(external_wp_blockLibrary_["registerCoreBlocks"])(coreBlocks);
  Object(external_wp_widgets_["registerLegacyWidgetBlock"])();

  if (false) {}

  Object(external_wp_widgets_["registerLegacyWidgetVariations"])(settings);
  registerBlock(widget_area_namespaceObject);
  Object(external_wp_widgets_["registerWidgetGroupBlock"])();

  settings.__experimentalFetchLinkSuggestions = (search, searchOptions) => Object(external_wp_coreData_["__experimentalFetchLinkSuggestions"])(search, searchOptions, settings); // As we are unregistering `core/freeform` to avoid the Classic block, we must
  // replace it with something as the default freeform content handler. Failure to
  // do this will result in errors in the default block parser.
  // see: https://github.com/WordPress/gutenberg/issues/33097


  Object(external_wp_blocks_["setFreeformContentHandlerName"])('core/html');
  Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(layout, {
    blockEditorSettings: settings,
    onError: reboot
  }), target);
}
/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

const registerBlock = block => {
  if (!block) {
    return;
  }

  const {
    metadata,
    settings,
    name
  } = block;

  if (metadata) {
    Object(external_wp_blocks_["unstable__bootstrapServerSideBlockDefinitions"])({
      [name]: metadata
    });
  }

function ComplementaryAreaTab({
  identifier,
  label,
  isActive
}) {
  const {
    enableComplementaryArea
  } = (0,external_wp_data_namespaceObject.useDispatch)(store);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    onClick: () => enableComplementaryArea(store_store.name, identifier),
    className: classnames_default()('edit-widgets-sidebar__panel-tab', {
      'is-active': isActive
    }),
    "aria-label": isActive ? // translators: %s: sidebar label e.g: "Widget Areas".
    (0,external_wp_i18n_namespaceObject.sprintf)((0,external_wp_i18n_namespaceObject.__)('%s (selected)'), label) : label,
    "data-label": label
  }, label);
}


/***/ }),

/***/ "GLVC":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["widgets"]; }());

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

    if (!hasSelectedNonAreaBlock && currentArea === BLOCK_INSPECTOR_IDENTIFIER && isGeneralSidebarOpen) {
      enableComplementaryArea('core/edit-widgets', WIDGET_AREAS_IDENTIFIER);
    }
  }, [hasSelectedNonAreaBlock, enableComplementaryArea]);
  return (0,external_wp_element_namespaceObject.createElement)(complementary_area, {
    className: "edit-widgets-sidebar",
    header: (0,external_wp_element_namespaceObject.createElement)("ul", null, (0,external_wp_element_namespaceObject.createElement)("li", null, (0,external_wp_element_namespaceObject.createElement)(ComplementaryAreaTab, {
      identifier: WIDGET_AREAS_IDENTIFIER,
      label: selectedWidgetAreaBlock ? selectedWidgetAreaBlock.attributes.name : (0,external_wp_i18n_namespaceObject.__)('Widget Areas'),
      isActive: currentArea === WIDGET_AREAS_IDENTIFIER
    })), (0,external_wp_element_namespaceObject.createElement)("li", null, (0,external_wp_element_namespaceObject.createElement)(ComplementaryAreaTab, {
      identifier: BLOCK_INSPECTOR_IDENTIFIER,
      label: (0,external_wp_i18n_namespaceObject.__)('Block'),
      isActive: currentArea === BLOCK_INSPECTOR_IDENTIFIER
    }))),
    headerClassName: "edit-widgets-sidebar__panel-tabs"
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    title: (0,external_wp_i18n_namespaceObject.__)('Settings'),
    closeLabel: (0,external_wp_i18n_namespaceObject.__)('Close Settings'),
    scope: "core/edit-widgets",
    identifier: currentArea,
    icon: (0,external_wp_i18n_namespaceObject.isRTL)() ? drawer_left : drawer_right,
    isActiveByDefault: SIDEBAR_ACTIVE_BY_DEFAULT
  }, currentArea === WIDGET_AREAS_IDENTIFIER && (0,external_wp_element_namespaceObject.createElement)(WidgetAreas, {
    selectedWidgetAreaId: selectedWidgetAreaBlock?.attributes.id
  }), currentArea === BLOCK_INSPECTOR_IDENTIFIER && (hasSelectedNonAreaBlock ? (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockInspector, null) : // Pretend that Widget Areas are part of the UI by not
  // showing the Block Inspector when one is selected.
  (0,external_wp_element_namespaceObject.createElement)("span", {
    className: "block-editor-block-inspector__no-blocks"
  }, (0,external_wp_i18n_namespaceObject.__)('No block selected.'))));
}

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const external = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ __webpack_exports__["a"] = (external);


/***/ }),

/***/ "K2cm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const listView = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M3 6h11v1.5H3V6Zm3.5 5.5h11V13h-11v-1.5ZM21 17H10v1.5h11V17Z"
}));
/* harmony default export */ __webpack_exports__["a"] = (redo);


/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "KEfo":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["viewport"]; }());

/***/ }),

function SaveButton() {
  const {
    hasEditedWidgetAreaIds,
    isSaving
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedWidgetAreas,
      isSavingWidgetAreas
    } = select(store_store);
    return {
      hasEditedWidgetAreaIds: getEditedWidgetAreas()?.length > 0,
      isSaving: isSavingWidgetAreas()
    };
  }, []);
  const {
    saveEditedWidgetAreas
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "primary",
    isBusy: isSaving,
    "aria-disabled": isSaving,
    onClick: isSaving ? undefined : saveEditedWidgetAreas,
    disabled: !hasEditedWidgetAreaIds
  }, isSaving ? (0,external_wp_i18n_namespaceObject.__)('Saving…') : (0,external_wp_i18n_namespaceObject.__)('Update'));
}

/***/ }),

/***/ "Ntru":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const undo = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ __webpack_exports__["a"] = (undo);


/***/ }),

/***/ "OzlF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const listView = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13.8 5.2H3v1.5h10.8V5.2zm-3.6 12v1.5H21v-1.5H10.2zm7.2-6H6.6v1.5h10.8v-1.5z"
}));
/* harmony default export */ __webpack_exports__["a"] = (listView);

;// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/header/undo-redo/undo.js


/**
 * WordPress dependencies
 */

const plus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["a"] = (plus);


/***/ }),

/***/ "QyPg":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockLibrary"]; }());

/***/ }),

/***/ "RMJe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),

/***/ "RxS6":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keycodes"]; }());

/***/ }),

/***/ "TSYQ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

const external = (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path, {
  d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"
}));
/* harmony default export */ var library_external = (external);

	function classNames() {
		var classes = [];

const textFormattingShortcuts = [{
  keyCombination: {
    modifier: 'primary',
    character: 'b'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Make the selected text bold.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'i'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Make the selected text italic.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'k'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Convert the selected text into a link.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'k'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Remove a link.')
}, {
  keyCombination: {
    character: '[['
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Insert a link to a post or page.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'u'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Underline the selected text.')
}, {
  keyCombination: {
    modifier: 'access',
    character: 'd'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Strikethrough the selected text.')
}, {
  keyCombination: {
    modifier: 'access',
    character: 'x'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Make the selected text inline code.')
}, {
  keyCombination: {
    modifier: 'access',
    character: '0'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Convert the current heading to a paragraph.')
}, {
  keyCombination: {
    modifier: 'access',
    character: '1-6'
  },
  description: (0,external_wp_i18n_namespaceObject.__)('Convert the current paragraph or heading to a heading of level 1 to 6.')
}];

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

function KeyCombination({
  keyCombination,
  forceAriaLabel
}) {
  const shortcut = keyCombination.modifier ? external_wp_keycodes_namespaceObject.displayShortcutList[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? external_wp_keycodes_namespaceObject.shortcutAriaLabel[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const shortcuts = Array.isArray(shortcut) ? shortcut : [shortcut];
  return (0,external_wp_element_namespaceObject.createElement)("kbd", {
    className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, shortcuts.map((character, index) => {
    if (character === '+') {
      return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, {
        key: index
      }, character);
    }

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

function Shortcut({
  description,
  keyCombination,
  aliases = [],
  ariaLabel
}) {
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-description"
  }, description), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-term"
  }, (0,external_wp_element_namespaceObject.createElement)(KeyCombination, {
    keyCombination: keyCombination,
    forceAriaLabel: ariaLabel
  }), aliases.map((alias, index) => (0,external_wp_element_namespaceObject.createElement)(KeyCombination, {
    keyCombination: alias,
    forceAriaLabel: ariaLabel,
    key: index
  }))));
}

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__("RMJe");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-filled.js
var star_filled = __webpack_require__("URob");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-empty.js
var star_empty = __webpack_require__("Xxwi");

// EXTERNAL MODULE: external ["wp","viewport"]
var external_wp_viewport_ = __webpack_require__("KEfo");

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__("bWcr");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Reducer to keep tract of the active area per scope.
 *
 * @param {boolean} state           Previous state.
 * @param {Object}  action          Action object.
 * @param {string}  action.type     Action type.
 * @param {string}  action.itemType Type of item.
 * @param {string}  action.scope    Item scope.
 * @param {string}  action.item     Item name.
 *
 * @return {Object} Updated state.
 */

function singleEnableItems() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let {
    type,
    itemType,
    scope,
    item
  } = arguments.length > 1 ? arguments[1] : undefined;

  if (type !== 'SET_SINGLE_ENABLE_ITEM' || !itemType || !scope) {
    return state;
  }

function DynamicShortcut({
  name
}) {
  const {
    keyCombination,
    description,
    aliases
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getShortcutKeyCombination,
      getShortcutDescription,
      getShortcutAliases
    } = select(external_wp_keyboardShortcuts_namespaceObject.store);
    return {
      keyCombination: getShortcutKeyCombination(name),
      aliases: getShortcutAliases(name),
      description: getShortcutDescription(name)
    };
  }, [name]);

  if (type !== 'SET_MULTIPLE_ENABLE_ITEM' || !itemType || !scope || !item || Object(external_lodash_["get"])(state, [itemType, scope, item]) === isEnable) {
    return state;
  }

  const currentTypeState = state[itemType] || {};
  const currentScopeState = currentTypeState[scope] || {};
  return { ...state,
    [itemType]: { ...currentTypeState,
      [scope]: { ...currentScopeState,
        [item]: isEnable || false
      }
    }
  };
}
/**
 * Reducer returning the defaults for user preferences.
 *
 * This is kept intentionally separate from the preferences
 * themselves so that defaults are not persisted.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const preferenceDefaults = Object(external_wp_data_["combineReducers"])({
  features() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments.length > 1 ? arguments[1] : undefined;

    if (action.type === 'SET_FEATURE_DEFAULTS') {
      const {
        scope,
        defaults
      } = action;
      return { ...state,
        [scope]: { ...state[scope],
          ...defaults
        }
      };
    }

    return state;
  }

});
/**
 * Reducer returning the user preferences.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

const preferences = Object(external_wp_data_["combineReducers"])({
  features() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments.length > 1 ? arguments[1] : undefined;

    if (action.type === 'SET_FEATURE_VALUE') {
      const {
        scope,
        featureName,
        value
      } = action;
      return { ...state,
        [scope]: { ...state[scope],
          [featureName]: value
        }
      };
    }

    return state;
  }

});
const enableItems = Object(external_wp_data_["combineReducers"])({
  singleEnableItems,
  multipleEnableItems
});
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  enableItems,
  preferenceDefaults,
  preferences
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/actions.js
/**
 * Returns an action object used in signalling that an active area should be changed.
 *
 * @param {string} itemType Type of item.
 * @param {string} scope    Item scope.
 * @param {string} item     Item identifier.
 *
 * @return {Object} Action object.
 */
function setSingleEnableItem(itemType, scope, item) {
  return {
    type: 'SET_SINGLE_ENABLE_ITEM',
    itemType,
    scope,
    item
  };
}
/**
 * Returns an action object used in signalling that a complementary item should be enabled.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 *
 * @return {Object} Action object.
 */


function actions_enableComplementaryArea(scope, area) {
  return setSingleEnableItem('complementaryArea', scope, area);
}
/**
 * Returns an action object used in signalling that the complementary area of a given scope should be disabled.
 *
 * @param {string} scope Complementary area scope.
 *
 * @return {Object} Action object.
 */

function actions_disableComplementaryArea(scope) {
  return setSingleEnableItem('complementaryArea', scope, undefined);
}
/**
 * Returns an action object to make an area enabled/disabled.
 *
 * @param {string}  itemType Type of item.
 * @param {string}  scope    Item scope.
 * @param {string}  item     Item identifier.
 * @param {boolean} isEnable Boolean indicating if an area should be pinned or not.
 *
 * @return {Object} Action object.
 */

function setMultipleEnableItem(itemType, scope, item, isEnable) {
  return {
    type: 'SET_MULTIPLE_ENABLE_ITEM',
    itemType,
    scope,
    item,
    isEnable
  };
}
/**
 * Returns an action object used in signalling that an item should be pinned.
 *
 * @param {string} scope  Item scope.
 * @param {string} itemId Item identifier.
 *
 * @return {Object} Action object.
 */


function actions_pinItem(scope, itemId) {
  return setMultipleEnableItem('pinnedItems', scope, itemId, true);
}
/**
 * Returns an action object used in signalling that an item should be unpinned.
 *
 * @param {string} scope  Item scope.
 * @param {string} itemId Item identifier.
 *
 * @return {Object} Action object.
 */

function actions_unpinItem(scope, itemId) {
  return setMultipleEnableItem('pinnedItems', scope, itemId, false);
}
/**
 * Returns an action object used in signalling that a feature should be toggled.
 *
 * @param {string} scope       The feature scope (e.g. core/edit-post).
 * @param {string} featureName The feature name.
 */

function actions_toggleFeature(scope, featureName) {
  return function (_ref) {
    let {
      select,
      dispatch
    } = _ref;
    const currentValue = select.isFeatureActive(scope, featureName);
    dispatch.setFeatureValue(scope, featureName, !currentValue);
  };
}
/**
 * Returns an action object used in signalling that a feature should be set to
 * a true or false value
 *
 * @param {string}  scope       The feature scope (e.g. core/edit-post).
 * @param {string}  featureName The feature name.
 * @param {boolean} value       The value to set.
 *
 * @return {Object} Action object.
 */

const ShortcutList = ({
  shortcuts
}) =>
/*
 * Disable reason: The `list` ARIA role is redundant but
 * Safari+VoiceOver won't announce the list otherwise.
 */

/* eslint-disable jsx-a11y/no-redundant-roles */
(0,external_wp_element_namespaceObject.createElement)("ul", {
  className: "edit-widgets-keyboard-shortcut-help-modal__shortcut-list",
  role: "list"
}, shortcuts.map((shortcut, index) => (0,external_wp_element_namespaceObject.createElement)("li", {
  className: "edit-widgets-keyboard-shortcut-help-modal__shortcut",
  key: index
}, typeof shortcut === 'string' ? (0,external_wp_element_namespaceObject.createElement)(dynamic_shortcut, {
  name: shortcut
}) : (0,external_wp_element_namespaceObject.createElement)(keyboard_shortcut_help_modal_shortcut, { ...shortcut
}))))
/* eslint-enable jsx-a11y/no-redundant-roles */
;

const ShortcutSection = ({
  title,
  shortcuts,
  className
}) => (0,external_wp_element_namespaceObject.createElement)("section", {
  className: classnames_default()('edit-widgets-keyboard-shortcut-help-modal__section', className)
}, !!title && (0,external_wp_element_namespaceObject.createElement)("h2", {
  className: "edit-widgets-keyboard-shortcut-help-modal__section-title"
}, title), (0,external_wp_element_namespaceObject.createElement)(ShortcutList, {
  shortcuts: shortcuts
}));

const ShortcutCategorySection = ({
  title,
  categoryName,
  additionalShortcuts = []
}) => {
  const categoryShortcuts = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return select(external_wp_keyboardShortcuts_namespaceObject.store).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return (0,external_wp_element_namespaceObject.createElement)(ShortcutSection, {
    title: title,
    shortcuts: categoryShortcuts.concat(additionalShortcuts)
  });
};

function KeyboardShortcutHelpModal({
  isModalActive,
  toggleModal
}) {
  (0,external_wp_keyboardShortcuts_namespaceObject.useShortcut)('core/edit-widgets/keyboard-shortcuts', toggleModal, {
    bindGlobal: true
  });

function selectors_getActiveComplementaryArea(state, scope) {
  return getSingleEnableItem(state, 'complementaryArea', scope);
}
/**
 * Returns a boolean indicating if an item is enabled or not in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} itemType Type of item.
 * @param {string} scope    Scope.
 * @param {string} item     Item to check.
 *
 * @return {boolean|undefined} True if the item is enabled, false otherwise if the item is explicitly disabled, and undefined if there is no information for that item.
 */

function isMultipleEnabledItemEnabled(state, itemType, scope, item) {
  return Object(external_lodash_["get"])(state.enableItems.multipleEnableItems, [itemType, scope, item]);
}
/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state Global application state.
 * @param {string} scope Scope.
 * @param {string} item  Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
    className: "edit-widgets-keyboard-shortcut-help-modal",
    title: (0,external_wp_i18n_namespaceObject.__)('Keyboard shortcuts'),
    onRequestClose: toggleModal
  }, (0,external_wp_element_namespaceObject.createElement)(ShortcutSection, {
    className: "edit-widgets-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/edit-widgets/keyboard-shortcuts']
  }), (0,external_wp_element_namespaceObject.createElement)(ShortcutCategorySection, {
    title: (0,external_wp_i18n_namespaceObject.__)('Global shortcuts'),
    categoryName: "global"
  }), (0,external_wp_element_namespaceObject.createElement)(ShortcutCategorySection, {
    title: (0,external_wp_i18n_namespaceObject.__)('Selection shortcuts'),
    categoryName: "selection"
  }), (0,external_wp_element_namespaceObject.createElement)(ShortcutCategorySection, {
    title: (0,external_wp_i18n_namespaceObject.__)('Block shortcuts'),
    categoryName: "block",
    additionalShortcuts: [{
      keyCombination: {
        character: '/'
      },
      description: (0,external_wp_i18n_namespaceObject.__)('Change the block type after adding a new paragraph.'),

function selectors_isItemPinned(state, scope, item) {
  return isMultipleEnabledItemEnabled(state, 'pinnedItems', scope, item) !== false;
}
/**
 * Returns a boolean indicating whether a feature is active for a particular
 * scope.
 *
 * @param {Object} state       The store state.
 * @param {string} scope       The scope of the feature (e.g. core/edit-post).
 * @param {string} featureName The name of the feature.
 *
 * @return {boolean} Is the feature enabled?
 */

function isFeatureActive(state, scope, featureName) {
  var _state$preferences$fe, _state$preferenceDefa;

  const featureValue = (_state$preferences$fe = state.preferences.features[scope]) === null || _state$preferences$fe === void 0 ? void 0 : _state$preferences$fe[featureName];
  const defaultedFeatureValue = featureValue !== undefined ? featureValue : (_state$preferenceDefa = state.preferenceDefaults.features[scope]) === null || _state$preferenceDefa === void 0 ? void 0 : _state$preferenceDefa[featureName];
  return !!defaultedFeatureValue;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/constants.js
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/interface';

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



ToolsMoreMenuGroup.Slot = ({
  fillProps
}) => (0,external_wp_element_namespaceObject.createElement)(Slot, {
  fillProps: fillProps
}, fills => fills.length > 0 && fills);


/**
 * Store definition for the interface namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  persist: ['enableItems', 'preferences'],
  __experimentalUseThunks: true
}); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  persist: ['enableItems', 'preferences'],
  __experimentalUseThunks: true
});

// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__("TvNi");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js
/**
 * WordPress dependencies
 */

/* harmony default export */ var complementary_area_context = (Object(external_wp_plugins_["withPluginContext"])((context, ownProps) => {
  return {
    icon: ownProps.icon || context.icon,
    identifier: ownProps.identifier || `${context.name}/${ownProps.name}`
  };
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function ComplementaryAreaToggle(_ref) {
  let {
    as = external_wp_components_["Button"],
    scope,
    identifier,
    icon,
    selectedIcon,
    ...props
  } = _ref;
  const ComponentToUse = as;
  const isSelected = Object(external_wp_data_["useSelect"])(select => select(store).getActiveComplementaryArea(scope) === identifier, [identifier]);
  const {
    enableComplementaryArea,
    disableComplementaryArea
  } = Object(external_wp_data_["useDispatch"])(store);
  return Object(external_wp_element_["createElement"])(ComponentToUse, Object(esm_extends["a" /* default */])({
    icon: selectedIcon && isSelected ? selectedIcon : icon,
    onClick: () => {
      setIsKeyboardShortcutsModalVisible(true);
    },
    shortcut: external_wp_keycodes_namespaceObject.displayShortcut.access('h')
  }, (0,external_wp_i18n_namespaceObject.__)('Keyboard shortcuts')), (0,external_wp_element_namespaceObject.createElement)(external_wp_preferences_namespaceObject.PreferenceToggleMenuItem, {
    scope: "core/edit-widgets",
    name: "welcomeGuide",
    label: (0,external_wp_i18n_namespaceObject.__)('Welcome Guide')
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
    role: "menuitem",
    icon: library_external,
    href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/block-based-widgets-editor/'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, (0,external_wp_i18n_namespaceObject.__)('Help'), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.VisuallyHidden, {
    as: "span"
  },
  /* translators: accessibility text */
  (0,external_wp_i18n_namespaceObject.__)('(opens in a new tab)'))), (0,external_wp_element_namespaceObject.createElement)(tools_more_menu_group.Slot, {
    fillProps: {
      onClose
    }
  }, Object(external_lodash_["omit"])(props, ['name'])));
}

/* harmony default export */ var complementary_area_toggle = (complementary_area_context(ComplementaryAreaToggle));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const ComplementaryAreaHeader = _ref => {
  let {
    smallScreenTitle,
    children,
    className,
    toggleButtonProps
  } = _ref;
  const toggleButton = Object(external_wp_element_["createElement"])(complementary_area_toggle, Object(esm_extends["a" /* default */])({
    icon: close_small["a" /* default */]
  }, toggleButtonProps));
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "components-panel__header interface-complementary-area-header__small"
  }, smallScreenTitle && Object(external_wp_element_["createElement"])("span", {
    className: "interface-complementary-area-header__small-title"
  }, smallScreenTitle), toggleButton), Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('components-panel__header', 'interface-complementary-area-header', className),
    tabIndex: -1
  }, children, toggleButton));
};

/* harmony default export */ var complementary_area_header = (ComplementaryAreaHeader);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/action-item/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




const {
  useShouldContextualToolbarShow
} = unlock(external_wp_blockEditor_namespaceObject.privateApis);

function Header() {
  const isMediumViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium');
  const inserterButton = (0,external_wp_element_namespaceObject.useRef)();
  const widgetAreaClientId = use_last_selected_widget_area();
  const isLastSelectedWidgetAreaOpen = (0,external_wp_data_namespaceObject.useSelect)(select => select(store_store).getIsWidgetAreaOpen(widgetAreaClientId), [widgetAreaClientId]);
  const {
    isInserterOpen,
    isListViewOpen
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      isInserterOpened,
      isListViewOpened
    } = select(store_store);
    return {
      isInserterOpen: isInserterOpened(),
      isListViewOpen: isListViewOpened()
    };
  }, []);
  const {
    setIsWidgetAreaOpen,
    setIsInserterOpened,
    setIsListViewOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    selectBlock
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_blockEditor_namespaceObject.store);


    const initializedByPlugins = [];
    external_wp_element_["Children"].forEach(fills, _ref2 => {
      let {
        props: {
          __unstableExplicitMenuItem,
          __unstableTarget
        }
      } = _ref2;

      if (__unstableTarget && __unstableExplicitMenuItem) {
        initializedByPlugins.push(__unstableTarget);
      }
    });
    const children = external_wp_element_["Children"].map(fills, child => {
      if (!child.props.__unstableExplicitMenuItem && initializedByPlugins.includes(child.props.__unstableTarget)) {
        return null;
      }

      return child;
    });
    return Object(external_wp_element_["createElement"])(Component, props, children);
  });
}

  const toggleListView = (0,external_wp_element_namespaceObject.useCallback)(() => setIsListViewOpened(!isListViewOpen), [setIsListViewOpened, isListViewOpen]);
  const {
    shouldShowContextualToolbar,
    canFocusHiddenToolbar,
    fixedToolbarCanBeFocused
  } = useShouldContextualToolbarShow(); // If there's a block toolbar to be focused, disable the focus shortcut for the document toolbar.
  // There's a fixed block toolbar when the fixed toolbar option is enabled or when the browser width is less than the large viewport.

  const blockToolbarCanBeFocused = shouldShowContextualToolbar || canFocusHiddenToolbar || fixedToolbarCanBeFocused;
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-header"
  }, (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-header__navigable-toolbar-wrapper"
  }, isMediumViewport && (0,external_wp_element_namespaceObject.createElement)("h1", {
    className: "edit-widgets-header__title"
  }, (0,external_wp_i18n_namespaceObject.__)('Widgets')), !isMediumViewport && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.VisuallyHidden, {
    as: "h1",
    className: "edit-widgets-header__title"
  }, (0,external_wp_i18n_namespaceObject.__)('Widgets')), (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.NavigableToolbar, {
    className: "edit-widgets-header-toolbar",
    "aria-label": (0,external_wp_i18n_namespaceObject.__)('Document tools'),
    shouldUseKeyboardFocusShortcut: !blockToolbarCanBeFocused
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarItem, {
    ref: inserterButton,
    as: external_wp_components_namespaceObject.Button,
    className: "edit-widgets-header-toolbar__inserter-toggle",
    variant: "primary",
    isPressed: isInserterOpen,
    onMouseDown: event => {
      event.preventDefault();
    },
    onClick: handleClick,
    icon: library_plus
    /* translators: button label text should, if possible, be under 16
    characters. */
    ,
    label: (0,external_wp_i18n_namespaceObject._x)('Toggle block inserter', 'Generic label for block inserter button')
  }), isMediumViewport && (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(UndoButton, null), (0,external_wp_element_namespaceObject.createElement)(RedoButton, null), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ToolbarItem, {
    as: external_wp_components_namespaceObject.Button,
    className: "edit-widgets-header-toolbar__list-view-toggle",
    icon: list_view,
    isPressed: isListViewOpen
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: (0,external_wp_i18n_namespaceObject.__)('List View'),
    onClick: toggleListView
  })))), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-header__actions"
  }, (0,external_wp_element_namespaceObject.createElement)(save_button, null), (0,external_wp_element_namespaceObject.createElement)(pinned_items.Slot, {
    scope: "core/edit-widgets"
  }), (0,external_wp_element_namespaceObject.createElement)(MoreMenu, null))));
}

ActionItem.Slot = ActionItemSlot;
/* harmony default export */ var action_item = (ActionItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function Notices() {
  const {
    removeNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);
  const {
    notices
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    return {
      notices: select(external_wp_notices_namespaceObject.store).getNotices()
    };
  }, []);
  const dismissibleNotices = notices.filter(({
    isDismissible,
    type
  }) => isDismissible && type === 'default');
  const nonDismissibleNotices = notices.filter(({
    isDismissible,
    type
  }) => !isDismissible && type === 'default');
  const snackbarNotices = notices.filter(({
    type
  }) => type === 'snackbar');
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.NoticeList, {
    notices: nonDismissibleNotices,
    className: "edit-widgets-notices__pinned"
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.NoticeList, {
    notices: dismissibleNotices,
    className: "edit-widgets-notices__dismissible",
    onRemove: removeNotice
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.SnackbarList, {
    notices: snackbarNotices,
    className: "edit-widgets-notices__snackbar",
    onRemove: removeNotice
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



function WidgetAreasBlockEditorContent({
  blockEditorSettings
}) {
  const hasThemeStyles = (0,external_wp_data_namespaceObject.useSelect)(select => !!select(external_wp_preferences_namespaceObject.store).get('core/edit-widgets', 'themeStyles'), []);
  const styles = (0,external_wp_element_namespaceObject.useMemo)(() => {
    return hasThemeStyles ? blockEditorSettings.styles : [];
  }, [blockEditorSettings, hasThemeStyles]);
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-block-editor"
  }, (0,external_wp_element_namespaceObject.createElement)(notices, null), (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockTools, null, (0,external_wp_element_namespaceObject.createElement)(keyboard_shortcuts, null), (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.__unstableEditorStyles, {
    styles: styles
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockSelectionClearer, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.WritingFlow, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.ObserveTyping, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockList, {
    className: "edit-widgets-main-block-list"
  }))))));
}

PinnedItems.Slot = PinnedItemsSlot;
/* harmony default export */ var pinned_items = (PinnedItems);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */




const useWidgetLibraryInsertionPoint = () => {
  const firstRootId = (0,external_wp_data_namespaceObject.useSelect)(select => {
    // Default to the first widget area
    const {
      getEntityRecord
    } = select(external_wp_coreData_namespaceObject.store);
    const widgetAreasPost = getEntityRecord(KIND, POST_TYPE, buildWidgetAreasPostId());
    return widgetAreasPost?.blocks[0]?.clientId;
  }, []);
  return (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getActiveComplementaryArea,
      isItemPinned
    } = select(store);

    const _activeArea = getActiveComplementaryArea(scope);

    return {
      isActive: _activeArea === identifier,
      isPinned: isItemPinned(scope, identifier),
      activeArea: _activeArea,
      isSmall: select(external_wp_viewport_["store"]).isViewportMatch('< medium'),
      isLarge: select(external_wp_viewport_["store"]).isViewportMatch('large')
    };
  }, [identifier, scope]);
  useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall);
  const {
    enableComplementaryArea,
    disableComplementaryArea,
    pinItem,
    unpinItem
  } = Object(external_wp_data_["useDispatch"])(store);
  Object(external_wp_element_["useEffect"])(() => {
    if (isActiveByDefault && activeArea === undefined && !isSmall) {
      enableComplementaryArea(scope, identifier);
    }
  }, [activeArea, isActiveByDefault, scope, identifier, isSmall]);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, isPinnable && Object(external_wp_element_["createElement"])(pinned_items, {
    scope: scope
  }, isPinned && Object(external_wp_element_["createElement"])(complementary_area_toggle, {
    scope: scope,
    identifier: identifier,
    isPressed: isActive && (!showIconLabels || isLarge),
    "aria-expanded": isActive,
    label: title,
    icon: showIconLabels ? check["a" /* default */] : icon,
    showTooltip: !showIconLabels,
    variant: showIconLabels ? 'tertiary' : undefined
  })), name && isPinnable && Object(external_wp_element_["createElement"])(ComplementaryAreaMoreMenuItem, {
    target: name,
    scope: scope,
    icon: icon
  }, title), isActive && Object(external_wp_element_["createElement"])(ComplementaryAreaFill, {
    className: classnames_default()('interface-complementary-area', className),
    scope: scope
  }, Object(external_wp_element_["createElement"])(complementary_area_header, {
    className: headerClassName,
    closeLabel: closeLabel,
    onClose: () => disableComplementaryArea(scope),
    smallScreenTitle: smallScreenTitle,
    toggleButtonProps: {
      label: closeLabel,
      shortcut: toggleShortcut,
      scope,
      identifier
    }
  }, header || Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("strong", null, title), isPinnable && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "interface-complementary-area__pin-unpin-item",
    icon: isPinned ? star_filled["a" /* default */] : star_empty["a" /* default */],
    label: isPinned ? Object(external_wp_i18n_["__"])('Unpin from toolbar') : Object(external_wp_i18n_["__"])('Pin to toolbar'),
    onClick: () => (isPinned ? unpinItem : pinItem)(scope, identifier),
    isPressed: isPinned,
    "aria-expanded": isPinned
  }))), Object(external_wp_element_["createElement"])(external_wp_components_["Panel"], {
    className: panelClassName
  }, children)));
}

const ComplementaryAreaWrapped = complementary_area_context(ComplementaryArea);
ComplementaryAreaWrapped.Slot = ComplementaryAreaSlot;
/* harmony default export */ var complementary_area = (ComplementaryAreaWrapped);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js
/**
 * WordPress dependencies
 */


const FullscreenMode = _ref => {
  let {
    isActive
  } = _ref;
  Object(external_wp_element_["useEffect"])(() => {
    let isSticky = false; // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
    // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
    // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
    // a consequence of the FullscreenMode setup

    if (document.body.classList.contains('sticky-menu')) {
      isSticky = true;
      document.body.classList.remove('sticky-menu');
    }

    return () => {
      if (isSticky) {
        document.body.classList.add('sticky-menu');
      }
    };
  }, []);
  Object(external_wp_element_["useEffect"])(() => {
    if (isActive) {
      document.body.classList.add('is-fullscreen-mode');
    } else {
      document.body.classList.remove('is-fullscreen-mode');
    }

    return () => {
      if (isActive) {
        document.body.classList.remove('is-fullscreen-mode');
      }
    };
  }, [isActive]);
  return null;
};

/* harmony default export */ var fullscreen_mode = (FullscreenMode);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * WordPress dependencies
 */


function InserterSidebar() {
  const isMobileViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium', '<');
  const {
    rootClientId,
    insertionIndex
  } = use_widget_library_insertion_point();
  const {
    setIsInserterOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const closeInserter = (0,external_wp_element_namespaceObject.useCallback)(() => {
    return setIsInserterOpened(false);
  }, [setIsInserterOpened]);
  const TagName = !isMobileViewport ? external_wp_components_namespaceObject.VisuallyHidden : 'div';
  const [inserterDialogRef, inserterDialogProps] = (0,external_wp_compose_namespaceObject.__experimentalUseDialog)({
    onClose: closeInserter,
    focusOnMount: null
  });
  const libraryRef = (0,external_wp_element_namespaceObject.useRef)();
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    libraryRef.current.focusSearch();
  }, []);
  return (0,external_wp_element_namespaceObject.createElement)("div", {
    ref: inserterDialogRef,
    ...inserterDialogProps,
    className: "edit-widgets-layout__inserter-panel"
  }, (0,external_wp_element_namespaceObject.createElement)(TagName, {
    className: "edit-widgets-layout__inserter-panel-header"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    icon: library_close,
    onClick: closeInserter,
    label: (0,external_wp_i18n_namespaceObject.__)('Close block inserter')
  })), (0,external_wp_element_namespaceObject.createElement)("div", {
    className: "edit-widgets-layout__inserter-panel-content"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.__experimentalLibrary, {
    showInserterHelpPanel: true,
    shouldFocusBlock: isMobileViewport,
    rootClientId: rootClientId,
    __experimentalInsertionIndex: insertionIndex,
    ref: libraryRef
  })));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/edit-widgets/build-module/components/secondary-sidebar/list-view-sidebar.js




function useHTMLClass(className) {
  Object(external_wp_element_["useEffect"])(() => {
    const element = document && document.querySelector(`html:not(.${className})`);

    if (!element) {
      return;
    }

    element.classList.toggle(className);
    return () => {
      element.classList.toggle(className);
    };
  }, [className]);
}

function InterfaceSkeleton(_ref, ref) {
  let {
    footer,
    header,
    sidebar,
    secondarySidebar,
    notices,
    content,
    drawer,
    actions,
    labels,
    className,
    shortcuts
  } = _ref;
  const navigateRegionsProps = Object(external_wp_components_["__unstableUseNavigateRegions"])(shortcuts);
  useHTMLClass('interface-interface-skeleton__html-container');
  const defaultLabels = {
    /* translators: accessibility text for the nav bar landmark region. */
    drawer: Object(external_wp_i18n_["__"])('Drawer'),

    /* translators: accessibility text for the top bar landmark region. */
    header: Object(external_wp_i18n_["__"])('Header'),


/**
 * Internal dependencies
 */

    /* translators: accessibility text for the secondary sidebar landmark region. */
    secondarySidebar: Object(external_wp_i18n_["__"])('Block Library'),

function ListViewSidebar() {
  const {
    setIsListViewOpened
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store); // Use internal state instead of a ref to make sure that the component
  // re-renders when the dropZoneElement updates.

  const [dropZoneElement, setDropZoneElement] = (0,external_wp_element_namespaceObject.useState)(null);
  const focusOnMountRef = (0,external_wp_compose_namespaceObject.useFocusOnMount)('firstElement');
  const headerFocusReturnRef = (0,external_wp_compose_namespaceObject.useFocusReturn)();
  const contentFocusReturnRef = (0,external_wp_compose_namespaceObject.useFocusReturn)();

    /* translators: accessibility text for the publish landmark region. */
    actions: Object(external_wp_i18n_["__"])('Publish'),

  return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "edit-widgets-editor__list-view-panel",
      onKeyDown: closeOnEscape
    }, (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "edit-widgets-editor__list-view-panel-header",
      ref: headerFocusReturnRef
    }, (0,external_wp_element_namespaceObject.createElement)("strong", null, (0,external_wp_i18n_namespaceObject.__)('List View')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
      icon: close_small,
      label: (0,external_wp_i18n_namespaceObject.__)('Close'),
      onClick: () => setIsListViewOpened(false)
    })), (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "edit-widgets-editor__list-view-panel-content",
      ref: (0,external_wp_compose_namespaceObject.useMergeRefs)([contentFocusReturnRef, focusOnMountRef, setDropZoneElement])
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.__experimentalListView, {
      dropZoneElement: dropZoneElement
    })))
  );
}

/* harmony default export */ var interface_skeleton = (Object(external_wp_element_["forwardRef"])(InterfaceSkeleton));

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/more-vertical.js
var more_vertical = __webpack_require__("VKE3");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/more-menu-dropdown/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function MoreMenuDropdown(_ref) {
  let {
    as: DropdownComponent = external_wp_components_["DropdownMenu"],
    className,

    /* translators: button label text should, if possible, be under 16 characters. */
    label = Object(external_wp_i18n_["__"])('Options'),
    popoverProps,
    toggleProps,
    children
  } = _ref;
  return Object(external_wp_element_["createElement"])(DropdownComponent, {
    className: classnames_default()('interface-more-menu-dropdown', className),
    icon: more_vertical["a" /* default */],
    label: label,
    popoverProps: {
      position: 'bottom left',
      ...popoverProps,
      className: classnames_default()('interface-more-menu-dropdown__content', popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.className)
    },
    toggleProps: {
      tooltipPosition: 'bottom',
      ...toggleProps
    }
  }, onClose => children(onClose));
}

// EXTERNAL MODULE: external ["wp","a11y"]
var external_wp_a11y_ = __webpack_require__("gdqT");

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/more-menu-feature-toggle/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const interfaceLabels = {
  /* translators: accessibility text for the widgets screen top bar landmark region. */
  header: (0,external_wp_i18n_namespaceObject.__)('Widgets top bar'),

  /* translators: accessibility text for the widgets screen content landmark region. */
  body: (0,external_wp_i18n_namespaceObject.__)('Widgets and blocks'),

  /* translators: accessibility text for the widgets screen settings landmark region. */
  sidebar: (0,external_wp_i18n_namespaceObject.__)('Widgets settings'),

  /* translators: accessibility text for the widgets screen footer landmark region. */
  footer: (0,external_wp_i18n_namespaceObject.__)('Widgets footer')
};

function Interface({
  blockEditorSettings
}) {
  const isMobileViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('medium', '<');
  const isHugeViewport = (0,external_wp_compose_namespaceObject.useViewportMatch)('huge', '>=');
  const {
    setIsInserterOpened,
    setIsListViewOpened,
    closeGeneralSidebar
  } = (0,external_wp_data_namespaceObject.useDispatch)(store_store);
  const {
    toggleFeature
  } = Object(external_wp_data_["useDispatch"])(store);

  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (hasSidebarEnabled && !isHugeViewport) {
      setIsInserterOpened(false);
      setIsListViewOpened(false);
    }
  }, [hasSidebarEnabled, isHugeViewport]);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if ((isInserterOpened || isListViewOpened) && !isHugeViewport) {
      closeGeneralSidebar();
    }
  }, [isInserterOpened, isListViewOpened, isHugeViewport]);
  const secondarySidebarLabel = isListViewOpened ? (0,external_wp_i18n_namespaceObject.__)('List View') : (0,external_wp_i18n_namespaceObject.__)('Block Library');
  const hasSecondarySidebar = isListViewOpened || isInserterOpened;
  return (0,external_wp_element_namespaceObject.createElement)(interface_skeleton, {
    labels: { ...interfaceLabels,
      secondarySidebar: secondarySidebarLabel
    },
    header: (0,external_wp_element_namespaceObject.createElement)(header, null),
    secondarySidebar: hasSecondarySidebar && (0,external_wp_element_namespaceObject.createElement)(SecondarySidebar, null),
    sidebar: hasSidebarEnabled && (0,external_wp_element_namespaceObject.createElement)(complementary_area.Slot, {
      scope: "core/edit-widgets"
    }),
    content: (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(WidgetAreasBlockEditorContent, {
      blockEditorSettings: blockEditorSettings
    })),
    footer: hasBlockBreadCrumbsEnabled && !isMobileViewport && (0,external_wp_element_namespaceObject.createElement)("div", {
      className: "edit-widgets-layout__footer"
    }, (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockBreadcrumb, {
      rootLabelText: (0,external_wp_i18n_namespaceObject.__)('Widgets')
    })),
    shortcuts: {
      previous: previousShortcut,
      next: nextShortcut
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    icon: isActive && check["a" /* default */],
    isSelected: isActive,
    onClick: () => {
      toggleFeature(scope, feature);
      speakMessage();
    },
    role: "menuitemcheckbox",
    info: info,
    shortcut: shortcut
  }, label);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/index.js







function UnsavedChangesWarning() {
  const isDirty = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getEditedWidgetAreas
    } = select(store_store);
    const editedWidgetAreas = getEditedWidgetAreas();
    return editedWidgetAreas?.length > 0;
  }, []);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    /**
     * Warns the user if there are unsaved changes before leaving the editor.
     *
     * @param {Event} event `beforeunload` event.
     *
     * @return {string | undefined} Warning prompt message, if unsaved changes exist.
     */
    const warnIfUnsavedChanges = event => {
      if (isDirty) {
        event.returnValue = (0,external_wp_i18n_namespaceObject.__)('You have unsaved changes. If you proceed, they will be lost.');
        return event.returnValue;
      }
    };


// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/index.js




/***/ }),

/***/ "URob":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["a"] = (starFilled);


  const isEntirelyBlockWidgets = widgetAreas?.every(widgetArea => widgetArea.id === 'wp_inactive_widgets' || widgetArea.widgets.every(widgetId => widgetId.startsWith('block-')));
  const numWidgetAreas = (_widgetAreas$filter$l = widgetAreas?.filter(widgetArea => widgetArea.id !== 'wp_inactive_widgets').length) !== null && _widgetAreas$filter$l !== void 0 ? _widgetAreas$filter$l : 0;
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Guide, {
    className: "edit-widgets-welcome-guide",
    contentLabel: (0,external_wp_i18n_namespaceObject.__)('Welcome to block Widgets'),
    finishButtonText: (0,external_wp_i18n_namespaceObject.__)('Get started'),
    onFinish: () => toggle('core/edit-widgets', 'welcomeGuide'),
    pages: [{
      image: (0,external_wp_element_namespaceObject.createElement)(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.gif"
      }),
      content: (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, (0,external_wp_i18n_namespaceObject.__)('Welcome to block Widgets')), isEntirelyBlockWidgets ? (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,external_wp_i18n_namespaceObject.sprintf)( // Translators: %s: Number of block areas in the current theme.
      (0,external_wp_i18n_namespaceObject._n)('Your theme provides %s “block” area for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.', 'Your theme provides %s different “block” areas for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.', numWidgetAreas), numWidgetAreas))) : (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,external_wp_i18n_namespaceObject.__)('You can now add any block to your site’s widget areas. Don’t worry, all of your favorite widgets still work flawlessly.')), (0,external_wp_element_namespaceObject.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,external_wp_element_namespaceObject.createElement)("strong", null, (0,external_wp_i18n_namespaceObject.__)('Want to stick with the old widgets?')), ' ', (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
        href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/plugins/classic-widgets/')
      }, (0,external_wp_i18n_namespaceObject.__)('Get the Classic Widgets plugin.')))))
    }, {
      image: (0,external_wp_element_namespaceObject.createElement)(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-editor.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-editor.gif"
      }),
      content: (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, (0,external_wp_i18n_namespaceObject.__)('Make each block your own')), (0,external_wp_element_namespaceObject.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,external_wp_i18n_namespaceObject.__)('Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected.')))
    }, {
      image: (0,external_wp_element_namespaceObject.createElement)(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-library.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-library.gif"
      }),
      content: (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, (0,external_wp_i18n_namespaceObject.__)('Get to know the block library')), (0,external_wp_element_namespaceObject.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,external_wp_element_namespaceObject.createInterpolateElement)((0,external_wp_i18n_namespaceObject.__)('All of the blocks available to you live in the block library. You’ll find it wherever you see the <InserterIconImage /> icon.'), {
        InserterIconImage: (0,external_wp_element_namespaceObject.createElement)("img", {
          className: "edit-widgets-welcome-guide__inserter-icon",
          alt: (0,external_wp_i18n_namespaceObject.__)('inserter'),
          src: "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='18' height='18' rx='2' fill='%231E1E1E'/%3E%3Cpath d='M9.22727 4V14M4 8.77273H14' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E%0A"
        })
      })))
    }, {
      image: (0,external_wp_element_namespaceObject.createElement)(WelcomeGuideImage, {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.gif"
      }),
      content: (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)("h1", {
        className: "edit-widgets-welcome-guide__heading"
      }, (0,external_wp_i18n_namespaceObject.__)('Learn how to use the block editor')), (0,external_wp_element_namespaceObject.createElement)("p", {
        className: "edit-widgets-welcome-guide__text"
      }, (0,external_wp_i18n_namespaceObject.__)('New to the block editor? Want to learn more about using it? '), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ExternalLink, {
        href: (0,external_wp_i18n_namespaceObject.__)('https://wordpress.org/documentation/article/wordpress-block-editor/')
      }, (0,external_wp_i18n_namespaceObject.__)("Here's a detailed guide."))))
    }]
  });
}

function WelcomeGuideImage({
  nonAnimatedSrc,
  animatedSrc
}) {
  return (0,external_wp_element_namespaceObject.createElement)("picture", {
    className: "edit-widgets-welcome-guide__image"
  }, (0,external_wp_element_namespaceObject.createElement)("source", {
    srcSet: nonAnimatedSrc,
    media: "(prefers-reduced-motion: reduce)"
  }), (0,external_wp_element_namespaceObject.createElement)("img", {
    src: animatedSrc,
    width: "312",
    height: "240",
    alt: ""
  }));
}

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreVertical = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (moreVertical);


/***/ }),

/***/ "Xxwi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starEmpty = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["a"] = (starEmpty);


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

function Layout({
  blockEditorSettings
}) {
  const {
    createErrorNotice
  } = (0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);

  function onPluginAreaError(name) {
    createErrorNotice((0,external_wp_i18n_namespaceObject.sprintf)(
    /* translators: %s: plugin name */
    (0,external_wp_i18n_namespaceObject.__)('The "%s" plugin has encountered an error and cannot be rendered.'), name));
  }

  return (0,external_wp_element_namespaceObject.createElement)(ErrorBoundary, null, (0,external_wp_element_namespaceObject.createElement)(WidgetAreasBlockEditorProvider, {
    blockEditorSettings: blockEditorSettings
  }, (0,external_wp_element_namespaceObject.createElement)(layout_interface, {
    blockEditorSettings: blockEditorSettings
  }), (0,external_wp_element_namespaceObject.createElement)(Sidebar, null), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Popover.Slot, null), (0,external_wp_element_namespaceObject.createElement)(external_wp_plugins_namespaceObject.PluginArea, {
    onError: onPluginAreaError
  }), (0,external_wp_element_namespaceObject.createElement)(UnsavedChangesWarning, null), (0,external_wp_element_namespaceObject.createElement)(WelcomeGuide, null)));
}

/***/ "bWcr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["a"] = (closeSmall);


/***/ }),

/***/ "diJD":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["reusableBlocks"]; }());

/***/ }),


/**
 * Internal dependencies
 */

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "gdqT":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["a11y"]; }());

/***/ }),

const disabledBlocks = ['core/more', 'core/freeform', 'core/template-part', ...(ALLOW_REUSABLE_BLOCKS ? [] : ['core/block'])];
/**
 * Initializes the block editor in the widgets screen.
 *
 * @param {string} id       ID of the root element to render the screen in.
 * @param {Object} settings Block editor settings.
 */

function initializeEditor(id, settings) {
  const target = document.getElementById(id);
  const root = (0,external_wp_element_namespaceObject.createRoot)(target);

/***/ "jZUy":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "onLe":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "w95h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


  (0,external_wp_blocks_namespaceObject.setFreeformContentHandlerName)('core/html');
  root.render((0,external_wp_element_namespaceObject.createElement)(layout, {
    blockEditorSettings: settings
  }));
  return root;
}
/**
 * Compatibility export under the old `initialize` name.
 */

const initialize = initializeEditor;
function reinitializeEditor() {
  external_wp_deprecated_default()('wp.editWidgets.reinitializeEditor', {
    since: '6.2',
    version: '6.3'
  });
}
/**
 * WordPress dependencies
 */

const close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);


/***/ }),

/***/ "wx14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
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

/***/ }),

/***/ "ywyh":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ })

/******/ });
