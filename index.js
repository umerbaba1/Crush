function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value; // Get the name input value
    
    // Store the name in local storage
    localStorage.setItem('userName', name);
    
    // Redirect to index2.html
    window.location.href = 'index2.html';
    name.value=''
}