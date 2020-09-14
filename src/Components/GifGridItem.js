import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
    // console.log(props)
    return (
        <div className = 'card animate__animated animate__bounceIn'>
            <img src ={url} alt = {title} ></img>
            <p>{title}</p>
        </div>
    )
}
