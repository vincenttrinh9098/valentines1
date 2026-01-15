
const button = document.getElementById('noButton');
const countDisplay = document.getElementById('count');
let clickCount = 0;

function moveButton() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Calculate random position ensuring button stays fully visible
    const maxX = windowWidth - buttonWidth - 20;
    const maxY = windowHeight - buttonHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

// Move button on click
button.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
});



function openModal() {
    // Show the modal
    document.getElementById('cloudModal').classList.add('show');
}

function closeModal() {
    document.getElementById('cloudModal').classList.remove('show');
}

// Close modal when clicking outside of it
document.addEventListener('click', function(event) {
    const modal = document.getElementById('cloudModal');
    if (event.target === modal) {
        closeModal();
    }
});