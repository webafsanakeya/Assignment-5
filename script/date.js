function getCurrentDate(){
    const now = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = dayNames[now.getDay()];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    return `${dayName}, ${monthName}, ${day}, ${year}`;
}
document.getElementById("current-date").textContent = getCurrentDate();