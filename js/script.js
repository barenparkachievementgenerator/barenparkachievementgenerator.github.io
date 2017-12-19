window.onload = function () {
    document.getElementById("generator_button").onclick = function () {
        generate_achievements()
    };
}

function generate_achievements() {

    // Making two separate arrays isn't great
    // but the data is never going to change
    // and arrays always keep the same order unlike objects

    var card_names = [
        "Long Food Street",
        "Long River",
        "Pandas",
        "Animal Houses",
        "Polar Bears",
        "Enclosures",
        "Twice is Nice",
        "Gobi Bears",
        "Green Areas",
        "Koalas",
    ]
    var card_images = [
        "images/long_food_street.png",
        "images/long_river.png",
        "images/pandas.png",
        "images/animal_houses.png",
        "images/polar_bears.png",
        "images/enclosures.png",
        "images/twice_is_nice.png",
        "images/gobi_bears.png",
        "images/green_areas.png",
        "images/koalas.png",
    ]


    // Card one
    var randomint = Math.floor(Math.random() * 10);
    var card_one = card_names[randomint];
    var card_one_image = card_images[randomint];

    var i = card_names.indexOf(card_one);
    if (i != -1) {
        card_names.splice(i, 1);
        card_images.splice(i, 1)
    }

    // Card two
    var randomint = Math.floor(Math.random() * 9);
    var card_two = card_names[randomint];
    var card_two_image = card_images[randomint];

    var i = card_names.indexOf(card_two);
    if (i != -1) {
        card_names.splice(i, 1);
        card_images.splice(i, 1)
    }


    // Card three
    var randomint = Math.floor(Math.random() * 8);
    var card_three = card_names[randomint];
    var card_three_image = card_images[randomint];

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