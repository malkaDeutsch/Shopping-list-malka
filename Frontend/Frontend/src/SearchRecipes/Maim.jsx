import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Main.css';
import Recipe from './Recipe';

const Main = () => {
  const [quer, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(5);
  const [NoRecipeFound, setNoRecipeFound] = useState('');
  const [displayAllRecip, setDisplayAllRecip] = useState(true);
  const [recipToDisplay, setRecipToDisplay] = useState();
  const [arr, setArr] = useState([]);
  const [index, setIndex] = useState(0);
  const [colorSearchBtn, setColorSearchBtn]=useState("")

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {

      setColorSearchBtn("red")
      handleSearch();
    }
  };
  const handleSearch = () => {
    setColorSearchBtn("red")
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/recipe?query=${quer}`,
          {
            headers: {
              'X-Api-Key': 'hFGgRRPKvdXFUdzvsEUFFQ==sykDZUOz4l4Zvy5k',
            },
            contentType: 'application/json',
          }
        );
        setRecipes(response.data);
        if (response.data.length < 1) {
          setNoRecipeFound(
            "סליחה...לא מצאנו את המתכון שביקשת, אנא נסה אחד אחר"
          );
          setQuery('');
        } else {
          setNoRecipeFound('');
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getImageValue = (recipe) => {
      let img=arr[index];
      confirm.log(img);
      setIndex(index+1);
      return img;
      };

    const generateImg = async () => {
      const query = quer;
      const apiKey = 'UaVEiuQB7LCjKqNcPOpbcaAYC4n4bxU0ghGOnkB3utM';
      const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
      const arrTemp=[];
     await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const images = data.results;
          console.log("img:",images)
          images.map((img)=>{
            arrTemp.push(img.links.download)
          });
        setArr(arrTemp);
         recipes.map((recipe) => {
          return {
          ...recipe,
          image: "https://unsplash.com/photos/t8hTmte4O_g/download?ixid=M3w1MTg3NTF8MHwxfHNlYXJjaHwyfHxwYXN0YXxlbnwwfHx8fDE2OTg1Mjc1ODJ8MA"
            };
          });
        // setRecipes(u); 
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    fetchRecipes();
    generateImg()
  
  };
const func=()=>{

let arr= arr[index];
setIndex(index+1);
return arr;
}
 

  const handleDisplay = (recipe) => {
    setDisplayAllRecip(false);
    setRecipToDisplay(recipe);
    console.log('Recipe to display:', recipToDisplay);
  };

  // Pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <header>
        <h1>חיפוש מתכונים</h1>
        <div className="buttons">
          {/* <button>Add to favorites</button>
          <button>Send to a friend</button> */}
        </div>
      </header>
      <main>
        <input
          autoFocus
          type="text"
          placeholder="בחר מאכל אנחנו כבר נביא את המתכון..."
          value={quer}
          onKeyPress={handleKeyPress}
          onChange={(event) => setQuery(event.target.value)}
          

        />
        <button onClick={handleSearch} style={{backgroundColor:"lightgreen" ,border:`3px solid ${colorSearchBtn}`}}>תנו לי מתכון</button>
        <p style={{color:"red", marginTop:"10px"}}>כרגע החיפוש הוא רק באנגלית , שיפורים בדרך*</p>

        <h3>{NoRecipeFound}</h3>
        {displayAllRecip ? (
          <ul className="recipes-list">
            {currentRecipes.map((recipe, index) => (
              <li key={index} className="recipe-item">
                <div className="recipe-square" onClick={() => handleDisplay(recipe)}>
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <Recipe recipe={recipToDisplay} />
            {/* <button  onClick={setDisplayAllRecip(true)}>Go back to all recipes</button>   */}
          </>
        )}

        {/* pagination */}
        <div className="pagination">
          {Array.from({ length: Math.ceil(recipes.length / recipesPerPage) }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
             <p style={{color:"blue"}}> {index + 1}</p>
            </button>
          ))}
        </div>
      </main>

      <div class="advertisements">

</div>

  </div>
  );
};

export default Main;
