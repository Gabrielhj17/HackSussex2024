// JavaScript for moving obstacles
var obstacleSpeed = 10;
var interval = 5000; // Adjust the interval for obstacle generation
// Function to create and move obstacles
function moveObstacles() {
    // Create a random lane index for the obstacle
    var laneIndex = Math.floor(Math.random() * 3);

    var speed = 10;

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
            obstacle.lane = 1;
            break;
        case 1:
            obstacle.style.top = '50%'; // Middle lane
            obstacle.lane = 2;
            break;
        case 2:
            obstacle.style.top = '80%'; // Bottom lane
            obstacle.lane = 3;
            break;
        default:
            obstacle.style.top = '20%'; // Default to top lane
            obstacle.lane = 1;
            break;
    }
    
    obstacle.style.zIndex = '999'; // Ensure obstacle is on top of other elements
    document.getElementById('road').appendChild(obstacle); // Append obstacle to the road

    // Move the obstacle from right to left
    var obstacleMoveInterval = setInterval(function() {
        var currentPosition = parseInt(obstacle.style.right);
        if (currentPosition > (window.innerWidth - window.innerWidth * 0.2)) {
            // Remove the obstacle when it's out of the screen
            clearInterval(obstacleMoveInterval);
            obstacle.remove();
            incrementScore(5);
        } else {
            // Move the obstacle towards the left
            obstacle.style.right = (currentPosition + obstacleSpeed) + 'px'; // Adjust the speed here
        }
    }, 50); // Adjust the interval for smoother animation
}

// Function to start generating obstacles at regular intervals
function startObstacleGeneration() {
    setInterval(moveObstacles, interval); // Adjust the interval for obstacle generation
}

// Function to increment the score
function incrementScore(scoreToAdd) {
    var scoreElement = document.getElementById('score');
    var currentScore = parseInt(scoreElement.innerText.split(':')[1].trim());
    var newScore = currentScore + scoreToAdd;
    scoreElement.innerText = 'Score: ' + newScore;

    if (newScore % 30 === 0) {
        // If the new score is a multiple of 50, increment the speed
        incrementSpeed();
    }
}

// Function to increment the speed
function incrementSpeed() {
    var speedElement = document.getElementById('speed');
    var currentSpeed = parseInt(speedElement.innerText.split(':')[1].trim());
    var newSpeed = currentSpeed + 5;
    speedElement.innerText = 'Speed: ' + newSpeed;
    obstacleSpeed = newSpeed; // Update the obstacle speed variable
    interval -= 500;
    startObstacleGeneration(); // Restart obstacle generation with the new speed
}

// Call the function to start generating obstacles
startObstacleGeneration();
