document.addEventListener("DOMContentLoaded", function() {
    // Get references to the car and lanes
    const car = document.getElementById("car");

    // Function to move the car to the top lane
    function moveToTopLane() {
        car.style.top = "2%";
    }

    // Function to move the car to the middle lane
    function moveToMiddleLane() {
        car.style.top = "35%";
    }

    // Function to move the car to the bottom lane
    function moveToBottomLane() {
        car.style.top = "68%";
    }

    // Event listener to detect key presses
    document.addEventListener("keydown", function(event) {
        // Get the current top position of the car
        const carTop = parseInt(car.style.top);

        // Check if the pressed key is the up arrow key
        if (event.key === "ArrowUp" && carTop == 35) {
            moveToTopLane();
        }

        if (event.key === "ArrowUp" && carTop == 68) {
            moveToMiddleLane();
        }

        if (event.key === "ArrowDown" && carTop == 2) {
            moveToMiddleLane();
        }
        
        else if (event.key === "ArrowDown") {
            if (carTop !== 68) {
                moveToBottomLane();
            }
        }
    });
});

// Function to move the car
function moveCar(direction) {
    const car = document.getElementById("car");
    const currentPosition = parseInt(car.style.top);

    if (direction === "up" && currentPosition > 2) {
        car.style.top = (currentPosition - 33) + "%";
    } else if (direction === "down" && currentPosition < 68) {
        car.style.top = (currentPosition + 33) + "%";
    }

    // Check for collisions with obstacles
    const obstacles = document.querySelectorAll(".obstacle");
    obstacles.forEach(obstacle => {
        if (isColliding(car, obstacle)) {
            endGame();
        }
    });
}
