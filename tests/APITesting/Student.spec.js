import {test,expect} from '@playwright/test'

test('Get-Request',async({request})=>{

    const response=await request.get('http://localhost:3000/students')

    expect(response.status()).toBe(200);

});

test('Get-Single-Request',async({request})=>{

    const response=await request.get('http://localhost:3000/students/1');

    expect(response.status()).toBe(200);
})

//one way driectly passing the data
test('Post-Request',async({request})=>{

    const response=await request.post('http://localhost:3000/students',
                                    {
                                        data: {
                                            "name": "Pavan",
                                            "age": 20,
                                            "grade": "A"
                                          }
                                    });

    expect(response.status()).toBe(201);

    let res=await response.json();
    console.log('Generated Id is: ',res.id);
                                    
    
});

//Post Request passing through the json file

const requestBody=require('../../test-data/PostReq-Student.json')
test('Post-Request-passing jsonfile',async({request})=>{


    const response=await request.post('http://localhost:3000/students',
                                    {
                                        data: requestBody
                                    });

    expect(response.status()).toBe(201);

    let res=await response.json();
    console.log('Generated Id is: ',res.id);
                                    
    
});

//Post Request passing Dynamic Json Data
//First inatll the faker plugin --- for dynamic data like firstName,lastName
//Install the luxon plugin--- for custom dates

import {faker} from '@faker-js/faker';
const { DateTime } = require('luxon');

test.only('Post-Request-Dynamic jsonfile',async({request})=>{

    const name=faker.person.firstName();
    const age=faker.number.int({ min: 10, max: 25})
    const grade=faker.helpers.arrayElement(['A','B','C','D']);


    const response=await request.post('http://localhost:3000/students',
                                    {
                                        data: {
                                            "name": name,
                                            "age": age,
                                            "grade": grade
                                          }
                                    });

    expect(response.status()).toBe(201);

    let res=await response.json();
    console.log(res);
    console.log('Generated Id is: ',res.id);
    expect(res).toHaveProperty('name',name);
                                    
    
});