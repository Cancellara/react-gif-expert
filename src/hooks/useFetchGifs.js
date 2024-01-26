import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifts';




export const useFetchGifs = (  category ) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsloading] = useState( true );


    //Esto hay que hacerlo asi porque el async y await no se puede usar dentro del useEffect
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsloading(false);
        
    }
  

    //Hook para disparar efectos secundarios
    //Por ejemplo cuando el componente se renderiza por 1ª vez disparo algo
    //En este caso será en el único comento que se lanzará la petición http
    useEffect( () => {
        getImages();//Callback a ejecutar  
        
        }, [] //Dependencias. Vacías solo se ejecuta la primera vez que se ejecuta el componente
    );
  
    return {
        images,
        isLoading,
  }
}
