import React, { useState } from 'react'
import todos from './data';

function Index() {
    const [task , setTask] = useState(todos);
    const [newTask , setNewTask] = useState("");
    const [edit , setEdit] = useState(false);



    const handleInput = (e) =>{
        setNewTask(e.target.value)
    }

    const addTask =() =>{
        if(newTask.trim() !== ""){
            setTask([...task , newTask])
        }
    }

    const deleteTask = (ind) =>{
        
        const updatedTask = [...task];
        updatedTask.splice(ind, 1);
        setTask(updatedTask)
    }
    const updateTask = () =>{
        setEdit(false)

    }

    const handleEdit= () =>{
        setEdit(true)
    }
    const handleEditChange= () =>{

    }
  return (
    <div className='todo-main'>
        <div className='todo-app-heading'>
            <h1>Todo App</h1>
        </div>
        <div className='todo-form'>
            {edit ? 
            (<input 
                type='text'
                placeholder='Edit task here...'
                value={newTask}
                onChange={handleEditChange}
            />)
            :
            (<input 
                type='text'
                placeholder='Enter task here...'
                value={newTask}
                onChange={handleInput}
            />)

             }

            {edit ? 
            (<button onClick={updateTask}>Update task</button>) :
            (<button onClick={addTask}>Add task</button>)  
            }
        </div>
        {task.map((task, index) => (
        <div key= {index} className='todo-list'>
            <ul>
                <li>{task.name}</li> <button onClick={()=> deleteTask(index)}>Delete Task</button><button onClick={handleEdit}>Edit</button>
            </ul>
        </div>
        ))}
    </div>
  )
}

export default Index