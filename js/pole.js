function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

const indexFromURL = getQueryParam('index');
fetch('../js/poles.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  return response.json();
})
.then(data => {
  const pole = data.find(item => item.index === parseInt(indexFromURL, 10));
  document.title = 'pole | ' + pole.name;
 
  if (pole) {
    const polename = document.querySelector('.title-pole');
    polename.textContent = pole.name;

    const dateElement = document.querySelector('.pole-desc');
    dateElement.textContent = pole.description;

    const images = document.querySelectorAll('.pole-main-desc img');
    images[0].src = pole.image;

    const projectsList = document.querySelector('.project');
    if(pole.projects.length == 0){
        const projectDescriptionElement = document.createElement('p');
        projectDescriptionElement.classList.add('description-proj');
        projectDescriptionElement.textContent = "No upcoming projects";
        const projectDiv = document.createElement('div');
        projectDiv.appendChild(projectDescriptionElement);
        upcomingProjectsList.appendChild(projectDiv);
    }
    pole.projects.forEach(project => {
    
        const projectTitleElement = document.createElement('h3');
        projectTitleElement.classList.add('title-proj');
        projectTitleElement.textContent = project.title;

        const projectDescriptionElement = document.createElement('p');
        projectDescriptionElement.classList.add('description-proj');
        projectDescriptionElement.textContent = project.description;

        const projectDiv = document.createElement('div');
        projectDiv.appendChild(projectTitleElement);
        projectDiv.appendChild(projectDescriptionElement);

        projectsList.appendChild(projectDiv);
    });

    const upcomingProjectsList = document.querySelector('.upproject');
    if(pole.upcoming_projects.length == 0){
        const projectDescriptionElement = document.createElement('p');
        projectDescriptionElement.classList.add('description-proj');
        projectDescriptionElement.textContent = "No upcoming projects";
        const projectDiv = document.createElement('div');
        projectDiv.appendChild(projectDescriptionElement);
        upcomingProjectsList.appendChild(projectDiv);
    }
    pole.upcoming_projects.forEach(upcomingProject => {
        const projectTitleElement = document.createElement('h3');
        projectTitleElement.classList.add('title-proj');
        projectTitleElement.textContent = upcomingProject.title;

        const projectDescriptionElement = document.createElement('p');
        projectDescriptionElement.classList.add('description-proj');
        projectDescriptionElement.textContent = upcomingProject.description;

        const projectDiv = document.createElement('div');
        projectDiv.appendChild(projectTitleElement);
        projectDiv.appendChild(projectDescriptionElement);

        upcomingProjectsList.appendChild(projectDiv);
    });

  } 
  
  
  
  else {
    const page = document.querySelector('.main-activity');
    const error = document.createElement("div");
    error.classList.add("error");
    error.textContent = "Page not found.";
    page.appendChild(error);  
  }


})
.catch(error => {
  console.error('There was a problem fetching the data:', error);
});