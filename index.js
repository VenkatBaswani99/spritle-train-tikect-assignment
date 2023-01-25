const hi = document.getElementById("main");
const checkbox = document.getElementById("butto");
const warning = document.getElementById("his");
const warn = document.getElementById("para");
const chair11 = document.getElementById("chair1");
const chair22 = document.getElementById("chair2");
const chair33 = document.getElementById("chair3");
const chair44 = document.getElementById("chair4");
const mainbu = document.getElementById("mainbutton");
const warns = document.getElementById("det");
const males = document.getElementById("male");
const females = document.getElementById("female");
const ticketsnum = document.getElementById("ticketsbo");
const logoutit = document.getElementById("logout");





checkbox.addEventListener("click", checkboxClick, false);
mainbu.addEventListener("click", bookticket, false);


logoutit.addEventListener("click", logoutthegame, false);
let fe = false;
let ma = false;


function checkboxClick(event) {
    event.preventDefault();
    const name = document.getElementById("exampleInput1");
    const email = document.getElementById("exampleInputName");
    const password = document.getElementById("exampleInputNumber1");
    if (name.value === "" || email.value === "" || password.value === "") {
        warning.textContent = "*Enter valid details";
    } else {
        warning.textContent = "";
        hi.classList.add("d-none");
        sub.classList.remove("d-none");
        warn.textContent = "Welcome " + name.value;
        //ticketsnum.textContent = "book 4 tickets only!"
        //ticketsnum.style.color = "brown"
    }
}


function bookticket() {
    let coun = 0;
    const Name = document.getElementById("exampleInput10");
    const Email = document.getElementById("exampleInput20");
    const Password = document.getElementById("exampleInput30");
    const type = parseInt(Email.value);
    const types = typeof(type);
    console.log(types);
    if (Name.value === "" || Email.value === "" || Password.value === "" || (fe === false && ma === false) || type === Number || (fe === true && ma === true)) {
        warns.textContent = "*Enter valid details";
        warns.style.color = "red";
    } else {
        warns.textContent = "";
        AGE = parseInt(Email.value)
        if (AGE >= 60 && fe === true) {

            coun = coun + 1;
            if (coun <= 4) {
                chair11.style.color = "green";
                warns.textContent = " Congrats c-1 is allocated for you";
                warns.style.color = "green";
            } else {
                warn.textContent = "sorry your limit has reached";
                warns.style.color = "red";
                console.log(coun);
            }
        } else if (AGE >= 60 && ma === true) {
            chair22.style.color = "";
            warns.textContent = " Congrats d-6 is allocated for you";
            warns.style.color = "green";
            coun = coun + 1;
        } else if (AGE < 60 && fe === true) {
            chair33.style.color = "green";
            warns.textContent = " Congrats b-2 is allocated for you";
            warns.style.color = "green";
            coun = coun + 1;
        } else if (AGE < 60 && ma === true) {
            chair44.style.color = "green";
            warns.textContent = " Congrats a-4 is allocated for you";
            warns.style.color = "green";
            coun = coun + 1;
        }

    }

}

function febook() {
    fe = !fe;
    ma = false;
}

function mabook() {
    ma = !ma;
    fe = false;
}



function logoutthegame() {

    sub.classList.add("d-none");
    main.classList.remove("d-none");


}