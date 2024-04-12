const form=document.querySelector('form');
const card_1=document.querySelector('.card');
const card_2=document.querySelector('.card-2');
const txt=document.getElementById('email');
const out1=document.getElementById('out1');
form.addEventListener('submit', (e) =>{
   e.preventDefault();
   card_1.classList.add("hide");
   card_2.classList.remove("hide");
   out1.innerHTML=txt.value;
});

document.getElementById('dismiss').addEventListener(
   "click", function(){ 
   card_1.classList.remove("hide");
   card_2.classList.add("hide");
   document.getElementById('email').value='';
});
