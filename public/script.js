const form= document.querySelector('form')
const resultdiv=document.getElementById('result')
form.addEventListener('submit',async (e)=>{
e.preventDefault();
const num1= document.getElementById('Number1').value;
console.log(num1);
const num2= document.getElementById('Number2').value;

const operator=document.getElementById('operator').value;
console.log(operator);
const res=await fetch('/calculate',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `num1=${num1}&num2=${num2}&operator=${operator}`,
  })
  const data=await res.text();
  console.log(data);
  resultdiv.textContent=data;
})