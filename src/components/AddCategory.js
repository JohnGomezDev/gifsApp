import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); 
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value); //Capturar valor del input y hacer que podamos escribir en el
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 1) {
            setCategories(inputValue.trim());
            setInputValue(''); //Limpiar input
        }
    };

    return (
        <form onSubmit={ handleSubmit } >
            <input 
                type='text'
                placeholder='ej. Among Us'
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
