const airports = ["CAI", "LAX", "SAU", "ALE"];
const round_trip = document.getElementById("round_trip");
const one_way = document.getElementById("one_way");
const from_dropdown = document.getElementById("from_dropdown");
const to_dropdown = document.getElementById("to_dropdown");
const from_search = document.getElementById("from_search");
const to_search = document.getElementById("to_search");
const from_countries = document.getElementById("from_countries");
const to_countries = document.getElementById("to_countries");
const departure_date = document.getElementById("departure_date");
const return_date = document.getElementById("return_date");
var current_li = {
    from: -1,
    to: -1
}