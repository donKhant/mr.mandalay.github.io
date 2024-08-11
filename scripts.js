// Optional: You can add JavaScript to handle automatic sliding or navigation buttons

document.addEventListener('DOMContentLoaded', function() {
    // Select the slider element
    const slider = document.querySelector('.slider');
    
    // Function to move the slider to the next slide
    function moveSlider() {
        // Calculate the new scroll position
        const scrollAmount = slider.scrollWidth / slider.childElementCount;
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    
    // Automatically move the slider every 3 seconds
    setInterval(moveSlider, 3000);
});
