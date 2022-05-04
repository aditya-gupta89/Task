import React from 'react'
import TaskItem from './TaskItem'
const TaskList = (props) => {
    let n=props.items.length;
  return (
       <ol start="1">
      {props.items.map((goal,index) => (
        <TaskItem
          key={goal.id}
          index={index+1}
          id={goal.id}
          title={goal.title}
          flag={goal.completed}
          onDelete={props.onDeleteItem}
        > 
        </TaskItem>
       
      ))}
    </ol>
    
  )
}

export default TaskList
