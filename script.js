// Function to show the content of the selected main tab
function showMainTab(subject) {
    // Hide all subject contents
    var subjects = document.getElementsByClassName('subject-content');
    for (var i = 0; i < subjects.length; i++) {
        subjects[i].style.display = 'none';
    }
    
    // Remove the active class from all main tabs
    var mainTabs = document.getElementsByClassName('main-tab');
    for (var j = 0; j < mainTabs.length; j++) {
        mainTabs[j].classList.remove('active');
    }
    
    // Show the selected subject content and add the active class to the selected main tab
    document.getElementById(subject).style.display = 'block';
    event.target.classList.add('active');
    
    // Initialize the first sub-tab within the selected subject
    showSubTab(subject, 'pdf');
}

// Function to show the content of the selected sub-tab within a subject
function showSubTab(subject, tabName) {
    // Hide all content sections within the selected subject
    var contentSections = document.querySelectorAll(`#${subject} .content`);
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }
    
    // Remove the active class from all tabs within the selected subject
    var tabs = document.querySelectorAll(`#${subject} .tab`);
    for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('active');
    }
    
    // Show the selected content section and add the active class to the selected tab
    document.getElementById(`${subject}_${tabName}`).style.display = 'block';
    event.target.classList.add('active');
}

// Initialize the first main tab and sub-tab to be displayed by default
window.onload = function() {
    showMainTab('maths');
    showSubTab('maths', 'pdf');
};

// image carousel books

// Define arrays of image URLs for different sets for each carousel
const imageSets = [
    ['https://m.media-amazon.com/images/I/71ZrWBBs8ZL._SY342_.jpg', 'https://m.media-amazon.com/images/I/71JH+5S-z7L._SY342_.jpg', 'https://m.media-amazon.com/images/I/815DS5QBwIL._SL1500_.jpg'], // Image set for carousel 1
    ['https://m.media-amazon.com/images/I/71-l4S+1suL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/81oRFCyFPJL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/71DhayXFI6L._SL1500_.jpg'], // Image set for carousel 2
    // Add more arrays as needed for additional carousels
];

// Select all carousel containers
const carousels = document.querySelectorAll('.carousel');

// Function to load images into a carousel
function loadImages(carousel, imageSet) {
    carousel.innerHTML = ''; // Clear existing images
    imageSet.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        carousel.appendChild(img);
    });
}

// Loop through each carousel and load images into it
carousels.forEach((carousel, index) => {
    loadImages(carousel, imageSets[index]); // Load images corresponding to the index
});



