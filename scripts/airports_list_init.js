function airport_list_init() {
    // TODO: Get list of airports from DB

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
}

airport_list_init();