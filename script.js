function registerUser() {
    let name, email, password;

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_record = new Array();

    user_record = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []

    if (user_record.some((v) => {
        return v.email == email
    })) {
        alert("Duplicate Data")
    } else {
        user_record.push({
            "name": name,
            "email": email,
            "password": password
        })
        localStorage.setItem("user", JSON.stringify(user_record));
        window.location.href = "login.html"
    }
}

function loginUser() {
    let email, password;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let login_record = new Array();
    login_record = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[];
    if(login_record.some((v) => {
        return v.email == email && v.password == password
    })){
        alert('Login Successful')
        let current_user = login_record.filter((val) => {
            return val.email == email && val.password == password
        })[0]

        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);

        window.location.href = "home.html"

    }else{
        alert("Something Wrong")
    }
}

