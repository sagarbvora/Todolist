import React, { useState } from 'react';
import Eventbase from './Eventbase';
import Slotm from './Slotm'
import FormData from './FormData';
// import TodoList from './TodoList';


const AppData = () => {
     {/* react Hook- time------------ */}
    let date = new Date().toLocaleTimeString();
    // let state = useState();
    let [count,stateInitial] = useState(date);
    const IncTime = () => {
        date = new Date().toLocaleTimeString();
        stateInitial(date);
    }
    setInterval(IncTime,1000);
     {/* react Hook- number------------ */}
     let [counter,stateUpdate] = useState(0);
     const IncNum = () =>{
        stateUpdate(counter+1);
     }

    return (<>
    
         <h1 className="heading">🎰 Slot Machine 🎰</h1>;
        <Slotm x ='😃' y ='😃' z ='😃'></Slotm>
        <Slotm x ='🤣' y ='🤣' z ='😃'></Slotm>

     {/* react Hook------------- */}
       
        <h2>{counter}</h2> 
        <h3>{count}</h3>
        
        <div className="hookDemo">
            <button onClick={IncNum} className="incNum">Click</button>
        </div>
        
       <Eventbase/>
        <FormData/>
    </>);
}
export default AppData;