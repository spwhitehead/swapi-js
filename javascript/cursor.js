document.addEventListener("DOMContentLoaded", () => {
    // Create custom cursor elements
    const customCursor = document.createElement("div");
    customCursor.id = "custom-cursor";
    document.body.appendChild(customCursor);

    const blade = document.createElement("div");
    blade.id = "blade";
    customCursor.appendChild(blade);

    let rotationSpeed = 5; // Default rotation speed (degrees per frame)
    let isRotating = false;
    let rotationAngle = 0;
    let isBladeExtended = false; // Flag to track blade state
    let rotateDirection = 1; // 1 for clockwise, -1 for counter-clockwise

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Handle click event to toggle the lightsaber blade
    document.addEventListener("click", () => {
        if (isBladeExtended) {
            blade.style.height = "0"; // Retract blade
        } else {
            blade.style.height = "100px"; // Extend blade
        }
        isBladeExtended = !isBladeExtended; // Toggle blade state
    });

    // Handle key down events to start/stop rotation or change direction
    document.addEventListener("keydown", (e) => {
        if (e.key === "r") {
            isRotating = !isRotating;
            if (isRotating) {
                requestAnimationFrame(rotateCursor);
            }
        } else if (e.key === "l") {
            rotateDirection *= -1; // Change rotation direction
        }
    });

    // Function to rotate the cursor
    const rotateCursor = () => {
        if (isRotating) {
            rotationAngle = (rotationAngle + rotationSpeed * rotateDirection) % 360;
            customCursor.style.transform = `rotate(${rotationAngle}deg)`;
            requestAnimationFrame(rotateCursor);
        }
    };

    // Function to change rotation speed
    const setRotationSpeed = (speed) => {
        rotationSpeed = speed;
    };

    // Example: change rotation speed (you can call this function with different values)
    setRotationSpeed(30); // Change this value to set a different rotation speed
});
