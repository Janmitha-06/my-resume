$(document).ready(function() {
    // Select all navigation links
    $('nav a').on('click', function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        
        // Get the href attribute (target section or page)
        const target = $(this).attr('href');
        
        // Scroll smoothly to the target element's position
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500); // Duration in milliseconds
    });
});
