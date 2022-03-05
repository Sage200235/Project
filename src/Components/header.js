import React from 'react'
import './header.css'
import Lagos from '../Images/lsetf.jpg'
import Giz from'../Images/giz.jpg'
import Gizred from '../Images/gizred.jpg'

const Carder = () =>{
     return(
    <>
        <div className='nav'>
            <h1> WEB DEVELOPMENT TRAINING </h1>
        <div className='bav'>
             <img src={Lagos} alt='sage'/> 
             <img src={Giz} alt='sage'/> 
             <img src={Gizred} alt='sage'/> 
        </div> 
        </div> 
    </> 
    )
}



export default Carder
