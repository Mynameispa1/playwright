import {test,expect} from '@playwright/test';
import {faker} from '@faker-js/faker';
const { DateTime } = require('luxon');

let user_id;
test('create post API request using dynamic request body',async({request})=>{

    const name=faker.person.firstName();
    const age=faker.number.int({ min: 10, max: 25});
    const grade=faker.helpers.arrayElement(['A','B','C','D']);

    const response=await request.post('http://localhost:3000/students',
        {
            data:{
                "name":name,
                "age":age,
                "grade":grade
                }
        });

        expect(response.status()).toBe(201);
        console.log(await response.json())
        const responseBody=await response.json();

        console.log("Generated id is: ",responseBody.id);
        user_id=responseBody.id;
});

test('Get request',async({request})=>{

    const response=await request.get('http://localhost:3000/students/'+user_id)

    console.log(response.json())
    expect(response.status()).toBe(200);
});

test('Update Request',async({request})=>{

    const name=faker.person.firstName();
    const age=faker.number.int({ min: 10, max: 25});
    const grade=faker.helpers.arrayElement(['A','B','C','D']);

    const response=await request.put('http://localhost:3000/students/'+user_id,
        {
            data:{
                "name":name,
                "age":age,
                "grade":grade
                }
        });

        expect(response.status()).toBe(200);
        console.log(await response.json())
});

test('Delete Request',async({request})=>{


    const response=await request.delete('http://localhost:3000/students/'+user_id);

    expect(response.status()).toBe(200);

})