// Blossom Nexus: lightweight frontend enhancements.
// Bootstrap handles the mobile menu and the documentation accordion.
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Close the collapsed navigation after a page link is selected.
  const menu = document.getElementById('siteNav');
  if (menu && window.bootstrap) {
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
          window.bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
        }
      });
    });
  }
});
