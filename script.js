document.getElementById('animateButton').addEventListener('click', function() {
    const animationArea = document.getElementById('animationArea');
    animationArea.innerHTML = ''; // Clear previous animations

    const apologyMessage = document.createElement('div');
    apologyMessage.innerText = "I promise to make it up to you!";
    apologyMessage.style.fontSize = '24px';
    apologyMessage.style.opacity = 0;
    apologyMessage.style.transition = 'opacity 2s';
    animationArea.appendChild(apologyMessage);

    // Trigger the animation
    setTimeout(() => {
        apologyMessage.style.opacity = 1;
    }, 100);
});