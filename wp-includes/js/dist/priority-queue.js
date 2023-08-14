this["wp"] = this["wp"] || {}; this["wp"]["priorityQueue"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "XPKI");
/******/ })
/************************************************************************/
/******/ ({

/***/ "XPKI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "createQueue", function() { return /* binding */ createQueue; });

// CONCATENATED MODULE: ./node_modules/@wordpress/priority-queue/build-module/request-idle-callback.js
/**
 * @typedef {( timeOrDeadline: IdleDeadline | number ) => void} Callback
 */

/**
 * @return {(callback: Callback) => void} RequestIdleCallback
 */
function createRequestIdleCallback() {
  if (typeof window === 'undefined') {
    return callback => {
      setTimeout(() => callback(Date.now()), 0);
    };
  }

  return window.requestIdleCallback || window.requestAnimationFrame;
}
/* harmony default export */ var request_idle_callback = (createRequestIdleCallback());

// CONCATENATED MODULE: ./node_modules/@wordpress/priority-queue/build-module/index.js
/**
 * Internal dependencies
 */

/**
 * Enqueued callback to invoke once idle time permits.
 *
 * @typedef {()=>void} WPPriorityQueueCallback
 */

/**
 * An object used to associate callbacks in a particular context grouping.
 *
 * @typedef {{}} WPPriorityQueueContext
 */

/**
 * Function to add callback to priority queue.
 *
 * @typedef {(element:WPPriorityQueueContext,item:WPPriorityQueueCallback)=>void} WPPriorityQueueAdd
 */

/**
 * Function to flush callbacks from priority queue.
 *
 * @typedef {(element:WPPriorityQueueContext)=>boolean} WPPriorityQueueFlush
 */

/**
 * Reset the queue.
 *
 * @typedef {()=>void} WPPriorityQueueReset
 */

/**
 * Priority queue instance.
 *
 * @typedef {Object} WPPriorityQueue
 *
 * @property {WPPriorityQueueAdd}   add   Add callback to queue for context.
 * @property {WPPriorityQueueFlush} flush Flush queue for context.
 * @property {WPPriorityQueueReset} reset Reset queue.
 */

/**
 * Creates a context-aware queue that only executes
 * the last task of a given context.
 *
 * @example
 *```js
 * import { createQueue } from '@wordpress/priority-queue';
 *
 * const queue = createQueue();
 *
 * // Context objects.
 * const ctx1 = {};
 * const ctx2 = {};
 *
 * // For a given context in the queue, only the last callback is executed.
 * queue.add( ctx1, () => console.log( 'This will be printed first' ) );
 * queue.add( ctx2, () => console.log( 'This won\'t be printed' ) );
 * queue.add( ctx2, () => console.log( 'This will be printed second' ) );
 *```
 *
 * @return {WPPriorityQueue} Queue object with `add`, `flush` and `reset` methods.
 */

const createQueue = () => {
  /** @type {Map<WPPriorityQueueContext, WPPriorityQueueCallback>} */
  const waitingList = new Map();
  let isRunning = false;
  /**
   * Callback to process as much queue as time permits.
   *
   * Map Iteration follows the original insertion order. This means that here
   * we can iterate the queue and know that the first contexts which were
   * added will be run first. On the other hand, if anyone adds a new callback
   * for an existing context it will supplant the previously-set callback for
   * that context because we reassigned that map key's value.
   *
   * In the case that a callback adds a new callback to its own context then
   * the callback it adds will appear at the end of the iteration and will be
   * run only after all other existing contexts have finished executing.
   *
   * @param {IdleDeadline|number} deadline Idle callback deadline object, or
   *                                       animation frame timestamp.
   */

  const runWaitingList = deadline => {
    for (const [nextElement, callback] of waitingList) {
      waitingList.delete(nextElement);
      callback();

      if ('number' === typeof deadline || deadline.timeRemaining() <= 0) {
        break;
      }
    }

    if (waitingList.size === 0) {
      isRunning = false;
      return;
    }

    request_idle_callback(runWaitingList);
  };
  /**
   * Add a callback to the queue for a given context.
   *
   * If errors with undefined callbacks are encountered double check that
   * all of your useSelect calls have the right dependencies set correctly
   * in their second parameter. Missing dependencies can cause unexpected
   * loops and race conditions in the queue.
   *
   * @type {WPPriorityQueueAdd}
   *
   * @param {WPPriorityQueueContext}  element Context object.
   * @param {WPPriorityQueueCallback} item    Callback function.
   */


  const add = (element, item) => {
    waitingList.set(element, item);

    if (!isRunning) {
      isRunning = true;
      request_idle_callback(runWaitingList);
    }
  };
  /**
   * Flushes queue for a given context, returning true if the flush was
   * performed, or false if there is no queue for the given context.
   *
   * @type {WPPriorityQueueFlush}
   *
   * @param {WPPriorityQueueContext} element Context object.
   *
   * @return {boolean} Whether flush was performed.
   */


  const flush = element => {
    const callback = waitingList.get(element);

    if (undefined === callback) {
      return false;
    }

    waitingList.delete(element);
    callback();
    return true;
  };
  /**
   * Clears the queue for a given context, cancelling the callbacks without
   * executing them. Returns `true` if there were scheduled callbacks to cancel,
   * or `false` if there was is no queue for the given context.
   *
   * @type {WPPriorityQueueFlush}
   *
   * @param {WPPriorityQueueContext} element Context object.
   *
   * @return {boolean} Whether any callbacks got cancelled.
   */


  const cancel = element => {
    return waitingList.delete(element);
  };
  /**
   * Reset the queue without running the pending callbacks.
   *
   * @type {WPPriorityQueueReset}
   */


  const reset = () => {
    waitingList.clear();
    isRunning = false;
  };

  return {
    add,
    flush,
    reset
  };
};


/***/ })

/******/ });
