document.addEventListener("DOMContentLoaded", function() {
    // Get references to the car and lanes
    const car = document.getElementById("car");

    // Function to move the car to the top lane
    function moveToTopLane() {
        car.style.top = "2%";
        car.lane = 1;
    }

    // Function to move the car to the middle lane
    function moveToMiddleLane() {
        car.style.top = "35%";
        car.lane = 2;
    }

    // Function to move the car to the bottom lane
    function moveToBottomLane() {
        car.style.top = "68%";
        car.lane = 3;
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

