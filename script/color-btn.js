const body = document.getElementById("body");
const colorBtn = document.getElementById("color-btn");
const colors = ["#33A1FF", "#33FF57", "#FF5733", "#5733FF", "#FF33A1"];
const presentColorIndex = 0;
colorBtn.addEventListener("click", function(event){
    body.style.backgroundColor = colors[presentColorIndex];
    presentColorIndex = (presentColorIndex + 1) % colors.length;

});
