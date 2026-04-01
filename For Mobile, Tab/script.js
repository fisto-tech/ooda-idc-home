document.querySelectorAll('.page img').forEach((img) => {
  img.addEventListener('contextmenu', (e) => e.preventDefault());
  let pressTimer;
  img.addEventListener('touchstart', (e) => {
    pressTimer = setTimeout(() => {
      e.preventDefault();
    }, 500);
  });

  img.addEventListener('touchend', () => {
    clearTimeout(pressTimer);
  });

  img.addEventListener('touchmove', () => {
    clearTimeout(pressTimer);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutLinks = document.querySelectorAll('.nav-links');
  const audio = document.getElementById('infoAudio');

  aboutLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const audioPath = this.getAttribute('data-audio-path');
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Play audio
      if (audioPath && audio) {
        audio.src = audioPath;
        audio.currentTime = 0;
        audio.play();
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.querySelector(".back-top-wrapper");

  // Start hidden
  gsap.set(backToTopBtn, { autoAlpha: 0, y: 100 });

  // Trigger visibility based on #growth-section
  ScrollTrigger.create({
    trigger: "#about_us_section",
    start: "bottom bottom", // When bottom of #growth-section hits bottom of viewport
    onEnter: () => {
      gsap.to(backToTopBtn, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(backToTopBtn, {
        autoAlpha: 0,
        y: 100,
        duration: 0.5,
        ease: "power2.in",
      });
    },
  });

  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: true },
      duration: 1.5,
      ease: "power2.out",
    });
  });
});

function textAnimationScroll() {
  const animatedImages = document.querySelectorAll("[data-image-animation]");
  const animatedImages3D = document.querySelectorAll("[data-3d-image-animation]");

  animatedImages.forEach((img) => {
    const animationType = img.dataset.imageAnimation;

    let fromVars = {
      opacity: 0,
      duration: 0.25,
      ease: "power3.out"
    };

    switch (animationType) {
      case "right":
        fromVars.x = 200;
        break;
      case "left":
        fromVars.x = -200;
        break;
      case "top":
        fromVars.y = -200;
        break;
      case "bottom":
        fromVars.y = 200;
        break;
      case "pop":
        fromVars.scale = 0.5;
        break;
      default:
        fromVars.y = 30;
    }

    gsap.fromTo(
      img,
      fromVars,
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",     // when the top of the image hits 85% of viewport height
          toggleActions: "play reverse play reverse", // onEnter only
        }
      }
    );
  });

  animatedImages3D.forEach((img) => {
    gsap.from(img, {
      y: 40,                  // Smaller upward shift for smoother feel
      opacity: 0,
      duration: 0.5,          // Slightly faster
      ease: "power1.out",     // Lighter ease
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
        markers: false
      }
    });
  });


}

function popupImageScroll() {
  gsap.utils.toArray('.services_grid_main img').forEach(img => {
    gsap.fromTo(img,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });
}

function slideUpImageScroll() {
  gsap.utils.toArray('.slide_up_image').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });
}


function fadeInImageScroll() {
  gsap.utils.toArray('.fade_in_images').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });
}

window.addEventListener("DOMContentLoaded", () => {
  popupImageScroll();
  slideUpImageScroll();
  fadeInImageScroll();
});


const productImages = document.querySelectorAll(".product_image");
productImages.forEach(product => {
    product.addEventListener("click", ()=>{
        const getModel = product.getAttribute('data-model-page');
        if (getModel) {
            window.open(`/lightbox/index.html#${getModel}`, '_blank');
        }
    });
});

