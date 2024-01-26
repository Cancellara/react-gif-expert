
import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
 
    const [inputValue, setInputValue] = useState('Primoz Roglic');
    
    const onInputChange = (event) => {
        setInputValue( event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();//Evita que haga el submit y se haga refresh de la página
        if(inputValue.trim().length <= 1) return;
        
        //setCategories(categories => [ inputValue, ...categories ]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={  onInputChange }
            />
        </form>
  )
}
