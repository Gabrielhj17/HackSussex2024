// JavaScript for ending the game when the car touches an obstacle

// Function to check if two elements' bounding boxes are intersecting
function isIntersecting(element1, element2) {
    var rect1 = element1.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();
    
    // Check for intersection of bounding boxes
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

// Function to detect collision between the car and obstacles
function detectCollision() {
    var car = document.getElementById('car'); // Get the car element
    var obstacles = document.getElementsByClassName('obstacle'); // Get all obstacle elements
    
    // Loop through each obstacle to check for collision
    for (var i = 0; i < obstacles.length; i++) {
        var obstacle = obstacles[i];
        if (isIntersecting(car, obstacle)) {
            // Collision detected, end the game
            endGame();
            return;
        }
    }
}


// Function to end the game
function endGame() {
    // Display a message or perform any other action to indicate the end of the game
    alert('Game Over! You collided with an obstacle.');
    window.location.href = 'index.html';
}

// Function to continuously check for collision at regular intervals
function startCollisionDetection() {
    setInterval(detectCollision, 50); // Adjust the interval for collision detection
}

// Call the function to start collision detection
startCollisionDetection();
