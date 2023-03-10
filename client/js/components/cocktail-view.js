// called by GET ME DRUNK

// view cocktail recipes - calls API
export const renderCocktailView = () => {
  const page = document.querySelector("#page");

  axios
    .get("api/cocktails")
    .then((response) => {
      const recipeArray = response.data;

      //creating -------------------------------------
      const containerPopup = document.createElement("div");
      const recipeBook = document.createElement("div");
      const returnButton = document.createElement("button");
      const recipeBookModal = document.createElement("div");

      //setting-------------------------------------
      containerPopup.className = "containerPopup";
      recipeBook.className = "recipeBook";
      returnButton.className = "returnButton";
      returnButton.textContent = "Cancel";
      recipeBookModal.className = "modal";

      // Cocktails heading
      const recipeBookHeading = document.createElement("h3");
      recipeBookHeading.innerHTML = `These are the current cocktails you can create. \n 
        Click on a cocktail to see more details and the recipe`;
      recipeBookHeading.id = "recipeBookHeading";
      recipeBook.append(recipeBookHeading);

      // Appending-------------------------------------
      recipeBookModal.append(returnButton, recipeBook);

      // for each recipe
      recipeArray.forEach((recipe) => {
        //creating
        const recipePage = document.createElement("div");
        const recipeTitle = document.createElement("div");
        const selectCocktailBtn = document.createElement("button");
        const recipeDescription = document.createElement("p");
        const recipeProcedure = document.createElement("p");
        //setting
        recipePage.className = "recipePage";
        recipeDescription.className = "recipeDescription";
        recipeProcedure.className = "recipeProcedure";
        recipeTitle.className = "recipeTitle";
        selectCocktailBtn.className = "selectCocktailBtn";
        selectCocktailBtn.textContent = "Select Cocktail";
        recipeTitle.id = recipe.id;
        recipeTitle.innerHTML = recipe.name;
        recipeDescription.innerHTML = recipe.description;
        recipeProcedure.innerHTML = recipe.procedure;
        recipeDescription.classList.add("hidden");
        recipeProcedure.classList.add("hidden");
        selectCocktailBtn.classList.add("hidden");
        selectCocktailBtn.title =
          "If you select this cocktail your cabinet will be updated";

        //appending
        recipePage.append(
          recipeTitle,
          recipeDescription,
          recipeProcedure,
          selectCocktailBtn
        );
        recipeBook.append(recipePage);

        //Event listener - each recipe
        recipeTitle.addEventListener("click", () => {
          recipeDescription.classList.toggle("hidden");
          recipeProcedure.classList.toggle("hidden");
          selectCocktailBtn.classList.toggle("hidden");
        });
        selectCocktailBtn.addEventListener("click", () => {
          // 8. Update volumes in cabinet for the chosen recipe and get recipe procedure
          axios
            .patch(`/api/cabinet/${recipe.id}`)
            .then((response) => {
              renderCabinetView();
              recipePage.replaceChildren(
                "All volumes in your cabinet have been updated, ",
                "\n",
                "Enjoy your ",
                recipeTitle
              );
              recipeBook.replaceChildren(recipePage);

              const myTimeout = setTimeout(() => {
                recipeBook.remove();
                containerPopup.remove();
              }, 4000);
            })
            .catch(
              (err) =>
                (page.textContent =
                  "Something went wrong (cocktailSelect): " + err.message)
            );
        });
      });

      //appending to page
      document.body.append(containerPopup);
      document.body.append(recipeBook);

      //Event listener - for divMain -----------
      //cancel modal
      returnButton.addEventListener("click", () => {
        recipeBook.remove();
        containerPopup.remove();
      });
      //cancel modal clicking on black screen
      containerPopup.addEventListener("click", () => {
        recipeBook.remove();
        containerPopup.remove();
      });
    })
    .catch(
      (err) =>
        (page.textContent =
          "Something went wrong (cocktail view): " + err.message)
    );
};
