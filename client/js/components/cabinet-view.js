export const renderCabinetView = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating-----------------------------------
  const divMain = document.createElement("div");
  const cabinet = document.createElement("div");
  const divCabinet = document.createElement("div");
  const buttonSearch = document.createElement("button");
  const buttonAddCabinet = document.createElement("button");
  const buttonDeleteCabinet = document.createElement("button");
  const buttonHeader = document.createElement("div");

  //setting------------------------------------
  divMain.className = "searchDivMain";
  cabinet.id = "cabinet";
  divCabinet.id = "divCabinet";
  buttonHeader.id = "buttonHeader";
  buttonSearch.id = "buttonSearch";
  buttonSearch.textContent = "Get me drunk";
  buttonAddCabinet.id = "buttonAddCabinet";
  buttonAddCabinet.textContent = "Add to cabinet";
  buttonDeleteCabinet.id = "buttonDeleteCabinet";
  buttonDeleteCabinet.textContent = "Delete Cabinet";

  //API access
  axios
    .get("api/cabinet")
    .then((response) => {
      const cabinetArray = response.data;
      cabinetArray.forEach((item) => {
        const cabinetBottle = document.createElement("div");
        cabinetBottle.className = "cabinetBottle";
        //creating
        const bottleName = document.createElement("div");
        const bottleVolume = document.createElement("div");
        const bottleLabel = document.createElement("div");
        const bottleUpdateBtn = document.createElement("button");
        const bottleImage = document.createElement("img");
        const bottleRemoveBtn = document.createElement("button");
        //setting
        bottleUpdateBtn.className = "bottleUpdateBtn";
        bottleLabel.className = "bottleLabel";
        bottleName.className = "bottleName";
        bottleVolume.className = "bottleVolume";
        bottleImage.className = "bottleImage";
        bottleRemoveBtn.className = "bottleRemoveBtn";
        bottleName.textContent = item.name;
        bottleVolume.innerHTML = item.volume + "ml";
        bottleLabel.id = item.id;
        bottleImage.src = item.image;
        bottleUpdateBtn.textContent = "Update Volume";
        bottleRemoveBtn.textContent = "Remove";
        //appending
        cabinetBottle.append(bottleImage, bottleLabel);
        bottleLabel.append(
          bottleName,
          bottleVolume,
          bottleUpdateBtn,
          bottleRemoveBtn
        );
        cabinet.appendChild(cabinetBottle);

        //Event Listeners for each liquor on the cabinet
        bottleRemoveBtn.addEventListener("click", () => {
          removeAlcoholModal(item.id, item.name);
          // const id = bottleLabel.id;
          // axios
          //   .delete(`/api/cabinet/${id}`)
          //   .then(() => {
          //     renderCabinetView();
          //   })
          //   .catch((err) => (page.textContent = err));
        });

        bottleUpdateBtn.addEventListener("click", () => {
          volumeUpdateModal(item.id, item.name, item.volume, bottleVolume);
        });
      });
    })
    .catch(
      (err) =>
        (page.textContent =
          "Something went wrong (cabinetPopulate): " + err.message)
    );

  //appending----------------------------------
  buttonHeader.append(buttonAddCabinet, buttonSearch, buttonDeleteCabinet);
  divCabinet.appendChild(cabinet);
  divMain.append(buttonHeader);
  divMain.appendChild(divCabinet);
  // appending page
  page.replaceChildren(divMain);

  // Event Listeners ----------------------------
  buttonSearch.addEventListener("click", renderCocktailView);
  buttonAddCabinet.addEventListener("click", addToCabinetRender);
  buttonDeleteCabinet.addEventListener("click", deleteCabinetWarning);
};

// volume update modal - util
const volumeUpdateModal = (liquor_id, name, volume, bottleVolume) => {
  const page = document.querySelector("#page");

  // create modal box
  const volumeUpdateModal = document.createElement("div");
  const volumeUpdateModalTitle = document.createElement("div");
  const volumeUpdateModalBody = document.createElement("div");
  const volumeUpdateModalContainer = document.createElement("div");

  // modal form
  const volumeUpdateInput = document.createElement("input");
  const volumeUpdateButton = document.createElement("button");
  const volumeUpdateCancel = document.createElement("button");

  // setting class tags
  volumeUpdateModal.className = "volumeUpdateModal";
  volumeUpdateModalTitle.className = "volumeUpdateModalTitle";
  volumeUpdateModalBody.className = "volumeUpdateModalBody";
  volumeUpdateModalContainer.className = "volumeUpdateModalContainer";
  volumeUpdateInput.className = "volumeUpdateInput";
  volumeUpdateButton.className = "volumeUpdateButton";
  volumeUpdateCancel.className = "volumeUpdateCancel";

  //attach divs
  // volumeUpdateModal.append(volumeUpdateModalContainer);
  volumeUpdateModalContainer.append(
    volumeUpdateModalTitle,
    volumeUpdateModalBody
  );
  volumeUpdateModalBody.append(
    volumeUpdateInput,
    volumeUpdateButton,
    volumeUpdateCancel
  );

  page.append(volumeUpdateModal);
  page.append(volumeUpdateModalContainer);

  // giving elements content
  volumeUpdateModalTitle.innerHTML = name;
  volumeUpdateInput.innerHTML = volume + "ml";
  volumeUpdateInput.placeholder = "Enter volume in ml";
  volumeUpdateButton.innerHTML = "Update";
  volumeUpdateCancel.innerHTML = "Cancel";

  volumeUpdateButton.addEventListener("click", () => {
    volume = volumeUpdateInput.value.replace("ml", "");
    if (!volume || volume == 0 || isNaN(volume)) {
      volumeUpdateInput.innerHTML = "";
      return;
    }
    const data = { liquor_id, volume };
    axios
      .put("/api/cabinet/", data)
      .then(() => {
        bottleVolume.innerHTML = volume + "ml";
        volumeUpdateModal.remove();
        volumeUpdateModalContainer.remove();
      })
      .catch((err) => (page.textContent = err));
  });

  volumeUpdateCancel.addEventListener("click", () => {
    volumeUpdateModal.remove();
    volumeUpdateModalContainer.remove();
  });
  volumeUpdateModal.addEventListener("click", () => {
    volumeUpdateModal.remove();
    volumeUpdateModalContainer.remove();
  });
};

// remove alcohol from cabinet modal
const removeAlcoholModal = (id, name) => {
  const page = document.querySelector("#page");

  // create modal elements
  const removeAlcoholModal = document.createElement("div");
  const removeAlcoholModalContainer = document.createElement("div");
  const RAMtitle = document.createElement("div");
  const RAMbody = document.createElement("div");
  const RAMyes = document.createElement("button");
  const RAMno = document.createElement("button");

  // set class tags
  removeAlcoholModal.className = "containerPopup";
  removeAlcoholModalContainer.className = "removeAlcoholModalContainer";
  RAMtitle.className = "RAMtitle";
  RAMbody.className = "RAMbody";
  RAMyes.className = "RAMyes";
  RAMno.className = "RAMno";

  RAMtitle.innerHTML = `Are you sure you want to remove ${name} from cabinet?`;
  RAMyes.innerHTML = "Yes";
  RAMno.innerHTML = "No";

  // append
  removeAlcoholModalContainer.append(RAMtitle, RAMbody);
  RAMbody.append(RAMyes, RAMno);
  page.append(removeAlcoholModal, removeAlcoholModalContainer);

  RAMyes.addEventListener("click", () => {
    axios.delete(`/api/cabinet/${id}`).then(() => {
      removeAlcoholModal.remove();
      removeAlcoholModalContainer.remove();
      renderCabinetView();
    });
  });

  RAMno.addEventListener("click", () => {
    removeAlcoholModal.remove();
    removeAlcoholModalContainer.remove();
  });

  removeAlcoholModal.addEventListener("click", () => {
    removeAlcoholModal.remove();
    removeAlcoholModalContainer.remove();
  });
};
