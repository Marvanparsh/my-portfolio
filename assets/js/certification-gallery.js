// Certification Gallery Functions
function openCertGallery(index) {
    const modal = document.getElementById('certificationModal');
    const modalImage = document.getElementById('certModalImage');
    
    const certItems = [
        './assets/Certifications/Microsoft AI-900.png',
        './assets/Certifications/Google Cloud Gen AI.png',
        './assets/Certifications/Java.jpeg',
        './assets/Certifications/SQL.jpeg',
        './assets/Certifications/Agile.png',
        './assets/Certifications/Udemy Scrum.png',
        './assets/Certifications/Ocean.png'
    ];
    
    modalImage.src = certItems[index];
    modal.classList.add('active');
    modal.style.display = 'flex';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeCertGallery() {
    const modal = document.getElementById('certificationModal');
    modal.classList.remove('active');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('certificationModal');
    if (e.target === modal) {
        closeCertGallery();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCertGallery();
    }
});