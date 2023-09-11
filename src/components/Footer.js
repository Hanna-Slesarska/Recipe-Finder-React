import logo from './logoE.png';

function Footer() {
    return (
        <div className='footerContainer'>
             <a className='footer dev' href='https://github.com/Hanna-Slesarska' target="_blank" rel="noreferrer">
          Developed by Hanna SLESARSKA 
        </a>

        <a  href='https://www.edamam.com/' target="_blank" rel="noreferrer">
          <img className='edamam' src={ logo } alt="edamam" />
        </a> 
        </div>
    )
}
export default Footer;