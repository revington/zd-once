'use strict';
const isFunction = require('./lib/is-function');

function once(fn) {
    isFunction(fn);
    return function () {
        var ret;
        if (!fn) {
            return;
        }
        ret = fn.apply(null, arguments);
        fn = null;
        return ret;
    };
}

function onceStrict(fn) {
    isFunction(fn);
    const err = 'Function ' + (fn.name || '<anonymous>') + ' can only be called once';
    return function () {
        var ret;
        if (!fn) {
            throw new Error(err);
        }
        ret = fn.apply(null, arguments);
        fn = null;
        return ret;
    };
}
exports = module.exports = {
    once,
    onceStrict
};
