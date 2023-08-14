this["wp"] = this["wp"] || {}; this["wp"]["compose"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "PD33");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1CF3":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dom"]; }());

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "NMb1":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["deprecated"]; }());

/***/ }),

/***/ "PD33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "createHigherOrderComponent", function() { return /* reexport */ create_higher_order_component; });
__webpack_require__.d(__webpack_exports__, "compose", function() { return /* reexport */ compose; });
__webpack_require__.d(__webpack_exports__, "ifCondition", function() { return /* reexport */ if_condition; });
__webpack_require__.d(__webpack_exports__, "pure", function() { return /* reexport */ higher_order_pure; });
__webpack_require__.d(__webpack_exports__, "withGlobalEvents", function() { return /* reexport */ withGlobalEvents; });
__webpack_require__.d(__webpack_exports__, "withInstanceId", function() { return /* reexport */ with_instance_id; });
__webpack_require__.d(__webpack_exports__, "withSafeTimeout", function() { return /* reexport */ with_safe_timeout; });
__webpack_require__.d(__webpack_exports__, "withState", function() { return /* reexport */ withState; });
__webpack_require__.d(__webpack_exports__, "useConstrainedTabbing", function() { return /* reexport */ use_constrained_tabbing; });
__webpack_require__.d(__webpack_exports__, "useCopyOnClick", function() { return /* reexport */ useCopyOnClick; });
__webpack_require__.d(__webpack_exports__, "useCopyToClipboard", function() { return /* reexport */ useCopyToClipboard; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseDialog", function() { return /* reexport */ use_dialog; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseDisabled", function() { return /* reexport */ useDisabled; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseDragging", function() { return /* reexport */ useDragging; });
__webpack_require__.d(__webpack_exports__, "useFocusOnMount", function() { return /* reexport */ useFocusOnMount; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseFocusOutside", function() { return /* reexport */ useFocusOutside; });
__webpack_require__.d(__webpack_exports__, "useFocusReturn", function() { return /* reexport */ use_focus_return; });
__webpack_require__.d(__webpack_exports__, "useInstanceId", function() { return /* reexport */ useInstanceId; });
__webpack_require__.d(__webpack_exports__, "useIsomorphicLayoutEffect", function() { return /* reexport */ use_isomorphic_layout_effect; });
__webpack_require__.d(__webpack_exports__, "useKeyboardShortcut", function() { return /* reexport */ use_keyboard_shortcut; });
__webpack_require__.d(__webpack_exports__, "useMediaQuery", function() { return /* reexport */ useMediaQuery; });
__webpack_require__.d(__webpack_exports__, "usePrevious", function() { return /* reexport */ usePrevious; });
__webpack_require__.d(__webpack_exports__, "useReducedMotion", function() { return /* reexport */ use_reduced_motion; });
__webpack_require__.d(__webpack_exports__, "useViewportMatch", function() { return /* reexport */ use_viewport_match; });
__webpack_require__.d(__webpack_exports__, "useResizeObserver", function() { return /* reexport */ use_resize_observer; });
__webpack_require__.d(__webpack_exports__, "useAsyncList", function() { return /* reexport */ use_async_list; });
__webpack_require__.d(__webpack_exports__, "useWarnOnChange", function() { return /* reexport */ use_warn_on_change; });
__webpack_require__.d(__webpack_exports__, "useDebounce", function() { return /* reexport */ useDebounce; });
__webpack_require__.d(__webpack_exports__, "useThrottle", function() { return /* reexport */ useThrottle; });
__webpack_require__.d(__webpack_exports__, "useMergeRefs", function() { return /* reexport */ useMergeRefs; });
__webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return /* reexport */ useRefEffect; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseDropZone", function() { return /* reexport */ useDropZone; });
__webpack_require__.d(__webpack_exports__, "useFocusableIframe", function() { return /* reexport */ useFocusableIframe; });
__webpack_require__.d(__webpack_exports__, "__experimentalUseFixedWindowList", function() { return /* reexport */ useFixedWindowList; });

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/utils/create-higher-order-component/index.js
/**
 * External dependencies
 */
 // eslint-disable-next-line no-restricted-imports

/**
 * Given a function mapping a component to an enhanced component and modifier
 * name, returns the enhanced component augmented with a generated displayName.
 *
 * @param  mapComponentToEnhancedComponent Function mapping component to enhanced component.
 * @param  modifierName                    Seed name from which to generated display name.
 *
 * @return Component class with generated display name assigned.
 */
function createHigherOrderComponent(mapComponent, modifierName) {
  return Inner => {
    const Outer = mapComponent(Inner);
    const displayName = Inner.displayName || Inner.name || 'Component';
    Outer.displayName = `${Object(external_lodash_["upperFirst"])(Object(external_lodash_["camelCase"])(modifierName))}(${displayName})`;
    return Outer;
  };
}

/* harmony default export */ var create_higher_order_component = (createHigherOrderComponent);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
/**
 * External dependencies
 */

/**
 * Composes multiple higher-order components into a single higher-order component. Performs right-to-left function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * This is just a re-export of `lodash`'s `flowRight` function.
 *
 * @see https://docs-lodash.com/v4/flow-right/
 */

/* harmony default export */ var compose = (external_lodash_["flowRight"]);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/if-condition/index.js


/**
 * Internal dependencies
 */


/**
 * Higher-order component creator, creating a new component which renders if
 * the given condition is satisfied or with the given optional prop name.
 *
 * @example
 * ```ts
 * type Props = { foo: string };
 * const Component = ( props: Props ) => <div>{ props.foo }</div>;
 * const ConditionalComponent = ifCondition( ( props: Props ) => props.foo.length !== 0 )( Component );
 * <ConditionalComponent foo="" />; // => null
 * <ConditionalComponent foo="bar" />; // => <div>bar</div>;
 * ```
 *
 * @param  predicate Function to test condition.
 *
 * @return Higher-order component.
 */
const ifCondition = predicate => create_higher_order_component(WrappedComponent => props => {
  if (!predicate(props)) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(WrappedComponent, props);
}, 'ifCondition');

/* harmony default export */ var if_condition = (ifCondition);

// EXTERNAL MODULE: external ["wp","isShallowEqual"]
var external_wp_isShallowEqual_ = __webpack_require__("rl8x");
var external_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_wp_isShallowEqual_);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/pure/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Given a component returns the enhanced component augmented with a component
 * only rerendering when its props/state change
 */
const pure = create_higher_order_component(Wrapped => {
  if (Wrapped.prototype instanceof external_wp_element_["Component"]) {
    return class extends Wrapped {
      shouldComponentUpdate(nextProps, nextState) {
        return !external_wp_isShallowEqual_default()(nextProps, this.props) || !external_wp_isShallowEqual_default()(nextState, this.state);
      }

    };
  }

  return class extends external_wp_element_["Component"] {
    shouldComponentUpdate(nextProps) {
      return !external_wp_isShallowEqual_default()(nextProps, this.props);
    }

    render() {
      return Object(external_wp_element_["createElement"])(Wrapped, this.props);
    }

  };
}, 'pure');
/* harmony default export */ var higher_order_pure = (pure);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","deprecated"]
var external_wp_deprecated_ = __webpack_require__("NMb1");
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-global-events/listener.js
/**
 * External dependencies
 */

/**
 * Class responsible for orchestrating event handling on the global window,
 * binding a single event to be shared across all handling instances, and
 * removing the handler when no instances are listening for the event.
 */

class listener_Listener {
  constructor() {
    /** @type {any} */
    this.listeners = {};
    this.handleEvent = this.handleEvent.bind(this);
  }

  add(
  /** @type {any} */
  eventType,
  /** @type {any} */
  instance) {
    if (!this.listeners[eventType]) {
      // Adding first listener for this type, so bind event.
      window.addEventListener(eventType, this.handleEvent);
      this.listeners[eventType] = [];
    }

    this.listeners[eventType].push(instance);
  }

  remove(
  /** @type {any} */
  eventType,
  /** @type {any} */
  instance) {
    this.listeners[eventType] = Object(external_lodash_["without"])(this.listeners[eventType], instance);

    if (!this.listeners[eventType].length) {
      // Removing last listener for this type, so unbind event.
      window.removeEventListener(eventType, this.handleEvent);
      delete this.listeners[eventType];
    }
  }

  handleEvent(
  /** @type {any} */
  event) {
    Object(external_lodash_["forEach"])(this.listeners[event.type], instance => {
      instance.handleEvent(event);
    });
  }

}

/* harmony default export */ var listener = (listener_Listener);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-global-events/index.js



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
 * Listener instance responsible for managing document event handling.
 */

const with_global_events_listener = new listener();
/* eslint-disable jsdoc/no-undefined-types */

/**
 * Higher-order component creator which, given an object of DOM event types and
 * values corresponding to a callback function name on the component, will
 * create or update a window event handler to invoke the callback when an event
 * occurs. On behalf of the consuming developer, the higher-order component
 * manages unbinding when the component unmounts, and binding at most a single
 * event handler for the entire application.
 *
 * @deprecated
 *
 * @param {Record<keyof GlobalEventHandlersEventMap, string>} eventTypesToHandlers Object with keys of DOM
 *                                                                                 event type, the value a
 *                                                                                 name of the function on
 *                                                                                 the original component's
 *                                                                                 instance which handles
 *                                                                                 the event.
 *
 * @return {any} Higher-order component.
 */

function withGlobalEvents(eventTypesToHandlers) {
  external_wp_deprecated_default()('wp.compose.withGlobalEvents', {
    since: '5.7',
    alternative: 'useEffect'
  });
  return create_higher_order_component(WrappedComponent => {
    class Wrapper extends external_wp_element_["Component"] {
      constructor(
      /** @type {any} */
      props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
        this.handleRef = this.handleRef.bind(this);
      }

      componentDidMount() {
        Object(external_lodash_["forEach"])(eventTypesToHandlers, (_, eventType) => {
          with_global_events_listener.add(eventType, this);
        });
      }

      componentWillUnmount() {
        Object(external_lodash_["forEach"])(eventTypesToHandlers, (_, eventType) => {
          with_global_events_listener.remove(eventType, this);
        });
      }

      handleEvent(
      /** @type {any} */
      event) {
        const handler = eventTypesToHandlers[
        /** @type {keyof GlobalEventHandlersEventMap} */
        event.type
        /* eslint-enable jsdoc/no-undefined-types */
        ];

        if (typeof this.wrappedRef[handler] === 'function') {
          this.wrappedRef[handler](event);
        }
      }

      handleRef(
      /** @type {any} */
      el) {
        this.wrappedRef = el; // Any component using `withGlobalEvents` that is not setting a `ref`
        // will cause `this.props.forwardedRef` to be `null`, so we need this
        // check.

        if (this.props.forwardedRef) {
          this.props.forwardedRef(el);
        }
      }

      render() {
        return Object(external_wp_element_["createElement"])(WrappedComponent, Object(esm_extends["a" /* default */])({}, this.props.ownProps, {
          ref: this.handleRef
        }));
      }

    }

    return Object(external_wp_element_["forwardRef"])((props, ref) => {
      return Object(external_wp_element_["createElement"])(Wrapper, {
        ownProps: props,
        forwardedRef: ref
      });
    });
  }, 'withGlobalEvents');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
// Disable reason: Object and object are distinctly different types in TypeScript and we mean the lowercase object in thise case
// but eslint wants to force us to use `Object`. See https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript

/* eslint-disable jsdoc/check-types */

/**
 * WordPress dependencies
 */

/**
 * @type {WeakMap<object, number>}
 */

const instanceMap = new WeakMap();
/**
 * Creates a new id for a given object.
 *
 * @param {object} object Object reference to create an id for.
 * @return {number} The instance id (index).
 */

function createId(object) {
  const instances = instanceMap.get(object) || 0;
  instanceMap.set(object, instances + 1);
  return instances;
}
/**
 * Provides a unique instance ID.
 *
 * @param {object}          object           Object reference to create an id for.
 * @param {string}          [prefix]         Prefix for the unique id.
 * @param {string | number} [preferredId=''] Default ID to use.
 * @return {string | number} The unique instance id.
 */


function useInstanceId(object, prefix) {
  let preferredId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return Object(external_wp_element_["useMemo"])(() => {
    if (preferredId) return preferredId;
    const id = createId(object);
    return prefix ? `${prefix}-${id}` : id;
  }, [object]);
}
/* eslint-enable jsdoc/check-types */

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js



/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports

/**
 * Internal dependencies
 */


/**
 * A Higher Order Component used to be provide a unique instance ID by
 * component.
 */

const withInstanceId = create_higher_order_component(WrappedComponent => {
  return props => {
    const instanceId = useInstanceId(WrappedComponent);
    return Object(external_wp_element_["createElement"])(WrappedComponent, Object(esm_extends["a" /* default */])({}, props, {
      instanceId: instanceId
    }));
  };
}, 'withInstanceId');
/* harmony default export */ var with_instance_id = (withInstanceId);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-safe-timeout/index.js


/**
 * External dependencies
 */
 // eslint-disable-next-line no-restricted-imports

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



/**
 * A higher-order component used to provide and manage delayed function calls
 * that ought to be bound to a component's lifecycle.
 */
const withSafeTimeout = create_higher_order_component(OriginalComponent => {
  return class WrappedComponent extends external_wp_element_["Component"] {
    constructor(props) {
      super(props);
      this.timeouts = [];
      this.setTimeout = this.setTimeout.bind(this);
      this.clearTimeout = this.clearTimeout.bind(this);
    }

    componentWillUnmount() {
      this.timeouts.forEach(clearTimeout);
    }

    setTimeout(fn, delay) {
      const id = setTimeout(() => {
        fn();
        this.clearTimeout(id);
      }, delay);
      this.timeouts.push(id);
      return id;
    }

    clearTimeout(id) {
      clearTimeout(id);
      this.timeouts = Object(external_lodash_["without"])(this.timeouts, id);
    }

    render() {
      const props = { ...this.props,
        setTimeout: this.setTimeout,
        clearTimeout: this.clearTimeout
      };
      return Object(external_wp_element_["createElement"])(OriginalComponent, props);
    }

  };
}, 'withSafeTimeout');
/* harmony default export */ var with_safe_timeout = (withSafeTimeout);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-state/index.js



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * A Higher Order Component used to provide and manage internal component state
 * via props.
 *
 * @deprecated Use `useState` instead.
 *
 * @param {any} initialState Optional initial state of the component.
 *
 * @return {any} A higher order component wrapper accepting a component that takes the state props + its own props + `setState` and returning a component that only accepts the own props.
 */

function withState() {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  external_wp_deprecated_default()('wp.compose.withState', {
    alternative: 'wp.element.useState'
  });
  return create_higher_order_component(OriginalComponent => {
    return class WrappedComponent extends external_wp_element_["Component"] {
      constructor(
      /** @type {any} */
      props) {
        super(props);
        this.setState = this.setState.bind(this);
        this.state = initialState;
      }

      render() {
        return Object(external_wp_element_["createElement"])(OriginalComponent, Object(esm_extends["a" /* default */])({}, this.props, this.state, {
          setState: this.setState
        }));
      }

    };
  }, 'withState');
}

// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__("RxS6");

// EXTERNAL MODULE: external ["wp","dom"]
var external_wp_dom_ = __webpack_require__("1CF3");

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-ref-effect/index.js
/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports

/**
 * WordPress dependencies
 */

/**
 * Effect-like ref callback. Just like with `useEffect`, this allows you to
 * return a cleanup function to be run if the ref changes or one of the
 * dependencies changes. The ref is provided as an argument to the callback
 * functions. The main difference between this and `useEffect` is that
 * the `useEffect` callback is not called when the ref changes, but this is.
 * Pass the returned ref callback as the component's ref and merge multiple refs
 * with `useMergeRefs`.
 *
 * It's worth noting that if the dependencies array is empty, there's not
 * strictly a need to clean up event handlers for example, because the node is
 * to be removed. It *is* necessary if you add dependencies because the ref
 * callback will be called multiple times for the same node.
 *
 * @param  callback     Callback with ref as argument.
 * @param  dependencies Dependencies of the callback.
 *
 * @return Ref callback.
 */

function useRefEffect(callback, dependencies) {
  const cleanup = Object(external_wp_element_["useRef"])();
  return Object(external_wp_element_["useCallback"])(node => {
    if (node) {
      cleanup.current = callback(node);
    } else if (cleanup.current) {
      cleanup.current();
    }
  }, dependencies);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-constrained-tabbing/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * In Dialogs/modals, the tabbing must be constrained to the content of
 * the wrapper element. This hook adds the behavior to the returned ref.
 *
 * @return {import('react').RefCallback<Element>} Element Ref.
 *
 * @example
 * ```js
 * import { useConstrainedTabbing } from '@wordpress/compose';
 *
 * const ConstrainedTabbingExample = () => {
 *     const constrainedTabbingRef = useConstrainedTabbing()
 *     return (
 *         <div ref={ constrainedTabbingRef }>
 *             <Button />
 *             <Button />
 *         </div>
 *     );
 * }
 * ```
 */

function useConstrainedTabbing() {
  return useRefEffect((
  /** @type {HTMLElement} */
  node) => {
    /** @type {number|undefined} */
    let timeoutId;

    function onKeyDown(
    /** @type {KeyboardEvent} */
    event) {
      const {
        keyCode,
        shiftKey,
        target
      } = event;

      if (keyCode !== external_wp_keycodes_["TAB"]) {
        return;
      }

      const action = shiftKey ? 'findPrevious' : 'findNext';
      const nextElement = external_wp_dom_["focus"].tabbable[action](
      /** @type {HTMLElement} */
      target) || null; // If the element that is about to receive focus is outside the
      // area, move focus to a div and insert it at the start or end of
      // the area, depending on the direction. Without preventing default
      // behaviour, the browser will then move focus to the next element.

      if (node.contains(nextElement)) {
        return;
      }

      const domAction = shiftKey ? 'append' : 'prepend';
      const {
        ownerDocument
      } = node;
      const trap = ownerDocument.createElement('div');
      trap.tabIndex = -1;
      node[domAction](trap);
      trap.focus(); // Remove after the browser moves focus to the next element.

      timeoutId = setTimeout(() => node.removeChild(trap));
    }

    node.addEventListener('keydown', onKeyDown);
    return () => {
      node.removeEventListener('keydown', onKeyDown);
      clearTimeout(timeoutId);
    };
  }, []);
}

/* harmony default export */ var use_constrained_tabbing = (useConstrainedTabbing);

// EXTERNAL MODULE: ./node_modules/clipboard/dist/clipboard.js
var dist_clipboard = __webpack_require__("sxGJ");
var clipboard_default = /*#__PURE__*/__webpack_require__.n(dist_clipboard);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-copy-on-click/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/* eslint-disable jsdoc/no-undefined-types */

/**
 * Copies the text to the clipboard when the element is clicked.
 *
 * @deprecated
 *
 * @param {import('react').RefObject<string | Element | NodeListOf<Element>>} ref       Reference with the element.
 * @param {string|Function}                                                   text      The text to copy.
 * @param {number}                                                            [timeout] Optional timeout to reset the returned
 *                                                                                      state. 4 seconds by default.
 *
 * @return {boolean} Whether or not the text has been copied. Resets after the
 *                   timeout.
 */

function useCopyOnClick(ref, text) {
  let timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4000;

  /* eslint-enable jsdoc/no-undefined-types */
  external_wp_deprecated_default()('wp.compose.useCopyOnClick', {
    since: '10.3',
    plugin: 'Gutenberg',
    alternative: 'wp.compose.useCopyToClipboard'
  });
  /** @type {import('react').MutableRefObject<Clipboard | undefined>} */

  const clipboard = Object(external_wp_element_["useRef"])();
  const [hasCopied, setHasCopied] = Object(external_wp_element_["useState"])(false);
  Object(external_wp_element_["useEffect"])(() => {
    /** @type {number | undefined} */
    let timeoutId;

    if (!ref.current) {
      return;
    } // Clipboard listens to click events.


    clipboard.current = new clipboard_default.a(ref.current, {
      text: () => typeof text === 'function' ? text() : text
    });
    clipboard.current.on('success', _ref => {
      let {
        clearSelection,
        trigger
      } = _ref;
      // Clearing selection will move focus back to the triggering button,
      // ensuring that it is not reset to the body, and further that it is
      // kept within the rendered node.
      clearSelection(); // Handle ClipboardJS focus bug, see https://github.com/zenorocha/clipboard.js/issues/680

      if (trigger) {
        /** @type {HTMLElement} */
        trigger.focus();
      }

      if (timeout) {
        setHasCopied(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setHasCopied(false), timeout);
      }
    });
    return () => {
      if (clipboard.current) {
        clipboard.current.destroy();
      }

      clearTimeout(timeoutId);
    };
  }, [text, timeout, setHasCopied]);
  return hasCopied;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-copy-to-clipboard/index.js
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
 * @template T
 * @param {T} value
 * @return {import('react').RefObject<T>} The updated ref
 */

function useUpdatedRef(value) {
  const ref = Object(external_wp_element_["useRef"])(value);
  ref.current = value;
  return ref;
}
/**
 * Copies the given text to the clipboard when the element is clicked.
 *
 * @template {HTMLElement} TElementType
 * @param {string | (() => string)} text      The text to copy. Use a function if not
 *                                            already available and expensive to compute.
 * @param {Function}                onSuccess Called when to text is copied.
 *
 * @return {import('react').Ref<TElementType>} A ref to assign to the target element.
 */


function useCopyToClipboard(text, onSuccess) {
  // Store the dependencies as refs and continuesly update them so they're
  // fresh when the callback is called.
  const textRef = useUpdatedRef(text);
  const onSuccessRef = useUpdatedRef(onSuccess);
  return useRefEffect(node => {
    // Clipboard listens to click events.
    const clipboard = new clipboard_default.a(node, {
      text() {
        return typeof textRef.current === 'function' ? textRef.current() : textRef.current || '';
      }

    });
    clipboard.on('success', _ref => {
      let {
        clearSelection
      } = _ref;
      // Clearing selection will move focus back to the triggering
      // button, ensuring that it is not reset to the body, and
      // further that it is kept within the rendered node.
      clearSelection(); // Handle ClipboardJS focus bug, see
      // https://github.com/zenorocha/clipboard.js/issues/680

      node.focus();

      if (onSuccessRef.current) {
        onSuccessRef.current();
      }
    });
    return () => {
      clipboard.destroy();
    };
  }, []);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-focus-on-mount/index.js
/**
 * WordPress dependencies
 */


/**
 * Hook used to focus the first tabbable element on mount.
 *
 * @param {boolean | 'firstElement'} focusOnMount Focus on mount mode.
 * @return {import('react').RefCallback<HTMLElement>} Ref callback.
 *
 * @example
 * ```js
 * import { useFocusOnMount } from '@wordpress/compose';
 *
 * const WithFocusOnMount = () => {
 *     const ref = useFocusOnMount()
 *     return (
 *         <div ref={ ref }>
 *             <Button />
 *             <Button />
 *         </div>
 *     );
 * }
 * ```
 */

function useFocusOnMount() {
  let focusOnMount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'firstElement';
  const focusOnMountRef = Object(external_wp_element_["useRef"])(focusOnMount);
  Object(external_wp_element_["useEffect"])(() => {
    focusOnMountRef.current = focusOnMount;
  }, [focusOnMount]);
  return Object(external_wp_element_["useCallback"])(node => {
    var _node$ownerDocument$a, _node$ownerDocument;

    if (!node || focusOnMountRef.current === false) {
      return;
    }

    if (node.contains((_node$ownerDocument$a = (_node$ownerDocument = node.ownerDocument) === null || _node$ownerDocument === void 0 ? void 0 : _node$ownerDocument.activeElement) !== null && _node$ownerDocument$a !== void 0 ? _node$ownerDocument$a : null)) {
      return;
    }

    let target = node;

    if (focusOnMountRef.current === 'firstElement') {
      const firstTabbable = external_wp_dom_["focus"].tabbable.find(node)[0];

      if (firstTabbable) {
        target =
        /** @type {HTMLElement} */
        firstTabbable;
      }
    }

    target.focus();
  }, []);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-focus-return/index.js
/**
 * WordPress dependencies
 */

/**
 * When opening modals/sidebars/dialogs, the focus
 * must move to the opened area and return to the
 * previously focused element when closed.
 * The current hook implements the returning behavior.
 *
 * @param {() => void} [onFocusReturn] Overrides the default return behavior.
 * @return {import('react').RefCallback<HTMLElement>} Element Ref.
 *
 * @example
 * ```js
 * import { useFocusReturn } from '@wordpress/compose';
 *
 * const WithFocusReturn = () => {
 *     const ref = useFocusReturn()
 *     return (
 *         <div ref={ ref }>
 *             <Button />
 *             <Button />
 *         </div>
 *     );
 * }
 * ```
 */

function useFocusReturn(onFocusReturn) {
  /** @type {import('react').MutableRefObject<null | HTMLElement>} */
  const ref = Object(external_wp_element_["useRef"])(null);
  /** @type {import('react').MutableRefObject<null | Element>} */

  const focusedBeforeMount = Object(external_wp_element_["useRef"])(null);
  const onFocusReturnRef = Object(external_wp_element_["useRef"])(onFocusReturn);
  Object(external_wp_element_["useEffect"])(() => {
    onFocusReturnRef.current = onFocusReturn;
  }, [onFocusReturn]);
  return Object(external_wp_element_["useCallback"])(node => {
    if (node) {
      // Set ref to be used when unmounting.
      ref.current = node; // Only set when the node mounts.

      if (focusedBeforeMount.current) {
        return;
      }

      focusedBeforeMount.current = node.ownerDocument.activeElement;
    } else if (focusedBeforeMount.current) {
      var _ref$current, _ref$current2, _ref$current3;

      const isFocused = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.ownerDocument.activeElement);

      if ((_ref$current3 = ref.current) !== null && _ref$current3 !== void 0 && _ref$current3.isConnected && !isFocused) {
        return;
      } // Defer to the component's own explicit focus return behavior, if
      // specified. This allows for support that the `onFocusReturn`
      // decides to allow the default behavior to occur under some
      // conditions.


      if (onFocusReturnRef.current) {
        onFocusReturnRef.current();
      } else {
        var _focusedBeforeMount$c;

        /** @type {null | HTMLElement} */
        (_focusedBeforeMount$c = focusedBeforeMount.current) === null || _focusedBeforeMount$c === void 0 ? void 0 : _focusedBeforeMount$c.focus();
      }
    }
  }, []);
}

/* harmony default export */ var use_focus_return = (useFocusReturn);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-focus-outside/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Input types which are classified as button types, for use in considering
 * whether element is a (focus-normalized) button.
 *
 * @type {string[]}
 */

const INPUT_BUTTON_TYPES = ['button', 'submit'];
/**
 * @typedef {HTMLButtonElement | HTMLLinkElement | HTMLInputElement} FocusNormalizedButton
 */
// Disable reason: Rule doesn't support predicate return types

/* eslint-disable jsdoc/valid-types */

/**
 * Returns true if the given element is a button element subject to focus
 * normalization, or false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 *
 * @param {EventTarget} eventTarget The target from a mouse or touch event.
 *
 * @return {eventTarget is FocusNormalizedButton} Whether element is a button.
 */

function isFocusNormalizedButton(eventTarget) {
  if (!(eventTarget instanceof window.HTMLElement)) {
    return false;
  }

  switch (eventTarget.nodeName) {
    case 'A':
    case 'BUTTON':
      return true;

    case 'INPUT':
      return Object(external_lodash_["includes"])(INPUT_BUTTON_TYPES,
      /** @type {HTMLInputElement} */
      eventTarget.type);
  }

  return false;
}
/* eslint-enable jsdoc/valid-types */

/**
 * @typedef {import('react').SyntheticEvent} SyntheticEvent
 */

/**
 * @callback EventCallback
 * @param {SyntheticEvent} event input related event.
 */

/**
 * @typedef FocusOutsideReactElement
 * @property {EventCallback} handleFocusOutside callback for a focus outside event.
 */

/**
 * @typedef {import('react').MutableRefObject<FocusOutsideReactElement | undefined>} FocusOutsideRef
 */

/**
 * @typedef {Object} FocusOutsideReturnValue
 * @property {EventCallback} onFocus      An event handler for focus events.
 * @property {EventCallback} onBlur       An event handler for blur events.
 * @property {EventCallback} onMouseDown  An event handler for mouse down events.
 * @property {EventCallback} onMouseUp    An event handler for mouse up events.
 * @property {EventCallback} onTouchStart An event handler for touch start events.
 * @property {EventCallback} onTouchEnd   An event handler for touch end events.
 */

/**
 * A react hook that can be used to check whether focus has moved outside the
 * element the event handlers are bound to.
 *
 * @param {EventCallback} onFocusOutside A callback triggered when focus moves outside
 *                                       the element the event handlers are bound to.
 *
 * @return {FocusOutsideReturnValue} An object containing event handlers. Bind the event handlers
 *                                   to a wrapping element element to capture when focus moves
 *                                   outside that element.
 */


function useFocusOutside(onFocusOutside) {
  const currentOnFocusOutside = Object(external_wp_element_["useRef"])(onFocusOutside);
  Object(external_wp_element_["useEffect"])(() => {
    currentOnFocusOutside.current = onFocusOutside;
  }, [onFocusOutside]);
  const preventBlurCheck = Object(external_wp_element_["useRef"])(false);
  /**
   * @type {import('react').MutableRefObject<number | undefined>}
   */

  const blurCheckTimeoutId = Object(external_wp_element_["useRef"])();
  /**
   * Cancel a blur check timeout.
   */

  const cancelBlurCheck = Object(external_wp_element_["useCallback"])(() => {
    clearTimeout(blurCheckTimeoutId.current);
  }, []); // Cancel blur checks on unmount.

  Object(external_wp_element_["useEffect"])(() => {
    return () => cancelBlurCheck();
  }, []); // Cancel a blur check if the callback or ref is no longer provided.

  Object(external_wp_element_["useEffect"])(() => {
    if (!onFocusOutside) {
      cancelBlurCheck();
    }
  }, [onFocusOutside, cancelBlurCheck]);
  /**
   * Handles a mousedown or mouseup event to respectively assign and
   * unassign a flag for preventing blur check on button elements. Some
   * browsers, namely Firefox and Safari, do not emit a focus event on
   * button elements when clicked, while others do. The logic here
   * intends to normalize this as treating click on buttons as focus.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
   *
   * @param {SyntheticEvent} event Event for mousedown or mouseup.
   */

  const normalizeButtonFocus = Object(external_wp_element_["useCallback"])(event => {
    const {
      type,
      target
    } = event;
    const isInteractionEnd = Object(external_lodash_["includes"])(['mouseup', 'touchend'], type);

    if (isInteractionEnd) {
      preventBlurCheck.current = false;
    } else if (isFocusNormalizedButton(target)) {
      preventBlurCheck.current = true;
    }
  }, []);
  /**
   * A callback triggered when a blur event occurs on the element the handler
   * is bound to.
   *
   * Calls the `onFocusOutside` callback in an immediate timeout if focus has
   * move outside the bound element and is still within the document.
   *
   * @param {SyntheticEvent} event Blur event.
   */

  const queueBlurCheck = Object(external_wp_element_["useCallback"])(event => {
    // React does not allow using an event reference asynchronously
    // due to recycling behavior, except when explicitly persisted.
    event.persist(); // Skip blur check if clicking button. See `normalizeButtonFocus`.

    if (preventBlurCheck.current) {
      return;
    }

    blurCheckTimeoutId.current = setTimeout(() => {
      // If document is not focused then focus should remain
      // inside the wrapped component and therefore we cancel
      // this blur event thereby leaving focus in place.
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus.
      if (!document.hasFocus()) {
        event.preventDefault();
        return;
      }

      if ('function' === typeof currentOnFocusOutside.current) {
        currentOnFocusOutside.current(event);
      }
    }, 0);
  }, []);
  return {
    onFocus: cancelBlurCheck,
    onMouseDown: normalizeButtonFocus,
    onMouseUp: normalizeButtonFocus,
    onTouchStart: normalizeButtonFocus,
    onTouchEnd: normalizeButtonFocus,
    onBlur: queueBlurCheck
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js
/**
 * WordPress dependencies
 */

/* eslint-disable jsdoc/valid-types */

/**
 * @template T
 * @typedef {T extends import('react').Ref<infer R> ? R : never} TypeFromRef
 */

/* eslint-enable jsdoc/valid-types */

/**
 * @template T
 * @param {import('react').Ref<T>} ref
 * @param {T}                      value
 */

function assignRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref && ref.hasOwnProperty('current')) {
    /* eslint-disable jsdoc/no-undefined-types */

    /** @type {import('react').MutableRefObject<T>} */
    ref.current = value;
    /* eslint-enable jsdoc/no-undefined-types */
  }
}
/**
 * Merges refs into one ref callback.
 *
 * It also ensures that the merged ref callbacks are only called when they
 * change (as a result of a `useCallback` dependency update) OR when the ref
 * value changes, just as React does when passing a single ref callback to the
 * component.
 *
 * As expected, if you pass a new function on every render, the ref callback
 * will be called after every render.
 *
 * If you don't wish a ref callback to be called after every render, wrap it
 * with `useCallback( callback, dependencies )`. When a dependency changes, the
 * old ref callback will be called with `null` and the new ref callback will be
 * called with the same value.
 *
 * To make ref callbacks easier to use, you can also pass the result of
 * `useRefEffect`, which makes cleanup easier by allowing you to return a
 * cleanup function instead of handling `null`.
 *
 * It's also possible to _disable_ a ref (and its behaviour) by simply not
 * passing the ref.
 *
 * ```jsx
 * const ref = useRefEffect( ( node ) => {
 *   node.addEventListener( ... );
 *   return () => {
 *     node.removeEventListener( ... );
 *   };
 * }, [ ...dependencies ] );
 * const otherRef = useRef();
 * const mergedRefs useMergeRefs( [
 *   enabled && ref,
 *   otherRef,
 * ] );
 * return <div ref={ mergedRefs } />;
 * ```
 *
 * @template {import('react').Ref<any>} TRef
 * @param {Array<TRef>} refs The refs to be merged.
 *
 * @return {import('react').RefCallback<TypeFromRef<TRef>>} The merged ref callback.
 */


function useMergeRefs(refs) {
  const element = Object(external_wp_element_["useRef"])();
  const didElementChange = Object(external_wp_element_["useRef"])(false);
  /* eslint-disable jsdoc/no-undefined-types */

  /** @type {import('react').MutableRefObject<TRef[]>} */

  /* eslint-enable jsdoc/no-undefined-types */

  const previousRefs = Object(external_wp_element_["useRef"])([]);
  const currentRefs = Object(external_wp_element_["useRef"])(refs); // Update on render before the ref callback is called, so the ref callback
  // always has access to the current refs.

  currentRefs.current = refs; // If any of the refs change, call the previous ref with `null` and the new
  // ref with the node, except when the element changes in the same cycle, in
  // which case the ref callbacks will already have been called.

  Object(external_wp_element_["useLayoutEffect"])(() => {
    if (didElementChange.current === false) {
      refs.forEach((ref, index) => {
        const previousRef = previousRefs.current[index];

        if (ref !== previousRef) {
          assignRef(previousRef, null);
          assignRef(ref, element.current);
        }
      });
    }

    previousRefs.current = refs;
  }, refs); // No dependencies, must be reset after every render so ref callbacks are
  // correctly called after a ref change.

  Object(external_wp_element_["useLayoutEffect"])(() => {
    didElementChange.current = false;
  }); // There should be no dependencies so that `callback` is only called when
  // the node changes.

  return Object(external_wp_element_["useCallback"])(value => {
    // Update the element so it can be used when calling ref callbacks on a
    // dependency change.
    assignRef(element, value);
    didElementChange.current = true; // When an element changes, the current ref callback should be called
    // with the new element and the previous one with `null`.

    const refsToAssign = value ? currentRefs.current : previousRefs.current; // Update the latest refs.

    for (const ref of refsToAssign) {
      assignRef(ref, value);
    }
  }, []);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-dialog/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






/* eslint-disable jsdoc/valid-types */

/**
 * @typedef DialogOptions
 * @property {Parameters<useFocusOnMount>[0]} focusOnMount Focus on mount arguments.
 * @property {() => void}                     onClose      Function to call when the dialog is closed.
 */

/* eslint-enable jsdoc/valid-types */

/**
 * Returns a ref and props to apply to a dialog wrapper to enable the following behaviors:
 *  - constrained tabbing.
 *  - focus on mount.
 *  - return focus on unmount.
 *  - focus outside.
 *
 * @param {DialogOptions} options Dialog Options.
 */

function useDialog(options) {
  /**
   * @type {import('react').MutableRefObject<DialogOptions | undefined>}
   */
  const currentOptions = Object(external_wp_element_["useRef"])();
  Object(external_wp_element_["useEffect"])(() => {
    currentOptions.current = options;
  }, Object.values(options));
  const constrainedTabbingRef = use_constrained_tabbing();
  const focusOnMountRef = useFocusOnMount(options.focusOnMount);
  const focusReturnRef = use_focus_return();
  const focusOutsideProps = useFocusOutside(event => {
    var _currentOptions$curre, _currentOptions$curre2;

    // This unstable prop  is here only to manage backward compatibility
    // for the Popover component otherwise, the onClose should be enough.
    // @ts-ignore unstable property
    if ((_currentOptions$curre = currentOptions.current) !== null && _currentOptions$curre !== void 0 && _currentOptions$curre.__unstableOnClose) {
      // @ts-ignore unstable property
      currentOptions.current.__unstableOnClose('focus-outside', event);
    } else if ((_currentOptions$curre2 = currentOptions.current) !== null && _currentOptions$curre2 !== void 0 && _currentOptions$curre2.onClose) {
      currentOptions.current.onClose();
    }
  });
  const closeOnEscapeRef = Object(external_wp_element_["useCallback"])(node => {
    if (!node) {
      return;
    }

    node.addEventListener('keydown', (
    /** @type {KeyboardEvent} */
    event) => {
      var _currentOptions$curre3;

      // Close on escape
      if (event.keyCode === external_wp_keycodes_["ESCAPE"] && !event.defaultPrevented && (_currentOptions$curre3 = currentOptions.current) !== null && _currentOptions$curre3 !== void 0 && _currentOptions$curre3.onClose) {
        event.preventDefault();
        currentOptions.current.onClose();
      }
    });
  }, []);
  return [useMergeRefs([options.focusOnMount !== false ? constrainedTabbingRef : null, options.focusOnMount !== false ? focusReturnRef : null, options.focusOnMount !== false ? focusOnMountRef : null, closeOnEscapeRef]), { ...focusOutsideProps,
    tabIndex: '-1'
  }];
}

/* harmony default export */ var use_dialog = (useDialog);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-disabled/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Names of control nodes which qualify for disabled behavior.
 *
 * See WHATWG HTML Standard: 4.10.18.5: "Enabling and disabling form controls: the disabled attribute".
 *
 * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute
 *
 * @type {string[]}
 */

const DISABLED_ELIGIBLE_NODE_NAMES = ['BUTTON', 'FIELDSET', 'INPUT', 'OPTGROUP', 'OPTION', 'SELECT', 'TEXTAREA'];
/**
 * In some circumstances, such as block previews, all focusable DOM elements
 * (input fields, links, buttons, etc.) need to be disabled. This hook adds the
 * behavior to disable nested DOM elements to the returned ref.
 *
 * @return {import('react').RefObject<HTMLElement>} Element Ref.
 *
 * @example
 * ```js
 * import { __experimentalUseDisabled as useDisabled } from '@wordpress/compose';
 * const DisabledExample = () => {
 * 	const disabledRef = useDisabled();
 *	return (
 *		<div ref={ disabledRef }>
 *			<a href="#">This link will have tabindex set to -1</a>
 *			<input placeholder="This input will have the disabled attribute added to it." type="text" />
 *		</div>
 *	);
 * };
 * ```
 */

function useDisabled() {
  /** @type {import('react').RefObject<HTMLElement>} */
  const node = Object(external_wp_element_["useRef"])(null);

  const disable = () => {
    if (!node.current) {
      return;
    }

    external_wp_dom_["focus"].focusable.find(node.current).forEach(focusable => {
      if (Object(external_lodash_["includes"])(DISABLED_ELIGIBLE_NODE_NAMES, focusable.nodeName)) {
        focusable.setAttribute('disabled', '');
      }

      if (focusable.nodeName === 'A') {
        focusable.setAttribute('tabindex', '-1');
      }

      const tabIndex = focusable.getAttribute('tabindex');

      if (tabIndex !== null && tabIndex !== '-1') {
        focusable.removeAttribute('tabindex');
      }

      if (focusable.hasAttribute('contenteditable')) {
        focusable.setAttribute('contenteditable', 'false');
      }
    });
  }; // Debounce re-disable since disabling process itself will incur
  // additional mutations which should be ignored.


  const debouncedDisable = Object(external_wp_element_["useCallback"])(Object(external_lodash_["debounce"])(disable, undefined, {
    leading: true
  }), []);
  Object(external_wp_element_["useLayoutEffect"])(() => {
    disable();
    /** @type {MutationObserver | undefined} */

    let observer;

    if (node.current) {
      observer = new window.MutationObserver(debouncedDisable);
      observer.observe(node.current, {
        childList: true,
        attributes: true,
        subtree: true
      });
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }

      debouncedDisable.cancel();
    };
  }, []);
  return node;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-isomorphic-layout-effect/index.js
/**
 * WordPress dependencies
 */

/**
 * Preferred over direct usage of `useLayoutEffect` when supporting
 * server rendered components (SSR) because currently React
 * throws a warning when using useLayoutEffect in that environment.
 */

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? external_wp_element_["useLayoutEffect"] : external_wp_element_["useEffect"];
/* harmony default export */ var use_isomorphic_layout_effect = (useIsomorphicLayoutEffect);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-dragging/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * @param {Object}                  props
 * @param {(e: MouseEvent) => void} props.onDragStart
 * @param {(e: MouseEvent) => void} props.onDragMove
 * @param {(e: MouseEvent) => void} props.onDragEnd
 */

function useDragging(_ref) {
  let {
    onDragStart,
    onDragMove,
    onDragEnd
  } = _ref;
  const [isDragging, setIsDragging] = Object(external_wp_element_["useState"])(false);
  const eventsRef = Object(external_wp_element_["useRef"])({
    onDragStart,
    onDragMove,
    onDragEnd
  });
  use_isomorphic_layout_effect(() => {
    eventsRef.current.onDragStart = onDragStart;
    eventsRef.current.onDragMove = onDragMove;
    eventsRef.current.onDragEnd = onDragEnd;
  }, [onDragStart, onDragMove, onDragEnd]);
  const onMouseMove = Object(external_wp_element_["useCallback"])((
  /** @type {MouseEvent} */
  event) => eventsRef.current.onDragMove && eventsRef.current.onDragMove(event), []);
  const endDrag = Object(external_wp_element_["useCallback"])((
  /** @type {MouseEvent} */
  event) => {
    if (eventsRef.current.onDragEnd) {
      eventsRef.current.onDragEnd(event);
    }

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', endDrag);
    setIsDragging(false);
  }, []);
  const startDrag = Object(external_wp_element_["useCallback"])((
  /** @type {MouseEvent} */
  event) => {
    if (eventsRef.current.onDragStart) {
      eventsRef.current.onDragStart(event);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', endDrag);
    setIsDragging(true);
  }, []); // Remove the global events when unmounting if needed.

  Object(external_wp_element_["useEffect"])(() => {
    return () => {
      if (isDragging) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', endDrag);
      }
    };
  }, [isDragging]);
  return {
    startDrag,
    endDrag,
    isDragging
  };
}

// EXTERNAL MODULE: ./node_modules/mousetrap/mousetrap.js
var mousetrap_mousetrap = __webpack_require__("imBb");
var mousetrap_default = /*#__PURE__*/__webpack_require__.n(mousetrap_mousetrap);

// EXTERNAL MODULE: ./node_modules/mousetrap/plugins/global-bind/mousetrap-global-bind.js
var mousetrap_global_bind = __webpack_require__("VcSt");

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-keyboard-shortcut/index.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * A block selection object.
 *
 * @typedef {Object} WPKeyboardShortcutConfig
 *
 * @property {boolean}                                [bindGlobal] Handle keyboard events anywhere including inside textarea/input fields.
 * @property {string}                                 [eventName]  Event name used to trigger the handler, defaults to keydown.
 * @property {boolean}                                [isDisabled] Disables the keyboard handler if the value is true.
 * @property {import('react').RefObject<HTMLElement>} [target]     React reference to the DOM element used to catch the keyboard event.
 */

/**
 * Return true if platform is MacOS.
 *
 * @param {Window} [_window] window object by default; used for DI testing.
 *
 * @return {boolean} True if MacOS; false otherwise.
 */

function isAppleOS() {
  let _window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  const {
    platform
  } = _window.navigator;
  return platform.indexOf('Mac') !== -1 || Object(external_lodash_["includes"])(['iPad', 'iPhone'], platform);
}
/* eslint-disable jsdoc/valid-types */

/**
 * Attach a keyboard shortcut handler.
 *
 * @see https://craig.is/killing/mice#api.bind for information about the `callback` parameter.
 *
 * @param {string[]|string}                                                       shortcuts Keyboard Shortcuts.
 * @param {(e: import('mousetrap').ExtendedKeyboardEvent, combo: string) => void} callback  Shortcut callback.
 * @param {WPKeyboardShortcutConfig}                                              options   Shortcut options.
 */


function useKeyboardShortcut(
/* eslint-enable jsdoc/valid-types */
shortcuts, callback) {
  let {
    bindGlobal = false,
    eventName = 'keydown',
    isDisabled = false,
    // This is important for performance considerations.
    target
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const currentCallback = Object(external_wp_element_["useRef"])(callback);
  Object(external_wp_element_["useEffect"])(() => {
    currentCallback.current = callback;
  }, [callback]);
  Object(external_wp_element_["useEffect"])(() => {
    if (isDisabled) {
      return;
    }

    const mousetrap = new mousetrap_default.a(target && target.current ? target.current : // We were passing `document` here previously, so to successfully cast it to Element we must cast it first to `unknown`.
    // Not sure if this is a mistake but it was the behavior previous to the addition of types so we're just doing what's
    // necessary to maintain the existing behavior

    /** @type {Element} */

    /** @type {unknown} */
    document);
    Object(external_lodash_["castArray"])(shortcuts).forEach(shortcut => {
      const keys = shortcut.split('+'); // Determines whether a key is a modifier by the length of the string.
      // E.g. if I add a pass a shortcut Shift+Cmd+M, it'll determine that
      // the modifiers are Shift and Cmd because they're not a single character.

      const modifiers = new Set(keys.filter(value => value.length > 1));
      const hasAlt = modifiers.has('alt');
      const hasShift = modifiers.has('shift'); // This should be better moved to the shortcut registration instead.

      if (isAppleOS() && (modifiers.size === 1 && hasAlt || modifiers.size === 2 && hasAlt && hasShift)) {
        throw new Error(`Cannot bind ${shortcut}. Alt and Shift+Alt modifiers are reserved for character input.`);
      }

      const bindFn = bindGlobal ? 'bindGlobal' : 'bind'; // @ts-ignore `bindGlobal` is an undocumented property

      mousetrap[bindFn](shortcut, function () {
        return (
          /* eslint-enable jsdoc/valid-types */
          currentCallback.current(...arguments)
        );
      }, eventName);
    });
    return () => {
      mousetrap.reset();
    };
  }, [shortcuts, bindGlobal, eventName, target, isDisabled]);
}

/* harmony default export */ var use_keyboard_shortcut = (useKeyboardShortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-media-query/index.js
/**
 * WordPress dependencies
 */

/**
 * Runs a media query and returns its value when it changes.
 *
 * @param {string} [query] Media Query.
 * @return {boolean} return value of the media query.
 */

function useMediaQuery(query) {
  const [match, setMatch] = Object(external_wp_element_["useState"])(() => !!(query && typeof window !== 'undefined' && window.matchMedia(query).matches));
  Object(external_wp_element_["useEffect"])(() => {
    if (!query) {
      return;
    }

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__experimentalUseDialog": function() { return /* reexport */ use_dialog; },
  "__experimentalUseDragging": function() { return /* reexport */ useDragging; },
  "__experimentalUseDropZone": function() { return /* reexport */ useDropZone; },
  "__experimentalUseFixedWindowList": function() { return /* reexport */ useFixedWindowList; },
  "__experimentalUseFocusOutside": function() { return /* reexport */ useFocusOutside; },
  "compose": function() { return /* reexport */ higher_order_compose; },
  "createHigherOrderComponent": function() { return /* reexport */ createHigherOrderComponent; },
  "debounce": function() { return /* reexport */ debounce; },
  "ifCondition": function() { return /* reexport */ if_condition; },
  "pipe": function() { return /* reexport */ higher_order_pipe; },
  "pure": function() { return /* reexport */ higher_order_pure; },
  "throttle": function() { return /* reexport */ throttle; },
  "useAsyncList": function() { return /* reexport */ use_async_list; },
  "useConstrainedTabbing": function() { return /* reexport */ use_constrained_tabbing; },
  "useCopyOnClick": function() { return /* reexport */ useCopyOnClick; },
  "useCopyToClipboard": function() { return /* reexport */ useCopyToClipboard; },
  "useDebounce": function() { return /* reexport */ useDebounce; },
  "useDisabled": function() { return /* reexport */ useDisabled; },
  "useFocusOnMount": function() { return /* reexport */ useFocusOnMount; },
  "useFocusReturn": function() { return /* reexport */ use_focus_return; },
  "useFocusableIframe": function() { return /* reexport */ useFocusableIframe; },
  "useInstanceId": function() { return /* reexport */ use_instance_id; },
  "useIsomorphicLayoutEffect": function() { return /* reexport */ use_isomorphic_layout_effect; },
  "useKeyboardShortcut": function() { return /* reexport */ use_keyboard_shortcut; },
  "useMediaQuery": function() { return /* reexport */ useMediaQuery; },
  "useMergeRefs": function() { return /* reexport */ useMergeRefs; },
  "usePrevious": function() { return /* reexport */ usePrevious; },
  "useReducedMotion": function() { return /* reexport */ use_reduced_motion; },
  "useRefEffect": function() { return /* reexport */ useRefEffect; },
  "useResizeObserver": function() { return /* reexport */ useResizeAware; },
  "useThrottle": function() { return /* reexport */ useThrottle; },
  "useViewportMatch": function() { return /* reexport */ use_viewport_match; },
  "useWarnOnChange": function() { return /* reexport */ use_warn_on_change; },
  "withGlobalEvents": function() { return /* reexport */ withGlobalEvents; },
  "withInstanceId": function() { return /* reexport */ with_instance_id; },
  "withSafeTimeout": function() { return /* reexport */ with_safe_timeout; },
  "withState": function() { return /* reexport */ withState; }
});

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
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-previous/index.js
/**
 * WordPress dependencies
 */

/**
 * Use something's value from the previous render.
 * Based on https://usehooks.com/usePrevious/.
 *
 * @param  value The value to track.
 *
 * @return The value from the previous render.
 */

function usePrevious(value) {
  const ref = Object(external_wp_element_["useRef"])(); // Store current value in ref.

  Object(external_wp_element_["useEffect"])(() => {
    ref.current = value;
  }, [value]); // Re-run when value changes.
  // Return previous value (happens before update in useEffect above).

  return ref.current;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-reduced-motion/index.js
/**
 * Internal dependencies
 */

/**
 * Given a function mapping a component to an enhanced component and modifier
 * name, returns the enhanced component augmented with a generated displayName.
 *
 * @param mapComponent Function mapping component to enhanced component.
 * @param modifierName Seed name from which to generated display name.
 *
 * @return {boolean} Reduced motion preference value.
 */

const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

/* harmony default export */ var use_reduced_motion = (useReducedMotion);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-viewport-match/index.js
/**
 * Returns a displayName for a higher-order component, given a wrapper name.
 *
 * @example
 *     hocName( 'MyMemo', Widget ) === 'MyMemo(Widget)';
 *     hocName( 'MyMemo', <div /> ) === 'MyMemo(Component)';
 *
 * @param name  Name assigned to higher-order component's wrapper component.
 * @param Inner Wrapped component inside higher-order component.
 * @return       Wrapped name of higher-order component.
 */


;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/utils/debounce/index.js
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * A simplified and properly typed version of lodash's `debounce`, that
 * always uses timers instead of sometimes using rAF.
 *
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel delayed
 * `func` invocations and a `flush` method to immediately invoke them. Provide
 * `options` to indicate whether `func` should be invoked on the leading and/or
 * trailing edge of the `wait` timeout. The `func` is invoked with the last
 * arguments provided to the debounced function. Subsequent calls to the debounced
 * function return the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {Function}                   func             The function to debounce.
 * @param {number}                     wait             The number of milliseconds to delay.
 * @param {Partial< DebounceOptions >} options          The options object.
 * @param {boolean}                    options.leading  Specify invoking on the leading edge of the timeout.
 * @param {number}                     options.maxWait  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean}                    options.trailing Specify invoking on the trailing edge of the timeout.
 *
 * @return Returns the new debounced function.
 */
const debounce = (func, wait, options) => {
  let lastArgs;
  let lastThis;
  let maxWait = 0;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;

  if (options) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;

    if (options.maxWait !== undefined) {
      maxWait = Math.max(options.maxWait, wait);
    }

    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = undefined;
    lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function startTimer(pendingFunc, waitTime) {
    timerId = setTimeout(pendingFunc, waitTime);
  }

  function cancelTimer() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    startTimer(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function getTimeSinceLastCall(time) {
    return time - (lastCallTime || 0);
  }

  function remainingWait(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = getTimeSinceLastCall(time);
    const timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    const time = Date.now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    startTimer(timerExpired, remainingWait(time));
    return undefined;
  }

  function clearTimer() {
    timerId = undefined;
  }

  function trailingEdge(time) {
    clearTimer(); // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    cancelTimer();
    lastInvokeTime = 0;
    clearTimer();
    lastArgs = lastCallTime = lastThis = undefined;
  }

  function flush() {
    return pending() ? trailingEdge(Date.now()) : result;
  }

  function pending() {
    return timerId !== undefined;
  }

  function debounced(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (!pending()) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (!pending()) {
      startTimer(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/utils/throttle/index.js
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Internal dependencies
 */


/**
 * A simplified and properly typed version of lodash's `throttle`, that
 * always uses timers instead of sometimes using rAF.
 *
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return
 * the result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * @param {Function}                   func             The function to throttle.
 * @param {number}                     wait             The number of milliseconds to throttle invocations to.
 * @param {Partial< ThrottleOptions >} options          The options object.
 * @param {boolean}                    options.leading  Specify invoking on the leading edge of the timeout.
 * @param {boolean}                    options.trailing Specify invoking on the trailing edge of the timeout.
 * @return Returns the new throttled function.
 */
const throttle = (func, wait, options) => {
  let leading = true;
  let trailing = true;

  if (options) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait
  });
};

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/pipe.js
/**
 * Parts of this source were derived and modified from lodash,
 * released under the MIT license.
 *
 * https://github.com/lodash/lodash
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 *
 * The following license applies to all parts of this software except as
 * documented below:
 *
 * ====
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Creates a pipe function.
 *
 * Allows to choose whether to perform left-to-right or right-to-left composition.
 *
 * @see https://docs-lodash.com/v4/flow/
 *
 * @param {boolean} reverse True if right-to-left, false for left-to-right composition.
 */
const basePipe = (reverse = false) => (...funcs) => (...args) => {
  const functions = funcs.flat();

  if (reverse) {
    functions.reverse();
  }

  return functions.reduce((prev, func) => [func(...prev)], args)[0];
};
/**
 * Composes multiple higher-order components into a single higher-order component. Performs left-to-right function
 * composition, where each successive invocation is supplied the return value of the previous.
 *
 * This is inspired by `lodash`'s `flow` function.
 *
 * @see https://docs-lodash.com/v4/flow/
 */


const pipe = basePipe();

/* harmony default export */ var higher_order_pipe = (pipe);

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/compose.js
/**
 * Internal dependencies
 */

/**
 * Hash of breakpoint names with pixel width at which it becomes effective.
 *
 * This is inspired by `lodash`'s `flowRight` function.
 *
 * @type {Record<WPBreakpoint, number>}
 */

const compose = basePipe(true);
/* harmony default export */ var higher_order_compose = (compose);

;// CONCATENATED MODULE: external ["wp","element"]
var external_wp_element_namespaceObject = window["wp"]["element"];
;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/if-condition/index.js


/**
 * Object mapping media query operators to the condition to be used.
 *
 * @type {Record<WPViewportOperator, string>}
 */

const CONDITIONS = {
  '>=': 'min-width',
  '<': 'max-width'
};
/**
 * Object mapping media query operators to a function that given a breakpointValue and a width evaluates if the operator matches the values.
 *
 * @type {Record<WPViewportOperator, (breakpointValue: number, width: number) => boolean>}
 */

const OPERATOR_EVALUATORS = {
  '>=': (breakpointValue, width) => width >= breakpointValue,
  '<': (breakpointValue, width) => width < breakpointValue
};
const ViewportMatchWidthContext = Object(external_wp_element_["createContext"])(
/** @type {null | number} */
null);
/**
 * Returns true if the viewport matches the given query, or false otherwise.
 *
 * @param {WPBreakpoint}       breakpoint      Breakpoint size name.
 * @param {WPViewportOperator} [operator=">="] Viewport operator.
 *
 * @example
 *
 * @param predicate Function to test condition.
 *
 * @return {boolean} Whether viewport matches query.
 */

const useViewportMatch = function (breakpoint) {
  let operator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '>=';
  const simulatedWidth = Object(external_wp_element_["useContext"])(ViewportMatchWidthContext);
  const mediaQuery = !simulatedWidth && `(${CONDITIONS[operator]}: ${BREAKPOINTS[breakpoint]}px)`;
  const mediaQueryResult = useMediaQuery(mediaQuery || undefined);

    return (0,external_wp_element_namespaceObject.createElement)(WrappedComponent, { ...props
    });
  }, 'ifCondition');
}

  return mediaQueryResult;
};

useViewportMatch.__experimentalWidthProvider = ViewportMatchWidthContext.Provider;
/* harmony default export */ var use_viewport_match = (useViewportMatch);

// EXTERNAL MODULE: ./node_modules/react-resize-aware/dist/index.js
var dist = __webpack_require__("SSiF");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-resize-observer/index.js
/**
 * External dependencies
 */

/**
 * Hook which allows to listen the resize event of any target element when it changes sizes.
 * _Note: `useResizeObserver` will report `null` until after first render_
 *
 * Simply a re-export of `react-resize-aware` so refer to its documentation <https://github.com/FezVrasta/react-resize-aware>
 * for more details.
 *
 * @see https://github.com/FezVrasta/react-resize-aware
 *
 * @example
 *
 * ```js
 * const App = () => {
 * 	const [ resizeListener, sizes ] = useResizeObserver();
 *
 * 	return (
 * 		<div>
 * 			{ resizeListener }
 * 			Your content here
 * 		</div>
 * 	);
 * };
 * ```
 *
 */

/* harmony default export */ var use_resize_observer = (dist_default.a);

// EXTERNAL MODULE: external ["wp","priorityQueue"]
var external_wp_priorityQueue_ = __webpack_require__("XI5e");

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-async-list/index.js
/**
 * WordPress dependencies
 */



/**
 * Returns the first items from list that are present on state.
 *
 * @param  list  New array.
 * @param  state Current state.
 * @return First items present iin state.
 */
function getFirstItemsPresentInState(list, state) {
  const firstItems = [];

  for (let i = 0; i < list.length; i++) {
    const item = list[i];

    render() {
      return (0,external_wp_element_namespaceObject.createElement)(WrappedComponent, { ...this.props
      });
    }

    firstItems.push(item);
  }

;// CONCATENATED MODULE: external ["wp","deprecated"]
var external_wp_deprecated_namespaceObject = window["wp"]["deprecated"];
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-global-events/listener.js
/**
 * Class responsible for orchestrating event handling on the global window,
 * binding a single event to be shared across all handling instances, and
 * removing the handler when no instances are listening for the event.
 */
class Listener {
  constructor() {
    /** @type {any} */
    this.listeners = {};
    this.handleEvent = this.handleEvent.bind(this);
  }

    if (firstItems.length < step) {
      firstItems = firstItems.concat(list.slice(firstItems.length, step));
    }

    this.listeners[eventType].push(instance);
  }

  remove(
  /** @type {any} */
  eventType,
  /** @type {any} */
  instance) {
    if (!this.listeners[eventType]) {
      return;
    }

    this.listeners[eventType] = this.listeners[eventType].filter((
    /** @type {any} */
    listener) => listener !== instance);

    if (!this.listeners[eventType].length) {
      // Removing last listener for this type, so unbind event.
      window.removeEventListener(eventType, this.handleEvent);
      delete this.listeners[eventType];
    }
  }

  handleEvent(
  /** @type {any} */
  event) {
    this.listeners[event.type]?.forEach((
    /** @type {any} */
    instance) => {
      instance.handleEvent(event);
    });
  }

    asyncQueue.add({}, append);
    return () => asyncQueue.reset();
  }, [list]);
  return current;
}

/* harmony default export */ var listener = (Listener);

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-global-events/index.js


/**
 * WordPress dependencies
 */


// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-warn-on-change/index.js
/**
 * Internal dependencies
 */
 // Disable reason: Object and object are distinctly different types in TypeScript and we mean the lowercase object in thise case
// but eslint wants to force us to use `Object`. See https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript

/* eslint-disable jsdoc/check-types */

/**
 * Hook that performs a shallow comparison between the preview value of an object
 * and the new one, if there's a difference, it prints it to the console.
 * this is useful in performance related work, to check why a component re-renders.
 *
 *  @example
 *
 * ```jsx
 * function MyComponent(props) {
 *    useWarnOnChange(props);
 *
 * @return {any} Higher-order component.
 */

function withGlobalEvents(eventTypesToHandlers) {
  external_wp_deprecated_default()('wp.compose.withGlobalEvents', {
    since: '5.7',
    alternative: 'useEffect'
  }); // @ts-ignore We don't need to fix the type-related issues because this is deprecated.

  return createHigherOrderComponent(WrappedComponent => {
    class Wrapper extends external_wp_element_namespaceObject.Component {
      constructor(
      /** @type {any} */
      props) {
        super(props);
        this.handleEvent = this.handleEvent.bind(this);
        this.handleRef = this.handleRef.bind(this);
      }

      componentDidMount() {
        Object.keys(eventTypesToHandlers).forEach(eventType => {
          with_global_events_listener.add(eventType, this);
        });
      }

      componentWillUnmount() {
        Object.keys(eventTypesToHandlers).forEach(eventType => {
          with_global_events_listener.remove(eventType, this);
        });
      }

      handleEvent(
      /** @type {any} */
      event) {
        const handler = eventTypesToHandlers[
        /** @type {keyof GlobalEventHandlersEventMap} */
        event.type
        /* eslint-enable jsdoc/no-undefined-types */
        ];

        if (typeof this.wrappedRef[handler] === 'function') {
          this.wrappedRef[handler](event);
        }
      }

      handleRef(
      /** @type {any} */
      el) {
        this.wrappedRef = el; // Any component using `withGlobalEvents` that is not setting a `ref`
        // will cause `this.props.forwardedRef` to be `null`, so we need this
        // check.

        if (this.props.forwardedRef) {
          this.props.forwardedRef(el);
        }
      }

      render() {
        return (0,external_wp_element_namespaceObject.createElement)(WrappedComponent, { ...this.props.ownProps,
          ref: this.handleRef
        });
      }

function useWarnOnChange(object) {
  let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Change detection';
  const previousValues = usePrevious(object);
  Object.entries(previousValues !== null && previousValues !== void 0 ? previousValues : []).forEach(_ref => {
    let [key, value] = _ref;

    if (value !== object[
    /** @type {keyof typeof object} */
    key]) {
      // eslint-disable-next-line no-console
      console.warn(`${prefix}: ${key} key changed:`, value, object[
      /** @type {keyof typeof object} */
      key]
      /* eslint-enable jsdoc/check-types */
      );
    }
  });
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
/**
 * External dependencies
 */

const instanceMap = new WeakMap();
/**
 * Creates a new id for a given object.
 *
 * @param object Object reference to create an id for.
 * @return The instance id (index).
 */


/* eslint-disable jsdoc/valid-types */

/**
 * Specify the useInstanceId *function* signatures.
 *
 * More accurately, useInstanceId distinguishes between three different
 * signatures:
 *
 * 1. When only object is given, the returned value is a number
 * 2. When object and prefix is given, the returned value is a string
 * 3. When preferredId is given, the returned value is the type of preferredId
 *
 * @param object Object reference to create an id for.
 */


/**
 * Provides a unique instance ID.
 *
 * @param object        Object reference to create an id for.
 * @param [prefix]      Prefix for the unique id.
 * @param [preferredId] Default ID to use.
 * @return The unique instance id.
 */
function useInstanceId(object, prefix, preferredId) {
  return (0,external_wp_element_namespaceObject.useMemo)(() => {
    if (preferredId) return preferredId;
    const id = createId(object);
    return prefix ? `${prefix}-${id}` : id;
  }, [object, preferredId, prefix]);
}

/* harmony default export */ var use_instance_id = (useInstanceId);

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-instance-id/index.js


// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-throttle/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
const withInstanceId = createHigherOrderComponent(WrappedComponent => {
  return props => {
    const instanceId = use_instance_id(WrappedComponent); // @ts-ignore

    return (0,external_wp_element_namespaceObject.createElement)(WrappedComponent, { ...props,
      instanceId: instanceId
    });
  };
}, 'instanceId');
/* harmony default export */ var with_instance_id = (withInstanceId);

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/higher-order/with-safe-timeout/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/* eslint-disable jsdoc/valid-types */

/**
 * @template T
 * @param {T} value
 * @return {import('react').MutableRefObject<T>} A ref with the value.
 */

function useFreshRef(value) {
  /* eslint-enable jsdoc/valid-types */

  /* eslint-disable jsdoc/no-undefined-types */

  /** @type {import('react').MutableRefObject<T>} */

  /* eslint-enable jsdoc/no-undefined-types */
  // Disable reason: We're doing something pretty JavaScript-y here where the
  // ref will always have a current value that is not null or undefined but it
  // needs to start as undefined. We don't want to change the return type so
  // it's easier to just ts-ignore this specific line that's complaining about
  // undefined not being part of T.
  // @ts-ignore
  const ref = Object(external_wp_element_["useRef"])();
  ref.current = value;
  return ref;
}
/**
 * A hook to facilitate drag and drop handling.
 *
 * @param {Object}                  props             Named parameters.
 * @param {boolean}                 props.isDisabled  Whether or not to disable the drop zone.
 * @param {(e: DragEvent) => void}  props.onDragStart Called when dragging has started.
 * @param {(e: DragEvent) => void}  props.onDragEnter Called when the zone is entered.
 * @param {(e: DragEvent) => void}  props.onDragOver  Called when the zone is moved within.
 * @param {(e: DragEvent) => void}  props.onDragLeave Called when the zone is left.
 * @param {(e: MouseEvent) => void} props.onDragEnd   Called when dragging has ended.
 * @param {(e: DragEvent) => void}  props.onDrop      Called when dropping in the zone.
 *
 * @return {import('react').RefCallback<HTMLElement>} Ref callback to be passed to the drop zone element.
 */


function useDropZone(_ref) {
  let {
    isDisabled,
    onDrop: _onDrop,
    onDragStart: _onDragStart,
    onDragEnter: _onDragEnter,
    onDragLeave: _onDragLeave,
    onDragEnd: _onDragEnd,
    onDragOver: _onDragOver
  } = _ref;
  const onDropRef = useFreshRef(_onDrop);
  const onDragStartRef = useFreshRef(_onDragStart);
  const onDragEnterRef = useFreshRef(_onDragEnter);
  const onDragLeaveRef = useFreshRef(_onDragLeave);
  const onDragEndRef = useFreshRef(_onDragEnd);
  const onDragOverRef = useFreshRef(_onDragOver);
  return useRefEffect(element => {
    if (isDisabled) {
      return;
    }

    clearTimeout(id) {
      clearTimeout(id);
      this.timeouts = this.timeouts.filter(timeoutId => timeoutId !== id);
    }

    render() {
      return (// @ts-ignore
        (0,external_wp_element_namespaceObject.createElement)(OriginalComponent, { ...this.props,
          setTimeout: this.setTimeout,
          clearTimeout: this.clearTimeout
        })
      );
    }

      if (!targetToCheck || !defaultView || !(targetToCheck instanceof defaultView.HTMLElement) || !element.contains(targetToCheck)) {
        return false;
      }
      /** @type {HTMLElement|null} */


      let elementToCheck = targetToCheck;

/**
 * WordPress dependencies
 */

    function maybeDragStart(
    /** @type {DragEvent} */
    event) {
      if (isDragging) {
        return;
      }

      isDragging = true;
      ownerDocument.removeEventListener('dragenter', maybeDragStart); // Note that `dragend` doesn't fire consistently for file and
      // HTML drag events where the drag origin is outside the browser
      // window. In Firefox it may also not fire if the originating
      // node is removed.

      ownerDocument.addEventListener('dragend', maybeDragEnd);
      ownerDocument.addEventListener('mousemove', maybeDragEnd);

      if (onDragStartRef.current) {
        onDragStartRef.current(event);
      }
    }

function withState(initialState = {}) {
  external_wp_deprecated_default()('wp.compose.withState', {
    since: '5.8',
    alternative: 'wp.element.useState'
  });
  return createHigherOrderComponent(OriginalComponent => {
    return class WrappedComponent extends external_wp_element_namespaceObject.Component {
      constructor(
      /** @type {any} */
      props) {
        super(props);
        this.setState = this.setState.bind(this);
        this.state = initialState;
      }

      render() {
        return (0,external_wp_element_namespaceObject.createElement)(OriginalComponent, { ...this.props,
          ...this.state,
          setState: this.setState
        });
      }
    }

    function onDragOver(
    /** @type {DragEvent} */
    event) {
      // Only call onDragOver for the innermost hovered drop zones.
      if (!event.defaultPrevented && onDragOverRef.current) {
        onDragOverRef.current(event);
      } // Prevent the browser default while also signalling to parent
      // drop zones that `onDragOver` is already handled.


      event.preventDefault();
    }

/**
 * Effect-like ref callback. Just like with `useEffect`, this allows you to
 * return a cleanup function to be run if the ref changes or one of the
 * dependencies changes. The ref is provided as an argument to the callback
 * functions. The main difference between this and `useEffect` is that
 * the `useEffect` callback is not called when the ref changes, but this is.
 * Pass the returned ref callback as the component's ref and merge multiple refs
 * with `useMergeRefs`.
 *
 * It's worth noting that if the dependencies array is empty, there's not
 * strictly a need to clean up event handlers for example, because the node is
 * to be removed. It *is* necessary if you add dependencies because the ref
 * callback will be called multiple times for the same node.
 *
 * @param callback     Callback with ref as argument.
 * @param dependencies Dependencies of the callback.
 *
 * @return Ref callback.
 */

      if (onDragLeaveRef.current) {
        onDragLeaveRef.current(event);
      }
    }

    function onDrop(
    /** @type {DragEvent} */
    event) {
      // Don't handle drop if an inner drop zone already handled it.
      if (event.defaultPrevented) {
        return;
      } // Prevent the browser default while also signalling to parent
      // drop zones that `onDrop` is already handled.


      event.preventDefault(); // This seemingly useless line has been shown to resolve a
      // Safari issue where files dragged directly from the dock are
      // not recognized.
      // eslint-disable-next-line no-unused-expressions

      event.dataTransfer && event.dataTransfer.files.length;

      if (onDropRef.current) {
        onDropRef.current(event);
      }

function useConstrainedTabbing() {
  return useRefEffect((
  /** @type {HTMLElement} */
  node) => {
    function onKeyDown(
    /** @type {KeyboardEvent} */
    event) {
      if (!isDragging) {
        return;
      }

      const action = shiftKey ? 'findPrevious' : 'findNext';
      const nextElement = external_wp_dom_namespaceObject.focus.tabbable[action](
      /** @type {HTMLElement} */
      target) || null; // When the target element contains the element that is about to
      // receive focus, for example when the target is a tabbable
      // container, browsers may disagree on where to move focus next.
      // In this case we can't rely on native browsers behavior. We need
      // to manage focus instead.
      // See https://github.com/WordPress/gutenberg/issues/46041.

      if (
      /** @type {HTMLElement} */
      target.contains(nextElement)) {
        event.preventDefault();
        /** @type {HTMLElement} */

        nextElement?.focus();
        return;
      } // If the element that is about to receive focus is inside the
      // area, rely on native browsers behavior and let tabbing follow
      // the native tab sequence.


      if (node.contains(nextElement)) {
        return;
      } // If the element that is about to receive focus is outside the
      // area, move focus to a div and insert it at the start or end of
      // the area, depending on the direction. Without preventing default
      // behaviour, the browser will then move focus to the next element.


      const domAction = shiftKey ? 'append' : 'prepend';
      const {
        ownerDocument
      } = node;
      const trap = ownerDocument.createElement('div');
      trap.tabIndex = -1;
      node[domAction](trap); // Remove itself when the trap loses focus.

      trap.addEventListener('blur', () => node.removeChild(trap));
      trap.focus();
    }

    element.dataset.isDropZone = 'true';
    element.addEventListener('drop', onDrop);
    element.addEventListener('dragenter', onDragEnter);
    element.addEventListener('dragover', onDragOver);
    element.addEventListener('dragleave', onDragLeave); // The `dragstart` event doesn't fire if the drag started outside
    // the document.

    ownerDocument.addEventListener('dragenter', maybeDragStart);
    return () => {
      node.removeEventListener('keydown', onKeyDown);
    };
  }, [isDisabled]);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-focusable-iframe/index.js
/**
 * Internal dependencies
 */

/**
 * Dispatches a bubbling focus event when the iframe receives focus. Use
 * `onFocus` as usual on the iframe or a parent element.
 *
 * @return {Object} Ref to pass to the iframe.
 */

function useCopyOnClick(ref, text, timeout = 4000) {
  /* eslint-enable jsdoc/no-undefined-types */
  external_wp_deprecated_default()('wp.compose.useCopyOnClick', {
    since: '5.8',
    alternative: 'wp.compose.useCopyToClipboard'
  });
  /** @type {import('react').MutableRefObject<Clipboard | undefined>} */

  const clipboard = (0,external_wp_element_namespaceObject.useRef)();
  const [hasCopied, setHasCopied] = (0,external_wp_element_namespaceObject.useState)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    /** @type {number | undefined} */
    let timeoutId;

    if (!ref.current) {
      return;
    } // Clipboard listens to click events.


    clipboard.current = new (clipboard_default())(ref.current, {
      text: () => typeof text === 'function' ? text() : text
    });
    clipboard.current.on('success', ({
      clearSelection,
      trigger
    }) => {
      // Clearing selection will move focus back to the triggering button,
      // ensuring that it is not reset to the body, and further that it is
      // kept within the rendered node.
      clearSelection(); // Handle ClipboardJS focus bug, see https://github.com/zenorocha/clipboard.js/issues/680

    function checkFocus() {
      if (ownerDocument && ownerDocument.activeElement === element) {
        /** @type {HTMLElement} */
        element.focus();
      }
    }

    defaultView.addEventListener('blur', checkFocus);
    return () => {
      defaultView.removeEventListener('blur', checkFocus);
    };
  }, []);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-fixed-window-list/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




const DEFAULT_INIT_WINDOW_SIZE = 30;
/**
 * @typedef {Object} WPFixedWindowList
 *
 * @property {number}                  visibleItems Items visible in the current viewport
 * @property {number}                  start        Start index of the window
 * @property {number}                  end          End index of the window
 * @property {(index:number)=>boolean} itemInView   Returns true if item is in the window
 */

/**
 * @typedef {Object} WPFixedWindowListOptions
 *
 * @property {number}  [windowOverscan] Renders windowOverscan number of items before and after the calculated visible window.
 * @property {boolean} [useWindowing]   When false avoids calculating the window size
 * @property {number}  [initWindowSize] Initial window size to use on first render before we can calculate the window size.
 */

/**
 *
 * @param {import('react').RefObject<HTMLElement>} elementRef Used to find the closest scroll container that contains element.
 * @param { number }                               itemHeight Fixed item height in pixels
 * @param { number }                               totalItems Total items in list
 * @param { WPFixedWindowListOptions }             [options]  Options object
 * @return {[ WPFixedWindowList, setFixedListWindow:(nextWindow:WPFixedWindowList)=>void]} Array with the fixed window list and setter
 */

function useFixedWindowList(elementRef, itemHeight, totalItems, options) {
  var _options$initWindowSi, _options$useWindowing;

  const initWindowSize = (_options$initWindowSi = options === null || options === void 0 ? void 0 : options.initWindowSize) !== null && _options$initWindowSi !== void 0 ? _options$initWindowSi : DEFAULT_INIT_WINDOW_SIZE;
  const useWindowing = (_options$useWindowing = options === null || options === void 0 ? void 0 : options.useWindowing) !== null && _options$useWindowing !== void 0 ? _options$useWindowing : true;
  const [fixedListWindow, setFixedListWindow] = Object(external_wp_element_["useState"])({
    visibleItems: initWindowSize,
    start: 0,
    end: initWindowSize,
    itemInView: (
    /** @type {number} */
    index) => {
      return index >= 0 && index <= initWindowSize;
    }
  });
  Object(external_wp_element_["useLayoutEffect"])(() => {
    var _scrollContainer$owne, _scrollContainer$owne2, _scrollContainer$owne3, _scrollContainer$owne4;

    });
    clipboard.on('success', ({
      clearSelection
    }) => {
      // Clearing selection will move focus back to the triggering
      // button, ensuring that it is not reset to the body, and
      // further that it is kept within the rendered node.
      clearSelection(); // Handle ClipboardJS focus bug, see
      // https://github.com/zenorocha/clipboard.js/issues/680

    const scrollContainer = Object(external_wp_dom_["getScrollContainer"])(elementRef.current);

    const measureWindow = (
    /** @type {boolean | undefined} */
    initRender) => {
      var _options$windowOversc;

      if (!scrollContainer) {
        return;
      }

      const visibleItems = Math.ceil(scrollContainer.clientHeight / itemHeight); // Aim to keep opening list view fast, afterward we can optimize for scrolling

      const windowOverscan = initRender ? visibleItems : (_options$windowOversc = options === null || options === void 0 ? void 0 : options.windowOverscan) !== null && _options$windowOversc !== void 0 ? _options$windowOversc : visibleItems;
      const firstViewableIndex = Math.floor(scrollContainer.scrollTop / itemHeight);
      const start = Math.max(0, firstViewableIndex - windowOverscan);
      const end = Math.min(totalItems - 1, firstViewableIndex + visibleItems + windowOverscan);
      setFixedListWindow(lastWindow => {
        const nextWindow = {
          visibleItems,
          start,
          end,
          itemInView: (
          /** @type {number} */
          index) => {
            return start <= index && index <= end;
          }
        };

        if (lastWindow.start !== nextWindow.start || lastWindow.end !== nextWindow.end || lastWindow.visibleItems !== nextWindow.visibleItems) {
          return nextWindow;
        }

function useFocusOnMount(focusOnMount = 'firstElement') {
  const focusOnMountRef = (0,external_wp_element_namespaceObject.useRef)(focusOnMount);
  /**
   * Sets focus on a DOM element.
   *
   * @param {HTMLElement} target The DOM element to set focus to.
   * @return {void}
   */

  const setFocus = target => {
    target.focus({
      // When focusing newly mounted dialogs,
      // the position of the popover is often not right on the first render
      // This prevents the layout shifts when focusing the dialogs.
      preventScroll: true
    });
  };
  /** @type {import('react').MutableRefObject<ReturnType<setTimeout> | undefined>} */


  const timerId = (0,external_wp_element_namespaceObject.useRef)();
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    focusOnMountRef.current = focusOnMount;
  }, [focusOnMount]);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);
  return (0,external_wp_element_namespaceObject.useCallback)(node => {
    var _node$ownerDocument$a;

    measureWindow(true);
    const debounceMeasureList = Object(external_lodash_["debounce"])(() => {
      measureWindow();
    }, 16);
    scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.addEventListener('scroll', debounceMeasureList);
    scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$owne = scrollContainer.ownerDocument) === null || _scrollContainer$owne === void 0 ? void 0 : (_scrollContainer$owne2 = _scrollContainer$owne.defaultView) === null || _scrollContainer$owne2 === void 0 ? void 0 : _scrollContainer$owne2.addEventListener('resize', debounceMeasureList);
    scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$owne3 = scrollContainer.ownerDocument) === null || _scrollContainer$owne3 === void 0 ? void 0 : (_scrollContainer$owne4 = _scrollContainer$owne3.defaultView) === null || _scrollContainer$owne4 === void 0 ? void 0 : _scrollContainer$owne4.addEventListener('resize', debounceMeasureList);
    return () => {
      var _scrollContainer$owne5, _scrollContainer$owne6;

    if (node.contains((_node$ownerDocument$a = node.ownerDocument?.activeElement) !== null && _node$ownerDocument$a !== void 0 ? _node$ownerDocument$a : null)) {
      return;
    }

    if (focusOnMountRef.current === 'firstElement') {
      timerId.current = setTimeout(() => {
        const firstTabbable = external_wp_dom_namespaceObject.focus.tabbable.find(node)[0];

        if (firstTabbable) {
          setFocus(
          /** @type {HTMLElement} */
          firstTabbable);
        }
      }, 0);
      return;
    }

    setFocus(node);
  }, []);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/index.js
// Utils
 // Compose helper (aliased flowRight from Lodash)

 // Higher-order components






 // Hooks




/** @type {Element|null} */

let origin = null;
/**
 * Adds the unmount behavior of returning focus to the element which had it
 * previously as is expected for roles like menus or dialogs.
 *
 * @param {() => void} [onFocusReturn] Overrides the default return behavior.
 * @return {import('react').RefCallback<HTMLElement>} Element Ref.
 *
 * @example
 * ```js
 * import { useFocusReturn } from '@wordpress/compose';
 *
 * const WithFocusReturn = () => {
 *     const ref = useFocusReturn()
 *     return (
 *         <div ref={ ref }>
 *             <Button />
 *             <Button />
 *         </div>
 *     );
 * }
 * ```
 */




      focusedBeforeMount.current = node.ownerDocument.activeElement;
    } else if (focusedBeforeMount.current) {
      const isFocused = ref.current?.contains(ref.current?.ownerDocument.activeElement);

      if (ref.current?.isConnected && !isFocused) {
        var _origin;

        (_origin = origin) !== null && _origin !== void 0 ? _origin : origin = focusedBeforeMount.current;
        return;
      } // Defer to the component's own explicit focus return behavior, if
      // specified. This allows for support that the `onFocusReturn`
      // decides to allow the default behavior to occur under some
      // conditions.


      if (onFocusReturnRef.current) {
        onFocusReturnRef.current();
      } else {
        /** @type {null|HTMLElement} */
        (!focusedBeforeMount.current.isConnected ? origin : focusedBeforeMount.current)?.focus();
      }

      origin = null;
    }
  }, []);
}




/**
 * Input types which are classified as button types, for use in considering
 * whether element is a (focus-normalized) button.
 */

const INPUT_BUTTON_TYPES = ['button', 'submit'];
/**
 * List of HTML button elements subject to focus normalization
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 */

/**
 * Returns true if the given element is a button element subject to focus
 * normalization, or false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 *
 * @param eventTarget The target from a mouse or touch event.
 *
 * @return Whether the element is a button element subject to focus normalization.
 */
function isFocusNormalizedButton(eventTarget) {
  if (!(eventTarget instanceof window.HTMLElement)) {
    return false;
  }


    case 'INPUT':
      return INPUT_BUTTON_TYPES.includes(eventTarget.type);
  }

  return false;
}

/**
 * A react hook that can be used to check whether focus has moved outside the
 * element the event handlers are bound to.
 *
 * @param onFocusOutside A callback triggered when focus moves outside
 *                       the element the event handlers are bound to.
 *
 * @return An object containing event handlers. Bind the event handlers to a
 * wrapping element element to capture when focus moves outside that element.
 */
function useFocusOutside(onFocusOutside) {
  const currentOnFocusOutside = (0,external_wp_element_namespaceObject.useRef)(onFocusOutside);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    currentOnFocusOutside.current = onFocusOutside;
  }, [onFocusOutside]);
  const preventBlurCheck = (0,external_wp_element_namespaceObject.useRef)(false);
  const blurCheckTimeoutId = (0,external_wp_element_namespaceObject.useRef)();
  /**
   * Cancel a blur check timeout.
   */

        return _originalStopCallback.call(self, e, element, combo);
    };

    Mousetrap.prototype.bindGlobal = function(keys, callback, action) {
        var self = this;
        self.bind(keys, callback, action);

  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (!onFocusOutside) {
      cancelBlurCheck();
    }
  }, [onFocusOutside, cancelBlurCheck]);
  /**
   * Handles a mousedown or mouseup event to respectively assign and
   * unassign a flag for preventing blur check on button elements. Some
   * browsers, namely Firefox and Safari, do not emit a focus event on
   * button elements when clicked, while others do. The logic here
   * intends to normalize this as treating click on buttons as focus.
   *
   * @param event
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
   */

  const normalizeButtonFocus = (0,external_wp_element_namespaceObject.useCallback)(event => {
    const {
      type,
      target
    } = event;
    const isInteractionEnd = ['mouseup', 'touchend'].includes(type);

    if (isInteractionEnd) {
      preventBlurCheck.current = false;
    } else if (isFocusNormalizedButton(target)) {
      preventBlurCheck.current = true;
    }
  }, []);
  /**
   * A callback triggered when a blur event occurs on the element the handler
   * is bound to.
   *
   * Calls the `onFocusOutside` callback in an immediate timeout if focus has
   * move outside the bound element and is still within the document.
   */


    if (preventBlurCheck.current) {
      return;
    } // The usage of this attribute should be avoided. The only use case
    // would be when we load modals that are not React components and
    // therefore don't exist in the React tree. An example is opening
    // the Media Library modal from another dialog.
    // This attribute should contain a selector of the related target
    // we want to ignore, because we still need to trigger the blur event
    // on all other cases.


    const ignoreForRelatedTarget = event.target.getAttribute('data-unstable-ignore-focus-outside-for-relatedtarget');

    if (ignoreForRelatedTarget && event.relatedTarget?.closest(ignoreForRelatedTarget)) {
      return;
    }

/***/ "XI5e":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["priorityQueue"]; }());

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "imBb":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

function useMergeRefs(refs) {
  const element = (0,external_wp_element_namespaceObject.useRef)();
  const isAttached = (0,external_wp_element_namespaceObject.useRef)(false);
  const didElementChange = (0,external_wp_element_namespaceObject.useRef)(false);
  /* eslint-disable jsdoc/no-undefined-types */

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

  (0,external_wp_element_namespaceObject.useLayoutEffect)(() => {
    if (didElementChange.current === false && isAttached.current === true) {
      refs.forEach((ref, index) => {
        const previousRef = previousRefs.current[index];

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

  return (0,external_wp_element_namespaceObject.useCallback)(value => {
    // Update the element so it can be used when calling ref callbacks on a
    // dependency change.
    assignRef(element, value);
    didElementChange.current = true;
    isAttached.current = value !== null; // When an element changes, the current ref callback should be called
    // with the new element and the previous one with `null`.

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

/**
 * Returns a ref and props to apply to a dialog wrapper to enable the following behaviors:
 *  - constrained tabbing.
 *  - focus on mount.
 *  - return focus on unmount.
 *  - focus outside.
 *
 * @param options Dialog Options.
 */
function useDialog(options) {
  const currentOptions = (0,external_wp_element_namespaceObject.useRef)();
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    currentOptions.current = options;
  }, Object.values(options));
  const constrainedTabbingRef = use_constrained_tabbing();
  const focusOnMountRef = useFocusOnMount(options.focusOnMount);
  const focusReturnRef = use_focus_return();
  const focusOutsideProps = useFocusOutside(event => {
    // This unstable prop  is here only to manage backward compatibility
    // for the Popover component otherwise, the onClose should be enough.
    if (currentOptions.current?.__unstableOnClose) {
      currentOptions.current.__unstableOnClose('focus-outside', event);
    } else if (currentOptions.current?.onClose) {
      currentOptions.current.onClose();
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    node.addEventListener('keydown', event => {
      // Close on escape.
      if (event.keyCode === external_wp_keycodes_namespaceObject.ESCAPE && !event.defaultPrevented && currentOptions.current?.onClose) {
        event.preventDefault();
        currentOptions.current.onClose();
      }
    });
  }, []);
  return [useMergeRefs([options.focusOnMount !== false ? constrainedTabbingRef : null, options.focusOnMount !== false ? focusReturnRef : null, options.focusOnMount !== false ? focusOnMountRef : null, closeOnEscapeRef]), { ...focusOutsideProps,
    tabIndex: -1
  }];
}

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/hooks/use-disabled/index.js
/**
 * Internal dependencies
 */

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

/**
 * In some circumstances, such as block previews, all focusable DOM elements
 * (input fields, links, buttons, etc.) need to be disabled. This hook adds the
 * behavior to disable nested DOM elements to the returned ref.
 *
 * If you can, prefer the use of the inert HTML attribute.
 *
 * @param {Object}   config            Configuration object.
 * @param {boolean=} config.isDisabled Whether the element should be disabled.
 * @return {import('react').RefCallback<HTMLElement>} Element Ref.
 *
 * @example
 * ```js
 * import { useDisabled } from '@wordpress/compose';
 *
 * const DisabledExample = () => {
 * 	const disabledRef = useDisabled();
 *	return (
 *		<div ref={ disabledRef }>
 *			<a href="#">This link will have tabindex set to -1</a>
 *			<input placeholder="This input will have the disabled attribute added to it." type="text" />
 *		</div>
 *	);
 * };
 * ```
 */

function useDisabled({
  isDisabled: isDisabledProp = false
} = {}) {
  return useRefEffect(node => {
    if (isDisabledProp) {
      return;
    }

    const defaultView = node?.ownerDocument?.defaultView;

    if (!defaultView) {
      return;
    }
    /** A variable keeping track of the previous updates in order to restore them. */

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

    const disable = () => {
      node.childNodes.forEach(child => {
        if (!(child instanceof defaultView.HTMLElement)) {
          return;
        }

        if (!child.getAttribute('inert')) {
          child.setAttribute('inert', 'true');
          updates.push(() => {
            child.removeAttribute('inert');
          });
        }
      });
    }; // Debounce re-disable since disabling process itself will incur
    // additional mutations which should be ignored.

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

    const debouncedDisable = debounce(disable, 0, {
      leading: true
    });
    disable();
    /** @type {MutationObserver | undefined} */

    const observer = new window.MutationObserver(debouncedDisable);
    observer.observe(node, {
      childList: true
    });
    return () => {
      if (observer) {
        observer.disconnect();
      }

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

function useDragging({
  onDragStart,
  onDragMove,
  onDragEnd
}) {
  const [isDragging, setIsDragging] = (0,external_wp_element_namespaceObject.useState)(false);
  const eventsRef = (0,external_wp_element_namespaceObject.useRef)({
    onDragStart,
    onDragMove,
    onDragEnd
  });
  use_isomorphic_layout_effect(() => {
    eventsRef.current.onDragStart = onDragStart;
    eventsRef.current.onDragMove = onDragMove;
    eventsRef.current.onDragEnd = onDragEnd;
  }, [onDragStart, onDragMove, onDragEnd]);
  /** @type {(e: MouseEvent) => void} */

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

/**
 * WordPress dependencies
 */

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

function useKeyboardShortcut(
/* eslint-enable jsdoc/valid-types */
shortcuts, callback, {
  bindGlobal = false,
  eventName = 'keydown',
  isDisabled = false,
  // This is important for performance considerations.
  target
} = {}) {
  const currentCallback = (0,external_wp_element_namespaceObject.useRef)(callback);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    currentCallback.current = callback;
  }, [callback]);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    if (isDisabled) {
      return;
    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

    /** @type {unknown} */
    document);
    const shortcutsArray = Array.isArray(shortcuts) ? shortcuts : [shortcuts];
    shortcutsArray.forEach(shortcut => {
      const keys = shortcut.split('+'); // Determines whether a key is a modifier by the length of the string.
      // E.g. if I add a pass a shortcut Shift+Cmd+M, it'll determine that
      // the modifiers are Shift and Cmd because they're not a single character.

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

      mousetrap[bindFn](shortcut, (
      /* eslint-disable jsdoc/valid-types */

      /** @type {[e: import('mousetrap').ExtendedKeyboardEvent, combo: string]} */
      ...args) =>
      /* eslint-enable jsdoc/valid-types */
      currentCallback.current(...args), eventName);
    });
    return () => {
      mousetrap.reset();
    };
  }, [shortcuts, bindGlobal, eventName, target, isDisabled]);
}

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

/**
 * A new MediaQueryList object for the media query
 *
 * @param {string} [query] Media Query.
 * @return {MediaQueryList|null} A new object for the media query
 */

function getMediaQueryList(query) {
  if (query && typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia(query);
  }

  return null;
}
/**
 * Runs a media query and returns its value when it changes.
 *
 * @param {string} [query] Media Query.
 * @return {boolean} return value of the media query.
 */


function useMediaQuery(query) {
  const source = (0,external_wp_element_namespaceObject.useMemo)(() => {
    const mediaQueryList = getMediaQueryList(query);
    return {
      /** @type {(onStoreChange: () => void) => () => void} */
      subscribe(onStoreChange) {
        if (!mediaQueryList) {
          return () => {};
        }

        mediaQueryList.addEventListener('change', onStoreChange);
        return () => {
          mediaQueryList.removeEventListener('change', onStoreChange);
        };
      },

      getValue() {
        var _mediaQueryList$match;

        return (_mediaQueryList$match = mediaQueryList?.matches) !== null && _mediaQueryList$match !== void 0 ? _mediaQueryList$match : false;
      }

    };
  }, [query]);
  return (0,external_wp_element_namespaceObject.useSyncExternalStore)(source.subscribe, source.getValue, () => false);
}

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

/**
 * Use something's value from the previous render.
 * Based on https://usehooks.com/usePrevious/.
 *
 * @param value The value to track.
 *
 * @return The value from the previous render.
 */

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

const useViewportMatch = (breakpoint, operator = '>=') => {
  const simulatedWidth = (0,external_wp_element_namespaceObject.useContext)(ViewportMatchWidthContext);
  const mediaQuery = !simulatedWidth && `(${CONDITIONS[operator]}: ${BREAKPOINTS[breakpoint]}px)`;
  const mediaQueryResult = useMediaQuery(mediaQuery || undefined);

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ "mHlH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useCallback */
/* unused harmony export useCallbackOne */
/* unused harmony export useMemo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMemoOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useResizeObserver(opts = {}) {
  // Saving the callback as a ref. With this, I don't need to put onResize in the
  // effect dep array, and just passing in an anonymous function without memoising
  // will not reinstantiate the hook's ResizeObserver.
  const onResize = opts.onResize;
  const onResizeRef = (0,external_wp_element_namespaceObject.useRef)(undefined);
  onResizeRef.current = onResize;
  const round = opts.round || Math.round; // Using a single instance throughout the hook's lifetime

  const resizeObserverRef = (0,external_wp_element_namespaceObject.useRef)();
  const [size, setSize] = (0,external_wp_element_namespaceObject.useState)({
    width: undefined,
    height: undefined
  }); // In certain edge cases the RO might want to report a size change just after
  // the component unmounted.

  const didUnmount = (0,external_wp_element_namespaceObject.useRef)(false);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    didUnmount.current = false;
    return () => {
      didUnmount.current = true;
    };
  }, []); // Using a ref to track the previous width / height to avoid unnecessary renders.

  const previous = (0,external_wp_element_namespaceObject.useRef)({
    width: undefined,
    height: undefined
  }); // This block is kinda like a useEffect, only it's called whenever a new
  // element could be resolved based on the ref option. It also has a cleanup
  // function.

  const refCallback = useResolvedElement((0,external_wp_element_namespaceObject.useCallback)(element => {
    // We only use a single Resize Observer instance, and we're instantiating it on demand, only once there's something to observe.
    // This instance is also recreated when the `box` option changes, so that a new observation is fired if there was a previously observed element with a different box option.
    if (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round) {
      resizeObserverRef.current = {
        box: opts.box,
        round,
        instance: new ResizeObserver(entries => {
          const entry = entries[0];
          let boxProp = 'borderBoxSize';

          if (opts.box === 'border-box') {
            boxProp = 'borderBoxSize';
          } else {
            boxProp = opts.box === 'device-pixel-content-box' ? 'devicePixelContentBoxSize' : 'contentBoxSize';
          }

function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var committed = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;




/***/ }),

/***/ "rl8x":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["isShallowEqual"]; }());

/***/ }),

/***/ "sxGJ":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * @param list  New array.
 * @param state Current state.
 * @return First items present iin state.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(279);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(370);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(817);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);
;// CONCATENATED MODULE: ./src/clipboard-action.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * React hook returns an array which items get asynchronously appended from a source array.
 * This behavior is useful if we want to render a list of items asynchronously for performance reasons.
 *
 * @param list   Source array.
 * @param config Configuration object.
 *
 * @return Async array.
 */

var ClipboardAction = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   */
  function ClipboardAction(options) {
    _classCallCheck(this, ClipboardAction);

function useAsyncList(list, config = {
  step: 1
}) {
  const {
    step = 1
  } = config;
  const [current, setCurrent] = (0,external_wp_element_namespaceObject.useState)([]);
  (0,external_wp_element_namespaceObject.useEffect)(() => {
    // On reset, we keep the first items that were previously rendered.
    let firstItems = getFirstItemsPresentInState(list, current);


    setCurrent(firstItems);
    const asyncQueue = (0,external_wp_priorityQueue_namespaceObject.createQueue)();

    for (let i = firstItems.length; i < list.length; i += step) {
      asyncQueue.add({}, () => {
        (0,external_wp_element_namespaceObject.flushSync)(() => {
          setCurrent(state => [...state, ...list.slice(i, i + step)]);
        });
      });
    }

    return () => asyncQueue.reset();
  }, [list]);
  return current;
}

      var fakeElem = this.createFakeElement();

      this.fakeHandlerCallback = function () {
        return _this.removeFake();
      };

      this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
      this.container.appendChild(fakeElem);
      this.selectedText = select_default()(fakeElem);
      this.copyText();
      this.removeFake();
    }
    /**
     * Only removes the fake element after another click event, that way
     * a user can hit `Ctrl+C` to copy because selection still exists.
     */

  }, {
    key: "removeFake",
    value: function removeFake() {
      if (this.fakeHandler) {
        this.container.removeEventListener('click', this.fakeHandlerCallback);
        this.fakeHandler = null;
        this.fakeHandlerCallback = null;
      }

function useWarnOnChange(object, prefix = 'Change detection') {
  const previousValues = usePrevious(object);
  Object.entries(previousValues !== null && previousValues !== void 0 ? previousValues : []).forEach(([key, value]) => {
    if (value !== object[
    /** @type {keyof typeof object} */
    key]) {
      // eslint-disable-next-line no-console
      console.warn(`${prefix}: ${key} key changed:`, value, object[
      /** @type {keyof typeof object} */
      key]
      /* eslint-enable jsdoc/check-types */
      );
    }
    /**
     * Executes the copy operation based on the current selection.
     */

  }, {
    key: "copyText",
    value: function copyText() {
      var succeeded;

      try {
        succeeded = document.execCommand(this.action);
      } catch (err) {
        succeeded = false;
      }

      this.handleResult(succeeded);
    }
    /**
     * Fires an event based on the copy operation result.
     * @param {Boolean} succeeded
     */

  }, {
    key: "handleResult",
    value: function handleResult(succeeded) {
      this.emitter.emit(succeeded ? 'success' : 'error', {
        action: this.action,
        text: this.selectedText,
        trigger: this.trigger,
        clearSelection: this.clearSelection.bind(this)
      });
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */

  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (this.trigger) {
        this.trigger.focus();
      }

      document.activeElement.blur();
      window.getSelection().removeAllRanges();
    }
    /**
     * Sets the `action` to be performed which can be either 'copy' or 'cut'.
     * @param {String} action
     */

  }, {
    key: "destroy",

    /**
     * Destroy lifecycle.
     */
    value: function destroy() {
      this.removeFake();
    }
  }, {
    key: "action",
    set: function set() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
      this._action = action;

      if (this._action !== 'copy' && this._action !== 'cut') {
        throw new Error('Invalid "action" value, use either "copy" or "cut"');
      }
    }
    /**
     * Gets the `action` property.
     * @return {String}
     */
    ,
    get: function get() {
      return this._action;
    }
    /**
     * Sets the `target` property using an element
     * that will be have its content copied.
     * @param {Element} target
     */

  }, {
    key: "target",
    set: function set(target) {
      if (target !== undefined) {
        if (target && _typeof(target) === 'object' && target.nodeType === 1) {
          if (this.action === 'copy' && target.hasAttribute('disabled')) {
            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
          }

          if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
          }

/**
 * WordPress dependencies
 */

/* harmony default export */ var clipboard_action = (ClipboardAction);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

/**
 * Internal dependencies
 */


/**
 * Debounces a function similar to Lodash's `debounce`. A new debounced function will
 * be returned and any scheduled calls cancelled if any of the arguments change,
 * including the function to debounce, so please wrap functions created on
 * render in components in `useCallback`.
 *
 * @see https://docs-lodash.com/v4/debounce/
 *
 * @template {(...args: any[]) => void} TFunc
 *
 * @param {TFunc}                                          fn        The function to debounce.
 * @param {number}                                         [wait]    The number of milliseconds to delay.
 * @param {import('../../utils/debounce').DebounceOptions} [options] The options object.
 * @return {import('../../utils/debounce').DebouncedFunc<TFunc>} Debounced function.
 */

function useDebounce(fn, wait, options) {
  const debounced = useMemoOne(() => debounce(fn, wait !== null && wait !== void 0 ? wait : 0, options), [fn, wait, options]);
  (0,external_wp_element_namespaceObject.useEffect)(() => () => debounced.cancel(), [debounced]);
  return debounced;
}

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

/**
 * WordPress dependencies
 */

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

/**
 * Internal dependencies
 */


/**
 * Throttles a function similar to Lodash's `throttle`. A new throttled function will
 * be returned and any scheduled calls cancelled if any of the arguments change,
 * including the function to throttle, so please wrap functions created on
 * render in components in `useCallback`.
 *
 * @see https://docs-lodash.com/v4/throttle/
 *
 * @template {(...args: any[]) => void} TFunc
 *
 * @param {TFunc}                                          fn        The function to throttle.
 * @param {number}                                         [wait]    The number of milliseconds to throttle invocations to.
 * @param {import('../../utils/throttle').ThrottleOptions} [options] The options object. See linked documentation for details.
 * @return {import('../../utils/debounce').DebouncedFunc<TFunc>} Throttled function.
 */

function useThrottle(fn, wait, options) {
  const throttled = useMemoOne(() => throttle(fn, wait !== null && wait !== void 0 ? wait : 0, options), [fn, wait, options]);
  (0,external_wp_element_namespaceObject.useEffect)(() => () => throttled.cancel(), [throttled]);
  return throttled;
}

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * A hook to facilitate drag and drop handling.
 *
 * @param {Object}                  props                   Named parameters.
 * @param {?HTMLElement}            [props.dropZoneElement] Optional element to be used as the drop zone.
 * @param {boolean}                 [props.isDisabled]      Whether or not to disable the drop zone.
 * @param {(e: DragEvent) => void}  [props.onDragStart]     Called when dragging has started.
 * @param {(e: DragEvent) => void}  [props.onDragEnter]     Called when the zone is entered.
 * @param {(e: DragEvent) => void}  [props.onDragOver]      Called when the zone is moved within.
 * @param {(e: DragEvent) => void}  [props.onDragLeave]     Called when the zone is left.
 * @param {(e: MouseEvent) => void} [props.onDragEnd]       Called when dragging has ended.
 * @param {(e: DragEvent) => void}  [props.onDrop]          Called when dropping in the zone.
 *
 * @return {import('react').RefCallback<HTMLElement>} Ref callback to be passed to the drop zone element.
 */


function useDropZone({
  dropZoneElement,
  isDisabled,
  onDrop: _onDrop,
  onDragStart: _onDragStart,
  onDragEnter: _onDragEnter,
  onDragLeave: _onDragLeave,
  onDragEnd: _onDragEnd,
  onDragOver: _onDragOver
}) {
  const onDropRef = useFreshRef(_onDrop);
  const onDragStartRef = useFreshRef(_onDragStart);
  const onDragEnterRef = useFreshRef(_onDragEnter);
  const onDragLeaveRef = useFreshRef(_onDragLeave);
  const onDragEndRef = useFreshRef(_onDragEnd);
  const onDragOverRef = useFreshRef(_onDragOver);
  return useRefEffect(elem => {
    if (isDisabled) {
      return;
    } // If a custom dropZoneRef is passed, use that instead of the element.
    // This allows the dropzone to cover an expanded area, rather than
    // be restricted to the area of the ref returned by this hook.


    const element = dropZoneElement !== null && dropZoneElement !== void 0 ? dropZoneElement : elem;
    let isDragging = false;
    const {
      ownerDocument
    } = element;
    /**
     * Checks if an element is in the drop zone.
     *
     * @param {EventTarget|null} targetToCheck
     *
     * @return {boolean} True if in drop zone, false if not.
     */

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  clipboard_createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      isDragging = true; // Note that `dragend` doesn't fire consistently for file and
      // HTML drag events where the drag origin is outside the browser
      // window. In Firefox it may also not fire if the originating
      // node is removed.

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;

      if (this.clipboardAction) {
        this.clipboardAction = null;
      }

      this.clipboardAction = new clipboard_action({
        action: this.action(trigger),
        target: this.target(trigger),
        text: this.text(trigger),
        container: this.container,
        trigger: trigger,
        emitter: this
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

    function onDragLeave(
    /** @type {DragEvent} */
    event) {
      // The `dragleave` event will also fire when leaving child
      // elements, but we only want to call `onDragLeave` when
      // leaving the drop zone, which means the `relatedTarget`
      // (element that has been entered) should be outside the drop
      // zone.
      // Note: This is not entirely reliable in Safari due to this bug
      // https://bugs.webkit.org/show_bug.cgi?id=66547
      if (isElementInZone(event.relatedTarget)) {
        return;
      }

      if (this.clipboardAction) {
        this.clipboardAction.destroy();
        this.clipboardAction = null;
      }
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

      isDragging = false;
      ownerDocument.removeEventListener('dragend', maybeDragEnd);
      ownerDocument.removeEventListener('mousemove', maybeDragEnd);

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

    ownerDocument.addEventListener('dragenter', maybeDragStart);
    return () => {
      delete element.dataset.isDropZone;
      element.removeEventListener('drop', onDrop);
      element.removeEventListener('dragenter', onDragEnter);
      element.removeEventListener('dragover', onDragOver);
      element.removeEventListener('dragleave', onDragLeave);
      ownerDocument.removeEventListener('dragend', maybeDragEnd);
      ownerDocument.removeEventListener('mousemove', maybeDragEnd);
      ownerDocument.removeEventListener('dragenter', maybeDragStart);
    };
  }, [isDisabled, dropZoneElement] // Refresh when the passed in dropZoneElement changes.
  );
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var closest = __webpack_require__(828);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @return Ref to pass to the iframe.
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    function checkFocus() {
      if (ownerDocument && ownerDocument.activeElement === element) {
        element.focus();
      }
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * WordPress dependencies
 */

module.exports = delegate;


/**
 * Internal dependencies
 */


/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

  const initWindowSize = (_options$initWindowSi = options?.initWindowSize) !== null && _options$initWindowSi !== void 0 ? _options$initWindowSi : DEFAULT_INIT_WINDOW_SIZE;
  const useWindowing = (_options$useWindowing = options?.useWindowing) !== null && _options$useWindowing !== void 0 ? _options$useWindowing : true;
  const [fixedListWindow, setFixedListWindow] = (0,external_wp_element_namespaceObject.useState)({
    visibleItems: initWindowSize,
    start: 0,
    end: initWindowSize,
    itemInView: (
    /** @type {number} */
    index) => {
      return index >= 0 && index <= initWindowSize;
    }
  });
  (0,external_wp_element_namespaceObject.useLayoutEffect)(() => {
    if (!useWindowing) {
      return;
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

      const windowOverscan = initRender ? visibleItems : (_options$windowOversc = options?.windowOverscan) !== null && _options$windowOversc !== void 0 ? _options$windowOversc : visibleItems;
      const firstViewableIndex = Math.floor(scrollContainer.scrollTop / itemHeight);
      const start = Math.max(0, firstViewableIndex - windowOverscan);
      const end = Math.min(totalItems - 1, firstViewableIndex + visibleItems + windowOverscan);
      setFixedListWindow(lastWindow => {
        const nextWindow = {
          visibleItems,
          start,
          end,
          itemInView: (
          /** @type {number} */
          index) => {
            return start <= index && index <= end;
          }
        };

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

        return lastWindow;
      });
    };

    measureWindow(true);
    const debounceMeasureList = debounce(() => {
      measureWindow();
    }, 16);
    scrollContainer?.addEventListener('scroll', debounceMeasureList);
    scrollContainer?.ownerDocument?.defaultView?.addEventListener('resize', debounceMeasureList);
    scrollContainer?.ownerDocument?.defaultView?.addEventListener('resize', debounceMeasureList);
    return () => {
      scrollContainer?.removeEventListener('scroll', debounceMeasureList);
      scrollContainer?.ownerDocument?.defaultView?.removeEventListener('resize', debounceMeasureList);
    };
  }, [itemHeight, elementRef, totalItems]);
  (0,external_wp_element_namespaceObject.useLayoutEffect)(() => {
    if (!useWindowing) {
      return;
    }

/***/ }),

    const handleKeyDown = (
    /** @type {KeyboardEvent} */
    event) => {
      switch (event.keyCode) {
        case external_wp_keycodes_namespaceObject.HOME:
          {
            return scrollContainer?.scrollTo({
              top: 0
            });
          }

        case external_wp_keycodes_namespaceObject.END:
          {
            return scrollContainer?.scrollTo({
              top: totalItems * itemHeight
            });
          }

        case external_wp_keycodes_namespaceObject.PAGEUP:
          {
            return scrollContainer?.scrollTo({
              top: scrollContainer.scrollTop - fixedListWindow.visibleItems * itemHeight
            });
          }

        case external_wp_keycodes_namespaceObject.PAGEDOWN:
          {
            return scrollContainer?.scrollTo({
              top: scrollContainer.scrollTop + fixedListWindow.visibleItems * itemHeight
            });
          }
      }
    };

    scrollContainer?.ownerDocument?.defaultView?.addEventListener('keydown', handleKeyDown);
    return () => {
      scrollContainer?.ownerDocument?.defaultView?.removeEventListener('keydown', handleKeyDown);
    };
  }, [totalItems, itemHeight, elementRef, fixedListWindow.visibleItems]);
  return [fixedListWindow, setFixedListWindow];
}

;// CONCATENATED MODULE: ./node_modules/@wordpress/compose/build-module/index.js
// The `createHigherOrderComponent` helper and helper types.
 // The `debounce` helper and its types.

 // The `throttle` helper and its types.

 // The `compose` and `pipe` helpers (inspired by `flowRight` and `flow` from Lodash).


        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(134);
/******/ })()
.default;
});

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

/***/ })

/******/ });
