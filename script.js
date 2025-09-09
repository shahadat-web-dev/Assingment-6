// clear cart

// load-Category-Container
const categoryContainer = document.getElementById('categoryContainer');

// load-Plants-Container
const loadPlantsContainer = document.getElementById('plantsContainer');

// 
const addContainer = document.getElementById('addCardContainer');

const yourCartContainer = document.getElementById('your-cart');

// total price element
const cartPriceElement = document.getElementById('price'); 
let cartPrice = 0; // total হিসাব রাখার জন্য আলাদা ভ্যারিয়েবল

// function: total price update
function updateCartPrice(amount) {
  cartPrice += amount;
  cartPriceElement.innerText = cartPrice; // শুধু সংখ্যা update হবে
}

// function: remove price update
function removeCartPrice(amount) {
  cartPrice -= amount;
  if (cartPrice < 0) cartPrice = 0;
  cartPriceElement.innerText = cartPrice;
}

// handle add to cart (for both all plants + category plants)
loadPlantsContainer.addEventListener('click',(e) => {
  if(e.target.id === 'addCardContainer' || e.target.id === 'button-click'){

    // card title
    const title = e.target.parentNode.children[0].innerText;

     alert(`${title} has been added to the cart.`)  

    // card price (handle both cases)
    let priceText = "";
    const priceElement = e.target.parentNode.querySelector("p span, span.text-lg.font-semibold.text-gray-800");
    if(priceElement){
      priceText = priceElement.innerText;
    }

    // remove ৳ sign & convert to number
    const price = parseFloat(priceText.replace(/[^\d.]/g, "")) || 0;

    // cart UI add
    const cartItem = document.createElement("div");
    cartItem.className = "flex items-center justify-between bg-[#F0FDF4] p-4 rounded-lg mt-2";
    cartItem.innerHTML = `
        <div>
          <h2 class="font-semibold text-lg">${title}</h2>
          <h3 class="text-[#879395] mt-1">৳${price}</h3>
        </div>
        <div class="clear-btn cursor-pointer"><i class="fa-solid fa-xmark text-[#8C8C8C]"></i></div> 
    `;

    // remove button event
    cartItem.querySelector(".clear-btn").addEventListener("click", () => {
      cartItem.remove();
      removeCartPrice(price);
    });

    yourCartContainer.appendChild(cartItem);

    // total price update
    updateCartPrice(price);
  }
})

// load-all-card
const loadAllCard = document.getElementById('plantsContainer');

const loadCardAll = () => {
  fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => {
      const plants = data.plants
      plants.forEach(plant => {
        loadAllCard.innerHTML += ` 
       <div  class="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">
            <!-- Image -->
            <img
              src="${plant.image}"
              alt="Tree"
              class="w-full h-48 object-cover"
            />

            <!-- Content -->
            <div id="${plant.id}" class="p-4">
              <h2 class="text-lg card-title font-semibold text-gray-800">${plant.name}</h2>
              <p class="text-sm text-gray-600 mt-2">${plant.description}</p>

              <!-- Category + Price -->
              <div class="flex items-center justify-between mt-3">
                <span
                  class="px-3 py-1 bg-[#DCFCE7] text-xs rounded-full text-green-500">
                  ${plant.category}
                </span>
                <p class="text-lg font-semibold text-gray-800">৳<span>${plant.price}</span></p>
              </div>

              <!-- Button -->
              <button id="addCardContainer"
                class="w-full cursor-pointer bg-[#15803D] text-white py-2 mt-4 rounded-full font-medium hover:bg-green-600 transition"
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
      li.classList.remove('bg-[#15803D]', 'text-white')
    })
    if (e.target.localName === 'li') {
      e.target.classList.add('bg-[#15803D]', 'text-white')
      loadPlants(e.target.id)
    }
  })
};

// load-All-Plants
const loadPlants = (plantId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${plantId}`)
    .then(res => res.json())
    .then(data => {
      showAllPlants(data.plants)
    })
};

// show-all-display
const loadDisplayCard = () => {
  fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => (data.plants))
};

// show-all-plants
showAllPlants = (plants = []) => {
  loadPlantsContainer.innerHTML = '';
  plants.map(plant => {
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
            class="px-3 py-1 bg-[#DCFCE7] text-xs rounded-full text-green-500">
            ${plant.category}
          </span>
          <span class="text-lg font-semibold text-gray-800">৳${plant.price}</span>
        </div>

        <!-- Button -->
        <button id="button-click"
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
