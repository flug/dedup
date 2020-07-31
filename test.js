'use strict'; 

require('mocha'); 

const assert = require('assert'); 
const dedup = require('./'); 


describe('dedup', ()=>{
    it('it should return an array with a non-duplication of values', ()=>{

        const array = [1, 2 , 1 , 3 , 1 , 5]; 

        assert(dedup(array), [1, 2 , 3, 5]); 

    })
})
