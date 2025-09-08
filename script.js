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
    console.log(data);
    showAllPlants(data.plants)
  })

};



// show-all-plants
const showAllPlants = (plants) => {
  plants.forEach(plant => {
    loadPlantsContainer.innerHTML += `

    <div>
      // <img src="${plant.image}"/>
    </div>
    
    `
  })
  

}



loadCategory();