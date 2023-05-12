const reviews = [
    {
        id: 1,
        name: "Marchesa Smith",
        job: "Queen",
        img: "./Marchesa.jpg",
        text: "Marchesa has raven-black hair, held up with ornate pins, and usually wears the fashion of the older women in Paliano. On each finger, she has a ring, each expensive and ornate, and each housing a different poison. She employs zombies to guard her safety. Marchesa's mansion towers over the palatial homes of her neighbors, each extra story a mark of her success.",
    },
    {
        id: 2,
        name: "Kenrith Jones",
        job: "King",
        img: "./Kenrith.jpg",
        text: "A modest gold circlet usually crowned his head, hard to see against his golden-blond hair. He was always smiling and was known for his courage, skill, and attractive laugh. He was renowned as a canny fighter, only bested by his wife Linden. Many have noted his sixth sense regarding danger and his peculiarly keen ability to react at speed to changing surroundings.",
    },
    {
        id: 3,
        name: "Susan White",
        job: "Knight",
        img: "./Susan.jpg",
        text: "During the initial phase of the Phyrexian takeover of the plane, Susan and her army were sent on a mission to assist an Auriok and leonin trade settlement called Ten Shields. On her way, she encountered a mutated undead leonin leading her to think about the increasing spread of the Mephidross. When she arrived in Ten Shields, she was puzzled to find the settlement completely deserted. After further investigation though, she and her party realized that they are not alone.",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load inital item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// show person based on item
function showPerson (person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson(currentItem);
});