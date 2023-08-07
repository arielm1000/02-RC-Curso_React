import React, { useState } from 'react'
import { TaskItem } from './TaskItem'
import { TaskAdd } from './TaskAdd'

export const Task = ({ taskData }) => {


    const [addDataCard, setAddDataCard] = useState(taskData)

    const onClickAdd = (newTask) => {

        const newTaskObj = {
            id: addDataCard[addDataCard.length - 1].id + 1,
            taskTitle:newTask
        }

        setAddDataCard([
            ...addDataCard,
            newTaskObj
        ]);

    }
    const deleteTask = (id) =>{
        console.log(id);
        const newDeleteTask = addDataCard.filter((item) => item.id != id);
        setAddDataCard(newDeleteTask);
    }



  return (
    <div className="container py-5" id="featured-3">
        <h2 className="pb-2 border-bottom text-white">MIS TAREAS</h2>
        <div className="row py-5">
            { addDataCard.map( (data) => (
            <TaskItem 
                key = {data.id}
                dataTaskItem = {data}
                deleteTask = {(data) =>deleteTask(data)}
                />
            ))}
        </div>
        <TaskAdd 
            onClickAdd={(newdata) =>onClickAdd(newdata)}
        />
    </div>
  )
}
