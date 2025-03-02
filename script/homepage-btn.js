document.getElementById("homepage-btn").addEventListener("click", function(event){
    alert("Task Successfully Complited");
    const presentValue = parseInt(navNumber.textContent);
    const presentTask = parseInt(assignedBtn.textContent);
    navNumber.textContent = presentValue + 1;
    assignedBtn.textContent = presentTask - 1;
    if(presentValue === 24){
        navNumber.textContent = presentValue + 1;
        mobileBtn.disabled = true;
    }
    

});
const navNumber = document.getElementById("nav-number");
const assignedBtn = document.getElementById('assigned-btn');
const homepageBtn = document.getElementById("mobile-btn");