function openLoginForm() { 
    document.querySelector('.modal').style.display = "flex"; 
    document.querySelector(".auth-login").style.display = "block"; 
} 
function openSignupForm() { 
    document.querySelector('.modal').style.display = "flex"; 
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