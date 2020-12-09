import React, { useState } from 'react'
// import PropTypes from 'prop-types'

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = (props) => {

    const [categories, setCategories] = useState(['Tokyo Ghoul', 'Darling in the franxx']);

    const handleAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
    };

    return (
        <div id='main-container'>
            <div className='header'>
                <h1 className='main-title'>Gifs getter</h1>

                <AddCategory setCategories={ handleAddCategory }/>
            </div>

            <div className='gifs-container'>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category} 
                            category={category}
                            setCategories={setCategories}
                            categories={categories}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default GifApp

