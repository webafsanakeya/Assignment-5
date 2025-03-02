
const navNumber = document.getElementById("nav-number");
const assignedBtn = document.getElementById('assigned-btn');
const mobileBtn = document.getElementById("mobile-btn");
const mobileMessageBox = document.getElementById("mobile-message-box");
const historyMessageBtn = document.getElementById("history-message-btn");
const timeSpan = document.getElementById("time");
function getCurrentTime(){
    const now = new Date();
    return now.toLocaleTimeString();
}
mobileBtn.addEventListener("click", function(event) {
    alert("Task Successfully Complited");
    event.preventDefault();
    const presentValue = parseInt(navNumber.textContent);
    const presentTask = parseInt(assignedBtn.textContent);
    navNumber.textContent = presentValue + 1;
    assignedBtn.textContent = presentTask - 1;
    timeSpan.textContent = getCurrentTime();
    mobileMessageBox.classList.remove("hidden");

    if(presentValue === 23){
        navNumber.textContent = presentValue + 1;
        mobileBtn.disabled = true;
    }
    
});
historyMessageBtn.addEventListener("click", function(){
    mobileMessageBox.classList.add("hidden");
})

