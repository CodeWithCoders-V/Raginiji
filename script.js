const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const cta = document.querySelector('.buttons');
const glitterEffectContainer = document.querySelector('.glitter-effect');

noButton.addEventListener('mouseenter', () => {
    const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(noButton);

    if (yesIndex < noIndex) {
        cta.insertBefore(noButton, yesButton);
    } else {
        cta.insertBefore(yesButton, noButton);
    }
});

yesButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create glitter effect
    createGlitterEffect();

    // Redirect after a short delay
    setTimeout(() => {
        window.location.href = 'roll.html'; // Redirect to index1.html
    }, 1000); // Change the timeout duration if needed
});

// Function to create glitter effect
function createGlitterEffect() {
    glitterEffectContainer.style.display = 'block'; // Show the glitter effect container

    // Create a glitter element
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');

    // Randomly position the glitter effect
    glitter.style.top = `${Math.random() * 100}vh`;
    glitter.style.left = `${Math.random() * 100}vw`;

    // Append the glitter to the container
    glitterEffectContainer.appendChild(glitter);

    // Remove the glitter after the animation completes
    setTimeout(() => {
        glitterEffectContainer.removeChild(glitter);
    }, 1000); // Duration of the glitter effect should match the animation duration
}
