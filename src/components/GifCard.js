import React from 'react';
import PropTypes from 'prop-types'

const GifCard = ({title, url}) => {
    return (
        <div className='gif-card'>
            <p className='gif-title'>{title}</p>
            <div className='gif-wrapper'>
                <img src={url} alt={title}/>
            </div>
        </div>
    )
};

GifCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifCard
