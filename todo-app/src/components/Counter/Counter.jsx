import { useState } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

export default function Counter() {
    const [Count, setCount] = useState(0);

    function incrementParentCounter(by){
        setCount(Count + by)
    }

    function decrementParentCounter(by){
        setCount(Count - by)
    }

    function resetCounter(){
        setCount(0)
    }

    return(
        <div className='Counter'>
            <CounterButton by={1} callIncrementParent = {incrementParentCounter} callDecrementParent = {decrementParentCounter}/>
            <CounterButton by={2} callIncrementParent = {incrementParentCounter} callDecrementParent = {decrementParentCounter}/>
            <CounterButton by={5} callIncrementParent = {incrementParentCounter} callDecrementParent = {decrementParentCounter}/>
            <div><span className="count">{Count}</span></div>
            <button className="Reset" onClick={resetCounter}>Reset</button>
        </div>
    )
}
