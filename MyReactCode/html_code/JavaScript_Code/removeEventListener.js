const eventListeners = []; // Array to store event listeners

// Function to add event listener and store it in the array
function addEventListenerAndStore(element, event, listener) {
  element.addEventListener(event, listener);
  eventListeners.push({ element, event, listener });
}

// Function to remove all event listeners stored in the array
function removeAllEventListeners() {
  eventListeners.forEach(({ element, event, listener }) => {
    element.removeEventListener(event, listener);
  });
  eventListeners.length = 0; // Clear the array
}

// Add event listeners with the helper function
addEventListenerAndStore(
  document.querySelector(".submitBtn"),
  "click",
  validateForm
);

addEventListenerAndStore(
  document.querySelector("button[type='reset']"),
  "click",
  resetError
);

addEventListenerAndStore(
  document.querySelector("#searchBar"),
  "input",
  function () {
    let tableBody = document.getElementsByTagName("tbody");
    tableBody.innerHTML = "";
    let toSearch = document.getElementById("searchBar").value.toLowerCase();
    duplicateFormData = duplicateFormData.filter(function (obj) {
      return obj.name.toLowerCase().includes(toSearch);
    });
    displayData(duplicateFormData);
  }
);

addEventListenerAndStore(
  document.querySelector(".form-data"),
  "click",
  function () {
    document.getElementById("searchBar").value = "";
  }
);

addEventListenerAndStore(
  document.querySelector("#name"),
  "click",
  removeNameError
);

addEventListenerAndStore(
  document.querySelector(".gender-div"),
  "click",
  removeGenderError
);

addEventListenerAndStore(
  document.querySelector("#favorite-star"),
  "click",
  removefavoriteStarError
);

addEventListenerAndStore(
  document.querySelector("#phone"),
  "click",
  removePhoneError
);


//********************Getting error data********************** */
let nameError = document.getElementById("nameError");
let genderError = document.getElementById("genderError");
let favoriteStarError = document.getElementById("favoriteStarError");
let phoneError = document.getElementById("phoneError");



//****************Validate form data********************* */
function validateForm() { 
  const form=document.querySelector("#feedbackForm");

  const personData = {};

  let name = document.getElementById("name").value.trim();

  let gender = document.querySelector('input[name="gender"]:checked');

  let favoriteStar = document.getElementById("favorite-star").value;

  let phone = document.getElementById("phone").value.trim();
  let isValid = true;

  // ----Validate name-----------------------
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    personData.name = name;
    nameError.textContent = "";
  }

  // -------Validate gender-------------------
  if (!gender) {
    genderError.textContent = "Please select a gender";
    isValid = false;
  } else {
    personData.gender = gender.value;
    genderError.textContent = "";
  }



  // Validate favorite star-----------------------
  if (favoriteStar === "") {
    favoriteStarError.textContent = "Please select your favorite star";
    isValid = false;
  } else {
    personData.favoriteStar = favoriteStar;
    favoriteStarError.textContent = "";
  }



  // Validate phone number-----------------
  if (phone === "") {
    phoneError.textContent = "Phone number is required";
    isValid = false;
  } else if (!/^\d{5}-\d{5}$/.test(phone)) {
    phoneError.textContent =
      "Please enter a valid phone number (e.g., 12345-67890)";
    isValid = false;
  } else {
    personData.phone = phone;
    phoneError.textContent = "";
  }

  if (isValid) {
    formData.push(personData);
    duplicateFormData.push(personData);
    displayData(duplicateFormData);
    resetError();
    form.reset();
  }
}

//****************Display form data *************************/
function displayData(data) {
  let tableBody = document.querySelector(".table-body");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Loop through each object in the array
  data.forEach(function (obj) {
    // Create a new row
    let row = document.createElement("tr");

    // Add cells for each property in the object
    Object.values(obj).forEach(function (value) {
      let cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// ******************reset form error***********************

function resetError() {
  nameError.textContent = "";
  genderError.textContent = "";
  favoriteStarError.textContent = "";
  phoneError.textContent = "";
  console.log("Reset done");
}

//**********************Individual error message events */

function removeNameError(){
  nameError.textContent = "";
}
function removefavoriteStarError(){
  favoriteStarError.textContent = "";
}
function removeGenderError(){
  genderError.textContent = "";
}
function removePhoneError(){
  phoneError.textContent = "";
}

