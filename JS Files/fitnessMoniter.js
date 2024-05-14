var goalForm = document.getElementById("formDiv");
var goalTable = document.getElementById("tableDiv");
goalForm.style.display = "none";
goalTable.style.display = "block";

function showForm(){
  if ((goalForm.style.display = "none") && (goalTable.style.display = "block")){
      goalForm.style.display = "block"
      goalTable.style.display = "none"
  }
  else {
      goalForm.style.display = "none"
      goalTable.style.display = "block";
  }
}

function hideForm() {
  if ((goalForm.style.display = "block") && (goalTable.style.display = "none")){
      goalForm.style.display = "none"
      goalTable.style.display = "block"
  }
  else {
      goalForm.style.display = "block"
      goalTable.style.display = "none";
  }
} 

function setFitness() {

  let fitDate, stepCount, spo2, caloriesCount, heartRateCount, bloodPresure;

  fitDate = document.getElementById("fitDate").value;
  stepCount = document.getElementById("stepCount").value;
  spo2 = document.getElementById("spo2").value;
  caloriesCount = document.getElementById("caloriesCount").value; 
  heartRateCount = document.getElementById("heartRateCount").value;
  bloodPresure = document.getElementById("bloodPresure").value;

  console.log(fitDate, stepCount, spo2, caloriesCount, heartRateCount, bloodPresure)

  let fitness_Data = new Array();
  fitness_Data = JSON.parse(localStorage.getItem("fitnessData")) ? JSON.parse(localStorage.getItem("fitnessData")) : []

  fitness_Data.push({
      "fitDate": fitDate,
      "stepCount": stepCount,
      "spo2": spo2,
      "caloriesCount":caloriesCount,
      "heartRateCount": heartRateCount,
      "bloodPresure" : bloodPresure
  })
  localStorage.setItem("fitnessData", JSON.stringify(fitness_Data));

  document.getElementById("myForm").reset();
  this.setFitnessData()
  this.hideForm()
}

function setFitnessData() {
  var fitness = localStorage.getItem('fitnessData');
  
  var fitnessData = JSON.parse(fitness);
  var fitness_entries = document.querySelector(".fitness_entries");
  var elements = "";

  fitnessData.map(record => (
      elements += `<tr class="tracker_row">
      <td>${record.fitDate}</td>
      <td>${record.stepCount}</td>
      <td>${record.spo2} Steps</td>
      <td>${record.caloriesCount} Calories</td>
      <td>${record.heartRateCount} Minutes</td>
      <td>${record.bloodPresure} Minutes</td>
      </tr>` 
  ))
  fitness_entries.innerHTML = elements
}

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  }


window.onload = function() {
  this.setFitnessData()
};

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  }