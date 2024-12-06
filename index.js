
let users = JSON.parse(localStorage.getItem("users")) || []; 


function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function isStrongPassword(password) {
    const regex = /^[0-9]+$/;
    return regex.test(password);
}




function signUp() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const existMessage = document.getElementById("exist");
    const sucsesmessage = document.getElementById("sucsesmessage");

    
    if (!name) {
        existMessage.textContent ="Name is required.";
    }

    if (!isValidEmail(email)) {
        existMessage.textContent = "Invalid email address.";
        return;
    }

    if (!isStrongPassword(password)) {
       existMessage.textContent="Password must be at least 3 numbers.";
        return;
    }

    if (users.some(user => user.email === email)) {
                existMessage.textContent = "Email already exists. Try another one.";
                 return;
             }

    
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    
    sucsesmessage.textContent="Registration successful! Redirecting to login...";
    window.location.href = "index.html"; 
}


function login() {
    const email = document.getElementById("signinEmail").value.trim();
    const password = document.getElementById("signinPassword").value.trim();
     const incorrectMessage = document.getElementById("incorrect");
     const correctMessage = document.getElementById("correct");

    const user = users.find(user => user.email === email);

    if (!user && user.password !== password) {
        incorrectMessage.textContent = "Incorrect email or password.";
        return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    
    correctMessage.textContent="Login successful!";
    window.location.href = "wlcome.html"; 
}
  
function loadHomePage() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
   
        document.getElementById("username").textContent = `Welcome ${user.name}`;
    
}


function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}















