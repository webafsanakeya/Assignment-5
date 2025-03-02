const navNumber = document.getElementById("nav-number");
const assignedBtn = document.getElementById('assigned-btn');
const darkModeBtn = document.getElementById("dark-mode-btn");
const darkMessageBox = document.getElementById("dark-message-box");
const timeSpan = document.getElementById("time");
function getCurrentTime(){
    const now = new Date();
    return now.toLocaleTimeString();
}
darkModeBtn.addEventListener("click", function(event) {
    const presentValue = parseInt(navNumber.textContent, 10);
    const presentTask = parseInt(assignedBtn.textContent, 10);
    navNumber.textContent = presentValue + 1;
    assignedBtn.textContent = presentTask - 1;
    alert("Task Successfully Complited"); 
    timeSpan.textContent = getCurrentTime();
    darkMessageBox.classList.remove("hidden");

    if(presentValue + 1 === 25){
        darkModeBtn.disabled = true;
    }
    
});
