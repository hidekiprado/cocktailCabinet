// 9a. Add to cabinet
export const addToCabinetRender = () => {
  //access page
  const page = document.querySelector("#page");
  //creating and setting -----------------------
  const containerPopup = document.createElement("div");
  containerPopup.className = "containerPopup";
  const divMain = document.createElement("div");
  divMain.id = "divAddForm";
  const h3 = document.createElement("h3");
  h3.id = "addAlcoholTitle"
  h3.textContent = "Add alcohol to your cabinet";
  const addForm = document.createElement("form");
  addForm.id = "addForm";
  const select = document.createElement("select");
  select.id = "selectAlcohol";
  const cancelBtn = document.createElement("button");
  cancelBtn.id = "cancelAddAlcohol";
  cancelBtn.textContent = "Cancel";
  cancelBtn.type = "Button";
  const addBtn = document.createElement("button");
  addBtn.id = "addAlcoholButton";
  addBtn.textContent = "Add";
  const inputVolume = document.createElement("input");
  inputVolume.id = "inputVolume"
  inputVolume.placeholder = "volume (ml)";
  inputVolume.setAttribute("required", "");
  inputVolume.type = "number";

  // 5. Populate select (drop dpown) with liquor list
  axios
    .get("api/liquor")
    .then((response) => {
      const list = response.data;
      list.forEach((item) => {
        const option = document.createElement("option");
        option.text = item.name;
        option.value = item.id;
        select.appendChild(option);
      });
    })
    .catch(
      (err) =>
        (page.textContent = "Something went wrong (liquorList): " + err.message)
    );

  //appending ------------------------------------
  addForm.append(h3, select, inputVolume, addBtn, cancelBtn);
  divMain.append(addForm);
  document.body.append(containerPopup);
  document.body.append(divMain);

  //Events Listeners -----------------------------
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
      liquor_id: select.options[select.selectedIndex].value,
      volume: inputVolume.value,
    };
    // API call
    axios
      .post("api/cabinet", data)
      .then(() => {
        // Return to parent page (Cabinet list page)
        renderCabinetView();
      })
      .catch(
        (err) =>
          (page.textContent =
            "Something went wrong (addToCabinetRender): " + err.message)
      );
    containerPopup.remove();
    divMain.remove();
  });
  //cancel popup
  cancelBtn.addEventListener("click", () => {
    containerPopup.remove();
    divMain.remove();
  });
  //cancel popup clicking on black screen
  containerPopup.addEventListener("click", () => {
    containerPopup.remove();
    divMain.remove();
  });
  //validating negative numbers
  inputVolume.addEventListener("input", () => {
    if (inputVolume.value < 0) {
      inputVolume.value = 0;
    }
  });
};

// 9d. Delete cabinet and unregister
export const removeUserCabinet = () => {
  axios
    .delete("/api/user_cabinet")
    .then((response) => {
      // Return to root page
      location = "/";
    })
    .catch(
      (err) =>
        (page.textContent =
          "Something went wrong (removeUserCabinet): " + err.message)
    );
};

// Delete cabinet warning
export const deleteCabinetWarning = () => {
  const page = document.querySelector("#page");

  // create modal box
  const deleteCabinetModal = document.createElement("div");
  const deleteCabinetModalTitle = document.createElement("div");
  const deleteCabinetModalBody = document.createElement("div");
  const containerPopup = document.createElement("div");
  const deleteCabinetYes = document.createElement("button");
  const deleteCabinetNo = document.createElement("button");

  // setting class tags
  deleteCabinetModal.className = "deleteCabinetModal";
  deleteCabinetModal.classList.add("logOutReconfirm");
  deleteCabinetModalTitle.className = "deleteCabinetModalTitle";
  deleteCabinetModalBody.className = "deleteCabinetModalBody";
  deleteCabinetYes.className = "deleteCabinetYes";
  deleteCabinetNo.className = "deleteCabinetNo";
  containerPopup.classList = "containerPopup";

  // attach divs to modal
  containerPopup.append(deleteCabinetModal);
  deleteCabinetModal.append(deleteCabinetModalTitle, deleteCabinetModalBody);
  deleteCabinetModalBody.append(deleteCabinetYes, deleteCabinetNo);

  // giving elements content
  deleteCabinetModalTitle.innerHTML =
    "Are you sure you want to delete your cabinet? <br> <br> NOTE THIS WILL BE IRREVERSIBLE";
  deleteCabinetYes.innerHTML = "YES";
  deleteCabinetNo.innerHTML = "NO";

  // attach to page
  document.body.append(containerPopup);
  document.body.append(deleteCabinetModal);
  // FUNCTIONS

  //cancel popup
  deleteCabinetNo.addEventListener("click", () => {
    containerPopup.remove();
    deleteCabinetModal.remove();
  });

  //cancel popup clicking on black screen
  containerPopup.addEventListener("click", () => {
    containerPopup.remove();
    deleteCabinetModal.remove();
  });

  // YES DELETE
  deleteCabinetYes.addEventListener("click", () => {
    axios
      .delete("/api/user_cabinet")
      .then((response) => {
        // Return to root page
        location = "/";
      })
      .catch(
        (err) =>
          (page.textContent =
            "Something went wrong (removeUserCabinet): " + err.message)
      );
  });
};




  
  


  