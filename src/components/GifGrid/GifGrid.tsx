import GifItem from "../GifItem/GifItem";
import useFetchGifs from "../../hooks/useFetchGifs";

const GifGrid = ( { category } : { category: string } ) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log( images, isLoading );
    return (
        <>
            <h3>{category}</h3>
            
            { isLoading && (<h2>Cargando ...</h2>) }
            
            <div className="card-grid" >
                { images.map( ({ id, title, url }) => <GifItem key={id} title={title} url={url}/> ) }
            </div>
        </>
    );
}
export default GifGrid;
