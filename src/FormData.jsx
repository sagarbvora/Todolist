import React, { useState } from 'react';

const FormData = () => {
    const [inputtext,setname] = useState({
        fname:"",
        password:"",
        email:"",
        phone:""
    });
    const InputChange = (index) =>{
        // console.log(index.target.value);
        // console.log(index.target.name);
         var {name,value}  = index.target;

         setname((prev) => {
            //  console.log(...prev);
            return {
                ...prev,
                [name]:value,
            }; 
            // if(name === 'fName'){
            //     return{
            //         fname:value,
            //         password:prev.password,
            //         email:prev.email,
            //         number:prev.number
            //     };
            // }else if(name === 'passWord'){
            //     return{
            //         fname:prev.fname,
            //         password:value,
            //         email:prev.email,
            //         number:prev.number
            //     };
            // }else if(name === 'eMail'){
            //     return{
            //         fname:prev.fname,
            //         password:prev.password,
            //         email:value,
            //         number:prev.number
            //     };
            // }else if(name === 'nuMber'){
            //     return{
            //         fname:prev.fname,
            //         password:prev.password,
            //         email:prev.email,
            //         number:value
            //     };
            // }
         });
    }
    const onSubmits = (e) =>{
        e.preventDefault();
      
    }
   
    
    
    return(
        <>
            <div className="form1">
            <form onSubmit={onSubmits} method="post">
                <h1>Hello {inputtext.fname} {inputtext.password} {inputtext.email} {inputtext.phone}</h1>
                <input type="text" name="fname" onChange={InputChange} value={inputtext.fname}/>
                <input type="password" name="password" onChange={InputChange} value={inputtext.password}/>
                <input type="email" name="email" onChange={InputChange} value={inputtext.email}/>
                <input type="number" name="phone" onChange={InputChange} value={inputtext.phone}/>
                <button type="submit">Submit</button>
            </form>
            </div>
        </>
    );
}
export default FormData;