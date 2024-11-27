function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');
  
    // Toggle the active class
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  }
  