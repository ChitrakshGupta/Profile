function SendMail() {
    if (document.getElementById("from_name").value == "") {
        alert("Please enter your Name");
        return
    } else if (document.getElementById("email").value == "") {
        alert("Please enter your Email Id");
        return
    } else if (document.getElementById("subject").value == "") {
        alert("Please enter Subject");
        return
    } else if (document.getElementById("message").value == "") {
        alert("Please enter Message");
        return
    }
    else {
        var name = document.getElementById("from_name").value.toString();
        var email = document.getElementById("email").value.toString();
        var subject = document.getElementById("subject").value.toString();
        var message = document.getElementById("message").value.toString();

        var params = {
            subject: subject,
            name: name,
            message: message,
            email: email
           
           
        }
        const serviceID = "service_y6tbsln";
        const templateID = 'template_bon2ah2';

        emailjs.send(serviceID , templateID, params).then(function (response) {
            alert("Thank You!! Your message is successfully sent.");
            console.log('SUCCESS!', response.status, response.text);
        },
            function (error) {
                alert("FAILED");
                console.log('FAILED...', error);
            });
    }

}