const name = document.getElementById('name');
const lastName = document.getElementById('lastname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const btn = document.getElementById('btn');
const wrapper = document.getElementById('wrapper');
const username = document.getElementById('username');
const form = document.getElementById('form');
const cardWrapper = document.getElementById('card-wrapper');


function validate() {
    if (!name.value) {
      alert('Please enter a name');  
      name.focus();
      name.style.outlineColor = 'red';
      return false;
    } else {
        name.style.outlineColor = 'lightblue';
    }
    if (name.value.trim().length < 3) {
        name.focus();
        alert('length must be 3 characters');
        name.style.outlineColor = 'red';
        return false;
    }  else {
        name.style.outlineColor = 'lightblue';
    }
    if (!lastname.value) {
        alert('Please enter a lastname');
        lastname.focus();
        lastname.style.outlineColor = 'red';
        return false;
    }  else {
        lastname.style.outlineColor = 'lightblue';
    }

    
 
    if (!age.value) {
        alert('Please enter a age');
        age.focus();
        age.style.outlineColor = 'red';
        return false;
    }  else {
        age.style.outlineColor = 'lightblue';
    }

    if (age.value <= 7 || age.value > 200 ) {
        alert('Age very small or big ');
        age.focus();
        return false;
    }  
    
    if (username.value.trim().length < 5) {
        alert('username must be at least 3 characters');
        username.focus();
        username.style.outlineColor = 'red'; 
        return false;
    }  else {
        username.style.outlineColor = 'lightblue';
    }
    if (!email.value) {
        alert('Please enter a email');
        email.focus(); 
        email.style.outlineColor = 'red'; 
        return false;
    }   else {
        email.style.outlineColor = 'lightblue';
    }
    if (password.value != repassword.value) {
        alert('password must be at least');
        password.focus();  
        repassword.value = '';
        password.style.outlineColor = 'red';
        return false;
    }  else {
        password.style.outlineColor = 'lightblue';
    }
    return true; 
}

function getData() {
    let data = [];
    if (localStorage.getItem('users')) {
        data = JSON.parse(localStorage.getItem('users'))
    }
   return data;
}

btn && btn.addEventListener('click', function(e) {
    e.preventDefault();


   if (validate()) {
    const user = {
        name: name.value,
        lastName: lastName.value,
        age: age.value,
        username: username.value,
        email: email.value,
        password: password.value
    }


    let users = getData;
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))



    
     
   }
   form.reset(); 
  }
 
 

);