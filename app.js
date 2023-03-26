function toggleDropdown() {
    const dropdown = document.getElementsByClassName("dropdown-content");
    dropdown.classList.toggle("show");
    window.onclick = (event) => {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function toggle() {
    const hamburger = document.querySelector('.hamburger');
    const menuList = document.querySelector('.menu-list');

    let menuOpen = false;

    hamburger.addEventListener('click', function() {
        if (!menuOpen) {
            menuList.style.display = 'block';
            menuOpen = true;
        } else {
            menuList.style.display = 'none';
            menuOpen = false;
        }
    });
}