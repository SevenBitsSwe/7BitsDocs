function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const mobileThemeToggle = document.querySelector('.mobile-theme-toggle');
    if (!themeToggle && !mobileThemeToggle) return;

    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    const mobileThemeIcon = mobileThemeToggle ? mobileThemeToggle.querySelector('i') : null;
    if (!themeIcon && !mobileThemeIcon) return;

    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to update theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Update icons
        const updateIcon = (icon) => {
            if (!icon) return;
            if (theme === 'dark') {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        };
        updateIcon(themeIcon);
        updateIcon(mobileThemeIcon);
    }

    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Toggle theme on button click
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Make toggleTheme available globally
    window.toggleTheme = toggleTheme;

    // Listen for system theme changes
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initial theme setup
    initTheme();
    
    // Re-initialize theme after navbar is loaded
    document.addEventListener('navbarLoaded', initTheme);
});