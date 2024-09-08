document.getElementById("downloadBtn").addEventListener("click", function() {
    var fbLink = document.getElementById("fbLink").value;
    var resultContainer = document.getElementById("result");

    if (!fbLink) {
        resultContainer.innerHTML = "<p style='color: red;'>Please enter a valid Facebook link!</p>";
        return;
    }

    // Example of validating the Facebook link format
    if (!isValidFacebookLink(fbLink)) {
        resultContainer.innerHTML = "<p style='color: red;'>Invalid Facebook link!</p>";
        return;
    }

    // Simulated download process (Actual implementation requires API/backend)
    resultContainer.innerHTML = `<p>Processing link... <br> <strong>${fbLink}</strong></p>`;
    
    // Fake a success result after 2 seconds
    setTimeout(function() {
        resultContainer.innerHTML = `<p>Download successful! Here's your video/photo: <a href="${fbLink}" download>Click to download</a></p>`;
    }, 2000);
});

function isValidFacebookLink(link) {
    var regex = /^(https?:\/\/)?(www\.)?facebook\.com\/.+/;
    return regex.test(link);
}
