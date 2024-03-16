let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrl = document.getElementById("ctrl")

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause() {
    if (ctrl.classList.contains("fa-play")) {
        /*alert("play")*/
        song.play();
        ctrl.classList.remove("fa-play");
        ctrl.classList.add("fa-pause");


    }

    else {
        /*alert("pause") */
        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");


    }
}
if (song.play())
 {
    setInterval(() => 
    {
        progress.value = song.currentTime;
    }, 500);
    progress.onchange = function () 
    {
        song.play();
        song.currentTime = progress.value;
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");

    }
} 
