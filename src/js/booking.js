export function loadBookings() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="bookings-container">
            <h2 class="text-2xl font-bold mb-4">My Bookings</h2>
            <div id="bookings-list" class="space-y-4">
                <!-- Bookings will be dynamically loaded here -->
            </div>
        </div>
    `;

    fetchUserBookings();
}

async function fetchUserBookings() {
    try {
        // Mock booking data - replace with actual API call
        const bookings = [
            {
                id: 1,
                service: "Plumbing Repair",
                date: "2023-07-15",
                time: "10:00 AM",
                status: "Confirmed"
            },
            {
                id: 2,
                service: "Electrical Maintenance",
                date: "2023-07-20",
                time: "2:00 PM",
                status: "Pending"
            }
        ];

        const bookingsList = document.getElementById('bookings-list');
        bookingsList.innerHTML = bookings.map(booking => `
            <div class="bg-white p-4 rounded shadow-md">
                <h3 class="font-bold text-lg">${booking.service}</h3>
                <div class="flex justify-between text-gray-600">
                    <span>${booking.date} at ${booking.time}</span>
                    <span class="${
                        booking.status === 'Confirmed' 
                        ? 'text-green-500' 
                        : 'text-yellow-500'
                    }">
                        ${booking.status}
                    </span>
                </div>
                <button class="mt-2 w-full bg-red-500 text-white p-2 rounded">
                    Cancel Booking
                </button>
            </div>
        `).join('');
    } catch (error) {
        console.error("Failed to fetch bookings", error);
    }
}
