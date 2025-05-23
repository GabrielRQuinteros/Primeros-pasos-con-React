import { Gif } from '../../src/interfaces/GifInterface';
import { getSearchedGifs } from '../../src/utils/GiphyAPI';
describe('Pruebas del Archivo GiphyAPI, quehace peticiones a Giphy', () => {
  
    const q: string = 'Dogs';
    const limit: number = 10;
    const offset: number = 0;
    const lang: string = 'en';
    /// ES un objeto mockeado que permite aceptar cualquier
    /// Objeto que tenga la estructura de un Gif en el toEquals
    const gifMock: Gif = {
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
    }

    test('1-Test-Hacer una petición al endpoint de Search y devolver un array de Gifs ', async() => {
      
        const gifs: Gif[] = await getSearchedGifs(q, limit, offset, lang );
        expect( gifs.length ).toBeGreaterThan(0);        
        expect( gifs[0] ).toEqual( gifMock );
    });
    

})
