const wheel = document.querySelector('.wheel');
const spinButton = document.getElementById('spin-button');
let spinning = false;

spinButton.addEventListener('click', () => {
    if (!spinning) {
        const randomDegree = Math.floor(Math.random() * 360); // Random degree for spinning
        const totalDegree = 720 + randomDegree; // Number of degrees to spin (2 full turns + random)

        spinning = true;

        wheel.style.transition = 'transform s ease-out';
        wheel.style.transform = `rotate(${totalDegree}deg)`;

        setTimeout(() => {
            // Add logic here to determine the result based on where the wheel stops
            alert('You landed on something!');
            spinning = false;
        }, 5000); // Adjust this time to match the wheel's transition duration
    }
});


// Example of adding dynamic segments to the wheel
const segments = ['Biriyani', '5000rs', 'Laptop', 'Fuel', 'Nothing'];

segments.forEach((segmentText, index) => {
    const segment = document.createElement('div');
    segment.className = 'segment';
    segment.style.transform = `rotate(${(index / segments.length) * 360}deg)`;
    segment.textContent = segmentText;
    wheel.appendChild(segment);
});

