// Toggle dropdown div colors
from_search.addEventListener('focusin', () => {
    toggle_destination_color("in", "from");
});

to_search.addEventListener('focusin', () => {
    toggle_destination_color("in", "to");
});


// Click listener to choose the selected airports
from_countries.addEventListener("click", e => {
    if (e.target && e.target.matches("li")) {
        select_suggestion(e.target, "from");
        hide_suggestions("from");
        to_search.focus();
    }
});

to_countries.addEventListener("click", e => {
    if (e.target && e.target.matches("li")) {
        select_suggestion(e.target, "to");
        hide_suggestions("to");
        departure_date.focus();
    }
});


// Listeners to change list items colors on hover
from_countries.addEventListener("mouseover", e => {

    Array.from(e.target.parentElement.children).forEach(element => {
        element.classList.remove("back-primary-dark");    
    });

    e.target.classList.add("back-primary-dark");
    current_li["from"] = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
});

from_countries.addEventListener("mouseout", e => {
    e.target.classList.remove("back-primary-dark");
});

to_countries.addEventListener("mouseover", e => {
    Array.from(e.target.parentElement.children).forEach(element => {
        element.classList.remove("back-primary-dark");    
    });

    e.target.classList.add("back-primary-dark");
    current_li["to"] = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
});

to_countries.addEventListener("mouseout", e => {
    e.target.classList.remove("back-primary-dark");
});


// Hide suggestions list when airport selected
from_dropdown.addEventListener('focusout', e => {
    if (!from_dropdown.contains(e.relatedTarget)) {
        hide_suggestions("from");
        toggle_destination_color("out", "from");
        
    }
});

to_dropdown.addEventListener('focusout', e => {
    if (!to_dropdown.contains(e.relatedTarget)) {
        hide_suggestions("to");
        toggle_destination_color("out", "to");
    }
});


// Keyboard listeners for airports list
from_search.addEventListener("keydown", e => {
    var list_items = document.querySelectorAll(`#from_countries li`);
    
    list_arrow_traversal(e, list_items, "from");
});

to_search.addEventListener("keydown", e => {
    var list_items = document.querySelectorAll(`#to_countries li`);
    
    list_arrow_traversal(e, list_items, "to");
});
