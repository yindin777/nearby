export function loadServices() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="services-container">
            <h2 class="text-2xl font-bold mb-4">Nearby Services</h2>
            <div id="services-list" class="space-y-4">
                <!-- Services will be dynamically loaded here -->
            </div>
        </div>
    `;

    fetchNearbyServices();
}

async function fetchNearbyServices() {
    try {
        // Mock service data - replace with actual API call
        const services = [
            {
                id: 1,
                name: "Plumbing Service",
                description: "Professional plumbing repairs",
                price: "$50/hour",
                distance: "2 km away"
            },
            {
                id: 2,
                name: "Electrical Repairs",
                description: "Expert electrical maintenance",
                price: "$75/hour",
                distance: "3 km away"
            }
        ];

        const servicesList = document.getElementById('services-list');
        servicesList.innerHTML = services.map(service => `
            <div class="bg-white p-4 rounded shadow-md">
                <h3 class="font-bold text-lg">${service.name}</h3>
                <p class="text-gray-600">${service.description}</p>
                <div class="flex justify-between mt-2">
                    <span class="text-blue-500">${service.price}</span>
                    <span class="text-gray-500">${service.distance}</span>
                </div>
                <button class="mt-2 w-full bg-blue-500 text-white p-2 rounded">
                    Book Service
                </button>
            </div>
        `).join('');
    } catch (error) {
        console.error("Failed to fetch services", error);
    }
}
