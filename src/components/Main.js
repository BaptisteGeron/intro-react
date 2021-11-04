import PropTypes from 'prop-types'
import Button from './Button'
import Task from './Task'
import { useState } from "react"


const Main = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: "first task",
                date: "feb 5th at 2:30pm",
                reminder: true,
            },
            {
                id: 2,
                text: "second task",
                date: "feb 6th at 2:30pm",
                reminder: true,
        
            },
            {
                id: 3,
                text: "third task",
                date: "feb 7th at 2:30pm",
                reminder: true,
        
            }
        ])

        //Delete Task
        const deleteTask = (id) => {
            setTasks(tasks.filter((task) => task.id !== id))
        }

        //toggle reminder
        const toggleReminder = (id) => {
            console.log("hello", id)
        }

    
    return (
        <main style={mainStyle}>
            <Button/>
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