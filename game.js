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

document.addEventListener("DOMContentLoaded", function() {
    const roadClosed = document.getElementById("roadClosed");
    const potHole = document.getElementById("potHole");

    const lanes = document.querySelectorAll(".lane");

    // Function to animate obstacles
    function animateObstacle(obstacle) {
        let position = 100; // Start position at right edge of the screen
        const speed = 0.2; // Adjust speed as needed
        const laneIndex = Math.floor(Math.random() * lanes.length); // Randomly select a lane

        // Set initial position of obstacle
        obstacle.style.left = position + "%";
        lanes[laneIndex].appendChild(obstacle);

        // Animation loop
        const animation = setInterval(frame, 10);

        function frame() {
            if (position <= -20) { // Check if obstacle is off the screen
                clearInterval(animation);
                lanes[laneIndex].removeChild(obstacle); // Remove obstacle from lane
            } else {
                position -= speed; // Move obstacle towards left
                obstacle.style.left = position + "%";
            }
        }
    }

    // Call the animation functions as needed
    animateObstacle(roadClosed);
    animateObstacle(potHole);
});
