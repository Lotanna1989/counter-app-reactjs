import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Reacjx_fx() {
    const [count, useCounter] = useState(0); //counter starts from 0

    const Increment = () =>
    {
        useCounter(count + 1)
    }
    const Decrement = () =>
    {
        //only positive value at minimum line15 
        let value=0
        if(count<= 0)
        {
            value = 1
        }
        else{
            value = count
        }
            //line 24 use value and not count to prevent negative counting
        useCounter(value - 1)
    }
    const Reset =() =>
    {
        useCounter(0)  //initialize
    }

    useEffect(() =>
        {

         document.title = `You clicked ${count} times`
        })
   
        return (
            <div>
            <h1><strong>THE CART COUNTER APP FOR COUNTING YOUR CARTS</strong></h1>
            <h2> Counter {count}</h2>
            <button style={{background: "green"}}  onClick={() =>Increment()}>INCREMENT</button>
            <button style={{background: "purple"}}             onClick={() =>Decrement()}>DECREMENT</button>
            <button style={{background: "gold"}}  onClick={() =>Reset()}>RESET</button>
            </div>
        );
    }

 
export default Reacjx_fx ;