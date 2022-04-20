const form=document.getElementById("form");
const textInput=document.getElementById("textInput");
const msg=document.getElementById("msg");

form.addEventListener('submit',(e)=>{
   e.preventDefault();
   formValidation();
});

let formValidation=()=>{
    if(textInput.value===""){
       console.log('failure');
       msg.innerHTML="Task cannot be blank";
       msg.style.color="#FF0000";
    }else{
       console.log('success');
       msg.innerHTML="";
    }
}