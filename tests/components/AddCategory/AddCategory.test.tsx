import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from '../../../src/components/AddCategory/AddCategory';

describe('Pruebas de Componente <AddCategory/>', () => {

    const onNewValueDoNothing = () => {};
    const inputValueMock: string = 'Saitama';

    test('1-Test-Debe poder cambiar el valor del Input de Texto', () => {
      
        render( <AddCategory defaultValue="" onNewValue={onNewValueDoNothing}/>);
        const input: HTMLInputElement = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: inputValueMock } } );
        expect( input.value ).toBe( inputValueMock );
    });
    
    
    test('2-Test-Debe llamar a onNewCategory si el input tiene un valor', () => {
        
        /// Jest permite crear Funciones Mockeadas. Esto se hace aca abajo.
        /// Se usa para saber si:
        //  la funcion fue llamada, con que argumentos, cuantas veces se llamo, etc. 
        
        const onNewValueJestMock = jest.fn();

        // RENDERIZADO CON LA FUNCION MOCKEADA
        render( <AddCategory defaultValue="" onNewValue={onNewValueJestMock}/>);
       
        // LLENO EL INPUT Y HAGO EL SUBMIT
        const input: HTMLInputElement = screen.getByRole('textbox');
        const form : HTMLFormElement = screen.getByRole('form');
        fireEvent.input( input, { target: { value: inputValueMock } } );
        fireEvent.submit(form);

        // COMPRUEBO QUE LA CAJA DE INPUT SE HALLA LIMPIADO        
        expect( input.value ).toBe('');
        // COMPRUEBO QUE LA FUNCION MOCKEADA HALLA SIDO LLAMADA
        expect( onNewValueJestMock ).toHaveBeenCalled();
        // QUE LA FUNCION MOCKEADA HALLA SIDO LLAMADA 1 VEZ
        expect( onNewValueJestMock ).toHaveBeenCalledTimes(1);
        // QUE LA FUNCION MOCKEADA SE LE HALLA PASADO
        // COMO ARGUMENTO EL VALOR DEL INUT MOCKEADO
        expect( onNewValueJestMock ).toHaveBeenCalledWith(inputValueMock);

    });


    test('3-Test-No Debe llamar a onNewCategory si el input esta vacío', () => {
        
        const onNewValueJestMock = jest.fn();
        render( <AddCategory defaultValue="" onNewValue={onNewValueJestMock}/>);
        
        const form : HTMLFormElement = screen.getByRole('form');
        const input: HTMLInputElement = screen.getByRole('textbox');
        
        // ENVIO EL FORMULARIO
        fireEvent.submit(form);
        
        // COMPRUEBO QUE LA CAJA DE INPUT ESTE VACIA        
        expect( input.value ).toBe('');
        // COMPRUEBO QUE LA FUNCION MOCKEADA NO HALLA SIDO LLAMADA
        expect( onNewValueJestMock ).not.toHaveBeenCalled();
    });
    
    
  
})
