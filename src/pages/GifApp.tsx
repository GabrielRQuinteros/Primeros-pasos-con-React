import { useEffect, useState } from "react"
import AddCategory from "../components/AddCategory/AddCategory";
import GifGrid from "../components/GifGrid/GifGrid";
import { getSearchedGifs } from "../utils/GiphyAPI";
import type { Gif } from "../interfaces/GifInterface";

const GifApp = () => {
    const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball']);
    let gifs: Gif[] = [];
    //! NOTA IMPORTANTE:
    // NUNCA PONER CONDICIONALES QUE AFECTEN A LA CREACIÓN DE HOOKS, VA ENCONTRA DE COMO SE ESPERA QUE SE USEN LOS HOOKS Y TRAE PROBLEMAS.
    // if(true) {
    //     const [categorias, setCategorias] = useState(['One Punch Man', 'Dragon Ball']);
    // }

    useEffect( () => {
        getSearchedGifs('One Punch Man', 5, 0).then( response => {
            gifs = response;
        } ).catch( error => {
            console.log(error);
        } );
    }, []);

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
            {  categories.map( ( cat ) => (
                <GifGrid category={cat}
                         key={cat} 
                    />
                
                ))  
            }
        </ol>

        { gifs.map( gif => ( <img src={gif.url} alt="" /> ) ) }

    </>
  )
}

export default GifApp
