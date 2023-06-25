function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
    var elements = document.getElementsByClassName('scroll-animation');
    var elements2 = document.getElementsByClassName('scroll-animation2');
    var elements3 = document.getElementsByClassName('scroll-animation3');
    var elements4 = document.getElementsByClassName('scroll-animation4');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    }
    for (var j = 0; j < elements2.length; j++) {
        var element2 = elements2[j];
        if (isElementInViewport(element2)) {
            element2.classList.add('show');
        }
    }
    for (var k = 0; k < elements3.length; k++) {
        var element3 = elements3[k];
        if (isElementInViewport(element3)) {
            element3.classList.add('show');
        }
    }
    for (var z = 0; z < elements4.length; z++) {
        var element4 = elements4[z];
        if (isElementInViewport(element4)) {
            element4.classList.add('show');
        }
    }
}

window.addEventListener('scroll', handleScrollAnimation);