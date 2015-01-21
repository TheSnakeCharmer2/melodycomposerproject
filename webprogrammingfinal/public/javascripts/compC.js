/*
* Created by devonmurray on 12/12/14.
*/

function CMajstaff() {
    console.log("foo");
    var canvas = document.getElementById("CMajstaff");
    var renderer = new Vex.Flow.Renderer(canvas,
        Vex.Flow.Renderer.Backends.CANVAS);

    ctx = renderer.getContext();
    stave = new Vex.Flow.Stave(20, 10, 500);
    stave.addClef("treble").setContext(ctx).draw();
}

/*var mcn = 0;
var cs = 1;
var dn = 2;
var ds = 3;
var enote = 4;
var fn = 5;
var fs = 6;
var gn = 7;
var gs = 8;
var anote = 9;
var ashp = 10;
var bn = 11;
var cn = 12;

var cs2 = 13;
var dn2 = 14;
var ds2 = 15;
var enote2 = 16;
var fn2 = 17;
var fs2 = 18;
var gn2 = 19;
var gs2 = 20;
var anote2 = 21;
var ashp2 = 22;
var bn2 = 23;
var cn2 = 24;*/

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

    chord.push(0);

    triad();
}

//C note button
function enable_buttonCq4() {
    var mc = document.getElementById("buttonCq4");
    mc.addEventListener("click", addC4note);
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

    chord.push(2);

    triad();
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

    chord.push(4);

    triad();
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

    chord.push(5);

    triad();

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

    chord.push(7);

    triad();
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

    chord.push(9);

    triad();

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

    chord.push(11);

    triad();
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

    chord.push(12);

    triad();
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

    chord.push(14);

    triad();
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

    chord.push(16);

    triad();

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

    chord.push(17);

    triad();

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

    chord.push(19);

    triad();

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

    chord.push(21);

    triad();
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

    chord.push(23);

    triad();

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

    chord.push(24);

    triad();

}

function enable_buttonCq6() {
    var c6 = document.getElementById("buttonCq6");
    c6.addEventListener("click", addC6note);

}

//================================================

/*for (i=0, i < chord.length, i++) {

}*/

/*var majpitch = {
    cn: 0,
    cs: 1,
    d: 2,
    ds: 3,
    e: 4,
    fn: 5,
    fs: 6,
    g: 7,
    gs: 8,
    a: 9,
    as: 10,
    b: 11,
    cn2: 12,
    tone: function () {
        chord.push(this);
    }
};

majpitch.tone();*/

/*var tonality = {
    root: chord[null],
    major_3rd: root + 4,
    minor_3rd: root + 3,
    major_tri: major_3rd + 3,
    minor_tri: minor_3rd + 4,
    dim_tri: minor_3rd + 3,
    aug_tri: major_3rd + 4,
};*/

var chord = [];

/*//algorithm
var root = chord[null];
var major_third = root + 4;
var major_tri = major_third + 3;
var minor_third = root + 3;
var minor_tri = minor_third + 4;
var dimin_tri = minor_third + 3;


var major_scale = {
    I: major_tri,
    ii: minor_tri,
    iii: minor_tri,
    IV: major_tri,
    V: major_tri,
    vi: minor_tri,
    viio: dimin_tri
};

var minor_scale = {
    i: minor_tri,
    II: major_tri,
    III: major_tri,
    iv: minor_tri,
    v: minor_tri,
    VI: major_tri,
    VII: major_tri
};*/



function triad() {
    if (chord.length >= 3) {
        var f1rst = chord[0];
        var second = chord[1];
        var third = chord[2];
        var sum = f1rst + second + third;
        if (sum == 11) {
            alert("C Major Triad: I (Tonic)");
        }
        else if (sum == 16) {
            alert("d minor Triad: ii (Supertonic)");
        }
        else if (sum == 22) {
            alert("e minor Triad: iii (Mediant)");
        }
        else if (sum == 25) {
            alert("F Major Triad: IV (Subdominant)");
        }
        else if (sum == 32) {
            alert("G Major Triad: V (Dominant)");
        }
        else if (sum == 38) {
            alert("a minor Triad: vi (Submediant)");
        }
        else if (sum == 42) {
            alert("b diminished Triad: vii° (Leading Tone)")
        }
        else if (sum == 47) {
            alert("C Major Triad: I (Tonic)")
        }
        else if (sum == 52) {
            alert("d minor Triad: ii (Supertonic)")
        }
        else if (sum == 58) {
            alert("e minor Triad: iii (Mediant)")
        }
        else if (sum == 62) {
            alert("F Major Triad: IV (Subdominant)")
        }
        else {
            alert("No chord detected. Please refresh the page and try entering a chord that is diatonic.")
        }
    }
}




/*
var major_keys = {
    C: chord.cn,
//flat keys
    F: chord.fn,
    Bb: chord.as,
    Eb: chord.ds,
    Ab: chord.gs,

//sharp keys
    G: chord.g,
    D: chord.d,
    A: chord.a,
    E: chord.e,
    B: chord.b,
    Fshp: chord.fs,
    Cshp: chord.cs
};
*/







/*function keyCM() {
    if (root == chord[0]) {
        tonality = major_triad;
    }
    else if (root == chord[2]) {
        tonality = minor_triad;
    }
    else if (root == chord[4]) {
        tonality = minor_triad;
    }
    else if (root == chord[5]) {
        tonality = major_triad;
    }
    else if (root == chord[7]) {
        tonality = major_triad;
    }
    else if (root == chord[9]) {
        tonality = minor_triad;
    }
    else if (root == chord[11]) {
        tonality = diminished_triad;
    }
    else {
        console.log("bar")
    }
}*/

/*//Middle C
 function mcNote() {
 chord.push(0);

 }

 //C#/Db
 function csNote() {
 chord.push(1)
 }

 //D natural
 function dNote() {
 chord.push(2)
 }

 //D#/Eb
 function dsNote() {
 chord.push(3)
 }

 //E natural/Fb
 function eNote() {
 chord.push(4)
 }

 //F natural/Eb
 function fNote() {
 chord.push(5)
 }

 //F#/Gb
 function fsNote() {
 chord.push(6)
 }

 function gNote() {
 chord.push(7)
 }

 function gsNote() {
 chord.push(8)
 }

 function aNote() {
 chord.push(9)
 }

 function asNote() {
 chord.push(10)
 }

 function bNote() {
 chord.push(11)
 }

 function cNote() {
 chord.push(12)
 }*/



