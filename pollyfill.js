/**
 * A polyfill is a piece of code that implements the features that you expect the browser to support natively.
* It’s a service that takes a request for a set of browser features and only delivers the polyfills for the requesting browser requires.
 */

// Polyfill for forEach():
Array.prototype.myforEach((callback) => {
    for (let i = 0; i < callback.length; i++) {
        callback(this[i], i, this);
    }
});

const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arrData.myForEach((element) => {
    console.log(element)
})

// Polyfill for map():
Array.prototype.myMap((callback) => {
    var arr = [];
    for (let i = 0; i < callback.length; i++) {
        arrData.push(callback(this[i], i, this));
    }
    return arr;
})

// Polyfille for filter():
Array.prototype.myFilter((callback) => {
    var arr = [];
    for (var i = 0; i < callback.length; i++) {
        if (callback.call(this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
})