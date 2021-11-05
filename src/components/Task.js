import SingleTask from "./SingleTask"

const Task = ({ tasks, onDelete, onToggle }) => {
   
    return (
        <>
           {tasks.map((task)=>(
           <SingleTask key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))} 
        </>
    )
}

Task.defaultProps = {
    color: 'green',
    display: 'flex',
    flexDirection: 'column'
}

export default Task
