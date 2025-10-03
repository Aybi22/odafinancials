fetch("header.html")
  .then((response) => response.text())
  .then((html) => {
    let headnav = document.getElementById("headnav");
    headnav.innerHTML = html;
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((html) => {
    let footer = document.getElementById("footer");
    footer.innerHTML = html;
  });

document.addEventListener("DOMContentLoaded", () => {
  let slider = document.getElementById("slider");
  const images = slider.querySelectorAll("img");
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = images.length - 1;
    } else if (index >= images.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 1200}px)`;
  }
  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function previousSlide() {
    showSlide(currentIndex - 1);
  }

  setInterval(nextSlide, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("services.json")
    .then((response) => response.json())
    .then((services) => {
      services.forEach((service) => {
        let serviceContainer = document.querySelector(".services-container");
        console.log(serviceContainer);
        serviceContainer.innerHTML += `
    
      <img src="${service.image}">
    
    
    `;
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  let btns = document.querySelectorAll(".btn");
  console.log(btns);
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let serviceName = btn.dataset.id;
      console.log(serviceName);
    });
  });
});
