import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";

describe('Pruebas del Hook useFetchGifs', () => {

    const category: string = "Genos One Punch Man";

    test('1- Test del estado inicial del Hook', () => {
        
        /// No se puede probar drectamente el hook porque necesita
        // un functional component para ejecutarse. Por eso existe un
        // metodo especial renderHook para que se encargue de esa parte.
        const { result }= renderHook( () => useFetchGifs( category ) );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBe(true);
    });


    test('Debe retornar el arreglo de imágenes y isLoading en false', async () => {
        const category = 'One Punch';

        const { result } = renderHook(() => useFetchGifs(category));

        await waitFor(() => {
            expect(result.current.images.length).toBeGreaterThan(0);
        });

        expect(result.current.isLoading).toBe(false);
    });
  
});
