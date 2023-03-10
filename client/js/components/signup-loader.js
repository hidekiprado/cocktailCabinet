// welcome to your cabinet
export const renderSignupLoader = (data) => {
  delete data.name;
  // accessing page
  const page = document.querySelector("#page");

  // create components
  const mainComponent = document.createElement("div");
  const signupLoaderTitle = document.createElement("h1");
  const signupLoaderButton = document.createElement("button");

  // setting values
  mainComponent.className = "signUpLoader";
  signupLoaderTitle.id = "signupLoaderTitle";
  signupLoaderTitle.textContent = "Welcome to your secret cabinet";
  signupLoaderButton.id = "signupLoaderButton";
  signupLoaderButton.textContent = "Take me to my cabinet";

  // appending
  mainComponent.appendChild(signupLoaderTitle);
  mainComponent.appendChild(signupLoaderButton);

  // event listener
  signupLoaderButton.addEventListener("click", () => {
    //API access
    axios
      .post("/api/session", data)
      .then((response) => {
        renderCabinetView();
        renderHeader();
      })
      .catch((error) => {
        if (error.response.status === 500) {
          alert("Oops, failed to sign up. Please try again.");
        } else {
          alert(error.response.data.message);
        }
      });
  });

  // appending page
  page.replaceChildren(mainComponent);
};
