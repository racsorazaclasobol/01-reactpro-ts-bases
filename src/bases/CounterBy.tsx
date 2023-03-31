import { useState } from "react"

interface CounterProps {
    initialValue?: number
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: CounterProps) => {

    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0     
    });

    const handleClick = ( valueToIncrement: number ) => {
        
        setCounterState( ({ counter, clicks }) => ({ 
            counter: counter + valueToIncrement,
            clicks: clicks + 1
        }));

    }

    return (

        <>
            <h1>CounterBy: { counter }</h1>
            <h1>Clicks: { clicks }</h1>

            <button onClick={ () => handleClick( 2 ) }> +1</button>
        </>
    )
}
