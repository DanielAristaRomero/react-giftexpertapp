import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../Components/GifGridItem';


describe('Pruebas en <GifGridItems />', () => {
    
    const title = 'Titulo';
    const url = 'http://localhost/algo.png';
    const wrapper = shallow(<GifGridItem title = {title} url = {url}/>);

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de tener un párrafo con el title', () => {
       const p = wrapper.find('p');
       expect(p.text().trim()).toBe(title); 
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('debe de tener animate__bounce', () => {
        const clase = 'animate__bounce';
        const div = wrapper.find('div');
        expect(div.prop('className').includes(clase)).toBe(true);

    })
    
    
});
