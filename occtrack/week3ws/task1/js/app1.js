function formValidation() {
    let fname = firstname();
    let lname = lastname();
    let mail = emailid();
    let pnum = phoneNumber();
    let dropdown = gender();
    let stream = course();
    console.log({
        FirstName: fname, LastName: lname,
        Email: mail, gender: dropdown, PhoneNumber: pnum, cours : stream
    });
    return false;
} 
function firstname() {
    let fname = document.forms["form"]["firstName"].value;
    if (fname.length == 0) {
        document.getElementsByTagName("span")[0].innerHTML = "*Firstname required";
        return false;
    } else {
        console.log(fname);
        document.getElementsByTagName("span")[0].innerHTML = "";
        return fname;
    }
}
function lastname() {
    let lname = document.forms["form"]["lastName"].value;
    if (lname.length == 0) {
        document.getElementsByTagName("span")[1].innerHTML = "*Lastname required";
        return false;
    } else {
        console.log(lname);
        document.getElementsByTagName("span")[1].innerHTML = "";
        return lname;
    }
}
function emailid() {
    let email = document.forms["form"]["emailid"].value;
    if (email.length == 0) {
        document.getElementsByTagName("span")[2].innerHTML = "*Email required";
        return false;
    } else {
        console.log(email);
        document.getElementsByTagName("span")[2].innerHTML = "";
        return email;
    }
}
function phoneNumber()
{
    let pnum = document.forms["form"]["phoneNumber"].value;
    if (pnum.length == 0 || pnum.length != 10){
        document.getElementsByTagName("span")[3].innerHTML = "*Phone Number required";
        return false;
    }
    else{
        console.log(pnum);
        document.getElementsByTagName("span")[3].innerHTML = "";
        return pnum;
    }
}
function gender() 
{
    let gender = document.forms["form"]["gender"].value;
    if (gender == "select") {
        document.getElementsByTagName("span")[4].innerHTML = "*Gender required";
        return false;
    }
    else {
        console.log(gender);
        document.getElementsByTagName("span")[4].innerHTML = "";
        return gender;
    }
}
function course() {
    if(document.form.checkbox1.checked == true || document.form.checkbox2.checked == true){
        let first = document.getElementById("one").value;
        let last = document.getElementById("two").value;
        document.getElementsByTagName("span")[5].innerHTML = "";
        return Object({ch1:first,ch2:last});
    }
    else if (document.form.checkbox1.checked == true ) {
        let first = document.getElementById("one").value;
        document.getElementsByTagName("span")[5].innerHTML = "";
        return first;
    }
     else if (document.form.checkbox2.checked == true) {
        let last = document.getElementById("two").value;
        document.getElementsByTagName("span")[5].innerHTML = "";
        return last;
    }
    else{
        document.getElementsByTagName("span")[5].innerHTML = "Course required";
        return false;
    }
}


