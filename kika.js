const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink !== i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    });
});

// Ensure the Home section is displayed by default
document.addEventListener('DOMContentLoaded', () => {
    links[0].classList.add('active');
    sections[0].classList.add('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const upperGrid = document.querySelector('.upper-grid');
    const lowerGrid = document.querySelector('.lower-grid');

    setTimeout(() => {
      upperGrid.style.opacity = 1;
      upperGrid.classList.add('slide-in-left');
    }, 500);

    setTimeout(() => {
      lowerGrid.style.opacity = 1;
      lowerGrid.classList.add('slide-in-right');
    }, 1000);
  });