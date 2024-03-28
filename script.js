// script.js
document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  var formData = new FormData(event.target);

  // Validate form data
  if (!validateForm(formData)) {
    return;
  }

  // Submit form data
  submitForm(formData);
});

function validateForm(formData) {
  // Implement your form validation logic here
  // Return true if the form is valid, false otherwise
  return true;
}

function submitForm(formData) {
  // Implement your form submission logic here
  // You can use AJAX or a server-side script to handle the form submission
  console.log('Form submitted:', formData);
  alert('Thank you for your order!');
}