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

function setGoal() {

  let goalDate, tExcercise, tCaloriesCount, tStepCount, tTime;

  goalDate = document.getElementById("goalDate").value;
  tExcercise = document.getElementById("tExcercise").value;
  tCaloriesCount = document.getElementById("tCaloriesCount").value;
  tStepCount = document.getElementById("tStepCount").value; 
  tTime = document.getElementById("tTime").value;

  let target_goals = new Array();
  target_goals = JSON.parse(localStorage.getItem("goalSet")) ? JSON.parse(localStorage.getItem("goalSet")) : []

  target_goals.push({
      "goalDate": goalDate,
      "tExcercise": tExcercise,
      "tCaloriesCount": tCaloriesCount,
      "tStepCount": tStepCount,
      "tTime" : tTime
  })
  localStorage.setItem("goalSet", JSON.stringify(target_goals));

  document.getElementById("myForm").reset();
  this.setGoalData()
  this.hideForm()
}

function setGoalData() {
  var goalSet = localStorage.getItem('goalSet')
  var goalSetData = JSON.parse(goalSet);

  var goals_entries = document.querySelector(".goals_entries");

  
  var elements = "";
  goalSetData.map(record => (
      elements += `<tr class="tracker_row">
      <td>${record.goalDate}</td>
      <td>${record.tExcercise}</td>
      <td>${record.tStepCount} Steps</td>
      <td>${record.tCaloriesCount} Calories</td>
      <td>${record.tTime} Minutes</td>
      <td><a type="button" class="btn btn-default" style="background-color:#FF3B11" href="./stopWatch.html">Start</a></td>
      </tr>` 
  ))
  goals_entries.innerHTML = elements
}

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  }


window.onload = function() {
  this.setGoalData()
};