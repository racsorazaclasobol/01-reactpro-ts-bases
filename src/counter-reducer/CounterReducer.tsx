import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import { doReset, doIncreaseBy } from './actions/actions';

const INITIAL_STATE: CounterState = {
    changes : 0,
    counter : 0,
    previous: 0,
}

export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleIncreaseCounterBy = ( valueToIncrement: number ) => {        
        dispatch( doIncreaseBy( valueToIncrement ) );
    }

    const handleResetCounter = () => {        
        dispatch( doReset() );
    }

    return (

        <>
            <h1>Counter Reducer Segmentado</h1>
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
