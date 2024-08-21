import React, { useState } from 'react'
import todos from './data';

function Index() {
    const [task , setTask] = useState(todos);
    const [newTask , setNewTask] = useState("");
    const [edit , setEdit] = useState(false);
    const [editTask , setEditTask] = useState(false);



    const handleInput = (e) =>{
        setNewTask(e.target.value)
    }
    const addTask =() =>{
        if(newTask.trim() !== ""){
            setTask([...task , {name: newTask}])
            setNewTask("")
        }
    }

    const deleteTask = (ind) =>{
        
        const updatedTask = [...task];
        updatedTask.splice(ind, 1);
        setTask(updatedTask)
    }
    const updateTask = (e) =>{

        setTask(
            task.map((t)=>
                t === editTask ? {...t, name: newTask} : t
            )
        )


        setEdit(false)
        setNewTask("")
    }

    const handleEdit= (task) =>{
        setEdit(true)
        setEditTask(task)
        setNewTask(task.name)
    }
  return (
    <div className='todo-main'>
        <div className='todo-app-heading'>
            <h1>Todo App</h1>
        </div>
        <div className='todo-form'>
            <input 
                type='text'
                placeholder="Enter Task here"
                value={newTask}
                onChange={handleInput}
            />

            {edit ? 
            (<button onClick={updateTask} className='update-btn'>Update task</button>) :
            (<button onClick={addTask} className='add-btn'>Add task</button>)  
            }
        </div>
        {task.map((task, index) => (
        <div key= {task.index} className='todo-list'>
            <ul>
                <li>{task.name}</li> <button onClick={()=> deleteTask(index)} className='dlt-btn'>Delete Task</button><button className='edit-btn' onClick={() => handleEdit(task)}>Edit</button>
            </ul>
        </div>
        ))}
    </div>
  )
}

export default Index