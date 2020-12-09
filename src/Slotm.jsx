import React from 'react';
const Slotm = (props) =>{
    // let x = '😇'; 
    // let y = '😇'; 
    // let z = '😇';

    // object distructuring------------
    let{ x,y,z } = props;

    if(x===y && y===z){
        return (
        <div className="smily">
            <h4>{x},{y},{z}</h4>
            <h4>This is matching</h4>
            <hr/>
        </div>);
    }else{
        return (
        <div className="smily">
            <h4>{x},{y},{z}</h4>
            <h4>This not matching</h4>
            <hr/>
        </div>);
    }
}
export default Slotm;