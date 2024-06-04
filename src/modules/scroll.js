const scroll = () => {
    const menuLink = document.querySelectorAll('.top-menu>ul>li>a[href^="#"]');
    const upLink = document.querySelector('.up');
    const servicesId = document.getElementById('services');
    upLink.style.display = 'none';

    menuLink.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        })
    });

    const toggleUp = () => {
        const position = servicesId.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom > 0) {
          upLink.style.display = 'block';
        } else {
          upLink.style.display = 'none';
        };
      }; 

      window.addEventListener('scroll', toggleUp);
      
      upLink.addEventListener('click', (e) => {
        e.preventDefault();
        servicesId.scrollIntoView({ behavior: 'smooth' });
    });
      
}

export default scroll;