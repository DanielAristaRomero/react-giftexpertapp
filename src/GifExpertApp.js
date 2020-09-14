
import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categorias, setCategorias] = useState(['Dragon Ball'])
    
    // const handleAdd = () => {
    //     // setCategorias(['HunterXHunter', ...categorias]);
    //     setCategorias(cats => ['HunterXHunter', ...categorias]);
    // };
    
    return (
        <>
            <h2>GifExpertApp</h2>  
            <AddCategory setCategorias = {setCategorias}/>
            <hr></hr>

            <ol>
                {
                    categorias.map(categoria =>  
                       <GifGrid 
                       key = {categoria}
                            categoria = {categoria}
                       /> 
                    )
                }
            </ol>  
        </>
    );
};
