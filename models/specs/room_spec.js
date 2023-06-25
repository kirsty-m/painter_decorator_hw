const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paintCan.js');
const Room = require('../room.js')

describe('Room', function() {
    let room;

    beforeEach(function(){
        room = new Room(25, false);
    });

    it('should have an area',function() {
        const actual = room.area;
        assert.strictEqual(actual, 25);
    });

    it('should have a paint status', function(){
        const actual = room.paintStatus;
        assert.strictEqual(actual, false);
    });
});