document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add animation class when in view
        } else {
          entry.target.classList.remove("show"); // Remove when out of view
        }
      });
    }, { threshold: 0.2 }); // Adjust threshold for better control
  
    // Observe all elements with the 'hidden' class
    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
  });
  
  const menuBtn = document.getElementById('menubtn');
const getInvolved = document.getElementById('get-involved');

menuBtn.addEventListener('click', () => {
  getInvolved.classList.toggle('show');
});


document.querySelectorAll('.discont').forEach(container => {
  const readMore = document.createElement('div');
  readMore.className = 'readmore';
  readMore.textContent = 'Read more';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-play fa-sm  cont-read';
  
  readMore.appendChild(icon);
  container.appendChild(readMore);
});

