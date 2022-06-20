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