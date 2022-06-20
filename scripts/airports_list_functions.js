function filter_search(choice) {
    let input = document.getElementById(`${choice}_search`);
    let filter = input.value.toLowerCase();
    let dropdown = document.getElementById(`${choice}_dropdown`);
    let li = dropdown.getElementsByTagName("li");

    for (let i = 0; i < li.length; ++i) {
        let value = li[i].textContent;
        if (value.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}

function show_suggestions(choice) {
    filter_search(choice);
    // document.getElementById(`${choice}_suggestions`).style.display = "block";
    document.getElementById(`${choice}_suggestions`).classList.add("visible");
}

function hide_suggestions(choice) {
    // document.getElementById(`${choice}_suggestions`).style.display = "none";
    document.getElementById(`${choice}_suggestions`).classList.remove("visible");
}

function select_suggestion(element, choice) {
    const search_box = document.getElementById(`${choice}_search`);
    search_box.value = element.textContent;
}

function swap_airports() {
    const from_box = document.getElementById(`from_search`);
    const to_box = document.getElementById(`to_search`);
    let temp = from_box.value;
    from_box.value = to_box.value;
    to_box.value = temp;   
}

function toggle_destination_color(focus, choice) {
    const dropdown = document.getElementById(`${choice}_dropdown`);
    const search = document.getElementById(`${choice}_search`);
    
    switch (focus) {
        case "in":
            dropdown.classList.add("back-primary");
            dropdown.classList.remove("back-secondary");
        
            document.getElementById(`${choice}_label`).classList.add("secondary");
            document.getElementById(`${choice}_label`).classList.remove("primary");
        
            search.classList.add("back-primary");
            search.classList.remove("back-secondary");
        
            search.classList.remove("primary");
            search.classList.add("secondary");
            break;

        default:
            dropdown.classList.remove("back-primary");
            dropdown.classList.add("back-secondary");
        
            document.getElementById(`${choice}_label`).classList.remove("secondary");
            document.getElementById(`${choice}_label`).classList.add("primary");
        
            search.classList.remove("back-primary");
            search.classList.add("back-secondary");
        
            search.classList.add("primary");
            search.classList.remove("secondary");
            break;

    }
}

function list_arrow_traversal(e, list_items, choice) {
    
    if (current_li[choice] < 0) {
        list_items[0].classList.add("back-primary-dark");
        ++current_li[choice];
    }

    else {
        switch (e.keyCode) {
            case 38: // Up arrow
                list_items[current_li[choice]].classList.remove("back-primary-dark");
                current_li[choice] = (current_li[choice] > 0) ? --current_li[choice] : 0;
                list_items[current_li[choice]].classList.add("back-primary-dark");
                break;

            case 40: // Down arrow
                list_items[current_li[choice]].classList.remove("back-primary-dark");
                current_li[choice] = (current_li[choice] < list_items.length - 1) ? ++current_li[choice] : list_items.length - 1;
                list_items[current_li[choice]].classList.add("back-primary-dark");
                break;
        }
    }
}

function show_hide_return_date(choice) {
    let return_div = document.getElementById("return_div");

    switch (choice) {
        case "one":
            return_div.classList.add("invisible");
            break;

        default:
            return_div.classList.remove("invisible");
            break;
    }
}

function save_current_flight_state() {
    current_flight_state.from = from_search.value;
    current_flight_state.to = to_search.value;
    current_flight_state.departure = departure_date.value;
    if (return_date.style.opacity > 0) {
        current_flight_state.return = return_date.value;
    }
}