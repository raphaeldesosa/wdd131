let currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

let lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = lastModified
    

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgrating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  const select = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
  
let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
reviewCount += 1;
localStorage.setItem('reviewCount', reviewCount);


const reviewCountElem = document.getElementById('reviewCount');
reviewCountElem.textContent = `Number of reviews submitted: ${reviewCount}`;