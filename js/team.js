// Array of team members with their details
const teamMembers = [
    //core team members
    {
        name: "Hamza Ba-mohammed",
        role: "President",
        imageSrc: "../images/Team/bamo.jpeg",
        facebook: "https://www.facebook.com/Hamza.Sci.Maths",
        linkedin: "https://www.linkedin.com/in/hambam/"
    },
    {
        name: "Youssef Benaroud",
        role: "Vice President",
        imageSrc: "../images/Team/benaroud.jpg",
        facebook: "https://www.facebook.com/ussupb",
        linkedin: "https://www.linkedin.com/in/ussupb"
    },
    {
        name: "Imane Jniha",
        role: "Secretary",
        imageSrc: "../images/Team/jniha.jpg",
        facebook: "https://www.facebook.com/imane.jniha?mibextid=ZbWKwL",
        linkedin: "https://www.linkedin.com/in/imane-jniha-7914901b0"
    },
    {
        name: "Hajar El Idrissi",
        role: "Vice Secretary",
        imageSrc: "../images/Team/idrissi.jpg",
        facebook: "https://web.facebook.com/MoroccanMathCom/",
        linkedin: "https://www.linkedin.com/in/hajar-el-idrissi-"
    },
    {
        name: "Amine Sahraoui",
        role: "Treasurer",
        imageSrc: "../images/Team/sahraoui1.jpg",
        facebook: "https://www.facebook.com/amine.sahraoui",
        linkedin: "https://www.linkedin.com/in/amine-sahraoui"
    },
    {
        name: "Hamza Tazi",
        role: "Vice Treasurer",
        imageSrc: "../images/Team/tazi.jpg",
        instagram: "https://instagram.com/hamza.tazii1?igshid=YmMyMTA2M2Y=",
        linkedin: "https://www.linkedin.com/in/hamza-tazi-202bb921b"
    },
    {
        name: "Ayoub Fahame",
        role: "Education Department head & HR Director",
        imageSrc: "../images/Team/fahame.jpg",
        facebook: "https://www.facebook.com/ayoub.fahame/",
        linkedin: "https://www.linkedin.com/in/fahame-ayoub-a31b07c2001"
    },
    //education department
    {
        name: "Fatima Zahra Iguenfer",
        role: "Research Department head",
        imageSrc: "../images/Team/iguenfer.jpg",
        facebook: "https://www.facebook.com/fati.ig7?mibextid=ZbWKwL",
        linkedin: "https://www.linkedin.com/in/fatima-zahra-iguenfer-6120a5191"
    },
    //it department
    {
        name: "Salma Nafia",
        role: "IT head",
        imageSrc: "../images/Team/nafia.png",
        facebook: "https://www.facebook.com/profile.php?id=100078024972780",
        linkedin: "https://www.linkedin.com/in/nafia-salma"
    },
    //sponsoring department
    {
        name: "Assia El-Ouarchani",
        role: "Sponsoring & Collaboration head",
        imageSrc: "../images/Team/El Ourchani.jpeg",
        facebook: "https://www.facebook.com/assia.elouarchani",
        linkedin: "https://www.linkedin.com/in/assia-elouarchani-067048234"
    },
    //design department
    {
        name: "Mehdi Benabdelkader",
        role: "Design & Animation head",
        imageSrc: "../images/Team/benabelkader.jpeg",
        twitter: "https://twitter.com/B_MehdiFluka",
        linkedin: "https://www.linkedin.com/in/mehdi-benabdelkader-059614224/"
    },
    //media department
    {
        name: "Ilham Laaribi",
        role: "Media & Communication head",
        imageSrc: "../images/Team/laaribi.png",
        facebook: "https://www.facebook.com/ilhamlaaribi?mibextid=LQQJ4d",
        linkedin: "https://www.linkedin.com/in/ilham-laaribi-580956195/"
    },
    //event department
    {
        name: "Aya Kourdou",
        role: "Events & Logistics head",
        imageSrc: "../images/Team/kourdou.jpg",
        linkedin: "https://www.linkedin.com/in/kourdou-aya2021"
    }

];

// Function to create a member card
function createMemberCard(member) {
    const card = document.createElement("div");
    card.classList.add("slider-card");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("d-flex", "justify-content-center", "align-items-center", "mb-4");

    const image = document.createElement("img");
    image.src = member.imageSrc;

    const name = document.createElement("h5");
    name.classList.add("MemberName");
    name.textContent = member.name;

    const role = document.createElement("p");
    role.classList.add("MemberRole");
    role.textContent = member.role;

    const links = document.createElement("p");
    const facebookLink = document.createElement("a");
    facebookLink.href = member.facebook;
    facebookLink.target = "_blank";
    const facebookIcon = document.createElement("i");
    facebookIcon.classList.add("fa", "fa-facebook", "circle");
    facebookLink.appendChild(facebookIcon);

    const linkedinLink = document.createElement("a");
    linkedinLink.href = member.linkedin;
    linkedinLink.target = "_blank";
    const linkedinIcon = document.createElement("i");
    linkedinIcon.classList.add("fa", "fa-linkedin", "circle");
    linkedinLink.appendChild(linkedinIcon);

    links.appendChild(facebookLink);
    links.appendChild(linkedinLink);

    card.appendChild(imageContainer);
    imageContainer.appendChild(image);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(links);

    return card;
}

// Function to initialize team members
function initializeTeam() {
    const owlCarousel = document.querySelector(".owl-carousel");

    teamMembers.forEach(member => {
        const memberCard = createMemberCard(member);
        owlCarousel.appendChild(memberCard);
    });
}

// Call the initializeTeam function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeTeam);
