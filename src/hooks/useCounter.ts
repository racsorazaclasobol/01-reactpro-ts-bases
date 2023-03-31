import gsap from 'gsap';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';

const MAXIMUN_COUNT = 10;


export const useCounter = () => {
    
    const gsapTimeLine = useRef( gsap.timeline() );
    
    const [counter, setCounter] = useState( 5 );
    const elementToAnimate        = useRef<HTMLHeadingElement>(null);


    const handleClick = ( valueToIncrement: number ) => { 

        setCounter( prev => Math.min( prev + valueToIncrement, MAXIMUN_COUNT ) );
    }

    useLayoutEffect(() => {

        if( !elementToAnimate.current ) return;
      
        gsapTimeLine.current.to( elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' } )
                            .to( elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' } )
                            .pause();
    
     
    }, [])

    useEffect( () => {
        
        gsapTimeLine.current.play(0);

    }, [ counter ] );



    return {
        counter,
        elementToAnimate,

        handleClick
    }

}