let currentAudio = null;

function playAudio(name){

    if(currentAudio){

        currentAudio.pause();
        currentAudio.currentTime = 0;

    }

    currentAudio = new Audio("audio/" + name + ".mp3");

    currentAudio.play();

}