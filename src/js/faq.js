
const faqData = [
    {
        question: "What is the Moroccan Mathematical Community (MMC)?",
        answer: "The Moroccan Mathematical Community is an organization dedicated to promoting math in Morocco."
    },
    {
        question: "What are MMC’s main goals?",
        answer: "MMC aims to enhance math education, support research, human development, and artistic exploration."
    },
    {
        question: "How does MMC improve education?",
        answer: "MMC offers workshops and programs to improve math teaching and learning."
    },
    {
        question: "What’s MMC’s role in research?",
        answer: "MMC organizes conferences, funds research, and encourages collaboration among mathematicians."
    },
    {
        question: "How can I engage with MMC?",
        answer: "You can join as a member, volunteer, contribute, or support MMC’s initiatives. Stay updated on their website and social media."
    }
];

const faqContainer = document.getElementById('faq-container');

faqData.forEach(item => {
    const faqElement = document.createElement('div');
    faqElement.className = 'faq';
    faqElement.innerHTML = `
        <h4 class="faq-title">${item.question}</h4>
        <p class="faq-text">${item.answer}</p>
        <button class="faq-toggle">
            <i class="fa fa-angle-down"></i>
        </button>
    `;
    faqContainer.appendChild(faqElement);
});
