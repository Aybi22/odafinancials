let serviceId = Number(new URLSearchParams(window.location.search).get("id"));

fetch("services.json")
  .then((response) => response.json())
  .then((services) => {
    let thisService = services.find((card) => card.id === serviceId);
    let detail = document.querySelector(".details");
    detail.classList.add("card-container");
    if (thisService) {
      detail.innerHTML = `
    
   
   
   
      <div class="service-card">
     <h3 class="service-name">${thisService.name}</h3> 
      
    <p class="bold-title">service description</p>
  <p>${thisService.description}</p>
    <div class="service-block">   
  
  <div class="image">
    <img src="${thisService.image}">
    

</div>
    

<div class="pricing-section">

<ul class="pricing">
<h4>Tier 1: Basic – £49 per service</h4>
<li> Entry-level package</li>
<li> Covers essentials only</li>
<li> Best for individuals & sole traders</li>

<h4>Tier 2: Standard ⭐ (Most Popular) – £99 per service</h4>
 <li>Mid-tier package</li>
<li> Balanced support + added value</li>
 <li>Ideal for startups & small businesses</li>

<h4>Tier 3: Premium – £199 per service</h4>
 <li>Comprehensive package</li>
 <li>High-touch, tailored support</li>
 <li>Designed for growing businesses</li>

</ul>
<a class="btn">book now</a>



</div>

</div>
</div>
</div>


    `;

      detail.appendChild(cardContainer);
    }
  });
