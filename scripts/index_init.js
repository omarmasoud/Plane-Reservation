// TODO: Get list of airports from DB
const airports = ["CAI", "LAX", "SAU"];
const from_countries = document.getElementById("from_countries");
const to_countries = document.getElementById("to_countries");

// Adds retreived airports to list of airports
for (airport of airports) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(airport));
    from_countries.appendChild(li);
}

for (airport of airports) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(airport));
    to_countries.appendChild(li);
}

// Click listener to choose the selected airport
from_countries.addEventListener("click", e => {
    if (e.target && e.target.matches("li")) {
        select_suggestion(e.target, "from");
        hide_suggestions("from");
    }
});

to_countries.addEventListener("click", e => {
    if (e.target && e.target.matches("li")) {
        select_suggestion(e.target, "to");
        hide_suggestions("to");
    }
});

const from_dropdown = document.getElementById("from_dropdown");
from_dropdown.addEventListener('focusout', e => {
    if (!from_dropdown.contains(e.relatedTarget)) {
        hide_suggestions("from");
    }
});

const to_dropdown = document.getElementById("to_dropdown");
to_dropdown.addEventListener('focusout', e => {
    if (!to_dropdown.contains(e.relatedTarget)) {
        hide_suggestions("to");
    }
});