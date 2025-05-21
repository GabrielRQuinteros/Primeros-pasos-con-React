import type { GiphyDataGifSearchPage } from "../interfaces/GiphyInterfaces";
import type { Gif } from '../interfaces/GifInterface';

const GIPHY_API_KEY = "GG2zx2xFbYMEc5oaxWgJg2enYO2yuclM";

const getGifSearchURL = (q: string, limit?: number, offset?: number, lang?: string): string => {

    if( limit && ( limit < 1 || limit > 50) )
        throw new Error( "El parametro limit debe estar entre 1 y 50." );

    if( offset && ( offset < 0 || offset > 4999 ) )
        throw new Error( "El parametro offset debe estar entre 0 y 4999." );

    let URL= `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${q}`;
    if( limit )
        URL+= `&limit=${limit}`;
    if( offset )
        URL+= `&offset=${offset}`;
    if( lang )
        URL+= `&lang=${lang}`; 
    return URL;
}

export const getSearchedGifsPage = async ( q: string, limit?: number, offset?: number, lang?: string  ): Promise< GiphyDataGifSearchPage | null > => {
    const response: Response= await fetch( getGifSearchURL( q, limit, offset, lang ) );
    if( response.ok ) {
        const page = ( await response.json() ) as GiphyDataGifSearchPage;
        return page;
    }
    return null;
}

export const getSearchedGifs = async (q: string, limit?: number, offset?: number, lang?: string ): Promise<Gif[]> => {
    const page: GiphyDataGifSearchPage = (await getSearchedGifsPage( q, limit, offset, lang)) as GiphyDataGifSearchPage;
    const data = page.data;
    const gifs: Gif[] = data.map(data => ({
                                    id: data.id,
                                    title: data.title,
                                    url: data.images.downsized_medium.url
                                }));
    return gifs;
} 