import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';


const ToDoList1 = (props) =>{    
    return(
        <>
            <div className="delete_style">
                <button className="delete_data" onClick={()=>{
                            props.onSelect(props.id);
                }}>
                <ClearIcon/>
                </button>
                <li>{props.text}</li>
            </div>
        </>
    )
}
export default ToDoList1;