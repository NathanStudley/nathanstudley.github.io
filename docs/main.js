const pages = document.getElementsByClassName('page');
const homePage = document.getElementById('home');
const contactPage = document.getElementById('contact');
const resumePage = document.getElementById('resume');
const projectsPage = document.getElementById('projects');
const menuButton = document.getElementById('menu');

function goToPage(page) {
    for (let i = 0; i < pages.length; i++){
        pages[i].style.display = 'hidden';
    }
    page.style.display = 'block';
}

const goHome = () => goToPage(homePage);
const goResume = () => goToPage(resumePage);
const goContact = () => goToPage(contactPage);
const toProjects = () => goToPage(projectsPage);