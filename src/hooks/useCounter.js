import { useState } from "react";

export const useCounter = ( num = 10 ) => {

    const [counter, setCounter] = useState(num);


    const onSum = ( value = 1 ) => {
        setCounter( counter + value);
    }

    const onResta = (value = 1) => {
        if( counter < 1 ) return;

        setCounter( counter - value);
    }

    const onReset = () => {
        setCounter( num );
    }

    return {
        counter,
        onSum,
        onResta,
        onReset,
    }
}
