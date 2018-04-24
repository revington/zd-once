'use strict';
const assert = require('assert');
const isFunction = require('../lib/is-function');
describe('isFunction(fn)', function () {
    const expectedMessage = 'fn is mandatory and should be a function';
    it('should throw an execption if "fn" is not a function', function () {
        try {
            isFunction();
        } catch (e) {
            assert.deepEqual(e.message, expectedMessage);
            return;
        }
        try {
            isFunction(1);
        } catch (e) {
            assert.deepEqual(e.message, expectedMessage);
            return;
        }
        assert.fail();
    });
    it('should not throw an exception when "fn" is a function', function () {
        var fn = function () {};
        isFunction(fn);
    });
});
