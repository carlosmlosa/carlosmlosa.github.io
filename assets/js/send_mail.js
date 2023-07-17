document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
  
    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    // Prepare the data to send
    var data = {
      name: name,
      email: "cmunozlosa@gmail.com",
      subject: subject,
      message: message+email
    };
  
    // Send the data to the server-side script using Fetch API
    fetch('your-server-side-script', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        // Handle the response from the server
        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email. Please try again.');
        }
      })
      .catch(function (error) {
        alert('An error occurred. Please try again later.');
        console.error(error);
      });
  });
  