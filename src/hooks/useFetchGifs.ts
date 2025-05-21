/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useEffect, useState } from "react";
import type { Gif } from "../interfaces/GifInterface";
import { getSearchedGifs } from "../utils/GiphyAPI";

const useFetchGifs = (category:  string ): FetchGifsResult => {
  
    const [images, setImages]: [Gif[], Function] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getSearchedGifs( category, 5, 0 );
        setImages( newImages );
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);

    return { images, isLoading };
}

export interface FetchGifsResult {
    images: Gif[],
    isLoading: boolean
}

export default useFetchGifs
