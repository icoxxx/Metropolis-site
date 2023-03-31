let videoToLoad = sessionStorage.getItem("videoName");


let info = [
    {
        id: "SILENT CITIZEN",
        url: "https://www.youtube.com/embed/nGueme7UPFI",
        firstTitle: "Metropolis Streaming 06",
        text: "Sixth instalment of the Metropolis Streaming series. <br> This time Metropolis is streaming from the Ancient Theatre in Plovdiv with Silent Citizen behind the decks. <br> <br> Play it Loud",
        secondTitle: "PREMIERED: 31.12.2022 – SATURDAY, 19:00",

    },

    {
        id: "DJ STEVEN",
        url: "https://www.youtube.com/embed/V3isIihmeLg",
        firstTitle: "Metropolis Streaming 02",
        text: "Second instalment of the Metropolis Streaming series. <br> This time Metropolis is streaming from the Ancient Theatre in Plovdiv with DJ Steven behind the decks. <br> <br> Play It Loud!",
        secondTitle: "PREMIERE: 23.09.2022 – FRIDAY, 19:00",
    },

    {
        id: "DJ SMURF",
        url: "https://www.youtube.com/embed/ryfqH7G0e2A",
        firstTitle: "Metropolis Streaming 05",
        text: "Fifth instalment of the Metropolis Streaming series. <br> This time Metropolis is streaming from National Stadium Vasil Levski, Sofia with DJ Smurf behind the decks. <br> <br> Play It Loud!",
        secondTitle: "PREMIERED: 26.12.2022 – MONDAY, 19:00",
    },

    {
        id: "ZIGGY",
        url: "https://www.youtube.com/embed/2aOrzPapOpc",
        firstTitle: "Metropolis Streaming 04",
        text: "Fourth instalment of the Metropolis Streaming series. <br> This time Metropolis is streaming from Port of Bourgas with Ziggy behind the decks. <br> <br> Play It Loud!",
        secondTitle: "PREMIERED: 26.12.2022 – MONDAY, 19:00",
    },

    {
        id: "SHADE",
        url: "https://www.youtube.com/embed/C5qdiffHDdc",
        firstTitle: "Metropolis Streaming 03",
        text: "Third instalment of the Metropolis Streaming series. <br> This time Metropolis is streaming from Vrachanski Balkan Nature Park with Shade behind the decks. <br> <br> Play It Loud!",
        secondTitle: "PREMIERED: 04.11.2022 – FRIDAY, 19:00",
    },

    {
        id: "JASSEN PETROV",
        url: "https://www.youtube.com/embed/Cl2lJNFC8VE",
        firstTitle: "Metropolis Streaming 01",
        text: "First instalment of the Metropolis Streaming series. <br> Eдна възможност да разгледате София така, както не сте я виждали никога. Със страхотен сундтрак при това поднесен от Ясен Петров. <br> <br> Play It Loud!",
        secondTitle: "PREMIERE: 16.09.2022 – FRIDAY, 19:00",
    },

    {
        id: "COCOON",
        url: "https://www.youtube.com/embed/iwKY7yF-S2A",
        firstTitle: "Cocoon Sofia 2022",
        text: "Aftermovie from Cocoon x Metropolis pres. Cocoon Sofia 2022 04.12.2022 – Hall 4, Inter Expo Center, Sofia, Bulgaria. <br> DJ’s: Sven Vath, Gregor Tresher – Live, Maurizio Shmitz, Metropolis DJ’s <br> <br> Produced by: Stratospheric",
        secondTitle: "Official AFTERMOVIE!",
    },

    {
        id: "SAM PAGANINI",
        url: "https://www.youtube.com/embed/OhZPa1zYsDo",
        firstTitle: "Metropolis представя: SAM PAGANINI",
        text: "Promo Video for Metropolis in Plovdiv with Sam Paganini, Layton Giordani and Metropolis DJs. <br> <br> Produced by: Stratospheric",
        secondTitle: "Official PROMO video!",
    },

    {
        id: "SONIC",
        url: "https://www.youtube.com/embed/aSH05W8CjQk",
        firstTitle: "Metropolis представя: SONIC VOYAGER",
        text: "Aftermovie from Metropolis in Sofia with Rodhad, Milton Bradley and Metropolis DJs. <br> <br> Produced by: Stratospheric",
        secondTitle: "Official AFTERMOVIE!",
    },
]

function dynamicLoad(){

    let video = document.getElementById("tube");
    let domElement = document.querySelectorAll(".podcastArticle")
    let domTitle = domElement[0].childNodes[1]
    let domText = domElement[0].childNodes[3]
    let domSecondTitle = domElement[0].childNodes[5]

    switch(videoToLoad){
        case "SILENT CITIZEN":
            video.src = info[0].url;
            domTitle.innerHTML = info[0].firstTitle;
            domText.innerHTML = info[0].text;
            domSecondTitle.innerHTML = info[0].secondTitle
            break;

        case "DJ STEVEN":
            video.src = info[1].url;
            domTitle.innerHTML = info[1].firstTitle;
            domText.innerHTML = info[1].text;
            domSecondTitle.innerHTML = info[1].secondTitle
            break;

        case "DJ SMURF":
            video.src = info[2].url;
            domTitle.innerHTML = info[2].firstTitle;
            domText.innerHTML = info[2].text;
            domSecondTitle.innerHTML = info[2].secondTitle
            break;
        
        case "ZIGGY":
            video.src = info[3].url;
            domTitle.innerHTML = info[3].firstTitle;
            domText.innerHTML = info[3].text;
            domSecondTitle.innerHTML = info[3].secondTitle
            break;

        case "SHADE":
            video.src = info[4].url;
            domTitle.innerHTML = info[4].firstTitle;
            domText.innerHTML = info[4].text;
            domSecondTitle.innerHTML = info[4].secondTitle
            break;

        case "JASSEN PETROV":
            video.src = info[5].url;
            domTitle.innerHTML = info[5].firstTitle;
            domText.innerHTML = info[5].text;
            domSecondTitle.innerHTML = info[5].secondTitle
            break;
        
        case "COCOON":
            video.src = info[6].url;
            domTitle.innerHTML = info[6].firstTitle;
            domText.innerHTML = info[6].text;
            domSecondTitle.innerHTML = info[6].secondTitle
            break;

        case "SAM PAGANINI":
            video.src = info[7].url;
            domTitle.innerHTML = info[7].firstTitle;
            domText.innerHTML = info[7].text;
            domSecondTitle.innerHTML = info[7].secondTitle
            break;

        case "SONIC":
            video.src = info[8].url;
            domTitle.innerHTML = info[8].firstTitle;
            domText.innerHTML = info[8].text;
            domSecondTitle.innerHTML = info[8].secondTitle
            break;
    }
}

dynamicLoad();






function hamburger(){
    let bars = document.querySelectorAll(".hamBars");
    let hamButton = document.querySelectorAll(".hambButton");
    let hiddenMenu = document.querySelectorAll(".menu")

    bars.forEach(el => {
        el.classList.toggle("active");
    })

    hamButton.forEach(el => {
        el.classList.toggle("hambButton-active");
    })

    hiddenMenu.forEach(el =>{
        el.classList.toggle("menu-active");
    })
}

function redirect(address){
    window.location.assign(address);
}

function addAnimationButton(index, className, firstChildIndex, secondChildIndex, thirdChildIndex){
    domEl = document.querySelectorAll(className)
    let firstChild = domEl[index].childNodes[firstChildIndex]
    let secondChild = domEl[index].childNodes[secondChildIndex]
    let thirdChild = domEl[index].childNodes[thirdChildIndex]

    for(let i = 0; i < domEl[index].childNodes.length; i++){
        firstChild.classList.add("animationGlitch1")
        secondChild.classList.add("animationGlitch2")
        thirdChild.classList.add("animationGlitch3")

        secondChild.classList.add("animationGlitch1")
        thirdChild.classList.add("animationGlitch1")
        firstChild.style.color = "black"
        secondChild.style.color = "#67f3da"
        thirdChild.style.color = "rgb(227, 0, 26)"
    }
}

function removeAnimation2(className){
    let domEl = document.querySelectorAll(className);

    domEl.forEach(el => {
        el.classList.remove("animationGlitch1");
        el.classList.remove("animationGlitch2");
        el.classList.remove("animationGlitch3");
        el.style.color = "white";
    })
}


