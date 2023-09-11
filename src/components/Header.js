import logo from './avocado.png';

function Header() {
    return (
        <div>
          
          <div className='header-container'>
                 <img className="logo" src={logo} alt="logo" />
                <h1>recipefinder</h1>
                </div>
                
              
        </div>
    )
}
export default Header;