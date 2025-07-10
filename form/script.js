// Get the form
const form = document.getElementById('myForm');

// Listen for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting normally
    checkForm(); // Check if form is valid
});

// Main function to check the form
function checkForm() {
    // Get input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Clear old error messages
    clearErrors();

    // Check if form is valid
    let isValid = true;

    // Check name
    if (!checkName(name)) {
        isValid = false;
    }

    // Check phone
    if (!checkPhone(phone)) {
        isValid = false;
    }

    // Check email
    if (!checkEmail(email)) {
        isValid = false;
    }

    // If everything is valid, show results
    if (isValid) {
        showResults(name, phone, email);
    }
}

// Check if name is valid
function checkName(name) {
    // Name should only have letters, no spaces or numbers
    const namePattern = /^[A-Za-z]+$/;
    
    if (name === '') {
        showError('nameError', 'Please enter your name');
        return false;
    } else if (!namePattern.test(name)) {
        showError('nameError', 'Name can only have letters, no spaces or numbers');
        return false;
    }
    return true;
}

// Check if phone is valid
function checkPhone(phone) {
    // Phone should be exactly 10 digits
    const phonePattern = /^\d{10}$/;
    
    if (phone === '') {
        showError('phoneError', 'Please enter your phone number');
        return false;
    } else if (!phonePattern.test(phone)) {
        showError('phoneError', 'Phone number must be exactly 10 digits');
        return false;
    }
    return true;
}

// Check if email is valid
function checkEmail(email) {
    // Email should have @ and . in correct format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        showError('emailError', 'Please enter your email');
        return false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address');
        return false;
    }
    return true;
}

// Show error message
function showError(errorId, message) {
    document.getElementById(errorId).textContent = message;
}

// Clear all error messages
function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
}

// Show the results
function showResults(name, phone, email) {
    // Hide the form
    document.getElementById('formSection').classList.add('hidden');
    
    // Show the entered data
    document.getElementById('showName').textContent = name;
    document.getElementById('showPhone').textContent = phone;
    document.getElementById('showEmail').textContent = email;
    
    // Show the result section
    document.getElementById('resultSection').classList.remove('hidden');
}

// Go back to form
function goBack() {
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    
    // Clear errors
    clearErrors();
    
    // Hide results and show form
    document.getElementById('resultSection').classList.add('hidden');
    document.getElementById('formSection').classList.remove('hidden');
}