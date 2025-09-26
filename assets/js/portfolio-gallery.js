// Portfolio Gallery Variables
let currentGallery = [];
let currentImageIndex = 0;

// Portfolio Gallery Functions
function openGallery(projectIndex) {
    const portfolioItems = document.querySelectorAll('.portfolio-item-inner');
    const selectedItem = portfolioItems[projectIndex];
    const imagesData = selectedItem.getAttribute('data-images');
    
    if (imagesData) {
        currentGallery = imagesData.split(',');
        currentImageIndex = 0;
        
        const modal = document.getElementById('portfolioModal');
        const modalImage = document.getElementById('modalImage');
        const counter = document.getElementById('modalCounter');
        
        modalImage.src = currentGallery[0];
        counter.textContent = `1 / ${currentGallery.length}`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeGallery() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    if (currentGallery.length === 0) return;
    
    const modalImage = document.getElementById('modalImage');
    const counter = document.getElementById('modalCounter');
    
    // Add changing class for animation
    modalImage.classList.add('changing');
    
    setTimeout(() => {
        currentImageIndex += direction;
        
        if (currentImageIndex >= currentGallery.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = currentGallery.length - 1;
        }
        
        modalImage.src = currentGallery[currentImageIndex];
        counter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
        
        // Remove changing class after image loads
        modalImage.onload = () => {
            modalImage.classList.remove('changing');
        };
    }, 150);
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('portfolioModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeGallery();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// Close modal when clicking outside the image
document.addEventListener('click', function(e) {
    const modal = document.getElementById('portfolioModal');
    if (e.target === modal) {
        closeGallery();
    }
});