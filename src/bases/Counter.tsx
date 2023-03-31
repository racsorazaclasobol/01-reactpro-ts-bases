import { useState } from "react"

interface CounterProps {
    initialValue?: number

}

export const Counter = ({ initialValue = 0 }: CounterProps) => {

    const [counter, setCounter] = useState( initialValue )


    const handleClick = ( valueToIncrement: number ) => {
        
        setCounter( counter + valueToIncrement );

    }

    return (

        <>
            <h1>Counter: { counter }</h1>

            <button onClick={ () => handleClick( 1 ) }> 
                +1 
            </button>
        </>
    )
}
