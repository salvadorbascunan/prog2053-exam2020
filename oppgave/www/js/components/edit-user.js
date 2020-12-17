import {
  LitElement,
  html,
  css,
} from "../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
    };
  }
  
  /**
   * @brief Render the html content of the form. The choice of using bootstrap with this was stricly to 
   * make the styling a bit better, it's not necessary at all. 
   *
   */
  render() {
    return html`
    <head>
      <!-- I choose to add bootstrap here to style it a bit better -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <!-- We disable the default onsubmit function to use the selfmade function below -->
    <form onsubmit="javascript: return false;" id="userForm" method="POST">
    <div class="form-group m-2" style="width: 20rem;">
      <label for="email">Email</label>
      <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
      <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
    </div>
    <div class="form-group m-2" style="width: 20rem;">
      <label for="firstName">First Name</label>
      <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>
    <div class="form-group m-2" style="width: 20rem;">
      <label for="lastName">Last Name</label>
      <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>
    <div class="form-group m-2" style="width: 20rem;">
      <label for="oldpwd">Old Password</label>
      <input type="password" class="form-control" id="oldpwd" name="oldpwd" type="text" value="">
    </div>
    <div class="form-group m-2" style="width: 20rem;">
      <label for="newpwd">New Password</label>
      <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
  </div>
  <!-- Runs the appropriate function on the click event to update the user data -->
  <input type="submit" @click=${this.userUpdate} id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>
</form>
    `;
  }

  /**
   * @brief This function updates the information about a user. It
   * retrieves data from the HTML form, and logs a message if the user
   * data was successfully updated or not.
   *
   * @param e - The user id passed in.
   *
   */
  userUpdate(e) {
    const dataForm = new FormData(e.target.form);
    console.log(e);
    fetch("../api/updateUser.php", {
      method: "POST",
      body: dataForm,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "OK") {
          console.log("The user has been updated");
        } else {
          console.log("The user has not been updated");
        }
      });
  }
}
customElements.define('edit-user', EditUser);
