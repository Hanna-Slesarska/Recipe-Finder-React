import avoLogo from './components/avocado.png'

function MyRecipesComponent({label, image, index, calories, weight, serving, ingredients}) {
    
   
    return (
        
            <div className='container' key = {index}> 
                <h2 className="label"> { label?.substring(0, 37) }</h2>
                <div className="line">
                    <p className="info lineobject span"> <span className='kcal'>Servings: </span> <span className='span'> </span>{ serving?.toFixed() }</p>
                    <p className='info lineobject'> { calories?.toFixed()} <span className='kcal'> Kcal </span> </p>
                    <p className='info lineobject'> { weight?.toFixed()} <span className='kcal'> g </span> </p>
                </div>
                
                <div className="imgWrapper">
                    <img className='foodpicture' src={ image } alt='food'/> 
                </div>
                    <ul className='list' >  
                        { ingredients.map ( (ingredient, index)  => ( 
                        <li key={index}>
                            {ingredient}
                        </li>
                        ))}    
                    </ul> 
                
                <hr className="break"/>
                <img className='avologo' src={ avoLogo } alt='logo'/>
            </div>
    )
}
export default MyRecipesComponent;