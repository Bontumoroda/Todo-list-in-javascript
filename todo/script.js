window.addEventListener('load',()=>{
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');

const listElement=document.querySelector('#tasks')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputvalue = input.value
        if(inputvalue==''){
            alert('god')
        }
        else{
            const taskEement = document.createElement('div')
            taskEement.classList.add('task')
            console.log('sucsesd');
            const taskContentElement = document.createElement('div')
            taskContentElement.classList.add('content')
            taskEement.appendChild(taskContentElement)
            const taskInputElement = document.createElement('input')
            taskInputElement.classList.add('text')
            taskInputElement.type='text'
            taskInputElement.value=inputvalue
            taskInputElement.setAttribute('readonly','readonly')
            taskContentElement.appendChild(taskInputElement)
            const taskActionElement=document.createElement('div')
            taskActionElement.classList.add('actions')
            const taskEditElement= document.createElement('button')
            taskEditElement.classList.add('edit')
            taskEditElement.innerHTML='Edit'
            const taskDeletElement= document.createElement('button')
            taskDeletElement.classList.add('delete')
            taskDeletElement.innerHTML='Delete'
            taskActionElement.appendChild(taskEditElement)
            taskActionElement.appendChild(taskDeletElement)
            taskEement.appendChild(taskActionElement)

            listElement.appendChild(taskEement)
            input.value='';


            taskEditElement.addEventListener('click',()=>{
                if(taskEditElement.innerText.toLowerCase() =='edit'){
                    taskInputElement.removeAttribute('readonly');
                    taskInputElement.focus()
                    taskEditElement.innerText='save'
                }else{
                    taskInputElement.setAttribute('readonly','readonly')
                    taskEditElement.innerText='Edit'
    
                    console.log('save')
                }
               
             
            })
            taskDeletElement.addEventListener('click',()=>{
                listElement.removeChild(taskEement)               
             
            })

        }
  
    })
})

