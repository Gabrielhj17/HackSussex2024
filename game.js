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
        if (event.key === "ArrowUp") {
            // Move the car up unless it's already at the top lane
            if (carTop == 35) {
                moveToTopLane();
            }
            else if (carTop == 68) {
                moveToMiddleLane();
            }
        }
        
        // Check if the pressed key is the down arrow key
        else if (event.key === "ArrowDown") {
            // Move the car down unless it's already at the bottom lane
            if (carTop == 2) {
                moveToBottomLane();
            }
            else if (carTop == 35) {
                moveToBottomLane();
            }
        }
    });
});
