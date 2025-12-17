function getSong() {
    return document.getElementById("songName").value;
}

function addSong() {
    let song = getSong();
    if (song === "") {
        alert("Enter song name first");
        return;
    }
    alert("1. Add Song\nSong: " + song + "\n(Handled by C backend)");
}

function deleteSong() {
    let song = getSong();
    if (song === "") {
        alert("Enter song name first");
        return;
    }
    alert("2. Delete Song\nSong: " + song + "\n(Handled by C backend)");
}

function playCurrent() {
    alert("3. Play Current Song\n(Handled by C backend)");
}

function playNext() {
    alert("4. Play Next Song\n(Handled by C backend)");
}

function playPrevious() {
    alert("5. Play Previous Song\n(Handled by C backend)");
}

function searchSong() {
    let song = getSong();
    if (song === "") {
        alert("Enter song name first");
        return;
    }
    alert("6. Search Song\nSong: " + song + "\n(Handled by C backend)");
}

function displayPlaylist() {
    alert("7. Display Playlist\n(Handled by C backend)");
}

function exitProgram() {
    alert("8. Exit\nClose the application");
}
