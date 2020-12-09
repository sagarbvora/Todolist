import React, { useState } from 'react';

const eventAdd={
    'padding':'12px  20px',
    'color': 'white',
     'marginLeft':'45%',
    // 'display':'flex', 
    'width': '10%',
    'backgroundColor': '#9b59b6',
    'border': '2px solid #ecf0f1',
    'outline': 'none',
    'borderRadius': '5px',
    'textTransform': 'uppercase',
    'cursor': 'pointer',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent':'center', 
    'alignItems':'center'
  }
const eventdiv = {
  'display': 'flex',
  'flexDirection':'column',
  'justifyContent': 'center',
  'alignItems': 'center'
}

const Eventbase = () =>{
  const purpole = '#9b59b6'
  const [bg,setBg] = useState(purpole);
  const bgInfo = () =>{
  const newBg = '#944d64';

    setBg(newBg);
  }
    return(
    <>
        <div style={eventdiv,{backgroundColor:bg}}>
            <button onClick={bgInfo} style={eventAdd}>Click</button>
        </div>
    </>);
}
export default Eventbase;