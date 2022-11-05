const express = require('express');
const app = express();

const PORT = 3003;

app.get('/calc/:num1/:num2', (request, response) => {
    const sum = Number(request.params.num1) + Number(request.params.num2)
    response.send(`The sum is ${sum}`)
    
})

app.get('/calcquery/:num1/:num2', (request, response) => {
    const sum = Number(request.params.num1) + Number(request.params.num2)
    if(request.query.operation){
        if(request.query.operation === "add"){
            const sum = Number(request.params.num1) + Number(request.params.num2)
            response.send(`The sum is ${sum}`)
        }
        if(request.query.operation === "subtract"){
            const subtract = Number(request.params.num1) - Number(request.params.num2)
            response.send(`The number is ${subtract}`)
        }
        if(request.query.operation === "multiply"){
            const multiply = Number(request.params.num1) * Number(request.params.num2)
            response.send(`The number is ${multiply}`)
        }
        if(request.query.operation === "divide"){
           const divide = Number(request.params.num1) / Number(request.params.num2)
           response.send(`The number is ${divide}`) 
        }
        if(request.query.operation === "exponents"){
            const exponent = Number(request.params.num1) ** Number(request.params.num2)
            response.send(`The number is ${exponent}`)
        } else {
            response.send(`No Operation`)
        }
    }
})

// ENV
// app.listen(process.env.PORT, () => {})

app.listen(PORT, () => {
    console.log('Express is listening on port: ', PORT);
})

