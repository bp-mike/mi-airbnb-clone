import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home(){
    return(
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card 
                    src='https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320'
                    title='Featured collection: Wonder Lust'
                    description='travel from home with online experiences'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320'
                    title='Featured collection: Wonder Lust'
                    description='travel from home with online experiences'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320'
                    title='Featured collection: Wonder Lust'
                    description='travel from home with online experiences'
                />

            </div>
            <div className='home__section'>
                <Card 
                    src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320'
                    title='Featured collection: Wonder Lust'
                    description='travel from home with online experiences'
                    price='shs100/night'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320'
                    title='Featured collection: Wonder Lust'
                    description='travel from home with online experiences'
                    price='shs100/night'
                />
                <Card 
                    src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320'
                    title='Featured collection: Wonder Lust'
                    description='travel from home with online experiences'
                    price='shs100/night'
                />
            </div>
        </div>
    )
}

export default Home