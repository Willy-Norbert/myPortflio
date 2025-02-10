// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two")
var ulAfter = $(".slider_section .carousel-indicators .ol_design")

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass("active")) {
        // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(0% + ' + 35 + 'px)'
        })

    } else if (litwo.hasClass("active")) {
        // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(100% - ' + 45 + 'px)'
        })
    }
});

(function() {
    emailjs.init("MHeP9ACEXRDZm3SFA"); // Replace with your actual public key
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Show loading spinner on the button
        let spinner = document.getElementById('spinner');
        let checkIcon = document.getElementById('checkIcon');
        let submitButton = document.getElementById('submitBtn');
        let alertMessage = document.getElementById('alertMessage');
        
        // Change button color to lighter shade and show spinner
        submitButton.style.backgroundColor = '#D1D1D1'; // Very light background color
        spinner.style.display = 'inline-block';
        checkIcon.style.display = 'none';
        submitButton.innerHTML = 'Sending...'; // Update button text while sending
        submitButton.disabled = true; // Disable the button to prevent further clicks
        
        // Center the spinner
        submitButton.style.position = 'relative';

        // Send form data via EmailJS
        emailjs.sendForm('01402', 'template_fce4i7r', this)
            .then(function() {
                // After successful submission
                spinner.style.display = 'none';
                checkIcon.style.display = 'inline-block';
                submitButton.style.backgroundColor = '#4CAF50'; // Green background
                submitButton.innerHTML = 'Email Sent'; // Update button text
                alertMessage.style.display = 'block'; // Show success message
                setTimeout(function() {
                    alertMessage.style.display = 'none'; // Hide success message after a few seconds
                }, 5000);
            }, function(error) {
                // If sending fails
                spinner.style.display = 'none';
                submitButton.style.backgroundColor = '#F44336'; // Red background
                submitButton.innerHTML = 'Failed to send'; // Show failure message in button
                alertMessage.classList.remove('alert-success');
                alertMessage.classList.add('alert-danger');
                alertMessage.innerHTML = '❌ Failed to send message. Please try again!';
                alertMessage.style.display = 'block'; // Show error message
                setTimeout(function() {
                    alertMessage.style.display = 'none'; // Hide error message after a few seconds
                }, 5000);
                submitButton.disabled = false; // Re-enable the button after failure
            });
    });
};


    // Show loader until page has fully loaded
    document.onreadystatechange = function () {
        if (document.readyState !== 'complete') {
          document.querySelector('.loader').style.display = 'block';
          document.querySelector('.content').style.display = 'none';
        } else {
          document.querySelector('.loader').style.display = 'none';
          document.querySelector('.content').style.display = 'block';
        }
      };