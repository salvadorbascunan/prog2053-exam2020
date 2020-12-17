/**
 * @brief A function that gets all the user data for all
 * the users. It creates a 'div' per user, and inserts the
 * data of the user into the elements.
 *
 */
function retrieveUsers() {
  fetch(`../api/fetchUsers.php`, {})
    .then((res) => res.json())
    .then((data) => {
      var userContainer = document.getElementById("users");

      data.forEach((x) => {
        //creates new elements and appends it to userContainer element
        var newUserElement = document.createElement("div");
        newUserElement.setAttribute("id", x.uid);
        newUserElement.innerText =
          x.uname + "\n" + x.firstName + " " + x.lastName + "\n";
        userContainer.appendChild(newUserElement);

        //make the DIV clickable
        newUserElement.onclick = function () {
          getUser(newUserElement.id);
        };
      });
    });
}

/**
 * @brief A function that gets all the user data for a user.
 * It fetches the data about one specific user.
 *
 * @param e - The user id.
 *
 */
function retrieveUser(e) {
  var user = document.getElementById("user");
  user.style.display = "block";
  fetch("../api/fetchUser.php?id=" + e.toString(), {})
    .then((res) => res.json())
    .then((data) => {
      //puts info about user inside the HTML form
      document.getElementById("lastName").value = data.lastName;
      document.getElementById("uid").value = e;
      document.getElementById("firstName").value = data.firstName;
      document.getElementById("uname").value = data.uname;
    });
}

/**
 * @brief This is an event listener on the edit user button. It
 * updates the user data. If its successful, the retrieveUsers
 * function from above is called, to update the list of users.
 *
 */
document.getElementById("submitForm").addEventListener("click", (e) => {
  const dataForm = new FormData(e.target.form);
  fetch("../api/updateUser.php", {
    method: "POST",
    body: dataForm,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == "success") {
        console.log("The user was updated");
        retrieveUsers();
      } else {
        console.log("The user was not updated");
      }
    });
});
