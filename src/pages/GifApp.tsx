import { useState } from "react"
import AddCategory from "../components/AddCategory/AddCategory";
import GifGrid from "../components/GifGrid/GifGrid";

const GifApp = () => {
    const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball']);
    const onAddCategory = ( newCategory: string ) => {
        if( categories.includes( newCategory ) )
            return;
        setCategories( [ newCategory, ...categories ] );
    }

  return (
    <>
        {/* titulo */}
        <h1>Aplicación de Gifs</h1>
        {/* Input */}
            <AddCategory defaultValue=""
                        //  categorias={categorias}
                        //  callback={ setCategorias }
                        onNewValue={ onAddCategory }
                          />
        {/* listado de gifs */}

        <ol>
            {  categories.map( ( cat ) => ( <GifGrid category={cat} key={cat}/>)) }
        </ol>
    </>
  )
}

export default GifApp
