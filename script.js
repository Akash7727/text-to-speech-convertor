const textInput = document.getElementById('text-input');
const outputDiv = document.getElementById('output');
let synth = window.speechSynthesis;
let utterance;

function convertTextToSpeech() {
    const textToSpeak = textInput.value;

    if (textToSpeak === '') {
        alert('Please enter text to convert.');
        return;
    }

    stopTextToSpeech(); 

    utterance = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterance);

    utterance.onend = () => {
        console.log('Speech ended');
    };

    outputDiv.textContent = `Speaking: ${textToSpeak}`;
}

function stopTextToSpeech() {
    if (synth.speaking) {
        synth.cancel();
        outputDiv.textContent = 'Speech stopped';
    }
}
