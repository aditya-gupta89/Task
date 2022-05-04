import React from 'react'
import classes from './TaskItem.module.css'
const TaskItem = (props) => {
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };
  let content=props.title
  if(!content)
  return;
  if(content.length>18){
  content=content.slice(0,16);
  content+="...";
  }
  if(content.length<18){
  content=content.padEnd(20,"...");
  
  }
  
  console.log(content.length);
  return (
    <li className={classes.item} >
      <div className={classes.item1}>{props.index}</div>
      <div >{content}</div>
      <div className={classes.item2}>{props.flag==true?"True":"False"}</div>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  )
}

export default TaskItem
