export const renderLogOut = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating----------------------------
  const containerPopup = document.createElement("div");
  const divMain = document.createElement("div");
  const p = document.createElement("p");
  const buttonYes = document.createElement("button");
  const buttonCancel = document.createElement("button");

  //setting-------------------------------
  containerPopup.className = "containerPopup";

  divMain.className = "logOutReconfirm";
  p.textContent = "Are you sure you want to logout?";
  buttonYes.textContent = "Yes";
  buttonYes.className = "logoutButtons";
  buttonCancel.textContent = "Cancel";
  buttonCancel.className = "logoutButtons";

  //appending------------------------------
  divMain.append(p, buttonYes, buttonCancel);
  // containerPopup.append(divMain);

  // appending page
  document.body.append(containerPopup);
  document.body.append(divMain);

  // Event Listeners -----------------------
  buttonYes.addEventListener("click", () => {
    axios
      .delete("/api/session")
      .then((response) => {
        location = "/";
      })
      .catch((err) => {
        alert(err);
      });
  });
  //cancel modal
  buttonCancel.addEventListener("click", () => {
    //remove modal
    divMain.remove();
    containerPopup.remove();
  });
  //cancel modal clicking on black screen overlay
  containerPopup.addEventListener("click", () => {
    //remove modal
    divMain.remove();
    containerPopup.remove();
  });
  //cancel modal by pressing escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      //remove modal
      divMain.remove();
      containerPopup.remove();
    }
  });
};
