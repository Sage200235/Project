import React, {useState} from 'react'
import './Card3.css'
import Tayo from '../Images/jamesAdetimehin.jpg'
import Abisola from '../Images/abisola.jpg'
import Anu from '../Images/agbaAnu.JPG'
import Asije from '../Images/Asije.jpg'
import Ihuoma from '../Images/ihuoma.jpg'
import Monsurat from '../Images/monsurat.jpg'
import Sam from '../Images/sam.jpg'
import Blessing from '../Images/blessing.jpg'
import Busolami from '../Images/busolami.jpg'
import David from '../Images/David.jpg'
import Sage from '../Images/sage.jpg'
import Git from '../Images/git.jpg'
import Facebook from '../Images/facebook.jpg'
import LinkedIn from '../Images/linked.jpg'
import Twitter from '../Images/twitter.png'




function Card3(){
    const[data, setData] = useState([
       {
            name: " Alarape Olatunde",
            avatar: Sage,
            github: <a href='https://github.com/Sage200235' target="_blank"><img class="logo" src={Git}></img></a>,
            twitter: <a href='https://twitter.com/Alara_COMPLETE?t=DOspCvLI2MtOtOmB1DIOCw&s=09'target="_blank"><img class="logo" src={Twitter}></img></a>,
            remarks :" A very nice empowerment program by GIZ and Lofty Inc."
        },
        {
            name: "Adetimehin James",
            avatar: Tayo,
            twitter: <a href='https://twitter.com/TeewhyIm?t=PfF6OLTFMmWZCa0-Dh3WoA&s=08' target="_blank"><img class="logo" src={Twitter}></img></a>,
            facebook:<a href='https://www.facebook.com/profile.php?id=100004759938342'  target="_blank"><img class="logo" src={Facebook}></img></a>,
            github:<a href='https://github.com/tayoski7'  target="_blank"><img class="logo" src={Git}></img></a>,
            remarks: "The training was intense and impactful."
        },
        {
            name: "Ibe Blessing",
            avatar: Blessing,
            github:<a href='https://github.com/Chienyi25'target="_blank"><img class="logo" src={Git}></img></a>,
            linkedin: <a href='https://www.linkedin.com/in/blessing-chienyi-ibe-81b366144' target="_blank"><img class="logo" src={LinkedIn}></img></a>,
            remarks:"A very interesting and valuable experience." 
        },
        {
            name: "Ojo Oluwatosin",
            avatar: Anu,
            github:<a href='https://github.com/Oluwatosin34' target="_blank"><img class="logo" src={Git}></img></a>,
            facebook:<a href='https://www.facebook.com/oluwatosin.ojo.92372' target="_blank"><img class="logo" src={Facebook}></img></a>,
            remarks: "A very interesting program, made me know more about web dev."
        },
        {
            name: "Aladeloba Monsurat",
            avatar:Monsurat,
            linkedin:<a href='https://www.linkedin.com/in/olaide-aladeloba-a04b79227' target="_blank"><img class="logo" src={LinkedIn}></img></a>,
            github: <a href='https://github.com/AladelobaOlaide' target="_blank"><img class="logo" src={Git}></img></a>,
            facebook: <a href='https://www.facebook.com/isiaka.m.b' target="_blank"><img class="logo" src={Facebook}></img></a>,
            remarks: "I gained so much from this wonderful program, we need more of this kind. Big ups to GIZ"
        },
        {
            name: "Abisolaoluwa Whensu",
            avatar:Abisola,
            github:<a href='https://github.com/Abisolawhensu' target="_blank"><img class="logo" src={Git}></img></a>,
            facebook:<a href='https://www.facebook.com/abisolaoluwa.whensu' target="_blank"><img class="logo" src={Facebook}></img></a>,
            remarks:" I have really learnt a lot this past one month through this program, thank you GIZ. "
        },
        {
            name: "Babalola Busolami",
            avatar:Busolami,
            github:<a href="https://github.com/bussybabz2022" target="_blank"><img class="logo" src={Git}></img></a>,
            linkedin:<a href='https://www.linkedin.com/in/babalola-blessing-53633138' target="_blank"><img class="logo" src={LinkedIn}></img></a>,
            remarks: "The program really added to my experience on wed dev. Thank you GIZ."
        },    
        {
            name: "Oparaji David",
            avatar: David,
            github: <a href='https://github.com/OparajiDavid' target="_blank"><img class="logo" src={Git}></img></a>,
            facebook:<a href='https://www.facebook.com/heph.ziba' target="_blank"><img class="logo" src={Facebook}></img></a>,
            remarks:'GIZ have  helped me expand my knowledge in web development.'
        },
        {
            name: "Asije Joseph",
            avatar:Asije,
            github:<a href='https://github.com/Asije'target="_blank"><img class="logo" src={Git}></img></a>,
            twitter:<a href='https://twitter.com/Asijeprof' target="_blank"><img class="logo" src={Twitter}></img></a>,
            remarks:" This is the beginning of the rest of my life, thanks to GIZ and salute t my fellow comrades."
        },
        {
            name: "Ihuoma Ohesimus",
            avatar:Ihuoma,
            github:<a href='https://github.com/BLEOMA' target="_blank"><img class="logo" src={Git}></img></a>, 
            remarks: 'Thank you GIZ, I made new friends'
        },
        {
            name: "Ibikunle Samuel",
            avatar:Sam,
            github:<a href='https://github.com/ibksammy' target="_blank"><img class="logo" src={Git}></img></a>,
            facebook:<a href='https://www.facebook.com/ifeolusam@gmail.com'target="_blank"><img class="logo" src={Facebook}></img></a>,
            remarks:"I would like to say a big thank you to GIZ. They have given me a platform to learn new things. " 
        },
    ]);
    return(
        <>
            <div className='benefactors'><h1>BENEFACTORS</h1></div>        
            <div class="card3Contain">
                {data.map((props)=>(
                <div class="card3">
                   <img class="profileImg" src={props.avatar}/>
                    <p><b>NAME:</b> {props.name}</p>
                    <div className='remark'>
                        <p><b>REMARKS:</b> {props.remarks}</p>
                    </div>
                    <div className='pppDiv'>
                    <p className='ppp'> <b>SOCIALS:</b></p>
                    <p>{props.github} {props.facebook} {props.linkedin} {props.twitter}</p>
                    </div>
                </div>
                ))}
           
        </div>
        </>
    )


}

export default Card3