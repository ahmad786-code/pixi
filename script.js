 

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
   

  var WIDTH, HEIGHT, canvas, con, g;
var pxs = [];
var rint = 70;
$(document).ready(function() {
    var windowSize = function() {
        WIDTH = $('.galaxy-wrapper').innerWidth();
        HEIGHT = $('.galaxy-wrapper').innerHeight();
        canvas = $('#galaxy');
        canvas.attr('width', WIDTH).attr('height', HEIGHT);
    };
  
    windowSize();
  
    $(window).resize(function() {
        windowSize();
    });

    con = canvas[0].getContext('2d');
    for (var i = 0; i < 100; i++) {
        pxs[i] = new Circle();
        pxs[i].reset();
    }
    requestAnimationFrame(draw);
});

function draw() {
    con.clearRect(0, 0, WIDTH, HEIGHT);
    con.globalCompositeOperation = "lighter";
    for (var i = 0; i < pxs.length; i++) {
        pxs[i].fade();
        pxs[i].move();
        pxs[i].draw();
    }
    requestAnimationFrame(draw);
}

function Circle() {
    this.s = {
        ttl: 15000,
        xmax: 5,
        ymax: 2,
        rmax: 17,
        rt: 1,
        xdef: 960,
        ydef: 540,
        xdrift: 2,
        ydrift: 2,
        random: true,
        blink: true
    };
    this.reset = function() {
        this.x = (this.s.random ? WIDTH * Math.random() : this.s.xdef);
        this.y = (this.s.random ? HEIGHT * Math.random() : this.s.ydef);
        this.r = ((this.s.rmax - 1) * Math.random()) + 1;
        this.dx = (Math.random() * this.s.xmax) * (Math.random() < 0.5 ? -1 : 1);
        this.dy = (Math.random() * this.s.ymax) * (Math.random() < 0.5 ? -1 : 1);
        this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
        this.rt = Math.random() * this.hl;
        this.s.rt = Math.random() + 1;
        this.stop = Math.random() * 0.2 + 0.4;
        this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
        this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
    };
    this.fade = function() {
        this.rt += this.s.rt;
    };
    this.draw = function() {
        if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
        else if (this.rt >= this.hl) this.reset();
        var newo = 1 - (this.rt / this.hl);
        con.beginPath();
        con.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        con.closePath();
        var cr = this.r * newo;
        g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr <= 0 ? 1 : cr));
        g.addColorStop(0.0, 'rgba(193,254,254,' + newo + ')');
        g.addColorStop(this.stop, 'rgba(193,254,254,' + (newo * 0.2) + ')');
        g.addColorStop(1.0, 'rgba(193,254,254,0)');
        con.fillStyle = g;
        con.fill();
    };
    this.move = function() {
        this.x += (this.rt / this.hl) * this.dx;
        this.y += (this.rt / this.hl) * this.dy;
        if (this.x > WIDTH || this.x < 0) this.dx *= -1;
        if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
    };
    this.getX = function() {
        return this.x;
    };
    this.getY = function() {
        return this.y;
    };
};



document.querySelector('.menu-icon').addEventListener('click', function() {
  const nav = document.querySelector('.nav');
  if (nav.style.left === '0px') {
      nav.style.left = '-100%';
  } else {
      nav.style.left = '0px';
  }
});
