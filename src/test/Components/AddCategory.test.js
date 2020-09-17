import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../Components/AddCategory");

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias = {setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias = {setCategories}/>);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe de postear la informacion con submit', () => {
       wrapper.find('form').simulate('submit', {preventDefault(){}});
       expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        //Simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}});
        // Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //SetCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //el valor del input se debe de reiniciar en ''
        expect(wrapper.find('input').prop('value')).toBe('')

    });
    
});
