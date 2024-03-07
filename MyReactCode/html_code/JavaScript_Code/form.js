const formData = [];
let duplicateFormData = [];


document.querySelector(".submitBtn").addEventListener("click", validateForm);

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

  //   // Validate feedback--------------------------
  // let feedback = document.getElementById('feedback').value.trim();
  // let feedbackError = document.getElementById('feedbackError');
  //   if (feedback === '') {
  //     feedbackError.textContent = 'Feedback is required';
  //     isValid = false;
  //   } else {
  //     personData.feedback = feedback;
  //     feedbackError.textContent = '';
  //   }

  // Validate favorite star-----------------------
  if (favoriteStar === "") {
    favoriteStarError.textContent = "Please select your favorite star";
    isValid = false;
  } else {
    personData.favoriteStar = favoriteStar;
    favoriteStarError.textContent = "";
  }

  // // Validate website feedback-----------------------
  // let websiteFeedback = document.getElementById('Website').value.trim();
  // let websiteFeedbackError = document.getElementById('websiteFeedbackError');
  // if (websiteFeedback === '') {
  //   websiteFeedbackError.textContent = 'Website feedback is required';
  //   isValid = false;
  // } else {
  //   personData.websiteFeedback = websiteFeedback;
  //   websiteFeedbackError.textContent = '';
  // }

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

document
  .querySelector("button[type='reset']")
  .addEventListener("click", resetError);
// document.querySelector(".form-group").addEventListener("click", resetError);

function resetError() {
  nameError.textContent = "";
  genderError.textContent = "";
  favoriteStarError.textContent = "";
  phoneError.textContent = "";
  console.log("Reset done");
}

// document.querySelector("#searchBar").addEventListener('input',function(duplicateFormData){
//   let toSearch = document.getElementById("searchBar").value.toString.toLowerCase();
//   console.log(typeof duplicateFormData)
//   let matchResult=duplicateFormData.filter(function(obj) {
//     toSearch===obj.name.toLowerCase();
//     return obj;
//   })
//   matchResult.forEach(element => {
//     displayData(element);
//   });
// });

//********************Search function for search by name********************* */
// let testArray=[
//   {
//     name:"Vishwas",
//     gender:"male",
//     favoriteStar:"Sirius",
//     phone:"11111-22222"
//   },
//   {
//     name:"Mia",
//     gender:"female",
//     favoriteStar:"Sirius",
//     phone:"11111-22222"
//   },
//   {
//     name:"Yogesh",
//     gender:"male",
//     favoriteStar:"Sirius",
//     phone:"11111-22222"
//   }
// ];
document.querySelector("#searchBar").addEventListener("input", function () {
  let tableBody = document.getElementsByTagName("tbody");

  tableBody.innerHTML = "";

  let toSearch = document.getElementById("searchBar").value.toLowerCase();
  // console.log(typeof toSearch);
  
  duplicateFormData = duplicateFormData.filter(function (obj) {
    return obj.name.toLowerCase().includes(toSearch);
  });

  displayData(duplicateFormData);
});

document.querySelector(".form-data").addEventListener("click",function(){
  document.getElementById("searchBar").value="";
});



//**********************Individual error message events */


document.querySelector("#name").addEventListener("click",removeNameError);
document.querySelector(".gender-div").addEventListener("click",removeGenderError);
document.querySelector("#favorite-star").addEventListener("click",removefavoriteStarError);
document.querySelector("#phone").addEventListener("click",removePhoneError);
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