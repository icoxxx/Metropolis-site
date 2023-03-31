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

function news(){
    let newsButton = document.querySelectorAll(".allNewsContainer")

    newsButton.forEach(() => {
        window.location.assign("news.html")
    })
}


/* There are several ways to make the functions which add animations to elements.

I will show some of them down below. Ofcourse the most effective is the one which can be 
preused for every single element.
*/

function addAnimation(){
    let domEl = document.querySelectorAll(".allNews")

    for(let i = 0; i < domEl.length; i++){
        domEl[0].classList.add("animationGlitch1")
        domEl[1].classList.add("animationGlitch2")
        domEl[2].classList.add("animationGlitch3")

        domEl[1].classList.add("animationGlitch1")
        domEl[2].classList.add("animationGlitch1")
        domEl[0].style.color = "black"
        domEl[1].style.color = "#67f3da"
        domEl[2].style.color = "#f16f6f"
    }
}

function removeAnimation(){
    let domEl = document.querySelectorAll(".allNews");

    domEl.forEach(el => {
        el.classList.remove("animationGlitch1")
        el.classList.remove("animationGlitch2")
        el.classList.remove("animationGlitch3")
        el.style.color = "white"
    })
}

function addAnimation2(e){
    //let domEl = document.querySelectorAll(".seeMore")
    let domEl = e.target;
    let first = domEl.childNodes[1]
    let second = domEl.childNodes[3]
    let third = domEl.childNodes[5]

    for(let i = 0; i < domEl.childNodes.length; i++){
        first.classList.add("animationGlitch1")
        second.classList.add("animationGlitch2")
        third.classList.add("animationGlitch3")

        second.classList.add("animationGlitch1")
        third.classList.add("animationGlitch1")
        first.style.color = "black"
        second.style.color = "#67f3da"
        third.style.color = "rgb(227, 0, 26)"
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


function redirect(address){
        window.location.assign(address);
}

function addAnimation3(index){
    domEl = document.querySelectorAll(".textContent");
    let firstChild = domEl[index].childNodes[7];
    let secondChild = domEl[index].childNodes[9];
    let thirdChild = domEl[index].childNodes[11];

    for(let i = 0; i < domEl[index].childNodes.length; i++){
        firstChild.classList.add("animationGlitch1");
        secondChild.classList.add("animationGlitch2");
        thirdChild.classList.add("animationGlitch3");

        secondChild.classList.add("animationGlitch1");
        thirdChild.classList.add("animationGlitch1");
        firstChild.style.color = "black";
        secondChild.style.color = "#67f3da";
        thirdChild.style.color = "rgb(227, 0, 26)";
    }
}

function removeAnimation3(){
    let domEl = document.querySelectorAll(".textAnimation");

    domEl.forEach(el => {
        el.classList.remove("animationGlitch1")
        el.classList.remove("animationGlitch2")
        el.classList.remove("animationGlitch3")
        el.style.color = "white"
    })
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

function fbEvent(){
    let button = document.querySelectorAll(".ticketsContainer")

    button.forEach(() => {
        window.open("https://www.facebook.com/events/755319146289491", "_blank")
    })
}

function radio(){
    let button = document.querySelectorAll(".radioButtonContainer")

    button.forEach(() => {
        window.open("https://coda.metropolis.bg/", "_blank")
    })

}


let artists = [
    {
        id: 1,
        name: "Steven",
        url: "images/stevenPodcast.jpeg"
    },

    {
        id: 2,
        name: "Kaloo",
        url: "images/kalooPodcast.jpeg"
    },

    {
        id: 3, 
        name: "Doncho",
        url: "images/donchoPodcast.jpeg"
    },

    {
        id:4,
        name: "Smurf",
        url: "images/podcastSmurf.jpeg"
    },

    {
        id:5,
        name: "Jassen",
        url: "images/jassenPodcast.jpeg"
    },

    {
        id:6,
        name: "Lidiya",
        url: "images/lidiyaPodcast.jpeg"
    },

]


let artistsCopy = artists.slice(0);

function reArrange(arr){

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
}
reArrange(artistsCopy);


let artistToLoad = artistsCopy[0].name;
sessionStorage.setItem("artist", artistToLoad);


let videos = [
    {
        djName: "SILENT CITIZEN",
        streamingTitle: "METROPOLIS STREAMING 06",
        url: "images/silentCitizen.jpeg"
    },

    {
        djName: "DJ SMURF",
        streamingTitle: "METROPOLIS STREAMING 05",
        url: "images/smurfVideo.jpeg"
    },

    {
        djName: "ZIGGY",
        streamingTitle: "METROPOLIS STREAMING 04",
        url: "images/ziggyVideo.jpeg"
    },

    {
        djName: "SHADE",
        streamingTitle: "METROPOLIS STREAMING 03",
        url: "images/shadeVideo.jpeg"
    },

    {
        djName: "DJ STEVEN",
        streamingTitle: "METROPOLIS STREAMING 02",
        url: "images/stevenVideo.jpeg"
    },

    {
        djName: "JASSEN PETROV",
        streamingTitle: "METROPOLIS STREAMING 01",
        url: "images/jassenVideo.jpeg"
    },
]

let videosCopy = videos.slice(0);
reArrange(videosCopy);



let videoToLoad = videosCopy[0].djName;
sessionStorage.setItem("videoName", videoToLoad);



let artistsPage = [
    {
        djName: "STEVEN",
        title: "DJ STEVEN/STEVO KURT",
        url: "images/dj-steven-1.jpeg"
    },

    {
        djName: "ZIMONE",
        title: "ZIMONE/UNANIMITY",
        url: "images/zimone-1.jpeg"
    },

    {
        djName: "VER:TEX",
        title: "VER:TEX",
        url: "images/VER-TEX-1.jpeg"
    },

    {
        djName: "JASSEN PETROV",
        title: "JASSEN PETROV",
        url: "images/jassen-petrov-1.jpeg"
    },

    {
        djName: "IKKI-OTTO",
        title: "IKKI-OTTO",
        url: "images/Ikki-Otto-1.jpeg"
    },

    {
        djName: "VORO",
        title: "VORO",
        url: "images/Voro-1.jpeg"
    },

    {
        djName: "AUR ROFAE",
        title: "AUR ROFAE",
        url: "images/Aur-Rofae-1.jpeg"
    },

    {
        djName: "ZIGGY",
        title: "ZIGGY",
        url: "images/ziggy-1.jpeg"
    },

    {
        djName: "MISS LIDIYA",
        title: "MISS LIDIYA",
        url: "images/miss-lidiya.jpeg"
    },

    {
        djName: "DJ SMURF",
        title: "DJ SMURF",
        url: "images/dj-smurf-1.jpeg"
    },
]

let artistsPageCopy = artistsPage.slice(0);
reArrange(artistsPageCopy);



function changeCover(){
    let domElPodcast = document.getElementById("podcastCover");
    domElPodcast.src = artistsCopy[0].url;

    let domElVideoImg = document.getElementById("videoImg");
    domElVideoImg.src = videosCopy[0].url;

    let domElArtistImg = document.querySelectorAll(".djImg");
for(let i = 0; i <= domElArtistImg.length; i++){
    domElArtistImg[0].src = artistsPageCopy[1].url;
    domElArtistImg[1].src = artistsPageCopy[3].url;
    domElArtistImg[2].src = artistsPageCopy[5].url;
}

   let domElDjName = document.querySelectorAll(".djName");
   for(let i = 0; i <= domElArtistImg.length; i++){
    domElDjName[0].innerHTML = artistsPageCopy[1].title;
    domElDjName[1].innerHTML = artistsPageCopy[3].title;
    domElDjName[2].innerHTML = artistsPageCopy[5].title;
}

}
changeCover();


function allArtists(){
    let button = document.querySelectorAll(".allArtistsButton");

    button.forEach(() => {
        window.location.assign("allArtists.html");
    })

}


