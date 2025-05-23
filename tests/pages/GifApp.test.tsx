import { fireEvent, render, screen } from "@testing-library/react";
import GifApp from '../../src/pages/GifApp';

describe('Pruebas del componente <GifApp/>', () => {
  
    const categoryInput = 'Dio';

    test('1-Test-Se prueba que se renderice el componente.', () => {
        const { container }=render( ( <GifApp /> ) );
        expect( container ).toMatchSnapshot();
    });

    test('2-Test-Se prueba que no se puedan duplicar categorias', () => {
        
        // RENDERIZO EL COMPONENTE
        render( ( <GifApp /> ) );

        // OBTENGO EL CAMPO Y EL FORMULARIO PARA REALIZAR LOS SUBMIT
        const input: HTMLInputElement = screen.getByRole('textbox');
        const form : HTMLFormElement = screen.getByRole('form');

        // INGRESO + SUBMIT DE CATEGORIA
        fireEvent.input( input, { target: { value: categoryInput } } );
        fireEvent.submit(form);

        // Vuelvo a buscar la misma categoria
        fireEvent.input( input, { target: { value: categoryInput } } );
        fireEvent.submit(form);
        
        // OBTENER TODOS LOS H3 RENDERIZADOS
        const h3Elements = screen.getAllByRole('heading', { level: 3 });

        // FILTRAR LOS QUE CONTENGAN EL TEXTO DE categoryInput
        const matchingH3s = h3Elements.filter(h3 =>
            h3.textContent?.toLowerCase().includes(categoryInput.toLowerCase())
        );

        // ASSERT: Debería haber solo uno si no se permiten duplicados
        expect(matchingH3s.length).toBe(1);
    });


    


})
