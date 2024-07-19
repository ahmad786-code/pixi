ScrollReveal({ reset: true,scale: 1.50 });
ScrollReveal({ distance: '-600px' });
ScrollReveal().reveal('.animated-card-3', { 
    delay: 300, 
    duration: 500, // Make sure this matches the duration you want for the full scale animation
    origin: 'left',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
  });
  
  // Do the same for the other cards
  ScrollReveal().reveal('.animated-card-1', {
    delay: 600, 
    duration: 500,
    origin: 'right',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
  });
  
  ScrollReveal().reveal('.animated-card-2', {
    delay: 900,
    duration: 500,
    origin: 'top',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
  });
  