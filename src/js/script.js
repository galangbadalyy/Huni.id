
// Property Data
const properties = [
    {
        id: 1,
        name: "Modern Downtown Apartment",
        location: "New York, NY",
        price: 1800,
        type: "Apartment",
        bedrooms: 3,
        bathrooms: 2,
        garage: 1,
        image:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
    },
    {
        id: 2,
        name: "Cozy Studio in Midtown",
        location: "Los Angeles, CA",
        price: 1200,
        type: "Apartment",
        bedrooms: 1,
        bathrooms: 1,
        garage: 0,
        image:
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop",
    },
    {
        id: 3,
        name: "Luxury Beach House",
        location: "Miami, FL",
        price: 2800,
        type: "Villa",
        bedrooms: 4,
        bathrooms: 3,
        garage: 2,
        image:
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=400&fit=crop",
    },
    {
        id: 4,
        name: "Charming Townhouse",
        location: "Chicago, IL",
        price: 1500,
        type: "House",
        bedrooms: 3,
        bathrooms: 2,
        garage: 1,
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003d96dec?w=500&h=400&fit=crop",
    },
    {
        id: 5,
        name: "Contemporary Loft",
        location: "Seattle, WA",
        price: 1600,
        type: "Apartment",
        bedrooms: 2,
        bathrooms: 2,
        garage: 1,
        image:
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
    },
    {
        id: 6,
        name: "Suburban Family Home",
        location: "Austin, TX",
        price: 1400,
        type: "House",
        bedrooms: 3,
        bathrooms: 2,
        garage: 2,
        image:
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop",
    },
];

function renderProperties(data) {
    const grid = document.getElementById("propertiesGrid");
    const noResults = document.getElementById("noResults");

    if (data.length === 0) {
        grid.innerHTML = "";
        noResults.classList.remove("hidden");
        return;
    }

    noResults.classList.add("hidden");
    grid.innerHTML = data
        .map(
            (prop) => `
                <div class="property-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
                    <div class="relative h-64 overflow-hidden bg-slate-200">
                        <img src="${prop.image}" alt="${prop.name}" class="w-full h-full object-cover">
                        <div class="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold">
                            $${prop.price}/mo
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 mb-2">${prop.name}</h3>
                        <p class="text-slate-600 mb-4 flex items-center">
                            <i class="fas fa-map-marker-alt text-emerald-600 mr-2"></i>
                            ${prop.location}
                        </p>
                        <div class="flex justify-around text-slate-700 mb-6 py-4 border-y border-slate-200">
                            <div class="text-center">
                                <i class="fas fa-bed text-emerald-600 text-lg mb-1"></i>
                                <p class="text-sm font-semibold">${prop.bedrooms}</p>
                                <p class="text-xs text-slate-500">Beds</p>
                            </div>
                            <div class="text-center">
                                <i class="fas fa-bath text-emerald-600 text-lg mb-1"></i>
                                <p class="text-sm font-semibold">${prop.bathrooms}</p>
                                <p class="text-xs text-slate-500">Baths</p>
                            </div>
                            <div class="text-center">
                                <i class="fas fa-car text-emerald-600 text-lg mb-1"></i>
                                <p class="text-sm font-semibold">${prop.garage}</p>
                                <p class="text-xs text-slate-500">Garage</p>
                            </div>
                        </div>
                        <button class="w-full bg-linear-to-r from-emerald-600 to-emerald-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition">
                            View Details
                        </button>
                    </div>
                </div>
            `
        )
        .join("");
}

function filterProperties() {
    const location = document
        .getElementById("searchLocation")
        .value.toLowerCase();
    const price =
        parseInt(document.getElementById("searchPrice").value) || Infinity;
    const type = document.getElementById("searchType").value;

    const filtered = properties.filter((prop) => {
        const matchLocation =
            prop.location.toLowerCase().includes(location) || location === "";
        const matchPrice = prop.price <= price;
        const matchType = prop.type === type || type === "";

        return matchLocation && matchPrice && matchType;
    });

    renderProperties(filtered);
}

// Event Listeners
document
    .getElementById("searchBtn")
    .addEventListener("click", filterProperties);

// Enter key support
document
    .getElementById("searchLocation")
    .addEventListener("keypress", (e) => {
        if (e.key === "Enter") filterProperties();
    });

// Initial render
renderProperties(properties);
