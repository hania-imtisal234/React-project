import './Task1.css'
import { useState } from 'react';

const Task1= () =>
{
    const [input,setinput]= useState(null);
    const [name,setname]= useState(input)
    const setInputName = (event) =>
    {
      setinput(event.target.value);
    }

    const handleClick=()=>
    {
      setname(input);
    }
    return(
       
        <div className='task1'> 
          <input type="text" placeholder = "Enter name: " value={name} onChange={setInputName}></input>
             <button onClick={handleClick}>+</button>
             <h4>{name}</h4>
        </div>
    );
}

export default Task1;