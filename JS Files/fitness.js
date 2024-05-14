import FitnessTracker from './fitnessTracker.js';

const app = document.getElementById("app");

const ft = new FitnessTracker(app);

window.ft = ft;

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  }