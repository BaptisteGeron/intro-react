const AddTask = () => {
    return (
        <form>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" placeholder="Set date and hour"/>
            </div>
            <div className="form-control">
                <label>Reminder</label>
                <input type="checkbox" />
            </div>
            <input type="submit" value="Save task" />
        </form>
    )
}

export default AddTask
