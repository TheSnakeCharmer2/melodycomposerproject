/**
* Created by devonmurray on 12/12/14.
*/

function draw() {
    console.log("foo");
    var canvas = document.getElementById("staff");
    var renderer = new Vex.Flow.Renderer(canvas,
        Vex.Flow.Renderer.Backends.CANVAS);

    ctx = renderer.getContext();
    stave = new Vex.Flow.Stave(20, 10, 500);
    stave.addClef("treble").setContext(ctx).draw();
}


function addC4note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonCq4() {
    var c = document.getElementById("buttonCq4");
    c.addEventListener("click", addC4note);
}

function addD4note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

function enable_buttonDq4() {
    var d = document.getElementById("buttonDq4");
    d.addEventListener("click", addD4note);
}

function addE4note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["e/4"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

function enable_buttonEq4() {
    var e = document.getElementById("buttonEq4");
    e.addEventListener("click", addE4note);
}

function addF4note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

function enable_buttonFq4() {
    var f = document.getElementById("buttonFq4");
    f.addEventListener("click", addF4note);
}

function addG4note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["g/4"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

function enable_buttonGq4() {
    var g = document.getElementById("buttonGq4");
    g.addEventListener("click", addG4note);
}

function addA4note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonAq4() {
    var a = document.getElementById("buttonAq4");
    a.addEventListener("click", addA4note);
}

function addB4note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonBq4() {
    var b = document.getElementById("buttonBq4");
    b.addEventListener("click", addB4note);
}

function addC5note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonCq5() {
    var c5 = document.getElementById("buttonCq5");
    c5.addEventListener("click", addC5note);
}

function addD5note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonDq5() {
    var d5 = document.getElementById("buttonDq5");
    d5.addEventListener("click", addD5note);
}

function addE5note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["e/5"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonEq5() {
    var e5 = document.getElementById("buttonEq5");
    e5.addEventListener("click", addE5note);
}

function addF5note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonFq5() {
    var f5 = document.getElementById("buttonFq5");
    f5.addEventListener("click", addF5note);
}

function addG5note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["g/5"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonGq5() {
    var g5 = document.getElementById("buttonGq5");
    g5.addEventListener("click", addG5note);
}

function addA5note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["a/5"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonAq5() {
    var a5 = document.getElementById("buttonAq5");
    a5.addEventListener("click", addA5note);
}

function addB5note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["b/5"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonBq5() {
    var b5 = document.getElementById("buttonBq5");
    b5.addEventListener("click", addB5note);
}

function addC6note() {
    //Create notes
    notes = [
        new Vex.Flow.StaveNote({ keys: ["c/6"], duration: "w" })
    ];
    // Create a voice in 4/4
    voice = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setStrict(false);

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);

    // Render voice
    voice.draw(ctx, stave);

}

//C note button
function enable_buttonCq6() {
    var c6 = document.getElementById("buttonCq6");
    c6.addEventListener("click", addC6note);
}

function cNote(){
    cNote = TRUE;
    if (cNote && eNote && gNote) {
        alert("foo");
    }
}
function eNote(){
    eNote = TRUE;
    if (cNote && eNote && gNote){
        alert("foo");
    }
}
function gNote(){
    gNote = TRUE;
    if (cNote && eNote && gNote) {
        alert("foo");
    }
}

/*
$(document).ready(function() {
    $("#button1").onButtonClick(draw_note);
});
*/