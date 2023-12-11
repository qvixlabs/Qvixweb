document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("emailInput").value;
    const data = {
        email_address: email,
        status: "subscribed"
    };

    fetch('https://us11.api.mailchimp.com/3.0/lists/<list_id>/members', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('anystring:' + 'f6a13635cb26f9d9d37cbf327e5b0ec4-us11')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("Successfully subscribed!");
            // You can add further actions here after successful subscription
        } else {
            alert("Failed to subscribe. Please try again.");
        }
    })
    .catch(error => console.error('Error:', error));
});
