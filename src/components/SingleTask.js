
import { FaTimes } from 'react-icons/fa'

const SingleTask = ({ task, onDelete, onToggle }) => {
    return (
        <div onDoubleClick={() => {onToggle(task.id)}}>
         <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)}/></h3>
         <p>{task.day}</p>
        </div>
    )
}

export default SingleTask
