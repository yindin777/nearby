import { initAuth } from './auth.js';
import { loadServices } from './services.js';
import { loadBookings } from './booking.js';

class NearByApp {
    constructor() {
        this.initializePWA();
        this.bindEvents();
        this.initMap();  // Added map initialization
    }

    initializePWA() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered');
                });
        }
    }

    bindEvents() {
        document.getElementById('home-btn').addEventListener('click', () => this.loadHome());
        document.getElementById('services-btn').addEventListener('click', () => loadServices());
        document.getElementById('bookings-btn').addEventListener('click', () => loadBookings());
        document.getElementById('login-btn').addEventListener('click', () => initAuth());
    }

    loadHome() {
        const content = document.getElementById('content');
        content.innerHTML = `
            <div class="text-center">
                <h2 class="text-2xl font-bold mb-4">Welcome to NearBy</h2>
                <p>Find local services near you instantly!</p>
            </div>
            <!-- Added dynamic content for the map -->
            <div id="map" class="w-full h-64 bg-gray-300">Map will be here</div>
        `;
        this.initMap();  // Reinitialize the map when loading home
    }

    // Added map initialization function
    initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) return;  // Ensure the map element exists before initializing

        // For now, using a simple Google Map example:
        const map = new google.maps.Map(mapElement, {
            center: { lat: 37.7749, lng: -122.4194 },  // Default to San Francisco
            zoom: 12
        });
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    new NearByApp();
});
