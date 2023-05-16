let count = 0;
function eyes() {
    count++;
    let password = document.getElementById("password");
    let eye = document.getElementById("eye");
    if (count % 2 == 0) {
        password.type = "text"
        eye.classList.add("fa-regular")
    } else if (count % 2 == 1) {
        password.type = "password";
        eye.classList.remove("  fa-regular");
        count = 0;
    }
}
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const register = document.getElementById("register");
register.addEventListener("click", (e) => {
e.preventDefault();
if (username.value === "" || password.value === "") {
alert("vui lòng không để trống");
} else {
const user = JSON.parse(localStorage.getItem(username.value));
if (
user.username === username.value &&
user.password === password.value
) {alert("Đăng Nhập Thành Công");
window.location.href = "./shop.html";
} else {
alert("Đăng Nhập Thất Bại");
}
}
});
