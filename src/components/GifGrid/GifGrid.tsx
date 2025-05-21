import { useState } from "react";

const GifGrid = ( { category } : { category: string } ) => {
  
    const [ counter, setCounter ] = useState( 0 );

    return (
        <>
            <h3>{category}</h3>
            <h5>{counter}</h5>
            <button onClick={ () => setCounter( counter + 1) } >+1</button>
        </>
    );
}
export default GifGrid;
