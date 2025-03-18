const { test, expect } = require("@playwright/test");

/*//skip
test.skip('test1',async({page})=>{

    console.log('This is from Test1...')
})

test('test2',async({page})=>{

    console.log('This is from Test2...')
})*/

/*//only
test.skip('test3',async({page})=>{

    console.log('This is from Test3...')
})

test('test4',async({page})=>{

    console.log('This is from Test4...')
})
    */

/*
//skip based on the condition
test('test5',async({page, browserName})=>{
    console.log('This is from Test5...')
    if(browserName=='firefox')
    {
        test.skip()
    }
})
    */

/*
//fixme
test.fixme('test6',async({page})=>{
    console.log('This is from Test6...')
})
*/

/*//fail
test.fail('test7',async({page})=>{
    console.log('This is from Test7...')
    expect(1).toBe(2); //actual
})

test('test8',async({page,browserName})=>{
    console.log('This is from Test8...')
    if(browserName=='chromium')
    {
        test.fail();
    }
    expect(1).toBe(2); //actual
})
    */

//slow()
test('test8',async({page,browserName})=>{
    test.slow()
    await page.goto('https://www.demoblaze.com/');

})

