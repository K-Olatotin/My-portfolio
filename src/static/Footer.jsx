import './Footer.css'
import In from '../assets/linkedin-logo-24.png'
import Git from '../assets/github-logo-24.png'
const Footer =() =>{
    return(
      <div>
      <footer id='footer' className="footer">
      <div className="footer-left">
        <h2>LET`s CONNECT</h2>
        <p>Say hello at <a href="tmua91a@gmail.com">tmua91@gmail.com</a></p>
        <p>For more info, here’s my <a href="https://sapphire-rennie-15.tiiny.site" target="_blank" rel="noopener noreferrer">resume</a></p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/muibat-awojobi/" target="_blank"><img src={In} alt="LinkedIn" /></a>
          <a href="https://github.com/K-Olatotin" target="_blank"><img src={Git} alt="GitHub" /></a>
        </div>
        <div className="copy">
        <p>&copy; 2024 Muibat O. A.</p>
        </div>
      </div>
      
      <div className="footer-right">
        <form action="#" method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </form>
        <div className="sub">
            <button id='footer-btn'>SUBMIT</button>
          </div>
      </div>
    </footer>
      </div>
    )
    
    }
    
    export default Footer