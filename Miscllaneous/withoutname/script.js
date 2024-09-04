document
  .getElementById("userForm")
  .addEventListener("input", handleInputChange);

const user = {
  firstName: "",
  lastName: "",
  email: "",
};

function handleInputChange(event) {
  const { name, value } = event.target;

  // Update the user object with the new value
  user[name] = value;

  // Display the updated user object
  document.getElementById("output").textContent = JSON.stringify(user, null, 2);
}
