function toggleCategories() {
    var categoryList = document.querySelector('.category-list');
    categoryList.style.display = categoryList.style.display === 'none' ? 'block' : 'none';
}

function showImages(category) {
    var images = document.querySelectorAll('.image');
    images.forEach(function(image) {
        if (image.dataset.category === category || category === 'all') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}