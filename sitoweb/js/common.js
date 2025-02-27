// Navbar and footer loading
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
    initScrollToTop();
    setPageClass();
});

function loadNavbar() {
    return fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('include-navbar').innerHTML = data;
            return new Promise(resolve => {
                // Wait for DOM to be updated
                setTimeout(() => {
                    setupMobileMenu();
                    setCurrentNavLink();
                    // Dispatch custom event when navbar is loaded
                    document.dispatchEvent(new Event('navbarLoaded'));
                    resolve();
                }, 0);
            });
        });
}

function setCurrentNavLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .nav-logo a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('current');
        
        if (currentPage === href || 
            (currentPage === '' && href === 'index.html') || 
            (currentPage === '/' && href === 'index.html')) {
            link.classList.add('current');
        }
    });
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        const isExpanded = navLinks.classList.contains('active');
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('include-footer').innerHTML = data;
        });
}

function setPageClass() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '');
    document.body.classList.add(pageName);
}

function initScrollToTop() {
    window.onscroll = function() {
        const scrollBtn = document.getElementById("scrollTopBtn");
        const scrollThreshold = window.innerHeight * 0.3;
        
        if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
            scrollBtn.style.display = "flex";
            scrollBtn.style.opacity = "1";
        } else {
            scrollBtn.style.opacity = "0";
            setTimeout(() => {
                if (scrollBtn.style.opacity === "0") {
                    scrollBtn.style.display = "none";
                }
            }, 300);
        }
    };
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
