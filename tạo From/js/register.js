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
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnRegister = document.getElementById("register");
btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("11111111111")
    if (
        username.value === "" ||
        email.value === "" ||
        password.value === ""
    ) {
        alert("vui lòng không để trống");
    } else {
        // array user
        const user = {
            username: username.value,
            password: password.value,
            email: email.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(username.value, json);
        alert("Đăng Ký Thành Công");

    }
});
