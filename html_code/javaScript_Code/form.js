const formData = [];
const duplicateFormData = [];

document.querySelector(".submitBtn").addEventListener("click", validateForm);

//----------Getting all data-------------------------
let nameError = document.getElementById("nameError");
let genderError = document.getElementById("genderError");
let favoriteStarError = document.getElementById("favoriteStarError");
let phoneError = document.getElementById("phoneError");
  
  //****************Validate form data********************* */
  function validateForm () {
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
  }
};

//****************Display form data *************************/
const displayData = (obj) => {

  document.getElementById("feedbackForm").reset();
    // Create a table element

      let tableBody = document.getElementsByTagName("tbody")[0];
      let newRow = tableBody.insertRow();
    
      let nameCell = newRow.insertCell(0);
      let genderCell = newRow.insertCell(1);
      let favoriteStarCell = newRow.insertCell(2);
      let phoneCell = newRow.insertCell(3);
    
      nameCell.textContent = obj.name;
      genderCell.textContent = obj.gender;
      favoriteStarCell.textContent = obj.favoriteStar;
      phoneCell.textContent = obj.phone;
    };

document.querySelector("button[type='reset']").addEventListener('click',resetError);
document.querySelector(".form-group").addEventListener('click',resetError);
function resetError(){
  nameError.textContent = "";
  genderError.textContent = "";
  favoriteStarError.textContent = "";
  phoneError.textContent = "";
};

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
document.querySelector("#searchBar").addEventListener('input', function() {
  let tableBody = document.getElementsByTagName("tbody");
  tableBody.innerHTML="";
  let toSearch = document.getElementById("searchBar").value.toLowerCase();
  // console.log(typeof toSearch);
  let matchResult = duplicateFormData.filter(function(obj) {
    return obj.name.toLowerCase().includes(toSearch);
  });
  matchResult.forEach(function(element) {
    displayData(element);
  });
});