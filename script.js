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
  

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 290,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 10
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 100,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  