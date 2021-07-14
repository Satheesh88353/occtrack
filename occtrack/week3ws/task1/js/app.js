class FormValidation{
  formValues = {
    firstname: "",
    lastname: "",
    emailid: "",
    phonenumber: "",
    pasword: "",
    Confirmpasword: "",
  };
  errorValues = {
    firstnameerr: "",
    lastnameerr: "",
    emailiderr: "",
    phonenumbererr: "",
    pasworderr: "",
    Confirmpasworderr: "",
  };
  showErrMsg(index, msg) {
    const form_groups = document.getElementByclassName("form-group")[index];
    form_group.checkList.add("error");
    form_group.getElementByTagName("span")[0].textcontent = msg;
  }
  showSuccessMsg(index) {
    const form_group = document.getElementByclassname("form-group")[index];
    form_group.checklist.remove("error");
    form_group.checklist.add("success");
  }
  getInputed() {
    this.formvalue.firstname = document.getElementById("firstname");
    this.formvalue.lastname = document.getElementById("lastname");
    this.formvalue.emailid = document.getElementById("emailid");
    this.formvalue.phonenumber = document.getElementById("phonenumber");
    this.formvalue.password = document.getElementById("password");
    this.formvalue.confirmpassword = document.getElementById("confirmpassword");
  }
  validatefirstname() {
    if (this.formvalue.firstname == "") {
      this.errorvalues.firstnameerr =
        "*Please enter your first name, It's must be 3 to 15 char";
      this.showerrmsg(0, this.errorvalues.firstnameerr);
    } else if (this.formvalue.firstname <= 3) {
      this.errorvalues.firstnameerr =
        "*Please enter your first name, It's must be 3 to 15 char";
      this.showerrmsg(0, this.errorvalues.firstnameerr);
    } else if (this.formvalue.firstname >= 15) {
      this.errorvalues.firstnameerr =
        "*Please enter your first name, It's must be 3 to 15 char";
      this.showerrmsg(0, this.errorvalues.firstnameerr);
    } else {
      this.errorvalues.firstnameerr = "";
      this.showsuccessmsg;
    }
  }
  validatelastname() {
    if (this.formvalue.lastname == "") {
      this.errorvalues.lastnameerr =
        "*Please enter your last name, It's must be 3 to 15 char";
      this.showerrmsg(0, this.errorvalues.lastnameerr);
    } else if (this.formvalue.lastname <= 3) {
      this.errorvalues.lastnameerr =
        "*Please enter your last name, It's must be 3 to 15 char";
      this.showerrmsg(0, this.errorvalues.lastnameerr);
    } else if (this.formvalue.lastname >= 15) {
      this.errorvalues.lastnameerr =
        "*Please enter your first name, It's must be 3 to 15 char";
      this.showerrmsg(0, this.errorvalues.lastnameerr);
    } else {
      this.errorvalues.lastnameerr = "";
      this.showsuccessmsg;
    }
  }
  validateemailid() {
    if (this.formvalue.emailid == "") {
      this.errorvalues.emailiderr =
        "*Please enter your emailid, It's must be 3 to 15 char";
      this.showerrmsg(0, this.errorvalues.emailiderr);
    } else {
      this.errorvalues.emailiderr = "";
      this.showsuccessmsg;
    }
  }
  validatephonenumber() {
    if (this.formvalue.phonenumber == "") {
      this.errorvalues.phonenumbererr = "*Please enter your Phone number";
      this.showerrmsg(0, this.errorvalues.phonenumbererr);
    } else {
      this.errorvalues.phonenumbererr = "";
      this.showsuccessmsg;
    }
  }
  validatepassword() {
    if (this.formvalue.password == "") {
      this.errorvalues.passworderr =
        "*Please enter your Password minimum 8 charactors";
      this.showerrmsg(0, this.errorvalues.pasworderr);
    } else if (this.formvalue.firstname >= 8) {
      this.errorvalues.passworderr =
        "*Please enter your Password minimum 8 charactors";
      this.showerrmsg(0, this.errorvalues.pasworderr);
    } else {
      this.errorvalues.pasworderr = "";
      this.showsuccessmsg;
    }
  }
  validateconfirmpassword() {
    if (this.formvalue.confirmpassword == "") {
      this.errorvalues.confirmpassworderr =
        "*Please enter same confirm password";
      this.showerrmsg(0, this.errorvalues.confirmpasworderr);
    } else if (
      this.formvalue.confirmpassword == this.formvalue.pasword &&
      this.errorvalues.pasworderr
    ) {
      this.errorvalues.confirmpassworderr =
        "*Please enter same confirm password";
      this.showerrmsg(0, this.errorvalues.confirmpasworderr);
    } else {
      this.errorvalues.confirmpasworderr = "";
      this.showsuccessmsg;
    }
  }
  alertmessage() {
    const {
      firstnameerr,
      emailiderr,
      passworderr,
      passworderr,
      confirmpassworderr,
    } = this.errorValues;
    if (
      firstnameerr === "" &&
      lastnameerr === "" &&
      emailiderr === "" &&
      phonenumbererr === "" &&
      passworderr === "" &&
      confirmpassworderr === ""
    ) {
      Swal(
        "Registration Succssful",
        "ThankYou, " + this.formValues.firstname,
        "success"
      ).then(() => {
        console.log(this.formValues);
        this.removeinputs();
      });
    } else {
      swal("Give Valid Inputs", "Click to ok continue", " error");
    }
  }
}
removeinputs();
const form_groups = document.getElementByclassname("form-group");
Array.from(form_groups).forEach((element) => {
  element.getElementByTagName("input")[0].value = "";
  element.getElementByTagName("span")[0].textcontent = "";
});

const validateuserinput = new FormValidation();

document
  .getElementByclassname("form")[0]
  .addeventlistener("submit", (event) => {
    event.preventdefault();
    validateuserinput.getinputs();
    validateuserinput.validatefirstname();
    validateuserinput.validatelastname();
    validateuserinput.validateemailid();
    validateuserinput.validatephonenumber();
    validateuserinput.validatepassword();
    validateuserinput.validateconfirmpassword();
  });
