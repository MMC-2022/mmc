// Function to create cards dynamically
function createActivityCard(activity) {
    const maxDescriptionLength = 300; // Set the maximum length for description
    
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card"); // Ajouter la classe 'card' pour chaque carte

    const descSectionDiv = document.createElement("div");
    descSectionDiv.classList.add("DescSection");

    const img = document.createElement("img");
    img.classList.add("img");
    img.src = activity.image[0];
    descSectionDiv.appendChild(img);  
  
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("Des");
  
    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = activity.title;
    descriptionDiv.appendChild(title);
  
    const date = document.createElement("p");
    date.classList.add("date");
    date.textContent = activity.date;
    descriptionDiv.appendChild(date);
  
    let truncatedDescription = activity.description;
    if (activity.description.length > maxDescriptionLength) {
      truncatedDescription = activity.description.substring(0, maxDescriptionLength) + "...";
    }
  
    const desc2 = document.createElement("p");
    desc2.classList.add("Desc2");
    desc2.textContent = truncatedDescription;
    descriptionDiv.appendChild(desc2);
  
    const moreInfoLink = document.createElement("a");
    moreInfoLink.textContent = "Read more ...";
    moreInfoLink.href = `activity.html?index=${activity.index}`;
    moreInfoLink.classList.add("more-info-link");
    descriptionDiv.appendChild(moreInfoLink);
  
    descSectionDiv.appendChild(descriptionDiv);
    cardDiv.appendChild(descSectionDiv);
  
    return cardDiv;
  }
  
  // Function to add cards to the HTML
  function renderActivities(activitiesData) {
    const activitiesContainer = document.querySelector(".activities");
  
    activitiesData.forEach(activity => {
      const card = createActivityCard(activity);
      activitiesContainer.appendChild(card);
    });
  }
  
  // Fetch activities data from JSON file
  fetch('../js/activities.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      // Render activities once data is fetched
      renderActivities(data);
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
  