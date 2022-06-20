// Toggle dropdown div colors
ap_from_search.addEventListener('focusin', () => {
    toggle_destination_color("in", "from");
});

ap_to_search.addEventListener('focusin', () => {
    toggle_destination_color("in", "to");
});


// Click listener to choose the selected airports
ap_from_countries.addEventListener("click", e => {
    if (e.target && e.target.matches("li")) {
        select_suggestion(e.target, "from");
        hide_suggestions("from");
        to_search.focus();
    }
});

ap_to_countries.addEventListener("click", e => {
    if (e.target && e.target.matches("li")) {
        select_suggestion(e.target, "to");
        hide_suggestions("to");
        departure_date.focus();
    }
});


// Listeners to change list items colors on hover
ap_from_countries.addEventListener("mouseover", e => {

    Array.from(e.target.parentElement.children).forEach(element => {
        element.classList.remove("back-primary-dark");    
    });

    e.target.classList.add("back-primary-dark");
    ap_current_li["from"] = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
});

ap_from_countries.addEventListener("mouseout", e => {
    e.target.classList.remove("back-primary-dark");
});

ap_to_countries.addEventListener("mouseover", e => {
    Array.from(e.target.parentElement.children).forEach(element => {
        element.classList.remove("back-primary-dark");    
    });

    e.target.classList.add("back-primary-dark");
    ap_current_li["to"] = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
});

ap_to_countries.addEventListener("mouseout", e => {
    e.target.classList.remove("back-primary-dark");
});


// Hide suggestions list when airport selected
ap_from_dropdown.addEventListener('focusout', e => {
    if (!ap_from_dropdown.contains(e.relatedTarget)) {
        hide_suggestions("from");
        toggle_destination_color("out", "from");
        
    }
});

ap_to_dropdown.addEventListener('focusout', e => {
    if (!ap_to_dropdown.contains(e.relatedTarget)) {
        hide_suggestions("to");
        toggle_destination_color("out", "to");
    }
});


// Keyboard listeners for airports list
ap_from_search.addEventListener("keydown", e => {
    var list_items = document.querySelectorAll(`#from_countries li`);
    
    list_arrow_traversal(e, list_items, "from");
});

ap_to_search.addEventListener("keydown", e => {
    var list_items = document.querySelectorAll(`#to_countries li`);
    
    list_arrow_traversal(e, list_items, "to");
});

ap_departure_date.addEventListener("change", () => {
    if (ap_return_date.style.opacity > 0) {
        ap_return_date.focus();
    }
    else {
        ap_departure_date.blur();
    }
})

ap_return_date.addEventListener("change", () => {
    ap_return_date.blur();
})
