import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import RecentLogins from './RecentLogins';
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Task1 from './Task1';
import Task2 from './Task2';

function App() {

  const[list,setlist]= useState([]);
  let addlist = (input)=>
    {
     setlist([...list,input]);
    }

    const deleteListItem = (key)=>
    {
      let newlist = [...list];
      newlist.splice(key,1);
      setlist ([...newlist]);
    }

    const[name,setname] =useState('');
    
  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
          <div class="component1">
            <RecentLogins/>
          </div>

          <div class="component2">
            <Form />
          </div>
        </div>
        <div class="label1">
          <p><temp>Create a Page</temp> for a celebrity,brand or business.</p>
        </div>
       
        <div className='tasks'>
          <div className='Input-state-props'> 
             <Task1/>
          </div>

          <div className='Conditional-Rendering'>
            <Task2 />
          </div>
        </div>
        

 
        <div className='TodoListComponent'>
         <div className="TodoListInput">
          <TodoInput addlist={addlist}/>
          <h2 className='TodoList-label'>To Do List</h2>
          <hr className='line'></hr>
          {list.map((listItem,i)=>{
              return(<TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>);
            })}
          
         </div>
          
      </div>

      </header>
      
    </div>
  );
}

export default App;
