import React, { useState } from 'react'
import TaskList from '../Components/TaskList'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  
  
  const handleAdd = () => {
    if(title.trim())return 
    setTasks(prev => [...prev, { id:Date.now(), title: title }])
    setTitle("")
  }

  return (
    <div>
      <div className="addTask">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <div className="taskList">
        {
          tasks.map((x)=>(<TaskList task={x} key={x.id}/>))
        }
      </div>
    </div>
  )
}

export default Dashboard
