document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("cardContainer");
  
    // Fetch card data from a JSON file
    fetch('../js/poles.json')
      .then(response => response.json())
      .then(data => {
        data.forEach((card, index) => {
          const cardElement = document.createElement("div");
          cardElement.classList.add("card");
            
          const truncatedContent = card.description.length > 180 ? card.description.slice(0, 180) + '...' : card.description;
        
          cardElement.innerHTML = `
          <div class="logo-pole">
            <img src="${card.image}" alt="">
          </div>
          <div class="card-content">
            <h3>${card.name}</h3>
            <p>${truncatedContent} <a href="pole.html?index=${card.index}" class="see-more">See more</a></p>
          </div>
        `;

        
            cardContainer.appendChild(cardElement);

            cardElement.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });