document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.querySelector("input[placeholder='Name']").value;
    const lastName = document.querySelector(
      "input[placeholder='Last Name']"
    ).value;
    const mobile = document.querySelector(
      "input[placeholder='Mobile No']"
    ).value;
    const email = document.querySelector("input[placeholder='Email']").value;
    const city = document.querySelector("input[placeholder='City']").value;
    const message = document.querySelector(
      "textarea[placeholder='Message']"
    ).value;

    // Send email using EmailJS
    emailjs
      .send("service_7avi3lo", "template_62250pl", {
        name: name,
        last_name: lastName,
        mobile: mobile,
        email: email,
        city: city,
        message: message,
      })
      .then(
        function (response) {
          
          console.log("Success!", response);
        },
        function (error) {
          
          console.error("Error:", error);
        }
      );
  });
});
