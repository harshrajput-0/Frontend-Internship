// ARRAY ===========
const keys = [
    [
        { label: "`", slabel: "~", code: "Backquote" },
        { label: "1", slabel: "!", code: "Digit1" },
        { label: "2", slabel: "@", code: "Digit2" },
        { label: "3", slabel: "#", code: "Digit3" },
        { label: "4", slabel: "$", code: "Digit4" },
        { label: "5", slabel: "%", code: "Digit5" },
        { label: "6", slabel: "^", code: "Digit6" },
        { label: "7", slabel: "&", code: "Digit7" },
        { label: "8", slabel: "*", code: "Digit8" },
        { label: "9", slabel: "(", code: "Digit9" },
        { label: "0", slabel: ")", code: "Digit0" },
        { label: "-", slabel: "_", code: "Minus" },
        { label: "=", slabel: "+", code: "Equal" },
        { label: "Backspace", slabel: "Backspace", code: "Backspace", size: 2, sp: "backspace" }
    ],
    [
        { label: "Tab", slabel: "Tab", code: "Tab", size: 1.5, sp: "tab" },
        { label: "q", slabel: "Q", code: "KeyQ" },
        { label: "w", slabel: "W", code: "KeyW" },
        { label: "e", slabel: "E", code: "KeyE" },
        { label: "r", slabel: "R", code: "KeyR" },
        { label: "t", slabel: "T", code: "KeyT" },
        { label: "y", slabel: "Y", code: "KeyY" },
        { label: "u", slabel: "U", code: "KeyU" },
        { label: "i", slabel: "I", code: "KeyI" },
        { label: "o", slabel: "O", code: "KeyO" },
        { label: "p", slabel: "P", code: "KeyP" },
        { label: "[", slabel: "{", code: "BracketLeft" },
        { label: "]", slabel: "}", code: "BracketRight" },
        { label: "\\", slabel: "|", code: "Backslash", size: 1.5 }
    ],
    [
        { label: "Caps", slabel: "Caps", code: "CapsLock", size: 2, sp: "caps" },
        { label: "a", slabel: "A", code: "KeyA" },
        { label: "s", slabel: "S", code: "KeyS" },
        { label: "d", slabel: "D", code: "KeyD" },
        { label: "f", slabel: "F", code: "KeyF" },
        { label: "g", slabel: "G", code: "KeyG" },
        { label: "h", slabel: "H", code: "KeyH" },
        { label: "j", slabel: "J", code: "KeyJ" },
        { label: "k", slabel: "K", code: "KeyK" },
        { label: "l", slabel: "L", code: "KeyL" },
        { label: ";", slabel: ":", code: "Semicolon" },
        { label: "'", slabel: '"', code: "Quote" },
        { label: "Enter", slabel: "Enter", code: "Enter", size: 2, sp: "enter" }
    ],
    [
        { label: "Shift", slabel: "Shift", code: "ShiftLeft", size: 2.5, sp: "shift" },
        { label: "z", slabel: "Z", code: "KeyZ" },
        { label: "x", slabel: "X", code: "KeyX" },
        { label: "c", slabel: "C", code: "KeyC" },
        { label: "v", slabel: "V", code: "KeyV" },
        { label: "b", slabel: "B", code: "KeyB" },
        { label: "n", slabel: "N", code: "KeyN" },
        { label: "m", slabel: "M", code: "KeyM" },
        { label: ",", slabel: "<", code: "Comma" },
        { label: ".", slabel: ">", code: "Period" },
        { label: "/", slabel: "?", code: "Slash" },
        { label: "Shift", slabel: "Shift", code: "ShiftRight", size: 2.5, sp: "shift" }
    ],
    [
        { label: "Ctrl", slabel: "Ctrl", code: "ControlLeft", size: 1.5, sp: "ctrl" },
        { label: "Windows", slabel: "Windows", code: "MetaLeft", size: 1.5, sp: "windows" },
        { label: "Alt", slabel: "Alt", code: "AltLeft", size: 1.5, sp: "alt" },
        { label: "Spacebar", slabel: "Spacebar", code: "Space", size: 6, sp: "spacebar" },
        { label: "Windows", slabel: "Windows", code: "MetaRight", size: 1.5, sp: "windows" },
        { label: "Alt", slabel: "Alt", code: "AltRight", size: 1.5, sp: "alt" },
        { label: "Fn", slabel: "Fn", code: "Fn", sp: "fn" },
        { label: "Ctrl", slabel: "Ctrl", code: "ControlRight", size: 1.5, sp: "ctrl" }
    ]
];



console.log("dhsklsdf")

// ELEMENTS 
const keyboard = document.getElementById("keyboard");
const textarea = document.getElementById("textarea")


// TO CHECK STATE 
let isCaps = false;
let isShift = false;


// RENDER THE BUTTONS =======---------------------
keyboard.innerHTML = keys.map(row => `
  <div class="key-row">
    ${row.map(key => `
      <button class="key ${key.sp ? key.sp : "btn"}" style="flex: ${key.size || 1}" data-code="${key.code}">
        ${isCaps ? key.slabel : key.label}
      </button>
    `).join("")}
  </div>
`).join("");



// SEPERATE FUNTION TO HANDLE UI UPDATE FOR BUTTON ============----------------
// Otherwise updating ui with each event is annoying without it
function updateKeyLabels() {
    keys.flat().forEach(key => {
        const button = document.querySelector(`[data-code="${key.code}"]`);
        if (!button) return;

        const isLetter = key.code.startsWith("Key");

        const showShifted = isLetter ? (isCaps !== isShift) : isShift;
        button.textContent = showShifted ? key.slabel : key.label;
    });

    document.querySelectorAll(".caps").forEach(btn => btn.classList.toggle("active", isCaps));
    document.querySelectorAll(".shift").forEach(btn => btn.classList.toggle("active", isShift));
}




// GETTING BUTTONS
const Buttons = document.querySelectorAll(".btn");

Buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let key = btn.textContent.trim();

        textarea.value += key;
        textarea.focus();

        if (isShift) {
            isShift = false;
            updateKeyLabels();
        }
    });
});





// BACKSPACE
document.querySelector(".backspace").addEventListener("click", () => {
    textarea.value = textarea.value.slice(0, -1);
    textarea.focus();
})

// SPACEBAR
document.querySelector(".spacebar").addEventListener("click", () => {
    textarea.value = textarea.value + " ";
    textarea.focus();
})



// CAPS LOCK
document.querySelectorAll(".caps").forEach(btn => {
    btn.addEventListener("click", () => {
        isCaps = !isCaps;
        updateKeyLabels();
    });
});

// SHIFT BUTTON
document.querySelectorAll(".shift").forEach(btn => {
    btn.addEventListener("click", () => {
        isShift = !isShift;
        updateKeyLabels();
    });
});


// ENTER BUTTON 
document.querySelector(".enter").addEventListener("click", () => {
    textarea.value += "\n";
    textarea.focus();
});








// ON KEY PRESS
document.addEventListener("keydown", event => {

    document.querySelectorAll(`[data-code="${event.code}"]`)
        .forEach(button => button.classList.add("pressed"));


    // If alaphabet is pressed, focus cursor inside textarea
    const isLetter = event.code.startsWith("Key");
    if (isLetter) {
        textarea.focus();
    }

    isCaps = event.getModifierState("CapsLock");
    isShift = event.getModifierState("Shift");

    updateKeyLabels();
});


// ON KEY RELEASE 
document.addEventListener("keyup", event => {
    document.querySelectorAll(`[data-code="${event.code}"]`)
        .forEach(button => button.classList.remove("pressed"));

    isShift = event.getModifierState("Shift");

    updateKeyLabels()

});