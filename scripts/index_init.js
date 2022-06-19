function init_index() {

    // Keep footer at bottom of page
    window.onload = window.onresize = function () {
        const header = document.getElementsByClassName("header")[0];
        const body = document.getElementsByClassName("container")[0];
        const footer = document.getElementsByClassName("footer")[0];
    
        let document_height = Math.max(document.body.scrollHeight, 
                                       document.body.offsetHeight, 
                                       document.documentElement.clientHeight, 
                                       document.documentElement.scrollHeight, 
                                       document.documentElement.offsetHeight);
        body.style.height = `${document_height - header.clientHeight - 2 * footer.clientHeight}px`;
    }

    // TODO: Get list of airports from DB
    const airports = ["CAI", "LAX", "SAU", "ALE"];
    const from_dropdown = document.getElementById("from_dropdown");
    const to_dropdown = document.getElementById("to_dropdown");
    const from_search = document.getElementById("from_search");
    const to_search = document.getElementById("to_search");
    const from_countries = document.getElementById("from_countries");
    const to_countries = document.getElementById("to_countries");
    
    from_search.addEventListener('focusin', () => {
        toggle_destination_color("in", "from");
    });

    to_search.addEventListener('focusin', () => {
        toggle_destination_color("in", "to");
    });

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
}

init_index();