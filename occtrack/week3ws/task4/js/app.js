
function formValidation() {
    var self = this;
    self.firstName = ko.observable("").extend({
        validation: {
            message: "first Name Required",
            validator: function (v) {
                return v.length > 1
            }
        }
    });

    self.lastName = ko.observable("").extend({
        validation: {
            message: "Last Name Required",
            validator: function (v) {
                return v.length > 1
            }
        }
    });

    self.gender = ko.observable("").extend({
        validation: {
            message: "gender Required",
            validator: function (v) {
                return v.length > 1
            }
        }
    })

    self.emailaddress = ko.observable("").extend({
        required: true,
        email: true
    });

   
   
    self.course=ko.observableArray() .extend({
       
         required:true
          });


self.Submit = function () {
    
    const data={
        FirstName:self.firstName(),
        LastName:self.lastName(),
        Gender:self.gender(),
        Email:self.emailaddress(),
        Course:self.course()
    }
        var errors = ko.validation.group(self);
        if (errors().length > 0) {
            errors.showAllMessages();
            return;
        }
        else{
            const myJSON=JSON.stringify(data);
            console.log(myJSON)
        }
        

    }
}

ko.applyBindings(new formValidation());



