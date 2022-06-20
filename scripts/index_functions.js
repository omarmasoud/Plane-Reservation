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

function populate_suggested_flights() {
    const suggested_flights = document.getElementById("suggested_flights");
    
    let choices = suggested_destinations.sort(() => Math.random() - 0.5).slice(0, 6);
    let i = 0;
    for (row of suggested_flights.children) {
        for (suggestion of row.children) {
            
            if (suggestion.tagName == "H2") {
                continue;
            }

            let location_div = document.createElement("div");
            location_div.classList.add("location_div", "d-flex", "h-100", "flex-column", "justify-content-center", "align-items-center");
            let blurred_background = document.createElement("div");
            blurred_background.classList.add("blurred_background");
            let country = document.createElement("p");
            country.classList.add("country");
            let city = document.createElement("p");
            city.classList.add("city");
            let price = document.createElement("p");
            price.classList.add("price");

            country.classList.add("secondary");
            city.classList.add("secondary");
            price.classList.add("secondary");
            price.classList.add("back-primary-dark");

            suggestion.addEventListener('mouseover', () => {
                price.classList.remove("back-primary-dark");
                price.classList.add("back-primary");
                price.style.transition = "all 0.3s";
                location_div.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            });

            suggestion.addEventListener('mouseout', () => {
                price.classList.remove("back-primary");
                price.classList.add("back-primary-dark");
                price.style.transition = "all 0.3s";
                location_div.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
            });

            // TODO: suggestion onclick listener to search for its offers
            
            location_div.appendChild(city);
            location_div.appendChild(country);
            location_div.appendChild(blurred_background);
            suggestion.appendChild(location_div);
            suggestion.appendChild(price);
            
            suggestion.style.backgroundImage = `url(${choices[i]["background"]})`;
            suggestion.children[0].children[1].textContent = choices[i]["country"];
            suggestion.children[0].children[0].textContent = choices[i]["city"];
            suggestion.children[1].textContent = `Starting from* ${choices[i]["price"]} EGP`;

            ++i;
        }
    }
}