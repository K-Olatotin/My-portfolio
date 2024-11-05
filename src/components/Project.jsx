import './Project.css'
import Newsimage from '../assets/active-states.jpg'
import Arrow from '../assets/right-arrow-alt-regular-24.png'
import Form from '../assets/desktop-design.jpg'
import Country from '../assets/countries.jpeg'
import Weather from '../assets/weather.jpeg'
import Formimage from '../assets/form.jpeg'
const Project =() =>{
    return(
      <div>
    <div id='project' className="container">
        <div className="text">
            <h1>FEATURED PROJECTS</h1>
            <p>Here are some of the selected projects that showcase
                my passion for software development.
            </p>
        </div>
        <div className="projects">
            <div className="project-1">
                <div className="card">
                    <img src={Newsimage} alt=""/>
                </div>
                <div className="info">
                    <h3>Blog site for World News</h3>
                    <p>Mastered CSS Grid complexities in building an innovstive
                        news homepage, navigating intricate design decisions for 
                        a seamless user experience.
                    </p>
                    <h5>PROJECT INFO</h5>
                    <article className='reals'>
                        <p className='reals-1'>Client</p>
                        <p className='reals-1'>World News</p>
                    </article>

                    <article className='reals'>
                        <p className='reals-1'>Year</p>
                        <p className='reals-1'>2024</p>
                    </article>
                             <hr />
                        <div className="link">
                        <a href="https://news-page-kappa.vercel.app/" target="_blank" rel="noopener noreferrer"> VIEW PROJECT
                            <span><img src={Arrow} alt=""/></span>
                            </a>
                        </div>
                </div>
            </div>

            <div className="project-2">
                <div className="card">
                    <img src={Form} alt="" />
                </div>
                <div className="info">
                    <h3>Contact Us Form App</h3>
                    <p>
                    This is a simple and responsive Contact Us Form application designed to handle user inquiries effectively. 
                    Users can submit their details and message through the form, and the app processes these inputs efficiently.
                    </p>
                    <h5>PROJECT INFO</h5>

                    <article className='reals'>
                        <p className='reals-1'>Year</p>
                        <p className='reals-1'>2024</p>
                    </article>

                    <article className='reals'>
                    <p className='reals-1'>Technologies Used</p>
                    <p className='reals-1'>HTML, CSS, Javascript</p>
                    </article>
                             <hr />
                        <div className="link">
                        <a href="https://contact-us-form-peach.vercel.app/" target="_blank" rel="noopener noreferrer"> VIEW PROJECT
                            <span><img src={Arrow} alt="" /></span>
                            </a>
                        </div>
                </div>
            </div>

            <div className="project-3">
                <div className="card">
                    <img src={Country} alt="" />
                </div>
                <div className="info">
                    <h3>All Country App</h3>
                    <p>The All Country App is a web application designed to provide users with information about countries worldwide. 
                        It features a responsive design, a searchable list of countries, 
                        and detailed data on each country`s demographics, geography, and more.
                    </p>
                    <h5>PROJECT INFO</h5>

                    <article className='reals'>
                        <p className='reals-1'>Year</p>
                        <p className='reals-1'>2024</p>
                    </article>

                    <article className='reals'>
                        <p className='reals-1'>Technologies Used</p>
                        <p className='reals-1'>HTML, CSS, Javascript(API)</p>
                    </article>
                             <hr />
                        <div className="link">
                        <a href="https://country-six-beta.vercel.app/" target="_blank" rel="noopener noreferrer"> VIEW PROJECT
                            <span><img src={Arrow} alt="" /></span>
                            </a>
                        </div>
                </div>
            </div>

            <div className="project-4">
                <div className="card">
                    <img src={Weather} alt="" />
                </div>
                <div className="info">
                    <h3>Simple Weather App</h3>
                    <p>The Simple Weather App for Nigerian States provides accurate, 
                    real-time weather information specifically for states across Nigeria. 
                    This easy-to-use app offers essential weather data, such as temperature, 
                    humidity, wind speed, and current conditions, tailored for local use.
                    </p>
                    <h5>PROJECT INFO</h5>

                    <article className='reals'>
                        <p className='reals-1'>Year</p>
                        <p className='reals-1'>2024</p>
                    </article>

                    <article className='reals'>
                        <p className='reals-1'>Technologies Used</p>
                        <p className='reals-1'>HTML, CSS, Javascript(API)</p>
                    </article>
                             <hr />
                        <div className="link">
                        <a href="https://weather-app-zeta-nine-54.vercel.app/" target="_blank" rel="noopener noreferrer"> VIEW PROJECT
                            <span><img src={Arrow} alt="" /></span>
                            </a>
                        </div>
                </div>
            </div>

            <div className="project-3">
                <div className="card">
                    <img src={Formimage} alt="" />
                </div>
                <div className="info">
                    <h3>Registration Form</h3>
                    <p>The Registration Form is a simple, user-friendly form designed to collect essential user information during the registration process. 
                        This form can be integrated into web applications, portals, or any project requiring user sign-ups.
                    </p>
                    <h5>PROJECT INFO</h5>

                    <article className='reals'>
                        <p className='reals-1'>Year</p>
                        <p className='reals-1'>2024</p>
                    </article>

                    <article className='reals'>
                        <p className='reals-1'>Technologies Used</p>
                        <p className='reals-1'>HTML, CSS, Javascript</p>
                    </article>
                             <hr />
                        <div className="link">
                        <a href="https://registration-form-two-mu.vercel.app/" target="_blank" rel="noopener noreferrer"> VIEW PROJECT
                            <span><img src={Arrow} alt="" /></span>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
    
    }
    
    export default Project