document.getElementById('increase-font').addEventListener('click', function() {
    document.body.style.fontSize = 'larger';
});

document.getElementById('decrease-font').addEventListener('click', function() {
    document.body.style.fontSize = 'smaller';
});

document.getElementById('color-filter').addEventListener('change', function() {
    
    const filterClass = this.value; 

    
    const images = document.querySelectorAll('.filter-image');

    
    images.forEach(img => {
       
        img.className = 'filter-image'; 

      
        if (filterClass !== 'default') {
            
            img.classList.add(filterClass);
        }
    });
});

