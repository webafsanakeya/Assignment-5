alert("task asigned");


const navNumber = document.getElementById("nav-number");
const assignedBtn = document.getElementById('assigned-btn');
const mobileBtn = document.getElementById("mobile-btn");
mobileBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const presentValue = parseInt(navNumber.textContent);
    const presentTask = parseInt(assignedBtn.textContent);
    navNumber.textContent = presentValue + 1;
    assignedBtn.textContent = presentTask - 1;

    if(presentValue === 23){
        navNumber.textContent = presentValue + 1;
        mobileBtn.disabled = true;
    }
    
});

