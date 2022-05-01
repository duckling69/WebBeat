let beats = {
    "65": {
        beat: new Beat("./assets/looperman-l-1581687-0133440-2nick8-beatbox-music-passion-beat.wav"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/looperman-l-2353350-0136716-autumn-traping-beat.wav"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/looperman-l-3162182-0283247-coast-classic-part-8-beatbox-loop-85.wav"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/looperman-l-0559004-0187853-fresh-mouf-3.wav"),
        button: new Button("#FF00FF", 70)
    },
    "71": {
        beat: new Beat("./assets/looperman-l-1118603-0068730-splint5ider-jungle-option-180.wav"),
        button: new Button("#FF00FF", 71)
    },
    "72": {
        beat: new Beat("./assets/looperman-l-1753301-0092078-vocalaccident-vocal-beatbox-aha-a.wav"),
        button: new Button("#FF00FF", 72)
    },
    "74": {
        beat: new Beat("./assets/looperman-l-1929922-0109609-alabafruit-hip-hop-beatbox-95-bpm.wav"),
        button: new Button("#FF00FF", 74)
    },
    "75": {
        beat: new Beat("./assets/Madcon+–+Don’t+Worry+feat+Ray+Dalton+Official+Video].mp3"),
        button: new Button("#FFFFFF", 75)
    },
    "76": {
        beat: new Beat("./assets/Aaron-Smith-Dancin-Krono-Remix-vmlboxcom-1.mp3"),
        button: new Button("#FFFFFF", 76)
    }
}

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
    var code = event.keyCode;
    if(code in beats){
        beats[code].beat.play();
        beats[code].button.select();
    }
}

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
document.addEventListener('keydown', triggerBeat);
