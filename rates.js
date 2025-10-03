let serviceId = Number(new URLSearchParams(window.location.search).get("id"));

fetch("services.json")
  .then((response) => response.json())
  .then((services) => {
    let thisService = services.find((card) => card.id === serviceId);
    let detail = document.querySelector(".details");
    if (thisService) {
      detail.innerHTML = `
    
   
      <article>
       <h3>${thisService.name}</h3>
    <div class="image">
    <img src="${thisService.image}">
    
    </div>


<pre>
<strong>Tier 1: Basic – £49 per service</strong>
• Entry-level package
• Covers essentials only
• Best for individuals & sole traders

<strong>Tier 2: Standard ⭐ (Most Popular) – £99 per service</strong>
• Mid-tier package
• Balanced support + added value
• Ideal for startups & small businesses

<strong>Tier 3: Premium – £199 per service</strong>
• Comprehensive package
• High-touch, tailored support
• Designed for growing businesses
</pre>


<a class="btn">book now</a>
</article>
    `;
    }
  });
