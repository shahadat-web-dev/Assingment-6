// load-Category-Container
const categoryContainer = document.getElementById('categoryContainer');


// load-Plants-Container
const loadPlantsContainer = document.getElementById('plantsContainer');


// load-all-card
const loadAllCard = document.getElementById('plantsContainer');


const loadCardAll = () => {
  fetch('https://openapi.programming-hero.com/api/plants')
  .then(res => res.json())
  .then(data => {
    console.log(data.plants);
    const plants = data.plants
    plants.forEach(plant => {
      console.log(plant);
      
      loadAllCard.innerHTML += ` 
       <div class="max-w-sm bg-white rounded-2xl shadow-md    overflow-hidden">
            <!-- Image -->
            <img
              src="${plant.image}"
              alt="Tree"
              class="w-full h-48 object-cover"
            />

            <!-- Content -->
            <div class="p-4">
              <h2 class="text-lg font-semibold text-gray-800">${plant.name}</h2>
              <p class="text-sm text-gray-600 mt-2">${plant.description}</p>

              <!-- Category + Price -->
              <div class="flex items-center justify-between mt-3">
                <span
                  class="px-3 py-1  bg-[#DCFCE7] text-xs rounded-full text-green-500">
                  ${plant.category}
                </span>
                <span class="text-lg font-semibold text-gray-800">৳${plant.price}</span>
              </div>

              <!-- Button -->
              <button
                class="w-full bg-[#15803D] text-white py-2 mt-4 rounded-full font-medium hover:bg-green-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
      
      `
      
    })
  })
}

loadCardAll();



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



// show-all-display
const loadDisplayCard = () => {
  fetch('https://openapi.programming-hero.com/api/plants')
  .then(res => res.json())
  .then(data =>(data.plants)
  )
};




// show-all-plants
 showAllPlants = (plants) => {
 loadPlantsContainer.innerHTML = '';
  plants.forEach(plant => {       
    loadPlantsContainer.innerHTML += `

    <div class="max-w-sm bg-white rounded-2xl shadow-md h-[460px]">
  <!-- Image -->
  <img
    src="${plant.image}"
    alt="Tree"
    class="w-full h-48 object-cover rounded-t-2xl "
  />

  <!-- Content -->
  <div class="p-4">
    <h2 class="text-lg font-semibold text-gray-800">${plant.name}</h2>
    <p class="text-sm text-gray-600 mt-2">${plant.description}</p>

    <!-- Category + Price -->
    <div class="flex items-center justify-between mt-3">
      <span
        class="px-3 py-1 bg-[#DCFCE7] text-xs rounded-full text-green-500"
      >
        ${plant.category}
      </span>
      <span class="text-lg font-semibold text-gray-800">৳${plant.price}</span>
    </div>

    <!-- Button -->
     <button
      class="w-full bg-[#15803D] text-white py-2 mt-4 rounded-full font-medium hover:bg-green-600 transition"
    >
      Add to Cart
    </button>
   
  </div>
</div>


    
    `
    

  });
  

}


loadDisplayCard()
loadCategory();
showAllPlants();




