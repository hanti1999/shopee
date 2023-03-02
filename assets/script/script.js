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

// function openCart() {
//     if (document.querySelector('.header__cart-list').style.display == "block") {
//         document.querySelector('.header__cart-list').style.display = "none";
//     } else {
//         document.querySelector('.header__cart-list').style.display = "block";
//     }
// }

// function closeCart() { 
//     document.querySelector('.header__cart-list').style.display = "none";
// }

// Cách pro hơn với jQuery
// $(document).ready(function() {
//     // Ẩn modal khi tải trang
//     $('.modal').hide();
    
//     // Xử lý sự kiện khi click vào nút Login
//     $('#login-btn').click(function() {
//         $('.modal').show().css("display","flex");
//         $('.auth-login').show();
//         $('.auth-signup').hide();
//     });
    
//     // Xử lý sự kiện khi click vào nút Register
//     $('#register-btn').click(function() {
//         $('.modal').show().css("display","flex");
//         $('.auth-signup').show();
//         $('.auth-login').hide();
//     });
    
//     // Xử lý sự kiện khi click vào nút đóng modal hoặc khoảng trống
//     $('.close').click(function() {
//         $('.modal').hide();
//     });
//     $('.modal__overlay').click(function() {
//         $('.modal').hide();
//     });

//     // Xử lý sự kiện khi chuyển đổi form
//     $('#switch-to-login').click(function() {
//         $('.auth-signup').hide();
//         $('.auth-login').show();
//     })
//     $('#switch-to-register').click(function() {
//         $('.auth-signup').show();
//         $('.auth-login').hide();
//     })
// });