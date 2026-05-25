// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Handle Quote Form Submission
const quoteForm = document.getElementById('quote-form');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the page from refreshing
        
        // In a full backend setup, you would send this data to Supabase/Node.js here.
        // For now, we show a success message to the user.
        alert("Thank you for your inquiry! The SPV Global team will contact you within 24 hours.");
        
        // Clear the form
        quoteForm.reset();
    });
}