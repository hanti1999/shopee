function openModal () {
    document.querySelector('.modal').style.display = "flex"; 
}

function closeModal () {
    document.querySelector('.modal').style.display = "none";
}

function openLoginForm() { 
    document.querySelector(".auth-login").style.display = "block"; 
} 
  
function openSignupForm() { 
    document.querySelector(".auth-signup").style.display = "block"; 
} 
  
function closeLoginForm() { 
    document.querySelector(".auth-login").style.display = "none"; 
} 
  
function closeSignupForm() { 
    document.querySelector(".auth-signup").style.display = "none"; 
}

// function toggleForms(){ 
//     if(document.querySelector(".auth-login").style.display == "block") { 
//       document.querySelector(".auth-login").style.display = "none"; 
//     } 
//     else if(document.querySelector(".auth-signup").style.display == "block") { 
//       document.querySelector(".auth-signup").style.display = "none"; 
//     } 
//     else { 
//       document.querySelector(".auth-login").style.display = "block"; 
//       document.querySelector(".auth-signup").style.display = "block"; 
//     } 
// }