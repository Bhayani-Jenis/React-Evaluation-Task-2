import React from 'react'

const TaskList = ({task}) => {
  return (
    <div className='TaskCard'>
      <h6>{task.id}</h6>
      <h3>{task.title}</h3>
    </div>
  )
}

export default TaskList
