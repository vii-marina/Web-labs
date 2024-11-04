let userName = "";

const btnDrink = document.getElementById("btn-drink");
const btnSnacks = document.getElementById("btn-snacks");
const btnDessert = document.getElementById("btn-dessert");

btnDrink.addEventListener("click", showDrinks);
btnSnacks.addEventListener("click", showSnacks);
btnDessert.addEventListener("click", showDesserts);

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("input", updateName);

function showDrinks() {
    document.getElementById("menu").innerText = userName + ", ось наші напої: Кава, Чай, Сік.";
}

function showSnacks() {
    document.getElementById("menu").innerText = userName + ", ось наші закуски: Бутерброди, Чіпси, Горіхи.";
}

function showDesserts() {
    document.getElementById("menu").innerText = userName + ", ось наші десерти: Торт, Печиво, Пиріг.";
}

function updateName() {
    userName = document.getElementById("nameInput").value;
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#FFD700";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "";
    });
});
