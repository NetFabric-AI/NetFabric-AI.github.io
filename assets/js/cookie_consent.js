function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function useCookies() {
    // Function to make use of cookies
    console.log("Cookies are being used.");
    consentGranted();
}

if (readCookie('cookie-consent') == 'all') {
    useCookies();
} else if (readCookie('cookie-consent') == 'essential') {
    // no action necessary
} else {
    document.getElementById('cookie-notice').style.display = 'block';
}

// Event listener for the "Accept all" button
document.getElementById('cookie-notice-accept').addEventListener("click", function() {
    createCookie('cookie-consent', 'all', 31); // Set cookie for 31 days
    document.getElementById('cookie-notice').style.display = 'none'; // Hide notice
    useCookies(); // Call the function to make use of cookies
    location.reload(); // Reload page
});

// Event listener for the "Essential only" button
document.getElementById('cookie-notice-essential').addEventListener("click", function() {
    createCookie('cookie-consent', 'essential', 31); // Set cookie for 31 days
    document.getElementById('cookie-notice').style.display = 'none'; // Hide notice
    location.reload(); // Reload page
});