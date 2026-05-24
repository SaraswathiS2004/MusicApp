
function findMusic() {

    let name = document.getElementById("name").value;
    let mood = document.getElementById("moodSelect").value;
    let artistName = document.getElementById("artist").value;

    let value = {
        "TYPE": 'SET_COOKIES',
        "NAME": name,
        "MOOD": mood,
        "ARTIST": artistName

    }
    const result = fetch("http://localhost:8080/music/setCookies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    }
    )
        .then(response => {
            return response.json()
        })
        .then(data =>
            console.log(data)
        )
        .catch(Error => {
            console.log(Error)
        });

    displayMusic(name, mood, artistName);

}

function checkMusic() {
    let cookies = document.cookie;
    let name;
    let mood;
    let artistName;

    if (cookies != null) {

        let cookieArray = cookies.split(";");
        for (let c of cookieArray) {
            let cookie = c.trim();

            if (cookie.startsWith("User_name=")) {
                name = cookie.substring("User_name=".length);

            }

            else if (cookie.startsWith("Mood=")) {
                mood = cookie.substring("Mood=".length);
            }
            else if (cookie.startsWith("Artist=")) {
                artistName = cookie.substring("Artist=".length);
            }
        }
    }
    if (name != null && mood != null && artistName != null) {
        displayMusic(name, mood, artistName);
        console.log("name : " + name + " Mood : " + mood + " Artist : " + artistName);
    }
}

function displayMusic(name, mood, artist) {


     document.getElementById("box2").style.display = "block";
        document.getElementById("user_name").innerText = "Hello "+ name + " 👋";
        document.getElementById("mood").innerText =" Your mood is "+mood;
        document.getElementById("artistName").innerText = "By "+ artist;

        let song = "";

        switch (artist) {


            case "Aniruth":
                if (mood === "Happy") {
                    song = "Vaathi Coming";
                }
                else if (mood === "Relax") {
                    song = "Kannazhaga";
                }
                else if (mood === "Sad") {
                    song = "Why This Kolaveri";
                }
                else {
                    song = "Arabic Kuthu";
                }
                break;
            case "A.R.Rahman":

                if (mood === "Happy") {
                    song = "Jai Ho";
                }
                else if (mood === "Relax") {
                    song = "Munbe Vaa";
                }
                else if (mood === "Sad") {
                    song = "New York Nagaram";
                }
                else {
                    song = "Mental Manadhil";
                }
                break;
            case "hip hop Thamizha":
                if (mood === "Happy") {
                    song = "Vaadi Pulla Vaadi";
                }
                else if (mood === "Relax") {
                    song = "Paisa Note";
                }
                else if (mood === "Sad") {
                    song = "Kannala Kannala";
                }
                else {
                    song = "Club le Mabbu le";
                }

                break;
            default:
                song = "jai ho";
                break;
        }

        document.getElementById("songName").innerText = song;
}