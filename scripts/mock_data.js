const airports = ["CAI", "LAX", "SAU", "ALE"];

const suggested_destinations = [
    {
        background: "https://i.insider.com/5d26280921a86107bb51bd92?width=700",
        country: "Japan",
        city: "Tokyo",
        price: "9,963",
        airport: "HND",
    },
    {
        background: "https://lp-cms-production.imgix.net/2021-09/The%20Acropolis%20and%20downtown%20Athens.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
        country: "Greece",
        city: "Athens",
        price: "4,519",
        airport: "ATH",
    },
    {
        background: "https://static.dw.com/image/60208186_303.jpg",
        country: "France",
        city: "Paris",
        price: "7,369",
        airport: "CDG",
    },
    {
        background: "https://www.planete-energies.com/sites/default/files/styles/media_full_width_940px/public/thumbnails/image/moscow.jpg?itok=J_vRU4rA",
        country: "Russia",
        city: "Moscow",
        price: "6,636",
        airport: "SVO",
    },
    {
        background: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/0d/cb/21.jpg",
        country: "Egypt",
        city: "Cairo",
        price: "2,957",
        airport: "CAI",
    },
    {
        background: "https://jakadatoursegypt.com/wp-content/uploads/2020/12/Alexandria-Egypt.jpg",
        country: "Egypt",
        city: "Alexandria",
        price: "2,975",
        airport: "HBE",
    },
]

const flight_routes_empty = []

const flight_routes = [
    {
        airline_logo: "./../media/american-airlines-logo.jpg",
        airline_name: "American Airlines",
        flight_name_type: "EY 654 (Boeing 787-10)",
        departure_UTC: 1655724370,
        arrival_UTC: 1655744369,
        economic: "9,963",
        business: "17,248",
    },
    {
        airline_logo: "./../media/EgyptAirLogo.gif",
        airline_name: "EgyptAir",
        flight_name_type: "MS985 (Boeing 777-300)",
        departure_UTC: 1655742370,
        arrival_UTC: 1655744369,
        economic: "2,945",
        business: "15,243",
    },
    {
        airline_logo: "./../media/japan-airlines-logo.png",
        airline_name: "Japan Airlines",
        flight_name_type: "EK924 (Airbus A380)",
        departure_UTC: 1655644370,
        arrival_UTC: 1655744369,
        economic: "8,233",
        business: "23,598",
    },
    {
        airline_logo: "./../media/jazeera-airways-logo.png",
        airline_name: "Jazeera Airways",
        flight_name_type: "JZ415 (Airbus A321-100)",
        departure_UTC: 1654744370,
        arrival_UTC: 1655744369,
        economic: "5,318",
        business: "23,418",
    },
    {
        airline_logo: "./../media/saudi-airlines-logo.jpg",
        airline_name: "Saudia",
        flight_name_type: "SV 302 (Airbus A330-300)",
        departure_UTC: 1655544370,
        arrival_UTC: 1655744369,
        economic: "5,093",
        business: "21,389",
    },
    {
        airline_logo: "./../media/united-airlines-logo.png",
        airline_name: "United Airlines",
        flight_name_type: "MS985 (Boeing 777-300)",
        departure_UTC: 1655724370,
        arrival_UTC: 1655744369,
        economic: "8,932",
        business: "38,921",
    },
]