document.addEventListener('DOMContentLoaded', function() {
    var tiltElements = document.querySelectorAll('.parallax-element');

    VanillaTilt.init(tiltElements, {
        max: 25,
        perspective: 1000,
        speed: 300,
        glare: true,
        'max-glare': 0.5,
        startX: 45,
        startY: 45,
        reset: false
    });

    window.addEventListener('mousemove', function(event) {
        var mouseX = event.clientX / window.innerWidth;
        var mouseY = event.clientY / window.innerHeight;

        tiltElements.forEach(function(element) {
            var depth = element.getAttribute('data-depth');
            var translateX = (mouseX - 0.5) * depth * 100;
            var translateY = (mouseY - 0.5) * depth * 100;

            element.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
        });
    });
});