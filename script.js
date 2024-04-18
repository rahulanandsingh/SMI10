// Function to show the content of the selected tab
function showTab(tabName) {
    // Hide all content sections
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    
    // Remove the active class from all tabs
    var tabs = document.getElementsByClassName('tab');
    for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('active');
    }
    
    // Show the selected content section and add the active class to the selected tab
    document.getElementById(tabName).style.display = 'block';
    event.target.classList.add('active');
}

// Initialize the first tab to be displayed by default
window.onload = function() {
    showTab('pdf');
};
