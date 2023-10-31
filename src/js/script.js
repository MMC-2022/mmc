// search
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.transitionDuration = "0.3s";
}
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";

}

// Responsive FAQ
const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const parent = button.closest('.faq');
        const isActive = parent.classList.contains('active');
        document.querySelectorAll('.faq').forEach((el) => {
            el.classList.remove('active');
        });
        //   button.parentElement.classList.toggle("active");
        if (!isActive) {
            parent.classList.add('active');
        }
    });
});





//OwlCarousel
$(document).ready(function () {
    var owl = $('.owl-carousel');
    var desc = $('#desc');
    owl.owlCarousel({
        loop: true,
        margin: 25,
        responsiveClass: true,
        center: true,
        items: 5,
        // auto play feature
        autoplay: true,         // comment this line to stop the auto-play
        autoplayTimeout: 4000,
        autoplayHoverPause: true,

        //
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        onInitialized: startCarousel,

        responsive: {
            0: {
                items: 1,
                // nav:true
            },
            600: {
                items: 3,
                // nav:true
            },
            1000: {
                items: 5,
                // nav:true,
                // loop:false
            }
        },

        onChanged: function (event) {
            // Get the index of the active center item
            var activeIndex = event.item.index;
            var title;
            var desc1, desc2, desc3;
            var img;
            switch (activeIndex) {
                case 5:
                    title = "Pole research and education";
                    desc1 = "Research and Education pole has two departments: the research department and the education department."
                    desc2 = "the education department plays a vital role in promoting excellence in mathematics. Firstly, the department focuses on training young students in mathematics and its applications from an early age by providing both online and in-person courses, as well as organizing mathematics olympiads. Secondly, the department helps apply mathematical concepts to real-life projects through hands-on workshops, practical exercises, peer mentoring, and certification training. In addition, the department also provides academic guidance and mentorship to students, helping them navigate their academic journeys. Finally, the department excels in mathematics and its applications through cutting-edge research, and book and magazine publications. Overall, the research and education department is committed to enhancing students' understanding and application of mathematics, and fostering a passion for the subject that will serve them well throughout their academic and professional lives.";
                    desc3 = "The research department has as a goal to encourage scientific research in applied and pure Mathematics. Our mission is to help Moroccan students gain the basic fundamentals of scientific research by taking part of our free workshops and trainings, and encourage them to collaborate with other members on MMC’s research projects. The end goal of the pole is to develop the mathematical thinking of its members and  train them to become independent researchers.";
                    img = "../images/poles/education.png";
                    break;
                case 6:
                    title = "Pole media and communication";
                    desc1 = "Our pole involves overseeing and coordinating the various forms of media and communication used by the community. This includes tasks as developing and implementing a communication strategy, managing the community's social media presence, and handling media inquiries, and ensuring that the communication efforts align with overall goals and values of the community.<br><br>Additionally, the media and the communication pole involves guaranteeing that the communication within the community is healthy and effective."
                    desc2 = "";
                    desc3 = "";
                    img = "../images/poles/media.png";
                    break;
                case 7:
                    title = "Pole sponsoring and collaboration";
                    desc1 = ""
                    desc2 = "";
                    desc3 = "";
                    img = "../images/poles/sponsoring.png";
                    break;
                case 8:
                    title = "Pole IT";
                    desc1 = "The IT pole is a department that provides technical support and solutions to community members in various ways, including improving their daily lives and overall well-being. This may include offering IT training, providing software and hardware assistance, and troubleshooting technical issues. Additionally, the pole acts as a bridge between the community and math enthusiasts, facilitating communication and collaboration between the two groups. This can involve organizing events and workshops that bring together math lovers, as well as creating online forums and resources for sharing information and knowledge. By promoting greater understanding and appreciation of math and technology, the IT pole helps to create a more connected and empowered community."
                    desc2 = "";
                    desc3 = "";
                    img = "../images/poles/it.png";
                    break;
                case 9:
                    title = "Pole design and animation";
                    desc1 = "We are responsible for creating visual communication materials that effectively convey a message or idea. we work closely with other poles and we use an artistic approach with knowledge of design principles to create visually appealing layouts that align with the brand's identity and the community's overall strategy, and resonate with our intended audience."
                    desc2 = "";
                    desc3 = "";
                    img = "../images/poles/design.png";
                    break;
                case 10:
                    title = "Pole events and logistics";
                    desc1 = "Our pole encompasses everything about an event,  from its planning and execution to venue selection, catering, budgeting and financial management, and onsite management. We also provide logistical support such as transportation arrangements, audio-visual support, security, and other services. We understand the importance of planning and logistics for a successful event, and are committed to providing the highest quality of professional services."
                    desc2 = "";
                    desc3 = "";
                    img = "../images/poles/event.png";
                    break;
            }
            // Update the text in the div
            $('.title').text(title);
            $('.Desc1').text(desc1);
            $('.Desc2').text(desc2);
            $('.Desc3').text(desc3);
            $('.img').attr('src', img);
        }
    })


    owl.on('changed.owl.carousel', startCarousel);
    function startCarousel(event) {

        setTimeout(function () {
            var activeEls = $('.owl-item.active');
            var slideToCaption1 = activeEls.eq(0); // Change this value to target a different slide
            var slideToCaption2 = activeEls.eq(4); // Change this value to target a different slide
            setCarouselCaption1(slideToCaption1);
            setCarouselCaption2(slideToCaption2);
        }, 1);

        function setCarouselCaption1(el) {
            $(".owl-item").removeClass("target1");
            el.addClass("target1");
        }
        function setCarouselCaption2(el) {
            $(".owl-item").removeClass("target2");
            el.addClass("target2");
        }

    };

    desc.hover(function(){
        owl.trigger('stop.owl.autoplay');
      }, function(){
        owl.trigger('play.owl.autoplay');
      });


});


