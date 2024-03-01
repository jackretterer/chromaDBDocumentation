document.addEventListener('DOMContentLoaded', function () {
    // Query for sidebar links; adjust the selector based on actual generated HTML
    const sidebarLinks = document.querySelectorAll('.sidebar__item a'); // Example selector
  
    sidebarLinks.forEach(link => {
      // Checking if the link ends with '/index' or '/index.html' for more flexibility
      if (link.href.match(/\/index(\.html)?$/)) {
        // Log to verify the correct links are targeted (for debugging)
        console.log('Adding arrow to:', link.href);
        link.classList.add('sidebar-folder-link');
      }
    });
  });
  