import React  from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data:images, loading} = useFetchGifs(categoria);

    return (
        <>
            <h3 className = 'categoria'>{categoria}</h3> 

            {loading && <p>Loading</p>}

            <div className = 'card-grid'>
                {
                    images.map( img =>
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                        // <li key = {img.id} >{img.title}</li>       
                    )
                }
            </div>
        </>
    )
};

GifGrid.propTypes = {
    category:PropTypes.string.isRequired,
};