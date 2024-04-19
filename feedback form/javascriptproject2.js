// Function to update overall ratings
function updateOverallRatings() {
    const overallRatings = calculateOverallRatings();
    document.getElementById('overallRatings').querySelectorAll('p').forEach((element, index) => {
        element.textContent = `${'*'.repeat(index + 1)} ${overallRatings[index]}`;
    });
}

// Function to calculate overall ratings
function calculateOverallRatings() {
    const overallRatings = [0, 0, 0, 0, 0]; // Array to store counts for each rating
    feedbackData.forEach((feedback) => {
        overallRatings[feedback.rating - 1]++; // Increment count for the corresponding rating
    });
    return overallRatings;
}

// Function to display feedback
function displayFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    feedbackList.innerHTML = ''; // Clear previous feedback
    feedbackData.forEach((feedback) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${feedback.name}: ${feedback.rating} stars`;
        feedbackList.appendChild(listItem);
    });
}

// Function to display feedback in the "All Feedbacks" column
function displayFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    feedbackList.innerHTML = ''; // Clear previous feedback
    feedbackData.forEach((feedback) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${feedback.name}: ${feedback.rating} stars`;
        feedbackList.appendChild(listItem);
    });
}


// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const name = event.target.elements.name.value;
    const rating = parseInt(event.target.elements.rating.value);
    if (name && rating >= 1 && rating <= 5) {
        feedbackData.push({ name, rating }); // Store name and rating in feedback data
        displayFeedback();
        updateOverallRatings(); // Update overall ratings after new feedback is submitted
    } else {
        alert('Please enter a valid name and rating (1-5 stars)');
    }
    event.target.reset(); // Reset form fields after submission
}

// Initialize form submission event listener
document.getElementById('feedbackForm').addEventListener('submit', handleSubmit);

// Initialize feedback data array
let feedbackData = [];
