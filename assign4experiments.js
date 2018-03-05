function submitForm() {

    var email = document.getElementById('email');
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var psswd = document.getElementById('passwd');
    var phone = document.getElementById('phone');
    var zip = document.getElementById('pscode');
    var cfpasswd = document.getElementById('cfpasswd');
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var province = document.getElementById('province').value;


    var zipPattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var phonePattern = /[1-9][0-9]{9}/
    var namePatternCapital = /^([A-Z])[a-zA-Z]{14,50}$/;
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var pwdPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\.])(?=.*[\\])(?=.{8,12})/


    if (!namePatternCapital.test(fname.value)) {
        fname.setCustomValidity("First Name starts with a capital letter and it must be 15 characters!");
    } else {
        fname.setCustomValidity("");
    }
    if (!namePatternCapital.test(lname.value)) {
        lname.setCustomValidity("Last Name starts with a capital letter and it must be 15 characters!");
    } else {
        lname.setCustomValidity("");
    }
    if (!emailPattern.test(email.value)) {
        email.setCustomValidity("Entered email address is invalid!");
    } else {
        email.setCustomValidity("");
    }
    if (!pwdPattern.test(psswd.value)) {
        psswd.setCustomValidity("Password must be between 8 to 12 characters, must contain a number, '.' and '\'!");
    } else {
        psswd.setCustomValidity("");
    }
    if (cfpasswd.value != psswd.value) {
        cfpasswd.setCustomValidity("Password do not match");
    } else {
        cfpasswd.setCustomValidity("");
    }
    if (!phonePattern.test(phone.value)) {
        phone.setCustomValidity("Phone number must be of 10 digits");
    } else {
        phone.setCustomValidity("");
    }
    if (!zipPattern.test(zip.value)) {
        zip.setCustomValidity("Postal Code should in A9A 9A9 format");
    } else {
        zip.setCustomValidity("");
    }
    if (address == "" || city == "" || province == "") {
        alert("Fields marked with * cannot be empty!");
        return false;
    }


}