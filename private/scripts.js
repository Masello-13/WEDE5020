// ====================================
// SEARCH FUNCTION FOR ROADMAP PAGE
// ====================================

function searchCareer() {

    let input = document.getElementById("searchInput").value.toUpperCase();

    let careers = document.getElementsByClassName("career");

    for (let i = 0; i < careers.length; i++) {

        let text = careers[i].innerText.toUpperCase();

        if (text.indexOf(input) > -1) {
            careers[i].style.display = "";
        } else {
            careers[i].style.display = "none";
        }
    }
}


// ====================================
// IMAGE LIGHTBOX FUNCTION
// ====================================

function openImage(src) {

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightboxImg").src = src;
}

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";
}


// ====================================
// ENQUIRY FORM VALIDATION
// ====================================

document.addEventListener("DOMContentLoaded", function () {

    let enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let fullName = document.getElementById("fullname").value.trim();

            let email = document.getElementById("email").value.trim();

            let career = document.getElementById("career").value;

            if (fullName === "") {
                alert("Please enter your full name.");
                return;
            }

            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            document.getElementById("response").innerHTML =
                "Thank you, " + fullName +
                ". Your enquiry regarding " +
                career +
                " has been submitted successfully.";

            enquiryForm.reset();

        });

    }

});


// ====================================
// CONTACT FORM VALIDATION
// ====================================

document.addEventListener("DOMContentLoaded", function () {

    let contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let name = document.getElementById("contactName").value.trim();

            let email = document.getElementById("contactEmail").value.trim();

            let message = document.getElementById("contactMessage").value.trim();

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            if (message === "") {
                alert("Please enter a message.");
                return;
            }

            alert("Thank you! Your message has been sent.");

            contactForm.reset();

        });

    }

});


// ====================================
// WELCOME MESSAGE
// ====================================

window.onload = function () {

    console.log("Welcome to Tech_Path ZA");

};

