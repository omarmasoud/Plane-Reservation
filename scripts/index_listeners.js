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

from_countries.addEventListener("mouseover", e => {
    e.target.classList.add("back-primary-dark");
});

from_countries.addEventListener("mouseout", e => {
    e.target.classList.remove("back-primary-dark");
});

to_countries.addEventListener("mouseover", e => {
    e.target.classList.add("back-primary-dark");
});

to_countries.addEventListener("mouseout", e => {
    e.target.classList.remove("back-primary-dark");
});

to_countries.addEventListener("click", e => {
    if (e.target && e.target.matches("li")) {
        select_suggestion(e.target, "to");
        hide_suggestions("to");
        to_countries.blur();
    }
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