var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function nameValidation(){
  var name = document.getElementById('name').value;
  
  if(name.length === 0){
    nameError.innerHTML = `Name is required!`;
    return false;
  }

  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = `Write full name!`;
    return false;
  }

  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function phoneValidation(){
  var phone = document.getElementById('phone').value;

  if(phone.length === 0){
    phoneError.innerHTML = `Phone number is required!`;
    return false;
  }

  if(phone.length!== 10){
    phoneError.innerHTML = `phone no. should be 10 digit!`;
    return false;
  }

  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = `Enter correct phone no.!`;
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function emailValidation(){
  var email = document.getElementById('email').value;

  if(email.length === 0){
    emailError.innerHTML = `Email is required!`;
    return false;
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = `Email is invalid!`;
    return false;
  }

  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function messageValidation(){
  var message = document.getElementById('message').value;
  var required = 30;
  var left = required - message.length;

  if(message.length === 0){
    messageError.innerHTML = `Some message is required!`;
    return false;
  }

  if(left > 1){
    messageError.innerHTML = `${left}, more characters required!`;
    return false;
  }

  messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateForm(){
  if(!nameValidation() || !phoneValidation() || !emailValidation() || !messageValidation()){
    submitError.innerHTML = `Please fix error to submit!`;
    setTimeout(()=>{
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}