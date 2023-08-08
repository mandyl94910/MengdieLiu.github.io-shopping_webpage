const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");
function handleSubmit(event) {
    event.preventDefault(); 


    const messageElement = document.createElement("p");
    messageElement.textContent = "Thanks for registering on my website!";
    messageElement.style.fontSize = "28px";

    contactPage.innerHTML = ""; 
    contactPage.appendChild(messageElement);
}


submitButton.addEventListener("click", handleSubmit);