

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ( { category } ) => {

  /* Todo esto lo hacemos en un custom Hook useFetchGifts
  const [images, setImages] = useState([])

  //Esto hay que hacerlo asi porque el async y await no se puede usar dentro del useEffect
  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

//Hook para disparar efectos secundarios
//Por ejemplo cuando el componente se renderiza por 1ª vez disparo algo
//En este caso será en el único comento que se lanzará la petición http
useEffect( () => {
  getImages();//Callback a ejecutar   
 }, [] //Dependencias. Vacías solo se ejecuta la primera vez que se ejecuta el componente
);
 
*/


//Custom Hook
const {images, isLoading } = useFetchGifs( category );



  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading 
        ? (<h2>Cargando...</h2>)
        : null // No se renderiza 

        //Otra forma:
        //isLoading && (<h2>Cargando...</h2>);
      }
      

      <div className="card-grid">
        {
          images.map( (image) => (
            <GifItem 
              key={ image.id }
              { ...image } //Propagamos todos los campos como properties del componente
            />
          ))
        }
      </div>
     
      
    </>
  )
}
