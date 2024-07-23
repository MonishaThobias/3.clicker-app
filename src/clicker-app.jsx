import React, { useState } from 'react';
import './clicker-app.css';

const ClickerApp =()=>{
const [count,setCount] = useState(0);

const increment = () =>{
    setCount(count+1)
}
const decrement = ()=>{
    setCount (count-1)
}
const refresh = ()=>{
    setCount (0)
}
    return(
        <>
        <div className='app-container'>
            <div className='app-head'>
                <h3><span className='fa fa-hand-pointer-o font-icon'></span> 
                Clicker App</h3>
            </div>
            <div className='app-body'>
                <div className='clicker-body'>
                <div className='clicker-display pt-4'>
                    <h3>{count}</h3>

                </div>
                <div className='clicker-app'>
        <button onClick={increment} className='plus'><span className='fa fa-plus-circle font-icons'></span></button>
        <button onClick={refresh} className='refresh'><span className='fa fa-refresh font-icons'></span></button>
        <button onClick={decrement} className='minus'><span className='fa fa-minus-circle font-icons'></span></button>
                
        </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default ClickerApp;