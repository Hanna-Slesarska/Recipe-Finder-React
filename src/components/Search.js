import { useEffect, useState } from 'react';
import MyRecipesComponent from '../MyRecipesComponent';


function Search() {
    const my_ID = "61f03389";
    const my_key = "b20f38f8b5aa932b63a1f00d8c9bf308";
    
    const [mySearch, setMySearch] = useState('');
    const [recipe, setRecipe] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState("avocado");
    const [healthLabels, setHealthLabels] = useState("vegan")

    useEffect(() => {
        const getRecipe = async () => {
            const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${my_ID}&app_key=${my_key}&health=${healthLabels}`);
            const data = await response.json();
            setRecipe(data.hits);
            console.log(data.hits)
        }
        getRecipe();
    }, [wordSubmitted, healthLabels])



const myRecipeSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
}
const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
  
}
return (
    <div>
        <form onSubmit={finalSearch}> 
            <div className='searchContainer'>
                <input className='search' placeholder='🍳' onChange={ myRecipeSearch } value={mySearch} />
                <button className='btnSearch' onClick={ finalSearch }>Search</button>
            </div>
            <select className="dropdown">
                <option onClick={() => setHealthLabels("vegan")}>vegan</option>
                <option onClick={() => setHealthLabels("alcohol-free")}>alcohol-free</option>
                <option onClick={() => setHealthLabels("vegetarian")}>vegetarian</option>
                <option onClick={() => setHealthLabels("diary-free")}>diary-free</option>
                <option onClick={() => setHealthLabels("egg-free")}>egg-free</option>
                <option onClick={() => setHealthLabels("gluten-free")}>gluten-free</option>
                <option onClick={() => setHealthLabels("keto-friendly")}>keto</option>
                <option onClick={() => setHealthLabels("kosher")}>kosher</option>
                <option onClick={() => setHealthLabels("low-fat")}>low fat</option>
                <option onClick={() => setHealthLabels("low-sugar")}>low sugar</option>
                <option onClick={() => setHealthLabels("paleo")}>paleo</option>
                <option onClick={() => setHealthLabels("tree-nut-free")}>tree-nut-free</option>
                <option onClick={() => setHealthLabels("peanut-free")}>peanut-free</option>
                
            </select>
      </form>
     
      
        { recipe.map( (element, index) => (
            
                <MyRecipesComponent key={ index } 
                label={element.recipe.label}
                image={element.recipe.image}
                calories={element.recipe.calories} 
                ingredients={element.recipe.ingredientLines}
                weight={element.recipe.totalWeight} 
                serving={element.recipe.yield}
                link={element.recipe.url}
                />


            
            )
        )} 
    </div>
)
}
export default Search;