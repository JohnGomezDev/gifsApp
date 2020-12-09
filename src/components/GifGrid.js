import React, { useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFecthGifs';
import PropTypes from 'prop-types'

import GifCard from './GifCard';

const GifGrid = ({ category, categories, setCategories }) => {

    const { data: gifs, loading } = useFetchGifs(category);

    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        
        if(sections.length > 2) {
            sections[0].classList.add('animate__animated');
            sections[0].classList.add('animate__slideInDown');
        }

    }, []);

    const handleDeleteCategory = () => {
        const filteredData = categories.filter(categoriesToLeft => categoriesToLeft !== category)
        setCategories(filteredData);
    };

    return (
        <div className='section'>
            <div className='buttons-box'>
                <h3>{category} Gifs</h3>
                <button onClick={ handleDeleteCategory } >X Eliminar</button>
            </div>

            { loading && <p>Cargando..</p> }
            
            <div className='cards-wrapper'>
                {
                    gifs.map(({ id, title, url }) => (
                        <GifCard 
                            key={id}
                            title={title}
                            url={url}
                        />
                    ))
                }
            </div>
        </div>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
