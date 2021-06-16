import React, { Component } from 'react';
import './SearchResults.css'
import { Button } from '@material-ui/core'
import Results from './Results'

function SearchResults(){
    return (
        <div className='searchResults'>
            <div className='searchResults__info'>
                <p>62 stays . 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and Beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
            <Results 
                img='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320'
                location='Private room in center of london'
                title='Stay at this spacious Edwardian House'
                description='1 guest . 1 bedroom . 1 bed . 1.5 shared bthrooms . wifi . Kitchen . Free parking . washing machine'
                star={4.73}
                price='shs 300 / night '
                total='shs 490 total'
            />
            <Results 
                img='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320'
                location='Private room in center of london'
                title='Stay at this spacious Edwardian House'
                description='1 guest . 1 bedroom . 1 bed . 1.5 shared bthrooms . wifi . Kitchen . Free parking . washing machine'
                star={4.73}
                price='shs 300 / night '
                total='shs 490 total'
            />
        </div>
    )
}

export default SearchResults
