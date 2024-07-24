let currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

let lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified


document.getElementById('schedule-visit-button').addEventListener('click', function() {
    alert('Thank you for scheduling your visit! We will contact you soon.')    
});




document.addEventListener("DOMContentLoaded", function() {
    console.log('JavaScript loaded'); // Debug: Check if the script is running

    const imageContainer = document.getElementById('imageContainer');
    console.log('imageContainer:', imageContainer); // Debug: Check if the element is found

    if (!imageContainer) {
        console.error('Image container not found');
        return;
    }

    const services = [
        {
            name: "Braces",
            description: "Orthodontic treatment to straighten teeth.",
            imageUrl: "images/braces.png"
        },
        {
            name: "Tooth Extraction",
            description: "Safe and painless tooth removal services.",
            imageUrl: "images/Tooth-extraction.png"
        },
        {
            name: "Deep Cleaning",
            description: "Professional dental cleaning for healthy gums.",
            imageUrl: "images/deep-clean.png"
        },
        {
            name: "Dental Filling",
            description: "Repair cavities and restore your tooth's function with our durable dental fillings.",
            imageUrl: "images/dental-filling.png"
        },
        {
            name: "Root Canal",
            description: "Treats tooth infections by removing damaged pulp and sealing the tooth.",
            imageUrl: "images/root-canal.png"
        },
        {
            name: "Retainers",
            description: "Keep your smile straight with our retainer solutions.",
            imageUrl: "images/retainers.png"
        }
            

    ];

    function createServiceCard(service) {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service-card');

        const serviceName = document.createElement('h2');
        serviceName.textContent = service.name;
        serviceElement.appendChild(serviceName);

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;
        serviceElement.appendChild(serviceDescription);

        const serviceImage = document.createElement('img');
        serviceImage.src = service.imageUrl;
        serviceImage.alt = service.name;
        serviceImage.loading = 'lazy';
        console.log('Image path:', service.imageUrl); // Debug: Log image path
        console.log('Image element:', serviceImage); // Debug: Log image element
        serviceElement.appendChild(serviceImage);

        return serviceElement;
    }

    services.forEach(service => {
        console.log('Processing service:', service.name);
        const serviceCard = createServiceCard(service);
        console.log('Appending service card:', serviceCard);
        imageContainer.appendChild(serviceCard);
    
    });

    const clientForm = document.getElementById('client-form');
    const reviewList = document.getElementById('review-list');

    clientForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const review = document.getElementById('review').value;

        if (fullName && email && review) {
            const clientReview = {
                fullName,
                email,
                review
            };

            // Save to localStorage
            saveReviewToLocalStorage(clientReview);

            // Display the new review
            addReviewToPage(clientReview);

            // Clear the form
            clientForm.reset();
        }
    });

    function saveReviewToLocalStorage(review) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function loadReviewsFromLocalStorage() {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.forEach(addReviewToPage);
    }

    function addReviewToPage(review) {
        const li = document.createElement('li');
        li.textContent = `${review.fullName} (${review.email}): ${review.review}`;
        reviewList.appendChild(li);
    }

    // Load reviews on page load
    loadReviewsFromLocalStorage();
    
});    

document.addEventListener("DOMContentLoaded", function() {
    let currentyear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentyear;

    let lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified;

    document.getElementById('schedule-visit-button').addEventListener('click', function() {
        const visitDateInput = document.getElementById('visit-date');
        visitDateInput.style.display = 'block';
        visitDateInput.focus();

        // Load previously selected date from localStorage, if available
        const savedDate = localStorage.getItem('appointmentDate');
        if (savedDate) {
            visitDateInput.value = savedDate;
        }

        visitDateInput.addEventListener('change', function() {
            const selectedDate = visitDateInput.value;
            alert('You have selected: ' + selectedDate);

            // Save the selected date to localStorage
            localStorage.setItem('appointmentDate', selectedDate);
        });
    });
});

