'use strict';

function isFunction(fn) {
    if (typeof fn !== 'function') {
        throw new Error('fn is mandatory and should be a function');
    }
}
exports = module.exports = isFunction;
