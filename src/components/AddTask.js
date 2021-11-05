import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('No task text')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form>
            <div className="form-control" onSubmit={onSubmit}>
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e => setText(e.target.value))}/>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" placeholder="Set date and hour" value={day} onChange={(e => setDay(e.target.value))}/>
            </div>
            <div className="form-control">
                <label>Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e => setReminder(e.currentTarget.checked))} checked={reminder}/>
            </div>
            <input type="submit" value="Save task" />
        </form>
    )
}

export default AddTask
