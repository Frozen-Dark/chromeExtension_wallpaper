document.addEventListener("DOMContentLoaded", wallpaper);
function wallpaper() {
    document.body.style.background = 'transparent'

    let hide_div = document.createElement('div'),
        maskButton = document.createElement('div'),
        firstDiv = document.createElement('div'),
        secondDiv = document.createElement('div'),
        link = window.location.href.substring(0, 17)

        hide_div.id = "maskBackground"
        hide_div.style.opacity = "0"
        maskButton.id = "maskButton"
        maskButton.innerHTML = '<div id="IdClose_button" class="Close_button"></div> ' +
            '<style> #maskButton{width: 10%; height: 40%; position: fixed; z-index: 2; cursor: pointer; top: 65px;right: 15px; border-radius: 10px; transition: 0.2s;}' +
            '#maskButton:hover {background-color: rgba(24, 24, 24, .5); }' +
            '.Close_button {z-index: 1; border-radius: 5px; width: 18px; height: 4px; background-color: #303030; margin: 8px; float: right; transition: 0.2s;}' +
            '.Close_button:hover {background-color: #606060;}' +
            '#one, #two{width: 100%; height: 100%; background-size: cover; background-repeat: no-repeat; background-position: 0 0; position: fixed; transition: 0.3s;}' +
            '#maskBackground{width: 100%; height: 100%; position: fixed; transition: 0.1s; background-color: rgb(12, 12, 12); opacity: 0;} </style>';
        firstDiv.id = "one"
        secondDiv.id = "two"

    document.body.prepend(hide_div)
    document.body.prepend(maskButton)
    document.body.prepend(firstDiv)
    document.body.prepend(secondDiv)

    maskButton.onclick = function () {
        maskBackground.style.opacity === "0"?
            maskBackground.style.opacity = "1"
        :
            maskBackground.style.opacity = "0"
    }

    document.querySelector("#IdClose_button").onmouseover = function() {
        if ((document.querySelector("#maskButton").style.length) === 0 ){
            document.querySelector("#maskButton").style = "height: 5vh"
        }
        if ((document.querySelector("#maskButton").style.cssText) === 'height: 5vh;' ){
            document.querySelector("#maskButton").style = "height: 40%"
        }
        else {
            document.querySelector("#maskButton").style = "height: 5vh"
        }
    }

    if(link === 'https://vk.com/im'){
        document.querySelector("#content > div > div.im-right-menu").style = "width: 241px;"
    }

    viewImages({
    img : [
       //link images // сюда надо вставить сылки на фото.
        "https://image.jpg?size=1920x1080&quality=96&type=album",
        "https://image.jpg?size=1920x1080&quality=96&type=album",
        "https://image.jpg?size=1920x1080&quality=96&type=album",
        "https://image.jpg?size=1920x1080&quality=96&type=album",
        "https://image.jpg?size=1920x1080&quality=96&type=album"
    ],
    speed : 8 });

    function viewImages(props){
        let i = 0,
            one = document.getElementById("one"),
            two = document.getElementById("two"),
            timeout, speed = props.speed * 1000,
            changeSrc = props.speed * 1000 + 900,
            elems = [two, one];
        one.style.backgroundImage = `url(${props.img[0]})`
        two.style.backgroundImage = `url(${props.img[1]})`

        changeImg();
        function changeImg(){
            elems.reverse()
            elems[1].style.opacity = "0"
            elems[0].style.opacity = "1"
            elems[1].style.transform = "scale(1.4)"
            elems[0].style.transform = "scale(1)"

            setTimeout(()=> elems[1].style.backgroundImage = `url(${props.img[i]})`, changeSrc)
            i === props.img.length - 1 ? i = 0 : i++;
            timeout = setTimeout(changeImg, speed)
        }
    }
}

