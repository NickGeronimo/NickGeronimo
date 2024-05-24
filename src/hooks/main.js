
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {

      const hamburgerBtn = document.getElementById('hamburger-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
      };
  
      if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
      }
  
      if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMenu);
      }    

  });
}