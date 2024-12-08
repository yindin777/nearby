export function initAuth() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="bg-white p-6 rounded shadow-md">
            <h2 class="text-2xl mb-4">Login</h2>
            <form id="login-form" class="space-y-4">
                <input 
                    type="email" 
                    placeholder="Email" 
                    class="w-full p-2 border rounded"
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    class="w-full p-2 border rounded"
                    required
                />
                <button 
                    type="submit" 
                    class="w-full bg-blue-500 text-white p-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    `;

    document.getElementById('login-form').addEventListener('submit', handleLogin);
}

function handleLogin(event) {
    event.preventDefault();
    // Implement login logic
    console.log('Login Attempted');
}
