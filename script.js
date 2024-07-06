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

confirm.addEventListener("keyup", (element) => {
    if (!checkSpacesInString(confirm.value)) {
        if (!checkIfEmptyString(confirm.value)) {
            if (checkMinMaxChars(confirm.value)) {
                if (checkIfEqual(pass.value, confirm.value)) {
                    confirmError.style.borderColor = "green";
                    passError.style.borderColor = "green";
                    passError.textContent = "";
                    confirmError.textContent = "";
                } else {
                    confirmError.textContent = "Passwords do not match";
                    confirmError.style.borderColor = "red";
                }
            } else {
                confirmError.style.borderColor = "red";
                confirmError.textContent = "Must contain 6-20 characters.";
            }

        } else {
            confirmError.textContent = "You must enter a password";
            confirmError.style.borderColor = "red";
        }
    } else {
        confirmError.textContent = "Password cannot contain spaces";
        confirmError.style.borderColor = "red";
    }
});

function checkSpacesInString(str) {
    return str.includes(" ");
}

function checkIfEqual(val1, val2) {
    return (val1 == val2);
}

function checkIfEmptyString(str) {
    return (str === null || str === "");
}

function checkMinMaxChars(str) {
    return (str.length > 5 && str.length < 21);
}

//password must be:
// 6 chars at least, no more than 20 chars
// no spaces