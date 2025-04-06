// Toggle Hamburger Menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class
}

// Add event listener to the hamburger icon
document.querySelector('nav::after').addEventListener('click', toggleMenu);

// Filter Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-box');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Open Lightbox
function openLightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = image.src;
    lightbox.style.display = 'flex';
}

// Close Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    // Validate Name
    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        isValid = false;
    } else {
        showSuccess(name);
    }

    // Validate Email
    if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Validate Message
    if (message.value.trim() === '') {
        showError(message, 'Message is required');
        isValid = false;
    } else {
        showSuccess(message);
    }

    // If all fields are valid, show success message
    if (isValid) {
        const successMessage = document.createElement('p');
        successMessage.textContent = "Thank you for reaching us. We will get back to you in 24 hours.";
        successMessage.style.color = 'green';
        successMessage.style.fontSize = '1rem';
        successMessage.style.marginTop = '10px';
        successMessage.id = 'success-message';

        // Append the success message to the form
        const form = document.getElementById('contact-form');
        const existingMessage = document.getElementById('success-message');
        if (!existingMessage) {
            form.appendChild(successMessage);
        }

        // Simulate form submission (e.g., send data to a server)
        console.log({
            name: name.value,
            email: email.value,
            message: message.value
        });

        this.reset(); // Reset the form
    }
});

// Show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    input.style.borderColor = 'red';
}

// Show success state
function showSuccess(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.style.display = 'none';
    input.style.borderColor = '#00bcd4';
}

// Validate email format
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}