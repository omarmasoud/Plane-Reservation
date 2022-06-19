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
    if (focus == "in") {
        dropdown.style.backgroundColor = "#3799F0";
        document.getElementById(`${choice}_label`).style.color = "white";
        search.style.backgroundColor = "#3799F0";
        search.style.color = "white";
    }
    else {
        dropdown.style.backgroundColor = "white";
        document.getElementById(`${choice}_label`).style.color = "#3799F0";
        search.style.backgroundColor = "white";
        search.style.color = "#3799F0";
    }
}