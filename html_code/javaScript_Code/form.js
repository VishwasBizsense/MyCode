document.querySelector('.submitBtn').addEventListener('click', function() {
  var formData = {};
  var isValid = true;

  // ----Validate name--------
  var name = document.getElementById('name').value.trim();
  var nameError = document.getElementById('nameError');
  if (name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  } else {
    formData.name = name;
    nameError.textContent = '';
  }

  // -------Validate gender-------------------
  var gender = document.querySelector('input[name="gender"]:checked');
  var genderError = document.getElementById('genderError');
  if (!gender) {
    genderError.textContent = 'Please select a gender';
    isValid = false;
  } else {
    formData.gender = gender.value;
    genderError.textContent = '';
  }

  // Validate feedback--------------------------
  var feedback = document.getElementById('feedback').value.trim();
  var feedbackError = document.getElementById('feedbackError');
  if (feedback === '') {
    feedbackError.textContent = 'Feedback is required';
    isValid = false;
  } else {
    formData.feedback = feedback;
    feedbackError.textContent = '';
  }

  // Validate favorite star-----------------------
  var favoriteStar = document.getElementById('favorite-star').value;
  var favoriteStarError = document.getElementById('favoriteStarError');
  if (favoriteStar === '') {
    favoriteStarError.textContent = 'Please select your favorite star';
    isValid = false;
  } else {
    formData.favoriteStar = favoriteStar;
    favoriteStarError.textContent = '';
  }

  // Validate website feedback-----------------------
  var websiteFeedback = document.getElementById('Website').value.trim();
  var websiteFeedbackError = document.getElementById('websiteFeedbackError');
  if (websiteFeedback === '') {
    websiteFeedbackError.textContent = 'Website feedback is required';
    isValid = false;
  } else {
    formData.websiteFeedback = websiteFeedback;
    websiteFeedbackError.textContent = '';
  }

  // Validate phone number-----------------
  var phone = document.getElementById('phone').value.trim();
  var phoneError = document.getElementById('phoneError');
  if (phone === '') {
    phoneError.textContent = 'Phone number is required';
    isValid = false;
  } else if (!/^\d{3}-\d{2}-\d{3}$/.test(phone)) {
    phoneError.textContent = 'Please enter a valid phone number (e.g., 123-45-678)';
    isValid = false;
  } else {
    formData.phone = phone;
    phoneError.textContent = '';
  }


  if (isValid) {
for(key of Object.keys(formData)){
      document.querySelector(`.${key}`).innerHTML=`${key} : ${formData[key]}`;
    }
  }
});