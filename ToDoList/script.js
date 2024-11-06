const inputTask=document.querySelector(".input-task");
const btnAdd=document.querySelector(".btn-add");
const CompletedList=document.querySelector(".task-list")

let myList=[]
//Função que pega o valor no input
function addTasks(){
   myList.push({task: inputTask.value,
                completed:false})
    console.log(myList)
    showTasks()
    inputTask.value=""

}

function showTasks(){

    let newLi=""
    myList.forEach((item , position) => {
        newLi=newLi+` <li  class="task ${item.completed && "done"}">
                <img src="img/feito.png" alt="feito" onclick="taskCompleted(${position})">
                    <p>${item.task}</p> 
                <img src="img/apagar.png" alt="apagar" onclick="deleteItem(${position})"></li>`
        
    });
    CompletedList.innerHTML=newLi
    localStorage.setItem('list',JSON.stringify(myList))
}
function taskCompleted(index){
    myList[index].completed= !myList[index].completed
    showTasks()
}

function deleteItem(index){
    myList.splice(index,1)
    showTasks()
 }
function reloadTasks(){
    const LocalStorageTasks=localStorage.getItem("list")
    if(LocalStorageTasks){
    myList=JSON.parse(LocalStorageTasks)
    }
    showTasks()
}
reloadTasks()
//Evento de click

btnAdd.addEventListener("click",addTasks)
 