const assert = require('assert');
const PaintCan = require('../paintCan.js');
const Decorator = require('../decorator.js');
const Room = require('../room.js');

describe('Decorator', function(){
    let decorator;

    this.beforeEach(function(){
        decorator = new Decorator(5);
    });

    it('should have a paint stock', function(){
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 5);
    });
})
