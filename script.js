document.addEventListener('DOMContentLoaded',function(){

const recipes=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]
let recipeContainer = document.getElementById("recipe-list");
function displayRecipes(RecipesToDisplay){
recipeContainer.innerHTML = "";
RecipesToDisplay.forEach(recipe=>{
    const card = document.createElement("div");
    card.className="recipeCard";
    card.innerHTML = `
    <img Src = "${recipe.imageSrc}" width=200px>
    <h3>${recipe.name}</h3>
    <p>${recipe.type}</p>
    <p>${recipe.rating}</p>
    <p>${recipe.time}</p>
    
    `
    recipeContainer.appendChild(card);
});
}
displayRecipes(recipes);

 // making search functionality
let searchBar = document.getElementById("search-bar");
let filteredRecipes = [...recipes];
document.getElementById("show-all").addEventListener("click",()=>filteredRecipesfn());
document.getElementById("show-veg").addEventListener("click",()=>filteredRecipesfn('veg'));
document.getElementById("show-non-veg").addEventListener("click",()=>filteredRecipesfn('non-veg'));
searchBar.addEventListener('input',(event)=>{
    let searchText = event.target.value.toLowerCase();
    filteredRecipes = recipes.filter((recipe)=>recipe.name.toLowerCase().includes(searchText));
    displayRecipes(filteredRecipes);
});

function filteredRecipesfn(type="all"){
if(type=="all"){
    displayRecipes(recipes);
}
else{
    filteredRecipes=recipes.filter((recipe)=>recipe.type==type);
    displayRecipes(filteredRecipes);
}
}
document.querySelectorAll('input[name="ratingfilter"]').forEach(radio=>{
    radio.addEventListener('change',filterByRating);

 function filterByRating(){
    let ratingAbove =document.getElementById("RatingAbove").checked;
    let ratingBelow=document.getElementById("RatingBelow").checked;
    filteredRecipes = recipes.filter((recipe)=>{
        if(ratingAbove && recipe.rating >4.0 )return true;
        if (ratingBelow && recipe.rating<4.0)return true;
         return false;
       });
   displayRecipes(filteredRecipes);
    }

});

});