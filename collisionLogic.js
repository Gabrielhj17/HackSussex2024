// JavaScript for ending the game when the car touches an obstacle
// Function to check if two elements are colliding
function isColliding(element1, element2) {
    var rect1 = element1.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();
    
    // Check if any of the car's edges are overlapping with the obstacle's edges
    return rect1.x < rect2.x + rect2.width && 
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height && 
            rect1.y + rect1.height > rect2.y;

}

// Function to detect collision between the car and obstacles
function detectCollision() {
    var car = document.getElementById('car'); // Get the car element
    var obstacles = document.getElementsByClassName('obstacle'); // Get all obstacle elements
    
    // Loop through each obstacle to check for collision
    for (var i = 0; i < obstacles.length; i++) {
        var obstacle = obstacles[i];
        var carLane = car.lane; // Get the lane of the car
        var obstacleLane = obstacle.lane; // Get the lane of the obstacle
        
        // Check if the car and obstacle are in the same lane
        if (carLane === obstacleLane) {
            if (parseInt(obstacle.style.right) < parseInt(car.style.left)) {
                // If the obstacle has passed the car, skip collision detection for it
                continue;
            }
            else if (isColliding(car, obstacle)) {
                // Collision detected, end the game
                endGame();
                return;
            }
        }
    }
}

// Function to end the game
function endGame() {
    alert('Game Over! You hit an obstacle');
    window.location.href = 'index.html';
}

// Function to continuously check for collision at regular intervals
function startCollisionDetection() {
    setInterval(detectCollision, 50); // Adjust the interval for collision detection
}

// Call the function to start collision detection
startCollisionDetection();
