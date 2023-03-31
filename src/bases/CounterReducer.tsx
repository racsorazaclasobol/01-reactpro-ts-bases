import { useReducer, useState } from "react";

interface CounterState {
    changes : number;
    counter : number;
    previous: number;
}

const INITIAL_STATE: CounterState = {
    changes : 0,
    counter : 0,
    previous: 0,
}

type CounterAction = 
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'reset' }

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    switch (action.type) {
        case 'increaseBy':
            return {
                changes : state.changes + 1,
                counter : state.counter + action.payload.value,
                previous: state.counter,
            };

        case 'reset':
            return { 
                changes : 0,
                counter : 0,
                previous: 0,
            };
    
        default:
            return state;
    }
    
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleIncreaseCounterBy = ( valueToIncrement: number ) => {        
        dispatch({ type: 'increaseBy', payload: { value: valueToIncrement} })
    }

    const handleResetCounter = () => {        
        dispatch({ type: 'reset' })
    }

    return (

        <>
            <h1>Counter Reducer</h1>
            <pre>
                {
                    JSON.stringify( counterState, null, 4 )
                }
            </pre>

            <button onClick={ () => handleIncreaseCounterBy( 1 ) }> 
                +1 
            </button>
            <button onClick={ () => handleIncreaseCounterBy( 5 ) }> 
                +5 
            </button>
            <button onClick={ () => handleIncreaseCounterBy( 10 ) }> 
                +10 
            </button>
            <button onClick={ handleResetCounter }> 
                reset
            </button>
        </>
    )
}
