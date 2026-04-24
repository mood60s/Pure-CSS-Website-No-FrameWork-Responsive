//============================
// Select Elements:
//=============================
const ALLLIS = document.querySelectorAll(".info-list li");
const ALLTABS = document.querySelectorAll(".information .info-content > div");
// Loop To it
ALLLIS.forEach((li) => {
  // Add Event Click To Every Li;
  li.addEventListener("click", (e) => {
    // Remove Class From All Elements
    ALLLIS.forEach((li) => li.classList.remove("active"));
    // Add Class To Current Li;
    e.currentTarget.classList.add("active");
    // Hide All Tabs;
    ALLTABS.forEach((tab) => {
      tab.style.display = "none";
      tab.style.opacity = "0";
    });
    let chosenTab = document.querySelector(e.target.dataset.tab);
    chosenTab.style.display = "block";
    setTimeout(() => {
      chosenTab.style.opacity = "1";
    }, 300);
  });
return;
});
