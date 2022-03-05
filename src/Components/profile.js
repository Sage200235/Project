import React from 'react';
import img1 from '../Images/twitter.png';
import FaCe from '../Images/facebook.jpg';
import LinKedIN from '../Images/linked.jpg';
import gitHub from '../Images/git.jpg';
import BigSam from '../Images/instructor.jpg';
import './profile.css';

function profile(){

    return(
        <>
        <div className='profile'>
            <div className='image'>
                <img src={BigSam} alt='sage' className='Bigsam'/>
                <h1>FACILITATOR</h1>
            </div>
            <div className='content'>
                <h1>SAMUEL KELECHI</h1>
                <h2>SOFTWARE DEVELOPER</h2>
            <div className='socials'>
                <h1 className='SoCiAL'>SOCIALS:</h1>    
                <a href='https://github.com/SamuelKelechi' target="_blank"><img className='liNKs' src={gitHub} alt='sage'/></a>
                <a href='https://www.facebook.com/skelechi3' target='_blank'><img className='liNKs' src={FaCe} alt='sage'/></a>
                <a href='https://www.linkedin.com/in/samuel-kelechi' target='_blank'><img className='liNKs' src={LinKedIN} alt='sage'/></a>
            </div>
            </div>
        </div>
        </>
    )
} 
export default profile