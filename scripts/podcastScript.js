let artistToLoad = sessionStorage.getItem("artist");

let info = [
    {
        soundcloud: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1036290277&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        podcastName: "Metropolis Podcast Series 020: DJ Steven",
        podcastInfo: "DJ Steven comes with a new mix for Metropolis Podcast Series. This time with future classics only. Electro-ish in the beginning with a Stevo Kurt soon-to-be released track for Mekanika Recordings, driving in the middle and hypnotic in the end – you got everything you need to get you dancing.",

    },

    {
        soundcloud: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1032434371&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        podcastName: "Metropolis Podcast Series 019: Kaloo",
        podcastInfo: "Kaloos subjects of interest are very diverse from cutting edge design concepts to constructing deep emotional sets for interesting crowds from Horizon Festival to Tell Me club in Sofia to Sofia Pride Parade.",
    },

    {
        soundcloud: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/994853704&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        podcastName: "Metropolis Podcast Series 012: DJ Doncho",
        podcastInfo: "Without any doubt, Doncho is the most talented Bulgarian house dj of his generation. He is real virtuoso behind the decks and will take you to a deep dive into modern tribal house music.",
    },

    {
        soundcloud: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1027813981&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        podcastName: "Metropolis Podcast Series 018: DJ Smurf",
        podcastInfo: "DJ Smurf supplies his second mix for the Metropolis Podcast Series. Raw, uncompromising and powerful techno at its best. DJ Smurf demands from you only one thing: play it LOUD!",
    },

    {
        soundcloud: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1022066074&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        podcastName: "Metropolis Podcast Series 017: Jassen Petrov",
        podcastInfo: "Deep and painful journey into the Covid dominated electronic world. This is what lies ahead if you choose to listen to Jassen Petrov’s second podcast for Metropolis Podcast Series. Is there any hope? Check it out for yourself and do not forget to play it loud.",
    },

    {
        soundcloud: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1012297393&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        podcastName: "Metropolis Podcast Series 015: Miss Lidiya",
        podcastInfo: "In a pandemic no-gigs time, what do you do? Dive deep into music to find hidden gems. This is what happens here with the second podcast instalment from Miss Lidiya for the Metropolis Podcast Series. Play it loud, please!",
    },
]


function dynamicLoad(){

    let soundCloudFrame = document.getElementById("soundCloud");

    let text = document.querySelectorAll(".podcastArticle");
    let articleName = text[0].childNodes[1];
    let articleText = text[0].childNodes[5];

    switch(artistToLoad){
         case "Steven": 
            soundCloudFrame.src = info[0].soundcloud;
            articleName.innerHTML = info[0].podcastName;
            articleText.innerHTML = info[0].podcastInfo;

            break;

         case "Kaloo":
            soundCloudFrame.src = info[1].soundcloud;
            articleName.innerHTML = info[1].podcastName;
            articleText.innerHTML = info[1].podcastInfo;
            break;

         case "Doncho":
             soundCloudFrame.src = info[2].soundcloud;
             articleName.innerHTML = info[2].podcastName;
             articleText.innerHTML = info[2].podcastInfo;
             break;

         case "Smurf":
                soundCloudFrame.src = info[3].soundcloud;
                articleName.innerHTML = info[3].podcastName;
                articleText.innerHTML = info[3].podcastInfo;
                break;

         case "Jassen":
            soundCloudFrame.src = info[4].soundcloud;
            articleName.innerHTML = info[4].podcastName;
            articleText.innerHTML = info[4].podcastInfo;
            break;

         case "Lidiya":
                soundCloudFrame.src = info[5].soundcloud;
                articleName.innerHTML = info[5].podcastName;
                articleText.innerHTML = info[5].podcastInfo;
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

