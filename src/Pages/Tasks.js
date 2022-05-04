import axios from 'axios';
import React from 'react'
import TaskList from '../components/TaskFile/TaskList';
import TaskInput from '../components/TaskFile/TaskInput';
import { useState,useEffect } from 'react'
const Tasks = () => {
    const [data,setData]=useState([]);
    const [hide,setHide]=useState(false);
    useEffect(() => {
        const fetchTask = async () => {
          const response = await axios.get(
            "http://jsonplaceholder.typicode.com/todos/"   
          )
           .catch(err=>{
                console.log("Err :",err);
          })
          setData(response.data.filter((user)=>{
              return user.id<=4;
          }));
        };
        fetchTask();
      },[]);
      const deleteItemHandler = goalId => {
        setData(prevGoals => {
          const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
          return updatedGoals;
        });
      };
      const addGoalHandler = enteredText => {
        
        setData(prevGoals => {
          const updatedGoals = [...prevGoals];
          if(enteredText.trim().length===0)
          return updatedGoals;
          updatedGoals.unshift({ title: enteredText, id: Math.random().toString(),completed:true });
          return updatedGoals;
        });
      };
      const addreverseHandler=()=>{
        setHide(!hide);
      }
      // console.log(data);
  return (
    <div>
      
      <section>
        <TaskList items={data} onDeleteItem={deleteItemHandler}/>
        {!hide&&<button className="button" onClick={addreverseHandler}>Add Tasks</button>}
        {hide&&<TaskInput onCancel={addreverseHandler} onAddGoal={addGoalHandler}/>}
      </section>
    </div>
  )
}

export default Tasks
