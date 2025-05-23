import { render, screen } from "@testing-library/react";
import GifGrid from '../../../src/components/GifGrid/GifGrid';
import useFetchGifs from "../../../src/hooks/useFetchGifs";
import { Gif } from "../../../src/interfaces/GifInterface";

// LODE ABAJO SIRVE PARA HACER MOCKS DE HOOKS Y DE LIBRERIAS
// ( INCLUYENDO LAS DE TERCEROS ).
jest.mock( "../../../src/hooks/useFetchGifs");


describe('Pruebas del componente <GifGrid/>', () => {
  
    
    const category: string= 'One Punch';
    const loadingMessage: string = 'Cargando ...';
    
    test('1-Test- Debe de mostrar el mensaje de loading inicialmente.', () => {
        
        const mockUseFetchGifs = useFetchGifs as jest.Mock;
        mockUseFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });

        // RENDERIZO EL COMPONENTE INICIALMENTE
        render( <GifGrid category={category} /> );

        // COMPRUEBO QUE SALGA EL MENSAJE DE CARGANDO
        expect( screen.getByText(loadingMessage) ).toBeTruthy();
        // COMPRUEBO QUE APAREZCA EL TEXTO CON EL NOMBRE DE LA CATEGORÍA
        expect( screen.getByText(category) ).toBeTruthy();
    });


    test('2-Test- Debe de mostrar los items devueltos por el useFetchGif', () => {
        
        const gifs: Gif[] = [
            { id: "ABC", title: "Saitama-mamon", url: 'https://static.wikia.nocookie.net/onepunchman/images/c/c0/Anime_-_Saitama.jpg/revision/latest?cb=20200308230733&path-prefix=es' },
            { id: "DEF", title: "Genos", url: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/01/Genos-of-One-Punch-Man.jpg?q=50&fit=crop&w=943&h=&dpr=1.5' }
        ]

        const mockUseFetchGifs = useFetchGifs as jest.Mock;

        mockUseFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        // RENDERIZO EL COMPONENTE INICIALMENTE
        render( <GifGrid category={category} /> );

        // Esperamos que se rendericen 2 elementos img de html
        expect( screen.getAllByRole( 'img' ).length ).toBe( gifs.length );


    });



});

