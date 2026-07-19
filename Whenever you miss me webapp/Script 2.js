const player = document.getElementById("player");
const playerContainer = document.getElementById("player-container");

function playAudio(name){

    console.log("Playing:", name);

    player.src = `audio/${name}.m4a`;

    playerContainer.classList.remove("hidden");
    playerContainer.classList.add("show");

    console.log(playerContainer.className);

    player.play();
}


player.addEventListener("ended", () => {

    player.currentTime = 0;
    playerContainer.classList.remove("show");
    playerContainer.classList.add("hidden");

});