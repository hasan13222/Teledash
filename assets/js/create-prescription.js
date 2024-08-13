// document.getElementById("medicine_conditional_instruction").value =
//   document.querySelector(
//     'input[name="conditional_instructions"]:checked'
//   ).value;

const addedMedicine = document.querySelector("#added_medicines");
function addMedicineHandler() {
  const medicineName = document.getElementById("medicine_name").value;
  const dosage = document.getElementById("medicine_meal_instruction").value;
  const mealInstruction = document.getElementById(
    "medicine_meal_instruction"
  ).value;
  const duration = document.getElementById("medicine_duration").value;
  const conditionalInstruction = document.getElementById(
    "medicine_conditional_instruction"
  ).value;

  addedMedicine.innerHTML += `<tr>
                                <td>${medicineName}</td>
                                <td>${dosage}</td>
                                <td>${mealInstruction}</td>
                                <td>${duration}</td>
                                <td class="text-end">
                                    <button class="btn btn-md rounded font-sm">Remove</button>
                                </td>
                            </tr>`;

  updateRemoveMedicineButton();
}

function updateRemoveMedicineButton() {
  const removeMedicineButtons = addedMedicine.querySelectorAll(".text-end");

  removeMedicineButtons.forEach((item) => {
    item.addEventListener("click", function (e) {
      this.parentElement.remove();
    });
  });
}

// add medicine submit handler
const addMedicineFormBtn = document.querySelector(
  "#add_medicine_form_submit_btn"
);

addMedicineFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addMedicineHandler();
  return false;
});

// toggle active
const inputElmt = document.querySelector(".toggle_active .input");
const toggleParentElmt = document.querySelector(".toggle_active");

updateBackground();

inputElmt.addEventListener("input", () => {
  updateBackground();
});

function updateBackground() {
  if (inputElmt.checked) {
    toggleParentElmt.classList.add = "active";
    console.log("active");
  } else {
    toggleParentElmt.classList.remove = "active";
    console.log("inactive");
  }
}



// scrollbar
const medicineList = document.querySelector('#medicine_lists');
const ps = new PerfectScrollbar(medicineList);