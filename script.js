const startDate = new Date("2026-06-01");
const today = new Date();

startDate.setHours(0,0,0,0);
today.setHours(0,0,0,0);

const diffDays = Math.floor(
    (today - startDate) /
    (1000 * 60 * 60 * 24)
) + 1;

let pageNumber = diffDays;

if(pageNumber < 1){ pageNumber = 1; }
if(pageNumber > 24){ pageNumber = 24; }

document.getElementById("zone-clic").addEventListener("click", function() {
    document.getElementById("defi-image").src = `pages/${pageNumber}.png`;
});