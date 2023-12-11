document.getElementById("signupForm").addEventListener("submit", async function(event) {
  event.preventDefault();
  
  const email = document.getElementById("emailInput").value;
  
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    if (response.ok) {
      alert("Successfully subscribed!");
      // You can add further actions here after successful subscription
    } else {
      const textResponse = await response.text();
      alert(textResponse || "Failed to subscribe. Please try again.");
    }
  } catch (error) {
    console.error('Error:', error);
    alert("Failed to subscribe. Please try again.");
  }
});

  
