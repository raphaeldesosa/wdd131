let currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

let lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified

document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
})
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
        hamburger.textContent = '❌';
    } else {
        hamburger.textContent = '☰';
    }
});

const templeContainer = document.getElementById('temple-container');
const temples = [
    {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
    templeName: "Brisbane Australia",
    location: "Brisbane Philippines",
    dedicated: "2003, June, 15",
    area: 10700,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/400x250/brisbane-australia-temple-lds-745088-wallpaper.jpg"  
    },
    {
    templeName: "Manila City, Philippines",
    location: "Manila City, Philippines",
    dedicated: "1984, September, 27",
    area: 26683,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
    templeName: "Urdaneta City, Philippines",
    location: "Urdaneta City, Philippines",
    dedicated: "2024, April, 28",
    area: 32604,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/46910789b4c911eeaf5feeeeac1ed77e9a30ef3f/full/320%2C/0/default"
    },
]; 

function createTempleCard(temple)  {
    const templeElement = document.createElement('div');
    templeElement.classList.add('temple-card');

    const templeName = document.createElement('h2');
    templeName.textContent = temple.templeName;
    templeElement.appendChild(templeName);

    const templeLocation = document.createElement('p');
    templeLocation.textContent = `Location: ${temple.location}`;
    templeElement.appendChild(templeLocation);

    const templeDedicated = document.createElement('p')
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeElement.appendChild(templeDedicated);

    const templeArea = document.createElement('p');
    templeArea.textContent = `Area: ${temple.area}`;
    templeElement.appendChild(templeArea)

    const templeImage = document.createElement('img')
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.templeName;
    templeImage.loading= 'lazy';
    templeElement.appendChild(templeImage);

    return templeElement; 
}



function displayAllTemples() {
    templeContainer.innerHTML = ''; 
    temples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}



function filterOldTemples() {
    templeContainer.innerHTML = ''; 
    const oldTemples = temples.filter(function(temple) {
        return parseInt(temple.dedicated.split(',')[0]) < 2000;
    });
    oldTemples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}

function filterNewTemples() {
    templeContainer.innerHTML = ''; 
    const newTemples = temples.filter(function(temple) {
        return parseInt(temple.dedicated.split(',')[0]) > 2000;
    });
    newTemples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}

function filterLargeTemples() {
    templeContainer.innerHTML = ''; 
    const largeTemples = temples.filter(function(temple) {
        return temple.area > 90000;
    });
    largeTemples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}

function filterSmallTemples() {
    templeContainer.innerHTML = ''; 
    const smallTemples = temples.filter(function(temple) {
        return temple.area < 10000;
    });
    smallTemples.forEach(function(temple) {
        const templeCard = createTempleCard(temple);
        templeContainer.appendChild(templeCard);
    });
}

const homeLink = document.getElementById('all');
const oldLink = document.getElementById('old');
const newLink = document.getElementById('new');
const largeLink = document.getElementById('large');
const smallLink = document.getElementById('small');

homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    displayAllTemples(); 
});

oldLink.addEventListener('click', function(event) {
    event.preventDefault();
    filterOldTemples(); 
});

newLink.addEventListener('click', function(event) {
    event.preventDefault();
    filterNewTemples(); 
});

largeLink.addEventListener('click', function(event) {
    event.preventDefault();
    filterLargeTemples(); 
});

smallLink.addEventListener('click', function(event) {
    event.preventDefault();
    filterSmallTemples(); 
});