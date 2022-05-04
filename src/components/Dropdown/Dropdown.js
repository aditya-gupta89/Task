import React from "react";
import { Select } from "antd";
import classes from "./Dropdown.module.css";
// const { Option } = Select;
import { useState,useRef } from "react";
const Dropdown = (props) => {
  
  
  const  optionHandler=(e)=>{
    props.onChangeFilter(e.target.value);
  }
  
  return (
   <div className={classes.m}>
     <form>
       {/* <label>Select Library</label> */}
       <select onChange={optionHandler}>
         <option value="React">React</option>
         <option value="Angular">Angular</option>
         <option value="Vue">Vue</option>
       </select>
     </form>
   </div>
  );
};

export default Dropdown;
