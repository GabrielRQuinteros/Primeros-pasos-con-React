import { useState } from 'react';
const AddCategory = (
            {defaultValue, onNewValue }:
            // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
            {defaultValue:string, onNewValue: Function } 
        ) => {

    const [inputValue, setInputValue] = useState(defaultValue)

    
    
    /// ////////////////////////////////////////////////////////////////////
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {   
        event.preventDefault();
        const nuevaCategoria = inputValue.trim();
        if ( nuevaCategoria.length === 0 ) return;

        onNewValue( nuevaCategoria );
        setInputValue("");
    };
    /// //////////////////////////////////////////////////////////////////////

    return (
        <form onSubmit= { onSubmit } aria-label='form'>

            <input  id="inputCategoria"
                    type="text"
                    placeholder="Buscar Categoría"
                    value={inputValue}
                    onChange={ onInputChange }
                />
        </form>
    )
}

export default AddCategory
