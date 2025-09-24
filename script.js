const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

// Open sidebar
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden'); // show overlay
});

// Close sidebar function
const closeMenu = () => {
  mobileMenu.classList.add('-translate-x-full');
  overlay.classList.add('hidden'); // hide overlay
}

// Close on X button
closeBtn.addEventListener('click', closeMenu);

// Close on clicking outside (overlay)
overlay.addEventListener('click', closeMenu);
