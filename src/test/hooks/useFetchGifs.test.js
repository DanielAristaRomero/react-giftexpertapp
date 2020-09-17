import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {
   
    test('debe de retornar el valor inicial', async() => {
        // const {data, loading} = useFetchGifs('categoria');    
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('categoria'));

        const {data, loading} = result.current;
        await waitForNextUpdate();

        expect(data.length).toBe(0);
        expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch'));

        await waitForNextUpdate();

        const {data, loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
    

});
