this["wp"] = this["wp"] || {}; this["wp"]["reusableBlocks"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "iqm2");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "Mmq9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ "Tqx9":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "axFQ":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "iqm2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ReusableBlocksMenuItems": function() { return /* reexport */ ReusableBlocksMenuItems; },
  "store": function() { return /* reexport */ store; }
});

// NAMESPACE OBJECT: ./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "__experimentalConvertBlockToStatic", function() { return __experimentalConvertBlockToStatic; });
__webpack_require__.d(actions_namespaceObject, "__experimentalConvertBlocksToReusable", function() { return __experimentalConvertBlocksToReusable; });
__webpack_require__.d(actions_namespaceObject, "__experimentalDeleteReusableBlock", function() { return __experimentalDeleteReusableBlock; });
__webpack_require__.d(actions_namespaceObject, "__experimentalSetEditingReusableBlock", function() { return __experimentalSetEditingReusableBlock; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "__experimentalIsEditingReusableBlock", function() { return __experimentalIsEditingReusableBlock; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__("axFQ");

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/actions.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Returns a generator converting a reusable block into a static block.
 *
 * @param {string} clientId The client ID of the block to attach.
 */

const __experimentalConvertBlockToStatic = clientId => ({
  registry
}) => {
  const oldBlock = registry.select(external_wp_blockEditor_namespaceObject.store).getBlock(clientId);
  const reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', oldBlock.attributes.ref);
  const newBlocks = Object(external_wp_blocks_["parse"])(Object(external_lodash_["isFunction"])(reusableBlock.content) ? reusableBlock.content(reusableBlock) : reusableBlock.content);
  registry.dispatch(external_wp_blockEditor_["store"]).replaceBlocks(oldBlock.clientId, newBlocks);
};
/**
 * Returns a generator converting one or more static blocks into a pattern.
 *
 * @param {string[]}             clientIds The client IDs of the block to detach.
 * @param {string}               title     Pattern title.
 * @param {undefined|'unsynced'} syncType  They way block is synced, current undefined (synced) and 'unsynced'.
 */

const __experimentalConvertBlocksToReusable = (clientIds, title, syncType) => async ({
  registry,
  dispatch
}) => {
  const meta = syncType === 'unsynced' ? {
    wp_pattern_sync_status: syncType
  } : undefined;
  const reusableBlock = {
    title: title || (0,external_wp_i18n_namespaceObject.__)('Untitled Pattern block'),
    content: (0,external_wp_blocks_namespaceObject.serialize)(registry.select(external_wp_blockEditor_namespaceObject.store).getBlocksByClientId(clientIds)),
    status: 'publish',
    meta
  };
  const updatedRecord = await registry.dispatch('core').saveEntityRecord('postType', 'wp_block', reusableBlock);

  if (syncType === 'unsynced') {
    return;
  }

  const newBlock = (0,external_wp_blocks_namespaceObject.createBlock)('core/block', {
    ref: updatedRecord.id
  });
  registry.dispatch(external_wp_blockEditor_["store"]).replaceBlocks(clientIds, newBlock);

  dispatch.__experimentalSetEditingReusableBlock(newBlock.clientId, true);
};
/**
 * Returns a generator deleting a reusable block.
 *
 * @param {string} id The ID of the reusable block to delete.
 */

const __experimentalDeleteReusableBlock = id => async ({
  registry
}) => {
  const reusableBlock = registry.select('core').getEditedEntityRecord('postType', 'wp_block', id); // Don't allow a reusable block with a temporary ID to be deleted.

  if (!reusableBlock) {
    return;
  } // Remove any other blocks that reference this reusable block


  const allBlocks = registry.select(external_wp_blockEditor_["store"]).getBlocks();
  const associatedBlocks = allBlocks.filter(block => Object(external_wp_blocks_["isReusableBlock"])(block) && block.attributes.ref === id);
  const associatedBlockClientIds = associatedBlocks.map(block => block.clientId); // Remove the parsed block.

  if (associatedBlockClientIds.length) {
    registry.dispatch(external_wp_blockEditor_["store"]).removeBlocks(associatedBlockClientIds);
  }

  await registry.dispatch('core').deleteEntityRecord('postType', 'wp_block', id);
};
/**
 * Returns an action descriptor for SET_EDITING_REUSABLE_BLOCK action.
 *
 * @param {string}  clientId  The clientID of the reusable block to target.
 * @param {boolean} isEditing Whether the block should be in editing state.
 * @return {Object} Action descriptor.
 */

function __experimentalSetEditingReusableBlock(clientId, isEditing) {
  return {
    type: 'SET_EDITING_REUSABLE_BLOCK',
    clientId,
    isEditing
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/reducer.js
/**
 * WordPress dependencies
 */

function isEditingReusableBlock(state = {}, action) {
  if (action?.type === 'SET_EDITING_REUSABLE_BLOCK') {
    return { ...state,
      [action.clientId]: action.isEditing
    };
  }

  return state;
}
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  isEditingReusableBlock
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/selectors.js
/**
 * Returns true if reusable block is in the editing state.
 *
 * @param {Object} state    Global application state.
 * @param {number} clientId the clientID of the block.
 * @return {boolean} Whether the reusable block is in the editing state.
 */
function __experimentalIsEditingReusableBlock(state, clientId) {
  return state.isEditingReusableBlock[clientId];
}

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const STORE_NAME = 'core/reusable-blocks';
/**
 * Store definition for the reusable blocks namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, {
  actions: actions_namespaceObject,
  reducer: reducer,
  selectors: selectors_namespaceObject,
  __experimentalUseThunks: true
});
Object(external_wp_data_["register"])(store);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__("Tqx9");

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/reusable-block.js


/**
 * WordPress dependencies
 */

const reusable_block_reusableBlock = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"
}));
/* harmony default export */ var reusable_block = (reusable_block_reusableBlock);

;// CONCATENATED MODULE: external ["wp","notices"]
var external_wp_notices_namespaceObject = window["wp"]["notices"];
;// CONCATENATED MODULE: external ["wp","coreData"]
var external_wp_coreData_namespaceObject = window["wp"]["coreData"];
;// CONCATENATED MODULE: external ["wp","privateApis"]
var external_wp_privateApis_namespaceObject = window["wp"]["privateApis"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/lock-unlock.js
/**
 * WordPress dependencies
 */

const {
  unlock
} = (0,external_wp_privateApis_namespaceObject.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my plugin or theme will inevitably break on the next WordPress release.', '@wordpress/reusable-blocks');

;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-block-convert-button.js


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



/**
 * Menu control to convert block(s) to reusable block.
 *
 * @param {Object}   props              Component props.
 * @param {string[]} props.clientIds    Client ids of selected blocks.
 * @param {string}   props.rootClientId ID of the currently selected top-level block.
 * @return {import('@wordpress/element').WPComponent} The menu control or null.
 */

function ReusableBlockConvertButton({
  clientIds,
  rootClientId
}) {
  const {
    useReusableBlocksRenameHint,
    ReusableBlocksRenameHint
  } = unlock(external_wp_blockEditor_namespaceObject.privateApis);
  const showRenameHint = useReusableBlocksRenameHint();
  const [syncType, setSyncType] = (0,external_wp_element_namespaceObject.useState)(undefined);
  const [isModalOpen, setIsModalOpen] = (0,external_wp_element_namespaceObject.useState)(false);
  const [title, setTitle] = (0,external_wp_element_namespaceObject.useState)('');
  const canConvert = (0,external_wp_data_namespaceObject.useSelect)(select => {
    var _getBlocksByClientId;

    const {
      canUser
    } = select(external_wp_coreData_["store"]);
    const {
      getBlocksByClientId,
      canInsertBlockType,
      getBlockRootClientId
    } = select(external_wp_blockEditor_namespaceObject.store);
    const rootId = rootClientId || (clientIds.length > 0 ? getBlockRootClientId(clientIds[0]) : undefined);
    const blocks = (_getBlocksByClientId = getBlocksByClientId(clientIds)) !== null && _getBlocksByClientId !== void 0 ? _getBlocksByClientId : [];
    const isReusable = blocks.length === 1 && blocks[0] && Object(external_wp_blocks_["isReusableBlock"])(blocks[0]) && !!select(external_wp_coreData_["store"]).getEntityRecord('postType', 'wp_block', blocks[0].attributes.ref);

    const _canConvert = // Hide when this is already a reusable block.
    !isReusable && // Hide when reusable blocks are disabled.
    canInsertBlockType('core/block', rootId) && blocks.every(block => // Guard against the case where a regular block has *just* been converted.
    !!block && // Hide on invalid blocks.
    block.isValid && // Hide when block doesn't support being made reusable.
    Object(external_wp_blocks_["hasBlockSupport"])(block.name, 'reusable', true)) && // Hide when current doesn't have permission to do that.
    !!canUser('create', 'blocks');

    return _canConvert;
  }, [clientIds, rootClientId]);
  const {
    __experimentalConvertBlocksToReusable: convertBlocksToReusable
  } = Object(external_wp_data_["useDispatch"])(store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]);
  const onConvert = Object(external_wp_element_["useCallback"])(async function (reusableBlockTitle) {
    try {
      await convertBlocksToReusable(clientIds, reusableBlockTitle, syncType);
      createSuccessNotice(!syncType ? (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %s: the name the user has given to the pattern.
      (0,external_wp_i18n_namespaceObject.__)('Synced Pattern created: %s'), reusableBlockTitle) : (0,external_wp_i18n_namespaceObject.sprintf)( // translators: %s: the name the user has given to the pattern.
      (0,external_wp_i18n_namespaceObject.__)('Unsynced Pattern created: %s'), reusableBlockTitle), {
        type: 'snackbar',
        id: 'convert-to-reusable-block-success'
      });
    } catch (error) {
      createErrorNotice(error.message, {
        type: 'snackbar',
        id: 'convert-to-reusable-block-error'
      });
    }
  }, [convertBlocksToReusable, clientIds, syncType, createSuccessNotice, createErrorNotice]);

  if (!canConvert) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockSettingsMenuControls, null, ({
    onClose
  }) => (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
    icon: library_symbol,
    onClick: () => setIsModalOpen(true)
  }, showRenameHint ? (0,external_wp_i18n_namespaceObject.__)('Create pattern/reusable block') : (0,external_wp_i18n_namespaceObject.__)('Create pattern')), isModalOpen && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal, {
    title: (0,external_wp_i18n_namespaceObject.__)('Create pattern'),
    onRequestClose: () => {
      setIsModalOpen(false);
      setTitle('');
    },
    overlayClassName: "reusable-blocks-menu-items__convert-modal"
  }, (0,external_wp_element_namespaceObject.createElement)("form", {
    onSubmit: event => {
      event.preventDefault();
      onConvert(title);
      setIsModalOpen(false);
      setTitle('');
      onClose();
    }
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalVStack, {
    spacing: "5"
  }, (0,external_wp_element_namespaceObject.createElement)(ReusableBlocksRenameHint, null), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextControl, {
    __nextHasNoMarginBottom: true,
    label: (0,external_wp_i18n_namespaceObject.__)('Name'),
    value: title,
    onChange: setTitle,
    placeholder: (0,external_wp_i18n_namespaceObject.__)('My pattern')
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.ToggleControl, {
    label: (0,external_wp_i18n_namespaceObject.__)('Synced'),
    help: (0,external_wp_i18n_namespaceObject.__)('Editing the pattern will update it anywhere it is used.'),
    checked: !syncType,
    onChange: () => {
      setSyncType(!syncType ? 'unsynced' : undefined);
    }
  }), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.__experimentalHStack, {
    justify: "right"
  }, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "tertiary",
    onClick: () => {
      setIsModalOpen(false);
      setTitle('');
    }
  }, (0,external_wp_i18n_namespaceObject.__)('Cancel')), (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button, {
    variant: "primary",
    type: "submit"
  }, (0,external_wp_i18n_namespaceObject.__)('Create'))))))));
}

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__("Mmq9");

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/reusable-blocks-manage-button.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function ReusableBlocksManageButton({
  clientId
}) {
  const {
    canRemove,
    isVisible,
    innerBlockCount,
    managePatternsUrl
  } = (0,external_wp_data_namespaceObject.useSelect)(select => {
    const {
      getBlock,
      canRemoveBlock,
      getBlockCount,
      getSettings
    } = select(external_wp_blockEditor_namespaceObject.store);
    const {
      canUser
    } = select(external_wp_coreData_["store"]);
    const reusableBlock = getBlock(clientId);

    const isBlockTheme = getSettings().__unstableIsBlockBasedTheme;

    return {
      canRemove: canRemoveBlock(clientId),
      isVisible: !!reusableBlock && (0,external_wp_blocks_namespaceObject.isReusableBlock)(reusableBlock) && !!canUser('update', 'blocks', reusableBlock.attributes.ref),
      innerBlockCount: getBlockCount(clientId),
      // The site editor and templates both check whether the user
      // has edit_theme_options capabilities. We can leverage that here
      // and omit the manage patterns link if the user can't access it.
      managePatternsUrl: isBlockTheme && canUser('read', 'templates') ? (0,external_wp_url_namespaceObject.addQueryArgs)('site-editor.php', {
        path: '/patterns'
      }) : (0,external_wp_url_namespaceObject.addQueryArgs)('edit.php', {
        post_type: 'wp_block'
      })
    };
  }, [clientId]);
  const {
    __experimentalConvertBlockToStatic: convertBlockToStatic
  } = Object(external_wp_data_["useDispatch"])(store);

  if (!isVisible) {
    return null;
  }

  return (0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockSettingsMenuControls, null, (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
    href: managePatternsUrl
  }, (0,external_wp_i18n_namespaceObject.__)('Manage patterns')), canRemove && (0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem, {
    onClick: () => convertBlockToStatic(clientId)
  }, innerBlockCount > 1 ? (0,external_wp_i18n_namespaceObject.__)('Detach patterns') : (0,external_wp_i18n_namespaceObject.__)('Detach pattern')));
}

/* harmony default export */ var reusable_blocks_manage_button = (ReusableBlocksManageButton);

// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/reusable-blocks-menu-items/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function ReusableBlocksMenuItems({
  rootClientId
}) {
  const clientIds = (0,external_wp_data_namespaceObject.useSelect)(select => select(external_wp_blockEditor_namespaceObject.store).getSelectedBlockClientIds(), []);
  return (0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment, null, (0,external_wp_element_namespaceObject.createElement)(ReusableBlockConvertButton, {
    clientIds: clientIds,
    rootClientId: rootClientId
  }), clientIds.length === 1 && Object(external_wp_element_["createElement"])(reusable_blocks_manage_button, {
    clientId: clientIds[0]
  }));
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/reusable-blocks/build-module/components/index.js

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ })

/******/ });
