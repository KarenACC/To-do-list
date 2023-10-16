const list = document.getElementById('list');
const input = document.getElementById('input');
const btnEnter= document.getElementById('enter');
const form = document.getElementById('form');
const checkerBtn =document.getElementById('.checker');
const completedList = document.getElementById('completed-list');

// Función que agrega una tarea 

function addTask (task) {
    const formattedTask = task.charAt(0).toUpperCase() + task.slice(1);
    const element = `
                    <li class="outer-shadow" id="'${formattedTask}'">
                        <button class="checker" id="checker" onclick="moveTask('${formattedTask}')"></button>
                        <p>${formattedTask}</p>
                    </li>
                     `
    list.insertAdjacentHTML("beforeend", element)
}

btnEnter.addEventListener('click', ()=>{
    const task = input.value 
    if(task) {
        addTask(task)
    }

    input.value="";
});

input.addEventListener('keydown', (e)=>{
    if (e.key=='Enter'){
        const task= input.value;
        if(task) {
            addTask(task);
        }
        input.value="";
    }
});

// Función que marca una tarea como completada y la mueve a la sección "Completed"

function moveTask(element){
    const elementToDelete = document.getElementById(`'${element}'`);

if (elementToDelete) {
    elementToDelete.remove();


const completed = `
                    <li class="inner-shadow completed-task" id="'${element}'">
                        <button class="checked")"></button>
                        <p>${element}</p>
                    </li>
                     `
        completedList.insertAdjacentHTML("beforeend", completed)
    }
};