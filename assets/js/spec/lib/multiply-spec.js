"use strict";

var mulitply_lib = require('../../lib/multiply');

describe("multiply", function(){
    it("returns the correct multiplied value", function(){
        var product = mulitply_lib.multiply(2,3);
        expect(product).toBe(6);
    })
});