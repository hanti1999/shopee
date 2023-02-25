const login = document.querySelector(".auth-login");
const signup = document.querySelector(".auth-signup");
const modal = document.querySelector(".modal");

function openModal () {
    document.querySelector('.modal').style.display = "flex"; 
}

function openLoginForm() { 
    document.querySelector(".auth-login").style.display = "block"; 
} 
  
function openSignupForm() { 
    document.querySelector(".auth-signup").style.display = "block"; 
}

// Đóng tất cả form khi ấn vào vùng trống
function closeAllForm() {
    document.querySelector(".auth-login").style.display = "none";
    document.querySelector(".auth-signup").style.display = "none"; 
    document.querySelector(".modal").style.display = "none";
}

// Chuyển đổi giữa các form
function swichForms() {
    if (document.querySelector(".auth-login").style.display == "block") {
        document.querySelector(".auth-login").style.display = "none";
        document.querySelector(".auth-signup").style.display = "block";
    }
    else if (document.querySelector(".auth-signup").style.display == "block" ) {
        document.querySelector(".auth-signup").style.display = "none";
        document.querySelector(".auth-login").style.display = "block";
    }
}