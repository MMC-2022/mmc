function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const indexFromURL = getQueryParam('index');

  fetch('../js/activities.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      const activity = data.find(item => item.index === parseInt(indexFromURL, 10));
      document.title = 'Activity | ' + activity.title;
      if (activity) {
        const titleElement = document.querySelector('.title-activity');
        titleElement.textContent = activity.title;

        const dateElement = document.querySelector('.date-activity');
        dateElement.textContent = activity.date;

        const images = document.querySelectorAll('.activity-img img');
        if (Array.isArray(activity.image)) {
            images.forEach((image, index) => {
              if (activity.image[index]) {
                image.src = activity.image[index];
              } else {
                image.style.display = 'none';
              }
            });
          } else {
            images[0].src = activity.image;
            images[1].style.display = 'none'; // Hide second image
          }

        const descriptionElement = document.querySelector('.description-activity');
        descriptionElement.textContent = activity.description;
      } else {
        const page = document.querySelector('.main-activity');
        const error = document.createElement("div");
        error.classList.add("error");
        error.textContent = "Activity not found.";
        page.appendChild(error);  
      }
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });