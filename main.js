   
     document.addEventListener('DOMContentLoaded',function(){
   //Contactform submission alert
    const contactform = document.getElementById('contactform');
    if(contactform){
    contactform.addEventListener('submit', e => {
      e.preventDefault();  // prevent the default action
      alert('Thank you for your message! I will get back to you soon.');
      contactform.reset(); // clear the form fields
    });
}

//  Current year in footer
        let currentYear = new Date().getFullYear();
        document.getElementById('currentyear').textContent=currentYear;



 // Login form

//   const loginForm = document.getElementById("loginForm");

//   if(loginForm){
//   loginForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("Password").value.trim();
//     let message = document.getElementById("message");

//     if (email === "admin@example.com" && password === "12345") {
//       message.innerHTML = '<div class="alert alert-success">Login Successful! Redirecting...</div>';

//       // Redirect to home page after 1 second
//       setTimeout(() => {
//         window.location.href = "home.html"; //  change this to your homepage file
//       }, 1000);
//     } else {
//       message.innerHTML = '<div class="alert alert-danger">Invalid Email or Password</div>';
//     }
//   });
// }


//  Email validation
// function isValidEmail(email) {
//   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return pattern.test(email); //check if email is in the correct format.
// }

// //  Password validation (letters + numbers, min 6 chars)
// function isValidPassword(password) {
//   const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
//   return pattern.test(password); //check if email is in the correct format. Has at least one letter.Has at least one number.Is minimum 6 characters.

// }

// //  Save user to localStorage
// function saveUser(email, password) {
//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   if (users.find(u => u.email === email)) return false; // email already exists
//   users.push({ email, password });
//   localStorage.setItem("users", JSON.stringify(users));
//   return true;
// }

// //  Login check
// function checkUser(email, password) {
//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   return users.find(u => u.email === email && u.password === password);
// }
//   const loginForm = document.getElementById("loginForm");
//   const signupForm = document.querySelector("#signupModal form");

//   //  Handle Signup
//   signupForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let email = document.getElementById("floatingInput").value.trim();
//     let password = document.getElementById("floatingPassword").value.trim();

//     if (!isValidEmail(email)) {
//       alert(" Invalid email format");
//       return;
//     }
//     if (!isValidPassword(password)) {
//       alert(" Password must contain letters & numbers (min 6 chars)");
//       return;
//     }
//     if (!saveUser(email, password)) {
//       alert(" Email already registered, try logging in.");
//       return;
//     }
//     alert(" Signup successful! You can now login.");
//     signupForm.reset();
//   });

//   //  Handle Login
//   if (loginForm) {
//     loginForm.addEventListener("submit", function (e) {
//       e.preventDefault();

//       let email = document.getElementById("email").value.trim();
//       let password = document.getElementById("Password").value.trim();
//       let rememberMe = document.getElementById("exampleCheck1").checked;
//       let message = document.getElementById("message");

//       if (!isValidEmail(email)) {
//         message.innerHTML = '<div class="alert alert-danger">Invalid Email Format</div>';
//         return;
//       }
//       if (!isValidPassword(password)) {
//         message.innerHTML = '<div class="alert alert-danger">Password must contain letters & numbers (min 6 chars)</div>';
//         return;
//       }

//       if (checkUser(email, password)) {
//         message.innerHTML = '<div class="alert alert-success">Login Successful! Redirecting...</div>';

//         //  Remember me (store active session)
//         if (rememberMe) {
//           localStorage.setItem("activeUser", email);
//         } else {
//           sessionStorage.setItem("activeUser", email);
//         }

//         setTimeout(() => {
//           window.location.href = "home.html"; //  change to your homepage
//         }, 1000);
//       } else {
//         message.innerHTML = '<div class="alert alert-danger">Invalid Email or Password</div>';
//       }
//     });
//   }
    });
  

    