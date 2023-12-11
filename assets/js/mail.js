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
  
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // You can add further actions here after successful subscription
      } else {
        alert(result.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to subscribe. Please try again.");
    }
  });
  
