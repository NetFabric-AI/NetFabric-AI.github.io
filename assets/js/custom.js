//////////////////
// PROTECT MAIL //
//////////////////
function replaceMailTags() {
  // Get all <mail> elements
  var mailElements = document.getElementsByTagName('mail');

  // Convert NodeList to array to avoid live updating
  mailElements = Array.from(mailElements);

  // Loop through each <mail> element
  mailElements.forEach(function(mailElement) {
      // Save the "to" attribute
      var toAttribute = mailElement.getAttribute('to');

      // Create <a> element
      var aElement = document.createElement('a');

      // Copy all attributes from <mail> to <a>
      for (var j = 0; j < mailElement.attributes.length; j++) {
          var attr = mailElement.attributes[j];
          aElement.setAttribute(attr.name, attr.value);
      }

      // Replace tag name
      aElement.removeAttribute('to');
      aElement.removeAttribute('class');
      aElement.innerHTML = mailElement.innerHTML;
      aElement.href = 'mailto:' + toAttribute + '@netfabric.ai';

      if (aElement.getAttribute('addBody') == "true") {
          aElement.innerHTML = toAttribute + '@netfabric.ai';
      }

      // Replace <mail> with <a>
      mailElement.parentNode.replaceChild(aElement, mailElement);
  });
}

// Call the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', replaceMailTags);

//////////////
// TOOLTIPS //
//////////////
document.addEventListener("DOMContentLoaded", function() {
  // Your code here
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});


