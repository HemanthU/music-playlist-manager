function getSong() {
    return document.getElementById("songName").value;
}

function addSong() {
    let song = getSong();
    if (song === "") {
        alert("Enter song name");
        return;
    }
    alert("1. Add Song\nSong: " + song + "\n(C Backend)");
}

function deleteSong() {
    let song = getSong();
    if (song === "") {
        alert("Enter song name");
        return;
    }
    alert("2. Delete Song\nSong: " + song + "\n(C Backend)");
}

function playCurrent() {
    alert("3. Play Current Song\n(C Backend)");
}

function playNext() {
    alert("4. Play Next Song\n(C Backend)");
}

function playPrevious() {
    alert("5. Play Previous Song\n(C Backend)");
}

function searchSong() {
    let song = getSong();
    if (song === "") {
        alert("Enter song name");
        return;
    }
    alert("6. Search Song\nSong: " + song + "\n(C Backend)");
}

function displayPlaylist() {
    alert("7. Display Playlist\n(C Backend)");
}
