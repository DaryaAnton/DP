const scroll = () => {
    const menuLink = document.querySelectorAll('.top-menu>ul>li>a[href^="#"]');
    const upLink = document.querySelector('.up');
    const servicesId = document.getElementById('services');
    console.log(servicesId);

    menuLink.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        })
    });

    function toggleUp() {
        const position = servicesId.getBoundingClientRect();

        if (position.top < window.innerHeight) {
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