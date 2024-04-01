const pages = document.getElementsByClassName('page');
const homePage = document.getElementById('home');
const contactPage = document.getElementById('contact');
const resumePage = document.getElementById('resume');
const projectsPage = document.getElementById('projects');
const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navmenu');

function goToPage(page) {
    for (let i = 0; i < pages.length; i++){
        pages[i].style.display = 'none';
    }
    page.style.display = 'block';
}

const goHome = () => goToPage(homePage);
const goResume = () => goToPage(resumePage);
const goContact = () => goToPage(contactPage);
const goProjects = () => goToPage(projectsPage);

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

