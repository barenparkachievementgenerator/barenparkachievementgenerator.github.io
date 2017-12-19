window.onload = function () {
    document.getElementById("generator_button").onclick = function () {
        generate_achievements()
    };
}

function generate_achievements() {

    var card_names = [
        ["Long Food Street", "images/long_food_street.png"],
        ["Long River", "images/long_river.png"],
        ["Pandas", "images/pandas.png"],
        ["Animal Houses", "images/animal_houses.png"],
        ["Polar Bears", "images/polar_bears.png"],
        ["Enclosures", "images/enclosures.png"],
        ["Twice is Nice", "images/twice_is_nice.png"],
        ["Gobi Bears", "images/gobi_bears.png"],
        ["Green Areas", "images/green_areas.png"],
        ["Koalas", "images/koalas.png"],
    ]

    // Card one
    var randomint = Math.floor(Math.random() * 10);
    var card_one = card_names[randomint][0];
    var card_one_image = card_names[randomint][1];
    card_names.splice(randomint, 1);

    // Card two
    var randomint = Math.floor(Math.random() * 9);
    var card_two = card_names[randomint][0];
    var card_two_image = card_names[randomint][1];
    card_names.splice(randomint, 1);

    // Card three
    var randomint = Math.floor(Math.random() * 8);
    var card_three = card_names[randomint][0];
    var card_three_image = card_names[randomint][1];

    // Adding images and text
    document.querySelector("#card_one > .card-body > .card-text").innerHTML = card_one;
    document.querySelector("#card_one > .card-img-top").setAttribute("src", card_one_image);

    document.querySelector("#card_two > .card-body > .card-text").innerHTML = card_two;
    document.querySelector("#card_two > .card-img-top").setAttribute("src", card_two_image);

    document.querySelector("#card_three > .card-body > .card-text").innerHTML = card_three;
    document.querySelector("#card_three > .card-img-top").setAttribute("src", card_three_image);

    // Revealing images and text
    document.getElementById("cards_row").classList.remove('d-none');

    // Changing text on button
    document.getElementById("generator_button").innerText = 'Generate again...';
}