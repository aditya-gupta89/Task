import React from 'react'
import classes from './Information.module.css'
const Information = (props) => {
    
  return (
    <div className={classes.text}>
      {props.content}
    </div>
  )
}

export default Information
