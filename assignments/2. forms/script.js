var finalText = document.querySelector('.finalText');
var warningMsg = document.querySelector('.warningMsg');

function checkPara() {
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    if (name.length === 0 || email.length === 0 || password.length === 0){
        warningMsg.innerHTML=('Please Fill It Up')
    }else{
        warningMsg.innerHTML =""
        finalText.innerHTML=(`Your name is ${name} , your email ID is ${email} and your password is ${password}`)
    }
}