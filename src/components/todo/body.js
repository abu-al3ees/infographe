import React from 'react'
import './body.css'
import Dia from './dia.png';
import Heal from './heal.png';
import Mid from './mid.png';
import Other from './other.png'
import Well from './well.jpg'

function body() {
    return (
        <div className='body_container'>
            <div className='mid'>
                <img src={Mid}/>
                <p><h1>Midicine</h1>
                Over 25000 products</p>
                
            </div>
            <div className='wel'>
            <img src={Well}/>
            <p><h1>Wellness</h1>
               Healthe  products </p>
            </div>
            <div className='dia'>
            <img src={Dia}/>
            <p><h1>Diagnostic</h1>
                Book tests & checkups</p>
            </div>
            <div className='heal'>
            <img src={Heal}/>
            <p><h1>Health Corner</h1>
                Over 25000 products</p>
            </div>
            <div className='other'>
            <img src={Other}/>
            <p><h1>Others</h1>
                Over 25000 products</p>
            </div>
        </div>
    )
}

export default body
