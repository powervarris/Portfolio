document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".welcome-image");
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }, 2000); // Change image every 2 seconds

  const welcomePage = document.getElementById("welcome");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    welcomePage.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }, 2000); // Transition after 6 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  const welcomePage = document.getElementById("home");

  setTimeout(() => {
    welcomePage.classList.add("loaded");
  }, 1000); // Simulate loading for 3 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const panes = document.querySelectorAll(".tab-pane");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab");

      panes.forEach(pane => {
        pane.classList.remove("active");
      });

      document.getElementById(target).classList.add("active");
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const homeTab = document.getElementById('home');

  // Hide footer if Home tab is active on page load
  if (homeTab.classList.contains('active')) {
    footer.classList.add('hidden');
  }

  const tabs = document.querySelectorAll('.tab-button');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      panes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === target) {
          pane.classList.add('active');
        }
      });

      // Toggle footer visibility based on active tab
      if (target === 'home') {
        footer.classList.add('hidden');
      } else {
        footer.classList.remove('hidden');
      }
    });
  });
});
