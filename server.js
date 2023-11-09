const express=require('express')
const path=require('path')
const app =express()

app.use(express.urlencoded({ extended: true }));//khong duoc thieu cai nay !!!!
// app.use(express.static('views'));
 app.use('/',express.static('public'));

app.post('/calculate', (req,res)=>
{
    const num1= parseInt(req.body.num1);
    console.log(req.body.num1);
    const num2= parseInt(req.body.num2);
    console.log(req.body.num2);
    const operator=req.body.operator;
    console.log(req.body);
    let data=0;
    switch(operator)
    {
        case "+" : data= num1+num2;
        break;
        case '-':data= num1-num2;
        break;
        case '*':data= num1*num2;
        break;
        case ':':data= num1/num2;
    }
    res.send(`Result: ${data}`);
    console.log(data);
})

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.listen(3000,(req,res) => {
    console.log('server is listening in 3000');
})