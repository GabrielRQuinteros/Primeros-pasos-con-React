import { render, screen } from '@testing-library/react';
import GifItem from '../../../src/components/GifItem/GifItem';

describe('Pruebas del componente: <GifItem/>', () => {
    
    const title: string = 'One punch Man Test';
    const url: string = 'https://alfabetajuega.com/hero/2025/05/saitama.1746780301.4579.jpg?width=1200&aspect_ratio=16:9';

    test('1- Renderizacion del Componente con parametros correctos', () => {
        const { container } = render( <GifItem title={title} url={url}/> );
        expect( container ).toMatchSnapshot();
    });

    test('2- Debe mostrar la imagen con el URL y el Alt indicado', () => {
        render( <GifItem title={title} url={url}/> );
        const imageElement: HTMLImageElement = screen.getByRole('img');
        expect( imageElement.src ).toBe(url);
        expect( imageElement.alt ).toBe(title);
    });

    
  
})
