function getAge() {
    let textOutput = "";
    const today = new Date();


    const birthday = new Date("2022-08-14T14:21:00Z")
        
    let timeDiff = (today - birthday) * 0.001;
        
    let weeks = Math.floor(timeDiff / 60 / 60 / 24 / 7);
    let days = Math.floor((timeDiff / 60 / 60 / 24) - weeks * 7);
    let hours = Math.floor((timeDiff / 60 / 60) - (weeks * 7 * 24) - (days * 24));
    let minutes = Math.floor((timeDiff / 60) - (weeks * 7 * 24 * 60) - (days * 24 * 60) - (hours * 60))
    let seconds = Math.floor(timeDiff - (weeks * 7 * 24 * 60 * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60) - minutes * 60);

    textOutput  = weeks + " weeks\n";
    textOutput = textOutput + days + " days\n";
    textOutput = textOutput + hours + " hours\n";
    textOutput = textOutput + minutes + " minutes\n";
    textOutput = textOutput + seconds + " seconds\n";

    document.getElementById("age").innerText = textOutput;
    let t = setTimeout(function(){ getAge() }, 10);
}

getAge();
