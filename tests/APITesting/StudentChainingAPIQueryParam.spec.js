import {test,expect} from '@playwright/test';
import {faker} from '@faker-js/faker';
const { DateTime } = require('luxon');

let user_id;
test('create post API request using dynamic request body',async({request})=>{


    const response=await request.post('http://localhost:3000/students',
        {
            data:{
                "name":"chowdary",
                "age":32,
                "grade":'A'
                }
        });

        expect(response.status()).toBe(201);
        console.log(await response.json())
        const responseBody=await response.json();

        console.log("Generated id is: ",responseBody.id);
        user_id=responseBody.id;


        //Get API Request
        const getApiResponse=await request.get('http://localhost:3000/students/',{
            //const getApiResoneBody =await getApiResponse.json();

            params:{
                "name":"chowdary"
            }
        })

        expect(getApiResponse.status()).toBe(200);
        console.log('getResponse is ',await getApiResponse.json());


    //putRequest
    const putResponse=await request.put('http://localhost:3000/students/'+user_id,{

        data:{
            "name":"chowdary",
                "age":40,
                "grade":'A'
            }
    })    

    expect(putResponse.status()).toBe(200);
    console.log('putResponse is: ',await putResponse.json());

//Delete Request
    const deleteResponse=await request.delete('http://localhost:3000/students/'+user_id)
    

    expect(deleteResponse.status()).toBe(200);
    console.log('deleteResponse is :',await deleteResponse.json());

});