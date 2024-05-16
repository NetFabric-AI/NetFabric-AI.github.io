document.addEventListener("DOMContentLoaded", function() {
    // Show dropdown on hover
    document.querySelectorAll('.nav-item.dropdown').forEach(function(everyDropdown){
      everyDropdown.addEventListener('mouseover', function(){
        const dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.classList.add('show');
      });
  
      everyDropdown.addEventListener('mouseleave', function(){
        const dropdownMenu = this.querySelector('.dropdown-menu');
        dropdownMenu.classList.remove('show');
      });
    });
  });
  
// Function to replace <mail> tags with <a> tags
function replaceMailTags() {
  // Get all <mail> elements and convert them into an array
  var mailTags = Array.from(document.getElementsByTagName('mail'));
  
  // Loop through each <mail> element
  mailTags.forEach(function(mailTag) {
    var prefix = mailTag.textContent.trim(); // Get the prefix text
    var email = prefix + '@netfabric.ai'; // Create the email address
    
    // Create a new <a> element
    var aTag = document.createElement('a');
    aTag.href = 'mailto:' + email; // Set the href attribute
    aTag.textContent = email; // Set the visible text
    
    // Replace <mail> with the new <a> element
    mailTag.parentNode.replaceChild(aTag, mailTag);
  });
}

// Call the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', replaceMailTags);
