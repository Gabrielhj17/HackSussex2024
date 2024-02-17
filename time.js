let startTime; // Variable to store the start time of the game
let timerInterval; // Variable to store the interval ID for the timer

function startGame() {
    startTime = new Date(); // Set the start time to the current time
    timerInterval = setInterval(updateTimer, 1000); // Start the timer interval
    // Additional game setup code can go here
}

function updateTimer() {
    const currentTime = new Date(); // Get the current time
    const elapsedTime = currentTime - startTime; // Calculate elapsed time in milliseconds
    const minutes = Math.floor(elapsedTime / (1000 * 60)); // Calculate minutes
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000); // Calculate seconds

    // Format minutes and seconds with leading zeros
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Display the formatted time
    document.getElementById("timer").textContent = formattedTime;
}

// Call startGame() to start the game and timer
startGame();
