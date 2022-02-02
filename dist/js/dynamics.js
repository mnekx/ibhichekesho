const comedians = [
    {
        name: 'MC Kisoli',
        biography: "Bachelor's Degree, Government Worker, Lecturer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores error blanditiis necessitatibus soluta. Eveniet, quae.",
        imgSrc: "./images/mtubaki5.jpg",
        imgAlt: "Mtubaki1"
    },
    {
        name: 'Joe Master',
        biography: "Bachelor's Degree, Government Worker, Lecturer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores error blanditiis necessitatibus soluta. Eveniet, quae.",
        imgSrc: "./images/mtubaki2.jpg",
        imgAlt: "Mtubaki2"
    },
    {
        name: 'Mtoto wa Dada',
        biography: "Business Owner",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores error blanditiis necessitatibus soluta. Eveniet, quae.",
        imgSrc: "./images/mtubaki4.jpg",
        imgAlt: "Mtubaki3"
    },
    {
        name: 'Dogo Pepe',
        biography: "Bachelor's Degree, Private Sector Worker",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores error blanditiis necessitatibus soluta. Eveniet, quae.",
        imgSrc: "./images/mtubaki1.jpg",
        imgAlt: "Mtubaki4"
    },
    {
        name: 'Kipatoshi',
        biography: "Bachelor's Degree, Government Worker, Lecturer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores error blanditiis necessitatibus soluta. Eveniet, quae.",
        imgSrc: "./images/mtubaki3.jpg",
        imgAlt: "Mtubaki5"
    }
]

let comediansCards = document.querySelector('#comedians-cards');

for(let i=0; i<comedians.length; i+=1) {
    comedian = comedians[i];
    let card = document.createElement('section');
    card.classList.add('card');

    // The image element
    let pic = document.createElement('img');
    pic.src = comedian.imgSrc;
    pic.alt = comedian.imgAlt;
    card.appendChild(pic);

    // the div element
    let insideDiv = document.createElement('div');

    let name = document.createElement('h3');
    name.innerText = comedian.name;
    insideDiv.appendChild(name);

    let biography = document.createElement('h4');
    biography.innerText = comedian.biography;
    insideDiv.appendChild(biography);

    let description = document.createElement('p');
    description.innerText = comedian.description;
    insideDiv.appendChild(description);

    card.appendChild(insideDiv);

    comediansCards.appendChild(card);
}