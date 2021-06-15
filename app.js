const form = document.getElementById("form");
const username = document.getElementById("username")
const Email = document.getElementById("Email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

//check required feilds
function checkRequired(input) {
    for (let arr of input) {
        if (arr.value === "") {
            showEror(arr,`${getFeildName(arr)} is required`)
        }
        else {
            showSuccess(arr)
        }
    }
}

//get feild name
function getFeildName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showEror(input, `${getFeildName(input)} cannot be less than${min}characters`);
    }
    else if (input.value.length > max) {
        showEror(input, `${getFeildName(input)} cannot be more than ${max}characters }`);
    }
    else {
        showSuccess(input);
    }
}

// check password match

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showEror(input2, "Password did not match");
    }
    else {
        showSuccess(input2);
    }
}

//show input error message
function showEror(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}


// check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  // re.test will check if the input and re are similar or not
    if (re.test(input.value)) {
        showSuccess(input)
    }
    else {
        showEror(input,"Email is not valid")
    }
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, Email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 30);
    checkEmail(Email);
    checkPasswordMatch(password, password2);

})
    