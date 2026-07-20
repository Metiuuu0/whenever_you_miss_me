const supabaseClient = window.supabase.createClient(
    "https://gakjgnvourwxygzfaxvd.supabase.co",
    "sb_publishable_KQogLY22alM-EzbHkvDv2A_NcLECUvJ"
);

async function login(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });


    if(error){

        document.getElementById("login-error").innerHTML =
        "Wrong email or password ❤️";

        return;
    }


    // Hide login
    document.getElementById("login-container")
        .classList.add("hidden");


    // Show app
    document.getElementById("app")
        .classList.remove("hidden");

}

const player = document.getElementById("player");
const playerContainer = document.getElementById("player-container");

function playAudio(name){

    console.log("Playing:", name);

    player.src = `${name}.m4a`;

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
