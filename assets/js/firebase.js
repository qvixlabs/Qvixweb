const firebaseConfig = {
    apiKey: "AIzaSyB8Xsw0gciaT1l3r9XqOeRhESQTHrGn9-M",
    authDomain: "qvix-185bf.firebaseapp.com",
    databaseURL: "https://qvix-185bf-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qvix-185bf",
    storageBucket: "qvix-185bf.appspot.com",
    messagingSenderId: "104685401695",
    appId: "1:104685401695:web:61ab5488ff99bc705fcdea",
    measurementId: "G-C9DZZHDRRZ"


  };

  firebase.initializeApp(firebaseConfig);
  

  function submitToFirebase() {
    console.log("Button clicked"); // Check if the button click event is firing
  
    const name = sanitizeInput(document.getElementById("name").value);
    const email = sanitizeInput(document.getElementById("email").value);
    const message = sanitizeInput(document.getElementById("message").value);
  
    console.log(name, email, message); // Log the sanitized values
  
    // Check if all required fields are filled
    if (name && email && message) {
      const database = firebase.database();
  
      database.ref('formData').push({
          name: name,
          email: email,
          message: message
        })
        .then(() => {
          console.log("Data sent successfully"); // Log success message
  
          // Clear input fields after successful submission
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
  
          const responseElement = document.querySelector('.ajax-response');
          responseElement.textContent = "Message sent successfully!";
        })
        .catch((error) => {
          console.error("Error sending data: ", error); // Log error message
  
          const responseElement = document.querySelector('.ajax-response');
          responseElement.textContent = "Error sending message. Please try again.";
        });
    } else {
      // If any required field is empty, display an error message
      const responseElement = document.querySelector('.ajax-response');
      responseElement.textContent = "Please fill out all required fields.";
    }
  }
  
  // Function to sanitize user input (prevent potential harmful content)
  function sanitizeInput(input) {
    // Implement your sanitization logic here (e.g., regex to remove HTML tags or specific characters)
    return input.replace(/<[^>]*>?/gm, ''); // Example: Remove HTML tags
  }
  
  