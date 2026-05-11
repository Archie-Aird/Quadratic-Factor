
function genFactoriseProb(min, max) {
    const r1 = getRandomIntInclusive(min, max);
    const r2 = getRandomIntInclusive(min, max);
    
    // For (x + r1)(x + r2), the middle term is r1 + r2 and the last term is r1 * r2
    const b = r1 + r2;
    const c = r1 * r2;

    const poly = `x^2 ${b < 0 ? "" : "+"} ${Math.abs(b)}x ${c < 0 ? "" : "+"} ${Math.abs(c)}`;
    const answer1 = `(x${r1 < 0 ? "" : "+"}${Math.abs(r1)})(x${r2 < 0 ? "" : "+"}${Math.abs(r2)})`;
    const answer2 = `(x${r2 < 0 ? "" : "+"}${Math.abs(r2)})(x${r1 < 0 ? "" : "+"}${Math.abs(r1)})`;

    return [poly, answer1, answer2];
}

function genPSProb(min, max) {
    const thekey = getRandomIntInclusive(min, max)
    const qu = `x^2${(thekey * 2) < 0 ? "" : "+"}${thekey * 2}+${thekey ** 2}`
    const a1 = `(x${thekey < 0 ? "" : "+"}${thekey})^2`
    const a2 = `(x${thekey < 0 ? "" : "+"}${thekey})(x${thekey < 0 ? "-" : "+"}${thekey})`
    return [qu,a1,a2]
}

function genDopsProb(min, max) {
    const keyToTheMultiverse = getRandomIntInclusive(min, max)
    const qu = `x^2 - ${keyToTheMultiverse ** 2}`
    const answer1 = `(x+${keyToTheMultiverse})(x-${keyToTheMultiverse})`
    const answer2 = `(x-${keyToTheMultiverse})(x+${keyToTheMultiverse})`
    return [qu, answer1, answer2]
}

function genQuestionBox(text1, text2, container) {
    const textBox = document.createElement("input");
    const goBtn = document.createElement("button");
    goBtn.innerHTML = "Check";
    br = document.createElement('br')
    container.appendChild(document.createElement("br"))
    goBtn.addEventListener("click", () => {
        // Tip: Consider removing spaces from input for easier matching
        if (textBox.value.replace(/\s+/g, '') === text1.replace(/\s+/g, '') || textBox.value.replace(/\s+/g, '') === text2.replace(/\s+/g, '')) {
            goBtn.outerHTML = "<span> Correct!</span>";
            textBox.readOnly = true;
        } else {
            alert("Try again!");
        }
    });

    container.appendChild(textBox);
    container.appendChild(goBtn);
    br = document.createElement('br')
    container.appendChild(document.createElement("br"))
    br = document.createElement('br')
    container.appendChild(document.createElement("br"))

}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function updFactor(howMany) {
    const display = document.getElementById("questions");
    display.innerHTML = ""; 

    for (let i = 0; i < howMany; i++) {
        const qContainer = document.createElement("div");
        const [question, answer1, answer2] = genFactoriseProb(-10, 10);
        
        const mathSpan = document.createElement("span");
        qContainer.appendChild(mathSpan);
        
        display.appendChild(qContainer);
        
        // Render Math, then add the input box
        katex.render(question, mathSpan);
        genQuestionBox(answer1, answer2, qContainer);
    }
}

function updDOPS(howMany) {
    const display = document.getElementById("questions");
    display.innerHTML = ""; 

    for (let i = 0; i < howMany; i++) {
        const qContainer = document.createElement("div");
        const [question, answer1, answer2] = genDopsProb(0, 10);
        
        const mathSpan = document.createElement("span");
        qContainer.appendChild(mathSpan);
        
        display.appendChild(qContainer);
        
        // Render Math, then add the input box
        katex.render(question, mathSpan);
        genQuestionBox(answer1, answer2, qContainer);
    }
}

function updPS(howMany) {
    const display = document.getElementById("questions");
    display.innerHTML = ""; 

    for (let i = 0; i < howMany; i++) {
        const qContainer = document.createElement("div");
        const [question, answer1, answer2] = genPSProb(0, 10);
        
        const mathSpan = document.createElement("span");
        qContainer.appendChild(mathSpan);
        
        display.appendChild(qContainer);
        
        // Render Math, then add the input box
        katex.render(question, mathSpan);
        genQuestionBox(answer1, answer2, qContainer);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("snp").addEventListener("click", (e) => {
        updFactor(10)
    })
    document.getElementById("dops").addEventListener("click", (e) => {
        updDOPS(10)
    })
    document.getElementById("ps").addEventListener("click", (e) => {
        updPS(10)
    })  
    const hahas = ["Tryna be a hacker?", "Our systems are SO SECURE.", "Well, hello there."]
    console.log(`== ${hahas[Math.floor(Math.random() * hahas.length)]} ==`)
})

z
// Check current state
console.log('Is DevTools open?', devtools.isOpen);

// Listen for changes
window.addEventListener('devtoolschange', event => {
    alert("get out of devtools, hacker!!!")
});
