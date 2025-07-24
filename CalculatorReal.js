function Solve(val){
   var v = document.getElementById('calculation');
   v.value += val;
 }

function Result(){
   var num1 = document.getElementById('calculation').value;

   try{
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('calculation').value = num2;
   }

   catch{
      document.getElementById('calculation').value = 'Error';
   }
 }

function Clear(){
   var inp = document.getElementById('calculation');
   inp.value = '';
}

document.addEventListener('keydown', function (event){
   const key = event.key;
   const validKeys = '0123456789+-*/.%';

   if (validKeys.includes(key)){
      Solve(key === '*' ? 'x' : key);
   } 

   else if (key === 'Enter'){
      Result();
   } 
    
   else if (key.toLowerCase() === 'c'){
      Clear();
   }
});