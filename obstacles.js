// JavaScript for moving obstacles

// Function to create and move obstacles
function moveObstacles() {
    // Create a random lane index for the obstacle
    var laneIndex = Math.floor(Math.random() * 3); // Assuming there are 3 lanes

    // Create a new obstacle element
    var obstacle = document.createElement('img');
    // Randomly choose between potHole.png and roadClosed.png
    var obstacleType = Math.random() < 0.5 ? 'potHole.png' : 'roadClosed.png';
    obstacle.src = 'Assets/' + obstacleType; // Set the obstacle image source
    obstacle.classList.add('obstacle'); // Add the 'obstacle' class for styling
    obstacle.style.right = '-100px'; // Initial position outside the screen
    
    // Set obstacle's lane position based on laneIndex
    switch (laneIndex) {
        case 0:
            obstacle.style.top = '20%'; // Top lane
            break;
        case 1:
            obstacle.style.top = '50%'; // Middle lane
            break;
        case 2:
            obstacle.style.top = '80%'; // Bottom lane
            break;
        default:
            obstacle.style.top = '20%'; // Default to top lane
            break;
    }
    
    obstacle.style.zIndex = '999'; // Ensure obstacle is on top of other elements
    document.getElementById('road').appendChild(obstacle); // Append obstacle to the road

    // Move the obstacle from right to left
    var obstacleMoveInterval = setInterval(function() {
        var currentPosition = parseInt(obstacle.style.right);
        if (currentPosition > window.innerWidth) {
            // Remove the obstacle when it's out of the screen
            clearInterval(obstacleMoveInterval);
            obstacle.remove();
        } else {
            // Move the obstacle towards the left
            obstacle.style.right = (currentPosition + 10) + 'px'; // Adjust the speed here
        }
    }, 50); // Adjust the interval for smoother animation
}

// Function to start generating obstacles at regular intervals
function startObstacleGeneration() {
    setInterval(moveObstacles, 5000); // Adjust the interval for obstacle generation
}

// Call the function to start generating obstacles
startObstacleGeneration();
