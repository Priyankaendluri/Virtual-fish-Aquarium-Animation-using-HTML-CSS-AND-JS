// Randomly move fish within the aquarium
function moveFish() {
    const fish = document.querySelectorAll('.fish');

    fish.forEach(f => {
        const randomTop = Math.floor(Math.random() * 80) + '%';
        const randomLeft = Math.floor(Math.random() * 80) + '%';
        
        // Move fish to random position within aquarium bounds
        f.style.top = randomTop;
        f.style.left = randomLeft;
    });
}

// Call moveFish every 3 seconds to randomize fish positions
setInterval(moveFish, 3000);

