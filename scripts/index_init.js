function init_index() {
    if (window.localStorage.getItem("logged_in") == 'true') {
        login.textContent = "Profile";
        login.href = "./pages/profile.html";

        signup.textContent = "Logout";
        signup.href = "./index.html";
    } else {
        login.textContent = "Login";
        login.href = "./pages/login.html";

        signup.textContent = "Sign Up";
        signup.href = "./pages/signup.html";

        window.localStorage.setItem("logged_in", "false");
    }
    current_flight_state = {};
    populate_suggested_flights();
}

init_index();