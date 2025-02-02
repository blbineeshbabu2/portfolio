function navOpen(){
    let navShow = document.querySelector('.navMobile');
    navShow.style.display = 'block';
}
function navClose(){
    let navhide = document.querySelector('.navMobile');
    navhide.style.display = "none";
}
window.addEventListener('resize', function() {
    let navhide = document.querySelector('.navMobile');
    if (window.innerWidth >= 992) {
        navhide.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
        strings: ["Full-Stack Developer", "Freelancer", "Designer"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});





var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

/*name validation*/

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.match(/[0-9]/)){
        nameError.innerHTML = 'Name should be characters';
        return false;
    }

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

/*email validation*/

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

/*Phone number validation*/

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.match(/[A-Za-z]/)){
        phoneError.innerHTML = 'Phone should be numbers';
        return false;
    }

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number required'
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone should be 10 digits!'
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only should be numbers'
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

/*Subject validation*/

function validateSubject(){
    var subject = document.getElementById('contact-subject').value;

    if(subject.match(/[0-9]/)){
        subjectError.innerHTML = 'Subject only contain characters';
        return false;
    }

    if(subject.length < 4){
        subjectError.innerHTML = 'Subject required';
        return false;
    }

    subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

/*Message validation*/

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 40;
    var num = required - message.length;

    if(num > 0){
        messageError.innerHTML = num + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

/*Submit button validation*/

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill form';
        setTimeout(function(){submitError.style.display = 'none';}, 3000); /*Hide message after 3 seconds*/
        return false;
    }
}