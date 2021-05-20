let bits = [1, 2, 4, 8, 16, 32, 64, 128];
let counter = 0;
let first = false;
let second = false;
let third = false;
let fourth = false;
let fifth = false;
let sixth = false;
let seventh = false;
let eighth = false;
let title = document.getElementById("titleScreen");
let main = document.getElementById("mainScene");
update();

function play() {
    title.style.width = "0%";
    main.style.left = 0;
}

function back() {
    title.style.width = "100%";
    main.style.left = "100%";
}



function update() {
    if (counter <= 0) {
        down.style.color = "#FFCA28"; //yellow-color
    } else {
        down.style.color = "#b594f3"; //Lavender
    }

    if (counter >= 255) {
        up.style.color = "#E44D26"; //Red
    } else {
        up.style.color = "#b594f3"; //Lavender
    }



    number.innerHTML = counter;

    if (first) {
        one.innerHTML = 1;
    } else {
        one.innerHTML = 0;
    }
    if (second) {
        two.innerHTML = 1;
    } else {
        two.innerHTML = 0;
    }
    if (third) {
        three.innerHTML = 1;
    } else {
        three.innerHTML = 0;
    }
    if (fourth) {
        four.innerHTML = 1;
    } else {
        four.innerHTML = 0;
    }
    if (fifth) {
        five.innerHTML = 1;
    } else {
        five.innerHTML = 0;
    }
    if (sixth) {
        six.innerHTML = 1;
    } else {
        six.innerHTML = 0;
    }
    if (seventh) {
        seven.innerHTML = 1;
    } else {
        seven.innerHTML = 0;
    }
    if (eighth) {
        eight.innerHTML = 1;
    } else {
        eight.innerHTML = 0;
    }
}

function One() {
    if (first) {
        first = false;
        counter -= bits[0];
    } else {
        first = true;
        counter += bits[0];
    }
    update();
}

function Two() {
    if (second) {
        second = false;
        counter -= bits[1];
    } else {
        second = true;
        counter += bits[1];
    }
    update();
}

function Three() {

    if (third) {
        third = false;
        counter -= bits[2];
    } else {
        third = true;
        counter += bits[2];
    }
    update();
}

function Four() {
    if (fourth) {
        fourth = false;
        counter -= bits[3];
    } else {
        fourth = true;
        counter += bits[3];
    }
    update();
}

function Five() {
    if (fifth) {
        fifth = false;
        counter -= bits[4];
    } else {
        fifth = true;
        counter += bits[4];
    }
    update();
}

function Six() {
    if (sixth) {
        sixth = false;
        counter -= bits[5];
    } else {
        sixth = true;
        counter += bits[5];
    }
    update();
}

function Seven() {
    if (seventh) {
        seventh = false;
        counter -= bits[6];
    } else {
        seventh = true;
        counter += bits[6];
    }

    update();
}

function Eight() {
    if (eighth) {
        eighth = false;
        counter -= bits[7];
    } else {
        eighth = true;
        counter += bits[7];
    }
    update();
}