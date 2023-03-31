import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { useCounter } from '../hooks/useCounter';


export const CounterHook = () => {

    const { counter, elementToAnimate, handleClick } = useCounter();

    return (

        <>
            <h1>Counter: { counter }</h1>
            <h2 ref={ elementToAnimate }> { counter } </h2>

            <button onClick={ () => handleClick( 1 ) }> 
                +1 
            </button>
        </>
    )
}
