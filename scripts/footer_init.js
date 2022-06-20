function footer_init() {
    // Keep footer at bottom of page
    window.onload = window.onresize = function () {
        const header = document.getElementsByClassName("header")[0];
        var body = document.getElementsByClassName("container")[0];
        if (body == null || body == 'undefined') {
            body = document.getElementsByClassName("container-fluid")[0];
        }
        const footer = document.getElementsByClassName("footer")[0];
    
        let document_height = Math.max(document.body.scrollHeight, 
                                       document.body.offsetHeight, 
                                       document.documentElement.clientHeight, 
                                       document.documentElement.scrollHeight, 
                                       document.documentElement.offsetHeight);
        body.style.height = `${document_height - header.clientHeight - 2 * footer.clientHeight}px`;
    }
}

footer_init();