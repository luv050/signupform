const pass = document.getElementById("password");
const confirm = document.getElementById("confirm-password");
let passError = document.getElementById("passError");
let confirmError = document.getElementById("confirmError");

pass.addEventListener("keyup", (element) => {
    if (!checkSpacesInString(pass.value)) {
        if (!checkIfEmptyString(pass.value)) {
            if (checkMinMaxChars(pass.value)) {
                if (checkIfEqual(pass.value, confirm.value)) {
                    confirmError.style.borderColor = "green";
                    passError.style.borderColor = "green";
                    passError.textContent = "";
                    confirmError.textContent = "";
                } else {
                    passError.textContent = "Passwords do not match";
                    passError.style.borderColor = "red";
                }
            } else {
                passError.style.borderColor = "red";
                passError.textContent = "Must contain 6-20 characters.";
            }

        } else {
            passError.textContent = "You must enter a password";
            passError.style.borderColor = "red";
        }
    } else {
        passError.textContent = "Password cannot contain spaces";
        passError.style.borderColor = "red";
    }
});