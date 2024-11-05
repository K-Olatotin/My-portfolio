import Me from '../assets/img.png'
import In from '../assets/linkedin-logo-24.png'
import Git from '../assets/github-logo-24.png'
import './Hero.css'
const Hero = () =>{
return(
    <div className='cont'>
    <div className="container-1">
        <div className="bio">
            <h1>HI, I AM <br />MUIBAT OLATOYIN AWOJOBI.</h1>
            <p>A Nigeria based software developer persionate about
                building accessible and user friendly websites.
            </p>
            <div className="btn">
            <a href='#footer' id='hero-btn'>
                Contact Me
                
                </a>
       <span className='icon'><a href="https://www.linkedin.com/in/muibat-awojobi/"><img src={In} alt="" /></a></span>
      <span className='icon'><a href="https://github.com/K-Olatotin"><img src={Git} alt="" /></a></span>
            </div>
                
        </div>

        <div className="picture">
            <img src={Me} alt="" />
        </div>
    </div>
    </div>
)
}

export default Hero