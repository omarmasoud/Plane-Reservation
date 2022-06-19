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

init_index();