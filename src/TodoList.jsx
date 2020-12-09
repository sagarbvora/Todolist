import React, { useState } from 'react';
import ToDoList1 from './ToDoList1';
import AddIcon from '@material-ui/icons/Add';
import Countdown from 'react-countdown';

const TodoList = ()=>{
    const [inputval,setstate] = useState("");
    const [inputarr,setArr] = useState([]); //array,object stored...
    const InputChange = (event)=>{
        setstate(event.target.value);
    }

    const AddListItem=()=>{
       setArr((Oldvalue)=>{
           return [...Oldvalue,inputval];
       });
       setstate("");
    }

    const deleteItem = (id) =>{
       setArr((Oldvalue)=>{
           return Oldvalue.filter((arrElem,index)=>{
                return index !== id;
           });
       })
    }
    
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <Countdown date={Date.now() + 5000}/>

                    <br/>
                    <h1>TodoList</h1>
                    <br/>
                    <input type="text" value={inputval} placeholder="Add items.." name="item" id="ToDoInput"  onChange={InputChange}/>
                    <button id="ToDoButton" onClick={AddListItem}>
                        <AddIcon/>
                    </button>

                    <ol>
                      { inputarr.map((data,index)=>{
                           return <ToDoList1 
                           key={index} 
                           id={index} 
                           text={data}
                           onSelect={deleteItem}
                           />;
                       })
                      }
                    </ol>
                </div>
            </div>
        </>
    );
}
export default TodoList;