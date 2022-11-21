const form=document.getElementById("form");
const textInput=document.getElementById("textInput");
const msg=document.getElementById("msg");
const dateInput=document.getElementById("dateInput");
const textarea=document.getElementById("textarea");
const tasks=document.getElementById("tasks");
const add=document.getElementById("add");


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
       acceptData();
       add.setAttribute("data-bs-dismiss","modal");
       add.click();
       (() => {
         add.setAttribute("data-bs-dismiss", "");
       })();
    }
};

let data={};
let acceptData=()=>{
   data["text"]=textInput.value;
   data["date"]=dateInput.value;
   data["description"]=textarea.value;

   createTasks();
};

let createTasks=()=>{
  tasks.innerHTML+=`
  <div>
  <span class="fw-bold">${data.text}</span> <br>
  <span class="small text-secondary">${data.date}</span>
  <p>${data.description}</p>

<span class="options">
  <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form"  class="fa-solid fa-pen-to-square"></i>
  <i onClick ="deleteTask(this)"  class="fa-solid fa-trash-can"></i>
</span>   
</div>

`
resetForm();
};

let deleteTask = (e) => {
   e.parentElement.parentElement.remove(); 
   
 };
 
let editTask = (e) => {
   let selectedTask = e.parentElement.parentElement;
 
   textInput.value = selectedTask.children[0].innerHTML;
   dateInput.value = selectedTask.children[1].innerHTML;
   textarea.value = selectedTask.children[2].innerHTML;
 
   selectedTask.remove();
 };

let resetForm=()=>{
   textInput.value="";
   dateInput.value="";
   textarea.value="";
};