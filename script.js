function startGame() {
    // Check if user profile already exists
    if (!localStorage.getItem("userProfile")) {
        // Create a new user profile
        const newProfile = {
            username: prompt("Enter your username:", "Player1"), // You could replace this with a form input if needed
            score: 0,
            level: 1,
            inventory: []
        };

        // Store the profile in localStorage
        localStorage.setItem("userProfile", JSON.stringify(newProfile));
    }

    // Clear the main menu screen
    const mainMenu = document.querySelector('.main-menu');
    mainMenu.style.display = 'none'; // Hide the main menu

    // Show the main game screen
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.style.display = 'block'; // Show the main game screen

    // (Optional) Initialize game logic, load assets, etc.
    initializeGame();
}

function initializeGame() {
    // Your game initialization logic here (e.g., starting the game loop, loading assets, etc.)
    console.log("Game is starting...");
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    console.log("User Profile:", userProfile);

    // Example of loading the game based on the user's profile
    // You could dynamically update the game screen based on their level, inventory, etc.
}

