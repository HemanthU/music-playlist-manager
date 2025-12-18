function getSong() {
    return document.getElementById("songName").value;
}

function addSong() {
    let song = getSong();
    if (song === "") return alert("Enter song name");
    alert("Add Song: " + song + "\n(C Backend)");
}

function deleteSong() {
    let song = getSong();
    if (song === "") return alert("Enter song name");
    alert("Delete Song: " + song + "\n(C Backend)");
}

function playCurrent() {
    alert("Play Current Song\n(C Backend)");
}

function playNext() {
    alert("Play Next Song\n(C Backend)");
}

function playPrevious() {
    alert("Play Previous Song\n(C Backend)");
}

function searchSong() {
    let song = getSong();
    if (song === "") return alert("Enter song name");
    alert("Search Song: " + song + "\n(C Backend)");
}

function displayPlaylist() {
    alert("Display Playlist\n(C Backend)");
}
 
