function searchMovie() {
    let movieName = document.getElementById("movieInput").value;
    if (movieName.trim() !== "") {
        let searchUrl = `https://www.google.com/search?q=%22index+of%22+%22.mkv%22+OR+%22.mov%22+OR+%22.zip%22+OR+%22.avi%22+OR+%22.mp4%22+%22${encodeURIComponent(movieName)}%22;
        window.open(searchUrl, "_blank");
    } else {
        alert("Please enter a movie name.");
    }
}
