// index.js


// get theme variable 
let theme = localStorage.getItem('theme');

// get toggle element
const theme_toggle = document.getElementById('theme_toggle');

const set_theme = (value) => {

    // add/remove class based on theme
    if (value === 'dark_mode') {
        document.body.classList.add('dark_mode');
        localStorage.setItem('theme', 'dark_mode');
    } else {
        document.body.classList.remove('dark_mode');
        localStorage.setItem('theme', null);
    }

    // update theme variable
    theme = localStorage.getItem('theme');
}

// set theme by default
set_theme(theme);

// on click
theme_toggle.addEventListener('click', () => {
    theme = localStorage.getItem('theme');
    if (theme === "dark_mode") {
        set_theme(null);
    } else {
        set_theme("dark_mode");
    }
});


// get sections
const sections = document.querySelectorAll('section')

// on scroll
window.addEventListener('scroll', () => {

    // get scroll position
    const scroll_y = window.scrollY;

    // for each section
    sections.forEach(current => {

        // get id
        section_id = current.getAttribute('id');

        // get bounds
        const section_top = current.offsetTop - 50;
        const section_bottom = section_top + current.offsetHeight;

        // add/remove class based on bounds
        if (scroll_y > section_top && scroll_y <= section_bottom ) {
            document.querySelector('.nav_links a[href*=' + section_id + ']').classList.add('active_link');
        } else {
            document.querySelector('.nav_links a[href*=' + section_id + ']').classList.remove('active_link');
        }
    });

});
