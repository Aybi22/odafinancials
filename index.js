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
/*
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
*/
fetch("serviceCard.json")
  .then((response) => response.json())
  .then((serviceCard) => {
    serviceCard.forEach((card) => {
      let serviceWrapper = document.querySelector(".services-wrapper");
      serviceWrapper.innerHTML += `
    
   
      <article>
       <h3>${card.h3}</h3>
    <div class="image">
    <img src="${card.image}">
    
    </div>
<p>${card.description}</p>

<a class="btn" data-id="${card.id}" href= rates.html?id="${card.id}">see pricing</a>
</article>
    `;
    });
  });
