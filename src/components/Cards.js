import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects and Portfolio - the list is always growing</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/netherlands-houses.jpeg'
                        text='Year Abroad in the Netherlands'
                        label='Life Events'
                        to={{pathname: "https://unshorten.it"}}
                        />
                        <CardItem 
                        src='images/world-img.jpg'
                        text='Curriculum Vitae'
                        label='Professional'
                        path='/projects'
                        />
                        <CardItem 
                        src='images/graduation.jpg'
                        text='Graduation and Iron Ring Cermony'
                        label='Life Events'
                        path='/projects'
                        />
                        
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/rainbow-cloud.jpg'
                        text='Photography & Design'
                        label='Projects'
                        path='/projects'
                        />
                        <CardItem 
                        src='images/meandkitty.jpg'
                        text='Timeline'
                        label='Projects'
                        path='/projects'
                        />
                        <CardItem 
                        src='images/get-in-touch.jpeg'
                        text='Get in Touch!'
                        label='Personal'
                        path='/projects'
                        />
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Cards
