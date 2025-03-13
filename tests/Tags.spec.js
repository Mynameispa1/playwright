const {test, expect } = require("@playwright/test");

test('Test1@sanity',async({page})=>{

    console.log('This is from Test1...')
});

test('Test2@sanity',async({page})=>{

    console.log('This is from Test2...')
});

test('Test3@reg',async({page})=>{

    console.log('This is from Test3...')
});

test('Test4@reg',async({page})=>{

    console.log('This is from Test4...')
});

test('Test5@sanity@reg',async({page})=>{

    console.log('This is from Test5...')
});