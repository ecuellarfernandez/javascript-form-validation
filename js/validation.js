// Login form validation

// Email validation

function validateLogin(){
    let error = 0;
    
    const formSignIn = document.forms["forms__form__sign-in"];
        const formSignIn_emailInput = formSignIn["sign-in__email-input"];
        const formSignIn_passwordInput = formSignIn["sign-in__password-input"];

    if(formSignIn_emailInput.value == ""){
        formSignIn_emailInput.classList.add("is-invalid");
        document.getElementById("is-invalid-message__email-login").innerHTML="Complete the field please";
        ++error;
    }else if(!validateEmailRegEx(formSignIn_emailInput.value)){
        formSignIn_emailInput.classList.add("is-invalid");
        document.getElementById("is-invalid-message__email-login").innerHTML="Enter a valid mail please";
        ++error;
    }

    if(formSignIn_passwordInput.value == ""){
        formSignIn_passwordInput.classList.add("is-invalid");
        document.getElementById("is-invalid-message__password-login").innerHTML="Complete the field please";
        ++error;
    }

    if(error==0) return true;
    return false;
}

// validate email regex

const validateEmailRegEx = input=> /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);

document.getElementById("forms__form__sign-in").addEventListener("focusout", e=> {
    if(e.target.value != "") e.target.classList.remove("is-invalid");
});

// Register validation

function validateRegister(){
    let error = 0;

    const formRegister = document.forms["forms__form__register"];
        const formRegister_email = formRegister["register__email-input"];
        const formRegister_password = formRegister["register__password-input"];
        const formRegister_repeatPassword = formRegister["register__repeatPassword-input"];
        const formRegister_address = formRegister["register__address-input"];
        const formRegister_region = formRegister["register__region-input"];
        const formRegister_city = formRegister["register__city-input"];
        const formRegister_zip = formRegister["register__zip-input"];
        const formRegister_agreeCheckbox =  formRegister["register__agree-checkbox"];

        if(formRegister_email.value == ""){
            formRegister_email.classList.add("is-invalid");
            document.getElementById("is-invalid-message__email").innerHTML="Complete the field please";
            ++error;
        }else if(!validateEmailRegEx(formRegister_email.value)){
            formRegister_email.classList.add("is-invalid");
            document.getElementById("is-invalid-message__email").innerHTML="Enter a valid mail please";
            ++error;
        }

        if(formRegister_password.value == ""){
            formRegister_password.classList.add("is-invalid");
            document.getElementById("is-invalid-message__password").innerHTML="Complete the field please";
            ++error;
        }else if(!validatePasswordNumber(formRegister_password.value)){
            formRegister_password.classList.add("is-invalid");
            document.getElementById("is-invalid-message__password").innerHTML="The password must contain a number";
            ++error;
        }else if(!validatePasswordUppercase(formRegister_password.value)){
            formRegister_password.classList.add("is-invalid");
            document.getElementById("is-invalid-message__password").innerHTML="The password must contain a capital letter";
            ++error;
        }else if(formRegister_password.value.length < 8){
            formRegister_password.classList.add("is-invalid");
            document.getElementById("is-invalid-message__password").innerHTML="Minimum 8 characters";
            ++error;
        }

        if(formRegister_repeatPassword.value == ""){
            formRegister_repeatPassword.classList.add("is-invalid");
            document.getElementById("is-invalid-message__repeatPassword").innerHTML="Complete the field please";
            ++error;
        }else if(formRegister_repeatPassword.value != formRegister_password.value){
            formRegister_repeatPassword.classList.add("is-invalid");
            document.getElementById("is-invalid-message__repeatPassword").innerHTML="Must be the same as the password";
            ++error;
        }

        if(formRegister_address.value == ""){
            formRegister_address.classList.add("is-invalid");
            document.getElementById("is-invalid-message__address").innerHTML="Complete the field please";
            ++error;
        }

        if(formRegister_region.value == ""){
            formRegister_region.classList.add("is-invalid");
            document.getElementById("is-invalid-message__region").innerHTML="Select a region please";
            ++error;
        }

        if(formRegister_city.value == ""){
            formRegister_city.classList.add("is-invalid");
            document.getElementById("is-invalid-message__city").innerHTML="Complete the field please";
            ++error;
        }

        if(formRegister_zip.value == ""){
            formRegister_zip.classList.add("is-invalid");
            document.getElementById("is-invalid-message__zip").innerHTML="Complete the field please";
            ++error;
        }else if(formRegister_zip.value.length != 5){
            formRegister_zip.classList.add("is-invalid");
            document.getElementById("is-invalid-message__zip").innerHTML="Enter a valid Zip code please";
            ++error;
        }

        if(!formRegister_agreeCheckbox.checked){
            formRegister_agreeCheckbox.classList.add("is-invalid");
            document.getElementById("is-invalid-message__policies").innerHTML="Accept the terms please";
            ++error;
        }

    if(error==0) return true;
    return false;
}

const validatePasswordUppercase = input=> /[A-Z]/.test(input);

const validatePasswordNumber = input=> /[0-9]/.test(input);

document.getElementById("forms__form__register").addEventListener("focusout", e=>{
    if(e.target.value != "") e.target.classList.remove("is-invalid");
});