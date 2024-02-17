// Create an array to keep track of obstacle presence in each lane
const laneOccupied = [false, false, false];

function animateObstacle(obstacleType) {
    const lanes = document.querySelectorAll(".lane");

    // Iterate over the lanes
    for (let laneIndex = 0; laneIndex < lanes.length; laneIndex++) {
        // Check if the current lane is occupied by an obstacle
        if (!laneOccupied[laneIndex]) {
            const lane = lanes[laneIndex];
            const obstacle = document.createElement("img");

            obstacle.src = obstacleType.src;
            obstacle.alt = obstacleType.alt;
            obstacle.classList.add("obstacle");
            obstacle.style.position = "absolute";

            let position = Math.random() * 100 + 100;
            obstacle.style.left = position + "%";
            lane.appendChild(obstacle);

            laneOccupied[laneIndex] = true;

            const speed = 0.3;
            const animation = setInterval(frame, 10);

            function frame() {
                position -= speed;
                obstacle.style.left = position + "%";

                if (position <= -20) {
                    clearInterval(animation);
                    lane.removeChild(obstacle);
                    laneOccupied[laneIndex] = false;
                }
            }

            // Break after placing an obstacle in one lane
            break;
        }
    }
}

// Define obstacle types
const roadClosed = {
    src: "Assets/roadClosed.png",
    alt: "Road Closed"
};
const potHole = {
    src: "Assets/potHole.png",
    alt: "Pothole"
};

// Call the animation functions as needed
setInterval(function() {
    animateObstacle(roadClosed);
    animateObstacle(potHole);
}, 3000); // Generate obstacles every 3 seconds
