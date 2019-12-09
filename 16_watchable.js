/* eslint-disable guard-for-in */
'use strict';
/*
Write a class called Watchable which creates an object with both a subscribe and emit method.
  subscribe should take a callback which needs to fire after emit is called.
  subscribe should be callable many times, and when emit is called every registered callback needs to fire.
  subscribe should return a function which, when called, will deregister the callback originally passed in.

let a = new Watchable();

let firstUnsub = a.subscribe(data => console.log("1:", data));
let secondUnsub = a.subscribe(data => console.log("2:", data));

a.emit(5) // 1: 5, 2: 5

firstUnsub();

a.emit(10) // 2: 10

secondUnsub();

a.emit(15) // ... crickets
*/

class Watchable {
  constructor() {
    this.counter = 0;
    this.registered = {};
  }

  // SUBSCRIBE method
  // - takes a callback function that fires when emit is called
  // - callable many times
  // - returns a function which deregisters the callback originally passed in

  subscribe(callbackFunc) {
    let key = this.counter;
    this.registered[key] = callbackFunc;
    this.counter++;
    let returnFunc = function() {
      delete this.registered[key];
    };
    return returnFunc.bind(this);
  }

  // EMIT method
  // - every registered callback needs to fire

  emit(data) {
    for (const key in this.registered) {
      this.registered[key](data);
    }
  }
}

let a = new Watchable();

let firstUnsub = a.subscribe((data) => console.log('1:', data));
let secondUnsub = a.subscribe((data) => console.log('2:', data));

a.emit(5); // 1: 5, 2: 5

firstUnsub();

a.emit(10); // 2: 10

secondUnsub();

a.emit(15);
