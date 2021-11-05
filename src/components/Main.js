import PropTypes from 'prop-types'
import Button from './Button'
import Task from './Task'
import { useState } from "react"
import AddTask from './AddTask'
import { useEffect } from 'react'

const Main = () => {
    const [showAddTask, setShowAddTask]= useState(false)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const fetchTasks = async () => {
           const resp = await fetch('http://localhost:5000/tasks')
           const data = await resp.json()
           console.log(data)
        }
        fetchTasks()

    },[])

        //Delete Task
        const deleteTask = (id) => {
            setTasks(tasks.filter((task) => task.id !== id))
        }

        //toggle reminder
        const toggleReminder = (id) => {
            setTasks(tasks.map((task)=> task.id? {...task, reminder: !task.reminder}: task))
        }

        //Add task
        const addTask = (task) => {
            const id = Math.floor(Math.random()*10000) +1
            const newTask = {id, ...task}
            setTasks([...tasks, newTask])
        }
    
    return (
        <main style={mainStyle}>
            <Button onAdd={() =>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length >0 ?<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No tasks added'}
            
        </main>
    )
}


Main.propTypes = {
    title : PropTypes.string
}

const mainStyle = {
    backgroundColor: "red",
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

export default Main