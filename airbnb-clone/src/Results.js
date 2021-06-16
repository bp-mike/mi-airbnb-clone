import React, { Component } from 'react';
import './Results.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'

function Results({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}){
    return (
        <div className='results'>
            <img src={img} alt='' />
            <FavoriteBorderIcon className='results__heart'/>
            <div className='results__info'>
                <div className='results__infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>
                <div className='results__infoBottom'>
                    <div className='results__stars'> 
                        <StarIcon className='results__star'/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className='results__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Results
