const assert = require('assert');
const Room = require('../room.js');
const PaintCan = require('../paintCan.js');
const Decorator = require('../decorator.js');

describe ('PaintCan', function(){
    let paintCan;

    this.beforeEach(function(){
        paintCan = new PaintCan(10);
    });

    it('should have litres of paint', function(){
        const actual = paintCan.litresOfPaint;
        assert.strictEqual(actual,10);
    })
});