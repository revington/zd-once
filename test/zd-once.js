'use strict';
const assert = require('assert');
const {
    once,
    onceStrict
} = require('..');

function fn() {
    return 1;
}
describe('#once(fn)', function () {
    var firstResult, secondResult;
    before(function () {
        var onceFN;
        onceFN = once(fn);
        firstResult = onceFN();
        secondResult = onceFN();
    });
    describe('first time the function is called', function () {
        it('"onced" function should get called', function () {
            assert.deepEqual(firstResult, 1);
        });
    });
    describe('second time the function is called', function () {
        it('"onced" function should NOT get called', function () {
            assert(!secondResult);
        });
    });
});
describe('#onceStrict(fn)', function () {
    describe('first time the function is called', function () {
        it('"onced" function should get called', function () {
            var onceFN = onceStrict(fn);
            assert.deepEqual(onceFN(), 1);
        });
    });
    describe('second time the function is called', function () {
        it('"onced" function should throw an error', function () {
            var onceFN = onceStrict(fn);
            onceFN();
            try {
                onceFN();
            } catch (e) {
                assert.deepEqual(e.message, 'Function fn can only be called once');
                return;
            }
            assert.fail();
        });
    });
    describe('When the function is anonymous', function () {
        it('error should say "anonymous" too', function () {
            var onceFN = onceStrict(function () {
                return 1;
            });
            onceFN();
            try {
                onceFN();
            } catch (e) {
                assert.deepEqual(e.message, 'Function <anonymous> can only be called once');
                return;
            }
            assert.fail();
        });
    });
});
