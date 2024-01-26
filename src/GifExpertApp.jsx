import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //Al tener el archivo de barril con nombre index.js no hace falta poner nombre de fichero



export const GitExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['Primoz Roglic']); //Inicializar como un arreglo

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //console.log('Implementación en GifExpertApp.jsx');
    };

    return (
        <>
            {/* título */}
            <h1>GitExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ event => onAddCategory(event) } //Cuando solo hay un parámetro se podría poner solo onAddCategory
                />

            {/* Listado de Gifs */}
           
            { 
                categories.map ((category) =>  (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            } 
            
                {/* Gif Item */}
            </>
    )
}