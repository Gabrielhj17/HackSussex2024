// Function to check collision between two elements
function isColliding(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

// Function to end the game
function endGame() {
    clearInterval(gameInterval); // Stop generating obstacles
    alert("Game Over!"); // Show game over message
    // You can add further logic here, like resetting the game or showing a game over screen
}
