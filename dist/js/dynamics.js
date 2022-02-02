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
let comediansNumbertoShow = 2;
let nextStartIdx = 0;

// Takes number of comedians to show, and where to start in list and adds card ?// markup for each comedian in the list
function showComedians(howMany=comedians.length, startFrom=0) {
    console.log('howmany: ', howMany, ': startfrom ', startFrom);
    for(let i=startFrom; i<howMany; i+=1) {
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
    comediansNumbertoShow = comedians.length - howMany;
    nextStartIdx = howMany

}

// test width of window and show all comedians if widht >= 768px otherwise load only two comedians
function displayAllComedians() {
    if(window.innerWidth >= 768) {
        showComedians(undefined, 0);
    } else {
        showComedians(comediansNumbertoShow, nextStartIdx);
    }
}

displayAllComedians();



// For when the 'MORE' button is clicked
let moreBtn = document.querySelector('#load-more-btn');
let lessBtn = document.querySelector('#load-less-btn');

moreBtn.addEventListener('click', ()=>{
    console.log('INSIDE.............');
    showComedians(undefined, nextStartIdx);
    moreBtn.classList.remove('show-inline-block')
    moreBtn.classList.add('hide-display');
    lessBtn.classList.remove('hide-display');
    lessBtn.classList.add('show-inline-block');
});

lessBtn.addEventListener('click', ()=>{
    comediansCards.innerHTML = '';
    comediansNumbertoShow = 2;
    nextStartIdx = 0;
    showComedians(comediansNumbertoShow, nextStartIdx);
    moreBtn.classList.remove('hide-display');
    moreBtn.classList.add('show-inline-block');
    lessBtn.classList.remove('show-inline-block');
    lessBtn.classList.add('hide-display');

})


