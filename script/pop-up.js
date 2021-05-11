const mail = document.querySelector(".fa-envelope");
const contact = document.querySelector(".contact")
const btn = document.querySelector("#contact-submit");
const pop = document.querySelector(".popup");
const cancAlert = document.querySelector("#cancel-alert")
const showAlert = document.querySelector("#alert");

mail.addEventListener("click", () => {
    pop.style.display = "block";

})

contact.addEventListener("click", () => {
    pop.style.display = "block";

})

btn.addEventListener("click", function () {
    showAlert.style.display = "block";
})

cancAlert.addEventListener("click", function () {
    pop.removeChild(showAlert)
})