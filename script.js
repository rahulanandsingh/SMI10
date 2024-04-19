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
