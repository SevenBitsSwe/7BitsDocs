document.addEventListener('DOMContentLoaded', function() {

    initializeDocSections();
    setupScrollHandling();
    updateDocIndexScroll();
    updateActiveSection();

});

function setupScrollHandling() {
    // Handle clicks on any anchor links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.hash) {
            e.preventDefault();
            const targetId = link.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = 100; // Adjust this value based on your index height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}

function toggleSection(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('i');
    const filterButtons = element.parentNode.querySelector('.filter-buttons');
    
    if (element.classList.contains('doc-title')) {
        // Main section toggle
        content.classList.toggle('hidden');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-right');
        
        if (content.classList.contains('hidden')) {
            hideAllSubsections(content);
            if (filterButtons) filterButtons.style.display = 'none';
        } else {
            if (filterButtons) filterButtons.style.display = '';
            showAllSubsections(content);
        }
    } else {
        // Subsection toggle
        const subsectionContent = element.nextElementSibling;
        subsectionContent.classList.toggle('hidden');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-right');
    }
}

function hideAllSubsections(content) {
    const subsections = content.querySelectorAll('.subsection-content');
    subsections.forEach(subsection => {
        subsection.classList.add('hidden');
        const subIcon = subsection.previousElementSibling.querySelector('i');
        subIcon.classList.remove('fa-chevron-down');
        subIcon.classList.add('fa-chevron-right');
    });
}

function showAllSubsections(content) {
    setTimeout(() => {
        const subsections = content.querySelectorAll('.subsection-content');
        subsections.forEach(subsection => {
            subsection.classList.remove('hidden');
            const subIcon = subsection.previousElementSibling.querySelector('i');
            subIcon.classList.remove('fa-chevron-right');
            subIcon.classList.add('fa-chevron-down');
        });
    }, 50);
}

function initializeDocSections() {
    const sections = document.querySelectorAll('.doc-content, .subsection-content');
    sections.forEach(section => {
        section.classList.remove('hidden');
        const icon = section.previousElementSibling.querySelector('i');
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
    });
}

// Funzione per calcolare lo scroll dinamico
function updateDocIndexScroll() {
    const docIndex = document.querySelector('.doc-index');
    if (!docIndex) return;

    const headerHeight = 60; // Altezza della navbar
    const extraPadding = 20; // Padding extra per migliorare la visualizzazione
    const windowHeight = window.innerHeight;
    const docIndexHeight = docIndex.offsetHeight;
    
    // Calcola la posizione ottimale
    const availableSpace = windowHeight - headerHeight - extraPadding;
    const optimalPosition = Math.min(headerHeight + extraPadding, windowHeight - docIndexHeight - extraPadding);
    
    docIndex.style.top = `${optimalPosition}px`;
}

// Aggiorna la posizione quando la sezione attiva cambia
function updateActiveSection() {
    const sections = document.querySelectorAll('.doc-section');
    const navLinks = document.querySelectorAll('.doc-index a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + 100; // offset per il margine superiore
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('current');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('current');
        }
    });
}

// Event listeners
window.addEventListener('scroll', () => {
    updateDocIndexScroll();
    updateActiveSection();
});

window.addEventListener('resize', updateDocIndexScroll);