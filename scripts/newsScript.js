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
        el.classList.remove("animationGlitch1")
        el.classList.remove("animationGlitch2")
        el.classList.remove("animationGlitch3")
        el.style.color = "white"
    })
}

function redirect(address){
    window.location.assign(address);
}

function addAnimation3(index){
    domEl = document.querySelectorAll(".textContent")
    let firstChild = domEl[index].childNodes[7]
    let secondChild = domEl[index].childNodes[9]
    let thirdChild = domEl[index].childNodes[11]

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

function removeAnimation3(){
    let domEl = document.querySelectorAll(".textAnimation");

    domEl.forEach(el => {
        el.classList.remove("animationGlitch1")
        el.classList.remove("animationGlitch2")
        el.classList.remove("animationGlitch3")
        el.style.color = "white"
    })
}