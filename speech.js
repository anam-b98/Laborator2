var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.continuous = true;
recognition.interimResults = false;
var recognition_started = false;

document.getElementById("startBtn").addEventListener("click", startRecognition);
document.getElementById("stopBtn").addEventListener("click", stopRecognition);

function startRecognition() {
    if (!recognition_started) {
        recognition.start();
        recognition_started = true;
        document.getElementById("text").innerHTML += "Microfonul este pornit.<br>";
    }
}

function stopRecognition() {
    if (recognition_started) {
        recognition.stop();
        recognition_started = false;
        document.getElementById("text").innerHTML += "Microfonul a fost oprit.<br>";
    }
}

recognition.onend = function() {
    recognition_started = false;
};

recognition.onresult = function(event) {
    for (var i = event.resultIndex; i < event.results.length; i++) {
        document.getElementById("text").innerHTML += "Ai rostit cuvantul: " +
            event.results[i][0].transcript + ", acuratete: " + event.results[i][0].confidence + "<br>";
    }
};
