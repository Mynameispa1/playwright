import {test,expect} from '@playwright/test'

const json=JSON.parse(JSON.stringify(require('../../test-data/BookAPI/Accesstoken.json')));

test('Accesstoken for BookAPI',async({request})=>{

    const postAccesstoken=await request.post('https://simple-books-api.glitch.me/api-clients/',{

        data:json
    })

    const postAccesstokenResBody=await postAccesstoken.json();

    console.log(postAccesstokenResBody);

});