document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("cardContainer");
  
    // Fetch card data from a JSON file
    fetch('../js/poles.json')
      .then(response => response.json())
      .then(data => {
        data.forEach((card, index) => {
          const cardElement = document.createElement("div");
          cardElement.classList.add("card");

          cardElement.classList.add(card.class);

          const truncatedContent =  card.description;
        
          cardElement.innerHTML = `
          
          <div class="card-content">
            <h3>${card.name}</h3>
            <p>${truncatedContent} <a href="pole.html?index=${card.index}"</p>
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


  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.bureau-member-card');
    let currentIndex = 0;

    function slideCarousel() {
        currentIndex++;
        if (currentIndex > cards.length - 3) {
            currentIndex = 0;
        }
        const offset = -currentIndex * (cards[0].offsetWidth + 20);
        track.style.transform = `translateX(${offset}px)`;
    }

    // Start automatic sliding
    setInterval(slideCarousel, 3000); // Change slide every 3 seconds
});