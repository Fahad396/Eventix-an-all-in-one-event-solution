// --- Navigation Styling ---
// Handles the navbar shadow effect when scrolling
window.onscroll = function() {
    let nav = document.getElementById('main-nav');
    if (nav) {
        if (window.pageYOffset > 50) {
            nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            nav.style.boxShadow = "none";
        }
    }
  };
  
  // --- Modal Elements ---
  // Selecting all necessary modal components for Login and Sign Up
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const navLoginBtn = document.querySelector('.nav-right .btn-primary');
  const closeLogin = document.getElementById('closeModal');
  const closeSignup = document.getElementById('closeSignup');
  
  // Switch links between Login and Sign Up forms
  const toSignupLink = document.querySelector('#loginModal .signup-text a');
  const toLoginLink = document.getElementById('toLogin');
  
  // --- Modal Logic ---
  
  // Open Login Modal from Navbar
  if (navLoginBtn) {
      navLoginBtn.addEventListener('click', () => {
          if (loginModal) loginModal.style.display = 'flex';
      });
  }
  
  // Switch from Login to Sign Up
  if (toSignupLink) {
      toSignupLink.addEventListener('click', (e) => {
          e.preventDefault();
          if (loginModal) loginModal.style.display = 'none';
          if (signupModal) signupModal.style.display = 'flex';
      });
  }
  
  // Switch from Sign Up to Login
  if (toLoginLink) {
      toLoginLink.addEventListener('click', (e) => {
          e.preventDefault();
          if (signupModal) signupModal.style.display = 'none';
          if (loginModal) loginModal.style.display = 'flex';
      });
  }
  
  // Close Button Functions
  if (closeLogin) {
      closeLogin.onclick = () => { loginModal.style.display = 'none'; };
  }
  
  if (closeSignup) {
      closeSignup.onclick = () => { signupModal.style.display = 'none'; };
  }
  
  // Close modal if user clicks the outside overlay
  window.addEventListener('click', (e) => {
      if (e.target === loginModal) loginModal.style.display = 'none';
      if (e.target === signupModal) signupModal.style.display = 'none';
  });
  
  // --- Home Page Specific Logic ---
  // Handle Search button on the Hero section
  const mainSearchBtn = document.querySelector('.main-search button');
  if (mainSearchBtn) {
      mainSearchBtn.addEventListener('click', function() {
          const query = document.querySelector('.main-search input').value;
          const city = document.querySelector('.main-search select').value;
          
          if (query.trim() === "") {
              alert("Please enter a service or vendor name.");
          } else {
              alert(`Finding ${query} in ${city}...`);
          }
      });
  }
  
  // Category card hover effects
  const cards = document.querySelectorAll('.cat-card');
  cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.transform = "translateY(-5px)";
          card.style.transition = "0.3s";
      });
      card.addEventListener('mouseleave', () => {
          card.style.transform = "translateY(0)";
      });
  });