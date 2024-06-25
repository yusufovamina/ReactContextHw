import React, { useContext } from 'react';
import { MyContext } from './App';
import './App.css'




const GoodItem = () =>{
    let {goods} = useContext(MyContext);
    return (
        goods.map((item, index) => 
       <div>
        <p key={index}>{item}</p>
       </div>
    ));
}

export default GoodItem;