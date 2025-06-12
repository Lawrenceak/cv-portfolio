document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');

    // Burger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// For smooth transition when clicking on anchor links in the nav bar (top menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      const targetPosition = target.offsetTop - 80; // Adjust this offset
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // scroll duration in ms
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        // Ease in-out function
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    });
  });

// Direct messaging via email
document.getElementById('send-message').addEventListener('click', async () => {
    const email = document.getElementById('hr-email').value.trim();
    const message = document.getElementById('hr-message').value.trim();

    if (!email || !message) {
        alert('Please fill in both your email and the message.');
        return;
    }

    try {
        const response = await fetch('../../be/send_email.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, message })
            });


        const result = await response.text();

        if (response.ok) {
            alert('Your message has been successfully sent!');
            document.getElementById('hr-email').value = '';
            document.getElementById('hr-message').value = '';
        } else {
            alert('Failed to send your message: ' + result);
        }
    } catch (error) {
        alert('Error sending message: ' + error.message);
    }
});


// Popup functionality
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const closeBtn = document.getElementById("closePopup");

// Message map (you can also use a switch-case if you prefer)
const messages = {
  cv_download: "For security and privacy reasons, direct CV downloads are no longer available. If you would like a copy of my CV, please feel free to reach out through any of the contact methods listed in the Contact section.\n\nThank you for your understanding.",
  prj_seemore_btn: "To see more projects visit my GitHub and/or my Youtube page - links in the Contacts section!",
  cert_seemore_btn: "I got some more certificates, 'currently' on my LinkedIn page!"
};

// Attach event listeners to each button
document.querySelectorAll(".js_btn_name").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.id;
    const message = messages[id] || "No message found.";
    popupMessage.textContent = message;
    popup.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  popup.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
};


// Second Popup functionality (of my biography)
document.getElementById("bio_seemore_btn").onclick = showPopup2;
const popup2 = document.getElementById("popup2");
const closePopup2 = document.getElementById("closePopup2");
const confettiContainer = document.getElementById("confetti-container");
const subscribeBtn = document.getElementById("subscribeBtn");

// Confetti piece class to control animation
class ConfettiPiece {
  constructor(container, originX, originY) {
    this.container = container;
    this.element = document.createElement("div");
    this.element.classList.add("confetti-piece");

    // Star or paper?
    if (Math.random() > 0.6) {
      this.element.classList.add("star");
    } else {
      this.element.classList.add("paper");
      const colors = ["red", "blue", "yellow", "green", "purple"];
      this.element.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    }

    container.appendChild(this.element);

    // Set initial position (origin point)
    this.x = originX;
    this.y = originY;
    this.vx = (Math.random() - 0.5) * 8; // horizontal velocity (-4 to +4)
    this.vy = (Math.random() * -10) - 6; // initial vertical velocity (jump up)
    this.gravity = 0.4; // gravity acceleration
    this.rotation = Math.random() * 360;
    this.vr = (Math.random() - 0.5) * 15; // rotation velocity degrees per frame
    this.opacity = 1;
    this.scale = 1;

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.transform = `rotate(${this.rotation}deg) scale(${this.scale})`;
  }

  update() {
    this.vy += this.gravity; // gravity pulls down
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.vr;

    // Fade out after falling below container
    if (this.y > this.container.clientHeight - 20) {
      this.opacity -= 0.03;
      this.scale -= 0.02;
      if (this.opacity < 0) this.opacity = 0;
      if (this.scale < 0) this.scale = 0;
    }

    // Apply styles
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.opacity = this.opacity;
    this.element.style.transform = `rotate(${this.rotation}deg) scale(${this.scale})`;
  }

  isDead() {
    return this.opacity <= 0 || this.scale <= 0;
  }

  destroy() {
    this.element.remove();
  }
}

// Animation controller
class ConfettiController {
  constructor(container) {
    this.container = container;
    this.pieces = [];
    this.animating = false;
  }

  pop(x, y) {
    const count = 40;
    for (let i = 0; i < count; i++) {
      const piece = new ConfettiPiece(this.container, x, y);
      this.pieces.push(piece);
    }
    if (!this.animating) {
      this.animating = true;
      this.animate();
    }
  }

  animate() {
    this.pieces.forEach(piece => piece.update());
    this.pieces = this.pieces.filter(piece => {
      if (piece.isDead()) {
        piece.destroy();
        return false;
      }
      return true;
    });

    if (this.pieces.length > 0) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.animating = false;
    }
  }
}

const confettiCtrl = new ConfettiController(confettiContainer);

// Show popup with zoom + confetti burst from bottom center
function showPopup2() {
  popup2.style.display = "flex";

  // Clear previous confetti
  confettiContainer.innerHTML = "";

  // Get popup content bounding rect
  const rect = confettiContainer.parentElement.getBoundingClientRect();

  // Define two origins for bursts:
  // Left burst near left side, about 25% from left
  const originLeftX = rect.width * 0.25;
  const originY = rect.height - 10;  // near bottom

  // Right burst near right side, about 75% from left
  const originRightX = rect.width * 1.5;

  // Pop both bursts simultaneously
  confettiCtrl.pop(originLeftX, originY);
  confettiCtrl.pop(originRightX, originY);
}


closePopup2.onclick = () => {
  popup2.style.display = "none";
  confettiContainer.innerHTML = "";
};

window.addEventListener("click", (e) => {
  if (e.target === popup2) {
    popup2.style.display = "none";
    confettiContainer.innerHTML = "";
  }
});

subscribeBtn.onclick = () => {
  window.open("https://youtube.com/@LawrenceAbouKarroum", "_blank");
};
