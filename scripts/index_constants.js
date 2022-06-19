const airports = ["CAI", "LAX", "SAU", "ALE"];
const from_dropdown = document.getElementById("from_dropdown");
const to_dropdown = document.getElementById("to_dropdown");
const from_search = document.getElementById("from_search");
const to_search = document.getElementById("to_search");
const from_countries = document.getElementById("from_countries");
const to_countries = document.getElementById("to_countries");
var current_li = {
    from: -1,
    to: -1
}