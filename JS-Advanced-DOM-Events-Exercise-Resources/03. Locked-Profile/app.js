function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((element) =>
    element.addEventListener("click", butttonToggle));

  function butttonToggle(event) {
    //   console.log("isClicked");
    let currentProfile = event.target.parentElement;
    let isActiveButton = currentProfile.querySelector(`input[type="radio"][value="unlock"]`).checked;

    if (isActiveButton) {
      //   console.log("button is active");
      let divElement = currentProfile.querySelector("div");
      if (event.target.textContent == "Show more") {
        divElement.style.display = "block";
        event.target.textContent = "Hide it";
      } else {
        divElement.style.display = "none";
        event.target.textContent = "Show more";
      }
    }
  }

}
 