import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    
    const [state, setState] = useState({
        data: [], 
        loading: true,
    }); 

    useEffect( () => {

        getGifs(categoria)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false,
                });
            })

    }, [categoria]);

    // useEffect( () => {
    //     getGifs(categoria)
    //         .then(imgs => setImages(imgs));
    // }, [categoria]);


    return state;
}


