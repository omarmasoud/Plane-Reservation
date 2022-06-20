function populate_available_flights() {
    // TODO: retrieve data from database
    
    if (flight_routes.length == 0) {
        let row = document.createElement("div");
        row.classList.add("row")
        row.style = `
            margin: auto;
            width: 100%;
        `;
        
        let p = document.createElement("p");
        p.classList.add("primary", "no_flights_found");
        p.textContent = "Sorry, no flights were found for this date.";

        row.appendChild(p);

        available_flights.appendChild(row);
        return;
    }

    let choices = flight_routes.sort(() => Math.random() - 0.5).slice(0, 6);
    let i = 0;
    for (route of choices) {
        let row = document.createElement("div");
        row.classList.add("row", "route_row");
        __add_flight_info(route, row);
        __add_departure_arrival(route, row);
        __add_economy_price(route, row);
        __add_business_price(route, row);
    }
}

function __add_flight_info(route, row) {

    let flight_info = document.createElement("div");
    flight_info.classList.add("col-md-2",);
    
    let logo_row = document.createElement("div");
    logo_row.classList.add("row");
    let logo_link = document.createElement("a");
    logo_link.classList.add("logo_link");
    // TODO: supply correct review link
    logo_link.href = "./reviewcarrier.html";
    let airline_logo = document.createElement("img");
    airline_logo.classList.add("airline_logo");
    airline_logo.style.backgroundImage = `url(${route["airline_logo"]})`;
    
    let airline_name_row = document.createElement("div");
    airline_name_row.classList.add("row");
    let airline_name_link = document.createElement("a");
    airline_name_link.style.margin = "auto";
    // TODO: supply correct review link
    airline_name_link.href = "./reviewcarrier.html";
    let airline_name = document.createElement("p");
    airline_name.classList.add("airline_name", "primary");
    airline_name.textContent = route["airline_name"];

    let flight_name_type_row = document.createElement("div");
    flight_name_type_row.classList.add("row");
    let flight_name_type = document.createElement("p");
    flight_name_type.classList.add("flight_name_type", "primary");
    flight_name_type.textContent = route["flight_name_type"];

    logo_link.appendChild(airline_logo);
    logo_row.appendChild(logo_link);
    airline_name_link.appendChild(airline_name);
    airline_name_row.appendChild(airline_name_link);
    flight_name_type_row.appendChild(flight_name_type);
    flight_info.appendChild(logo_row);
    flight_info.appendChild(airline_name_row);
    flight_info.appendChild(flight_name_type_row);
    row.appendChild(flight_info);

    available_flights.appendChild(row);
    let hr = document.createElement("hr");
    available_flights.appendChild(hr);
}

function __add_departure_arrival(route, row) {
    let time_text = unix_to_text(route);
    

    let parent_column = document.createElement("div");
    parent_column.classList.add("col-md-6");


    let parent_row = document.createElement("div");
    parent_row.classList.add("row", "d-flex", "h-100", "align-items-center", "justify-content-center");


    let departure_col = document.createElement("div");
    departure_col.classList.add("col-mid-4", "h-100", "d-flex", "align-items-center", "justify-content-center");
    departure_col.style.width = "33%";

    let departure_text = document.createElement("p");
    departure_text.classList.add("primary", "departure_arrival_time");
    departure_text.innerHTML = `${time_text["departure_UTC"]}<br/>${time_text["departure_local"]}`;

    departure_col.appendChild(departure_text);


    let duration_col = document.createElement("div");
    duration_col.classList.add("col-mid-4", "h-100", "d-flex", "align-items-center", "justify-content-center");
    duration_col.style.width = "33%";

    let duration_text = document.createElement("p");
    duration_text.classList.add("primary", "departure_arrival_time");
    duration_text.innerHTML = time_text["duration"];

    duration_col.appendChild(duration_text);


    let arrival_col = document.createElement("div");
    arrival_col.classList.add("col-mid-4", "h-100", "d-flex", "align-items-center", "justify-content-center");
    arrival_col.style.width = "33%";

    let arrival_text = document.createElement("p");
    arrival_text.classList.add("primary", "departure_arrival_time");
    arrival_text.innerHTML = `${time_text["arrival_UTC"]}<br/>${time_text["arrival_local"]}`;

    arrival_col.appendChild(arrival_text);


    parent_row.appendChild(departure_col);
    parent_row.appendChild(duration_col);
    parent_row.appendChild(arrival_col);

    parent_column.appendChild(parent_row);

    row.appendChild(parent_column);

}

function unix_to_text(route) {
    let offset = offset_to_hour(new Date().getTimezoneOffset());
    offset = offset > 0 ? `+${offset}` : `-${offset}`;

    let time_options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    let departure = route["departure_UTC"];
    let departure_UTC = new Date(departure * 1000).toUTCString();
    let departure_local = `${new Date(departure * 1000).toLocaleTimeString("en-gb", time_options)} GMT${offset}`;
    
    let arrival = route["arrival_UTC"];
    let arrival_UTC = new Date(arrival * 1000).toUTCString();
    let arrival_local = `${new Date(arrival * 1000).toLocaleTimeString("en-gb", time_options)} GMT${offset}`;

    let duration = convertMsToTime((arrival - departure) * 1000);

    let time_text = {
        departure_UTC: departure_UTC,
        departure_local: departure_local,
        arrival_UTC: arrival_UTC,
        arrival_local: arrival_local,
        duration: duration,
    };

    return time_text;
}

function offset_to_hour(offset) {
    return -1 * (offset / 60.0);
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
  
    hours = hours % 24;
  
    return `${padTo2Digits(hours)}h${padTo2Digits(minutes)}m${padTo2Digits(seconds)}s`;
}

function __add_economy_price(route, row) {
    let economic = document.createElement("div");
    economic.classList.add("col-md-2", "d-flex", "align-items-center", "justify-content-center");

    let economic_div = document.createElement("div");
    economic_div.classList.add("back-primary-light", "d-flex", "h-100", "w-100", "align-items-center", "justify-content-center", "prices_box");

    let price = document.createElement("a");
    price.classList.add("price", "secondary");
    price.textContent = `${route["economic"]}EGP`;
    price.href = "./reservation.html";

    economic_div.appendChild(price);
    economic.appendChild(economic_div);
    row.appendChild(economic);
}

function __add_business_price(route, row) {
    let business = document.createElement("div");
    business.classList.add("col-md-2", "d-flex", "align-items-center", "justify-content-center");

    let business_div = document.createElement("div");
    business_div.classList.add("business_box", "d-flex", "h-100", "w-100", "align-items-center", "justify-content-center", "prices_box");

    let price = document.createElement("a");
    price.classList.add("price", "secondary");
    price.textContent = `${route["business"]}EGP`;
    price.href = "./reservation.html";

    business_div.appendChild(price);
    business.appendChild(business_div);
    row.appendChild(business);
}

function populate_settings() {
    ap_from_search.value = current_flight_state.from;
    ap_to_search.value = current_flight_state.to;
}

function refresh_settings() {

}