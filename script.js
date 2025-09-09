// DOM Elements
const loadPlantsContainer = document.getElementById("plantsContainer");
const yourCartContainer = document.getElementById("yourCartContainer");
const cartTotal = document.getElementById("cartTotal");
let total = 0;

// ✅ Toast Function
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-msg");
  toastMsg.innerText = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 2000);
}

// ✅ Loader Functions
function showLoader() {
  document.getElementById("loader").classList.remove("hidden");
}
function hideLoader() {
  document.getElementById("loader").classList.add("hidden");
}

// ✅ Add to Cart Handler
loadPlantsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const card = e.target.closest("div");
    const title = card.querySelector("h3, h2")?.innerText || "Plant";
    const price = parseFloat(card.querySelector("p span")?.innerText || "0");

    // ✅ Toast instead of alert
    showToast(`${title} has been added to the cart.`);

    // Add cart item
    const cartItem = document.createElement("div");
    cartItem.className =
      "flex items-center justify-between bg-green-50 p-3 rounded-lg";
    cartItem.innerHTML = `
      <div>
        <h3 class="font-semibold">${title}</h3>
        <p class="text-gray-600">৳${price}</p>
      </div>
      <button class="clear-btn text-red-500 font-bold">✖</button>
    `;

    // Remove item event
    cartItem.querySelector(".clear-btn").addEventListener("click", () => {
      cartItem.remove();
      total -= price;
      cartTotal.innerText = total;
      showToast(`${title} has been removed from the cart.`);
    });

    yourCartContainer.appendChild(cartItem);

    // Update total
    total += price;
    cartTotal.innerText = total;
  }
});

// ✅ Category Click Handler
document.getElementById("categoryContainer").addEventListener("click", (e) => {
  if (e.target.classList.contains("category-btn")) {
    showLoader();

    // Fake API delay (2 sec)
    setTimeout(() => {
      hideLoader();

      // Example: Load category-specific card
      loadPlantsContainer.innerHTML = `
        <div class="border bg-white p-4 rounded-xl shadow">
          <h3 class="font-semibold text-lg">${e.target.innerText} Plant</h3>
          <p class="text-gray-600">৳<span>500</span></p>
          <button class="mt-3 btn btn-sm bg-green-600 text-white">Add to Cart</button>
        </div>
      `;
    }, 2000);
  }
});
