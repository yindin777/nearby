import { initAuth } from './auth.js';
import { loadServices } from './services.js';
import { loadBookings } from './booking.js';

class NearByApp {
    constructor() {
        this.initializePWA();
        this.bindEvents();
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
        `;
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    new NearByApp();
});
