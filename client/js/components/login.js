export const renderLogin = () => {
  //accessing page
  const page = document.querySelector("#page");

  //creating------------------------

  // creating main div
  const divMain = document.createElement("div");
  // creating div left
  const divLeft = document.createElement("div");
  const form = document.createElement("form");
  const h3 = document.createElement("h3");
  const inputEmail = document.createElement("input");
  const inputPassword = document.createElement("input");
  const buttonUnlockCabinet = document.createElement("button");
  // creating div right
  const divRight = document.createElement("div");
  const p = document.createElement("p");
  const buttonSignup = document.createElement("button");
  const divLayoutInputEmail = document.createElement("div");
  const labelEmail = document.createElement("label");
  const divLayoutInputPassword = document.createElement("div");
  const labelPassword = document.createElement("label");

  //setting----------------------
  buttonUnlockCabinet.id = "buttonUnlockCabinet";
  buttonSignup.id = "buttonSignup";
  h3.id = "loginTitle";
  p.id = "noLoginTitle";

  // setting main div
  divMain.className = "loginDivMain";
  // setting div left
  divLeft.className = "loginDivLeft";
  h3.textContent = "Login to access your cabinet";
  inputEmail.placeholder = "Email Address";
  inputEmail.name = "email";
  inputEmail.required = "true";
  inputPassword.placeholder = "Password";
  inputPassword.name = "password";
  inputPassword.type = "password";
  inputPassword.required = "true";
  buttonUnlockCabinet.textContent = "Unlock your cabinet";
  // setting div right
  divRight.className = "loginDivRight";
  p.textContent = "Don't have a cabinet? Sign up now";
  buttonSignup.textContent = "Sign Up";
  divLayoutInputEmail.className = "divLayoutInput";
  inputEmail.className = "inputLayout";
  labelEmail.className = "labelLayout";
  labelEmail.textContent = "Email";
  divLayoutInputPassword.className = "divLayoutInput";
  inputPassword.className = "inputLayout";
  labelPassword.className = "labelLayout";
  labelPassword.textContent = "Password";

  //appending-----------------------

  divLayoutInputEmail.append(inputEmail, labelEmail);
  divLayoutInputPassword.append(inputPassword, labelPassword);
  form.append(divLayoutInputEmail, divLayoutInputPassword, buttonUnlockCabinet);

  // appending divLeft
  divLeft.append(h3, form);
  // appending divRight
  divRight.append(p, buttonSignup);
  // appending main div
  divMain.append(divLeft, divRight);
  // appending page
  page.replaceChildren(divMain);

  //Event Listeners ------------------------

  // fetching data using AXIOS
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

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

  //redirect to Signup
  buttonSignup.addEventListener("click", () => {
    renderSignup();
  });
};
