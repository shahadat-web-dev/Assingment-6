// load-Category-Container
const categoryContainer = document.getElementById('categoryContainer');


// load-Plants-Container
const loadPlantsContainer = document.getElementById('plantsContainer');



// load-Category
const loadCategory = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json())
    .then(data => {
      // console.log(data.categories);
      const categories = data.categories
      categories.forEach(cat => {
        categoryContainer.innerHTML += `
        <li id="${cat.id}" class="py-2 pl-2 mt-2 hover:text-white hover:bg-[#15803D] rounded-sm cursor-pointer">${cat.category_name}</li>
        `        
      })
    })
    categoryContainer.addEventListener('click', (e) => {
      const allLi = document.querySelectorAll('li')
       
      allLi.forEach(li => {
        li.classList.remove('bg-[#15803D]' , 'text-white')
      })
      if(e.target.localName === 'li'){
        // console.log(e.target.id);
        
        e.target.classList.add('bg-[#15803D]' , 'text-white')
        loadPlants(e.target.id)
      }
    })
};






// load-All-Plants
const loadPlants = (plantId) => {
 console.log(plantId);

 
  fetch(`https://openapi.programming-hero.com/api/category/${plantId}`)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    showAllPlants(data.plants)
    
  })

};



// show-all-plants
const showAllPlants = (plants) => {
   
 loadPlantsContainer.innerHTML = '';
  plants.map(plant => {       
    loadPlantsContainer.innerHTML += `

     <div class="bg-white max-h-[400px] p-4 rounded-md">
            <img class="w-full h-48 object-cover rounded-t-md" src="${plant.image}"/>
            <h2 class="card-title font-semibold pt-3">${plant.name}</h2>
            <p class="text-sm ">${plant.description}</p>
            <div class="flex items-center justify-between mt-2">
              <h3 class="text-sm bg-[#DCFCE7] py-1 px-3 rounded-full text-[#15803D] font-medium">${plant.category}</h3>
              <h4><span class="text-sm font-semibold">৳${plant.price}</span></h4>
            </div>
            <div class="text-center ">
              <button class="bg-[#15803D] w-full rounded-full text-white py-2 mt-3 mb-3">Add to Cart</button>
            </div>
          </div>

    
    `
    

  })
  

}



loadCategory();