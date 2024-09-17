async function getAPI() {
    try {
        const res = await fetch("./dictionary.json");
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        const dictionary = json.dictionary;
        return dictionary;
    } catch (error) {
        console.error("Failed to fetch dictionary:", error);
        return null; // Or handle the error as needed
    }
}

let dictionary;
let isGameOver = false;
let isWinner = false;
let light = true;

const state = {
    secret: "",
    hint: "",
    grid: Array(4).fill('').map(() => Array(4).fill('')),
    currentRow: 0,
    currentCol: 0
};

function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            drawBox(grid, i, j);
        }
    }

    container.appendChild(grid);
    return grid;
}

function registerKeyboardEvents() {
    document.body.onkeydown = (keyStroke) => {
        if (isGameOver || isWinner) {
            return;
        }
        const key = keyStroke.key;
        if (key == 'Enter') {
            if (state.currentRow === 4) {
                return;
            }
            const word = getCurrentWord();
            if (isWordValid(word)) {
                revealWord(word);
                state.currentRow++;
                state.currentCol = 0;
            }
            else {
                window.alert("first complete the word");
            }
        }
        else if (key == 'Backspace') {
            removeLetter();
        }
        if (isLetter(key)) {
            addLetter(key)
        }

        updateGrid();

        if (isGameOver) {
            const footer = document.getElementById(`footer`);
            const prevHint = document.getElementById('hint');
            if (prevHint) {
                footer.removeChild(prevHint);
            }

            const prevGameOver = document.getElementById('gameOver');
            if (prevGameOver) {
                footer.removeChild(prevGameOver);
            }

            const gameOver = document.createElement('div');
            gameOver.classList.add('gameOver');
            gameOver.id = 'gameOver';
            const gameOverTextOne = document.createTextNode(`Missed the word: `);
            const secret = document.createElement('strong');
            const gameOverTextTwo = document.createTextNode(` and lost!`);
            secret.textContent = state.secret;
            gameOver.appendChild(gameOverTextOne);
            gameOver.appendChild(secret);
            gameOver.appendChild(gameOverTextTwo);
            footer.appendChild(gameOver);
        }
        if (isWinner) {
            const footer = document.getElementById(`footer`);
            const prevHint = document.getElementById('hint');
            if (prevHint) {
                footer.removeChild(prevHint);
            }

            const prevWinner = document.getElementById('winner');
            if (prevWinner) {
                footer.removeChild(prevWinner);
            }

            const winner = document.createElement('div');
            winner.classList.add('winner');
            winner.id = ('winner');
            const winnerText = document.createTextNode(`Congratulations the word was guessed correctly: ${state.secret}`);
            winner.appendChild(winnerText);
            footer.appendChild(winner);

            setTimeout(function () {
                const gameContainer = document.getElementById('gameContainer');
                const congratsImage = document.createElement('img');
                congratsImage.setAttribute('src', 'https://res.cloudinary.com/mkf/image/upload/v1675467141/ENSF-381/labs/congrats_fkscna.gif');
                congratsImage.id = `congratsImage`;
                gameContainer.appendChild(congratsImage);
                const game = document.getElementById('game');

                if (game) {
                    gameContainer.removeChild(game);
                }
            }, 500);
        }
    }
}

function getCurrentWord() {
    const row = state.currentRow;
    let currentWord = state.grid[row][0] + state.grid[row][1] + state.grid[row][2] + state.grid[row][3];
    return currentWord;
}

function isWordValid(word) {
    if (word.length === 4) {
        return true;
    }
}

function revealWord(guess) {
    const row = state.currentRow;
    let match = [false, false, false, false];

    for (let i = 0; i < 4; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;

        if (letter === state.secret[i]) {
            box.classList.add('right');
            match[i] = true;
        }
    }

    for (let i = 0; i < 4; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;
        let verify = false;
        if ((letter === state.secret[0] || letter === state.secret[1] || letter === state.secret[2] || letter === state.secret[3]) && letter !== state.secret[i]) {
            if (letter === state.secret[0] && match[0] == false) {
                box.classList.add('in');
                match[0] = true;
                verify = true;
                continue;
            }
            if (letter === state.secret[1] && match[1] == false) {
                box.classList.add('in');
                match[1] = true;
                verify = true;
                continue;
            }
            if (letter === state.secret[2] && match[2] == false) {
                box.classList.add('in');
                match[2] = true;
                verify = true;
                continue;
            }
            if (letter === state.secret[3] && match[3] == false) {
                box.classList.add('in');
                match[3] = true;
                verify = true;
                continue;
            }
            if (verify == false) {
                box.classList.add('wrong')
            }
        }
        else {
            box.classList.add('wrong')
        }
    }

    isWinner = state.secret === guess;
    isGameOver = row === 3;
}

function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
    if (state.currentCol === 4 || state.currentRow === 4)
        return;
    state.grid[state.currentRow][state.currentCol] = letter.toUpperCase();
    state.currentCol++;
    if (state.currentCol !== 4) {
        const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
        box.classList.add('selected');
        const prevbox = document.getElementById(`box${state.currentRow}${state.currentCol - 1}`);
        prevbox.className = 'box';
    }
    else {
        const prevbox = document.getElementById(`box${state.currentRow}${state.currentCol - 1}`);
        prevbox.className = 'box';
    }
}

function removeLetter() {
    if (state.currentCol === 0 || state.currentRow === 4)
        return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
    if (state.currentCol !== 3) {
        const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
        box.classList.add('selected');
        const boxnext = document.getElementById(`box${state.currentRow}${state.currentCol + 1}`);
        boxnext.className = 'box';
    }
    else {
        const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
        box.classList.add('selected');
    }
}

function startOver() {
    let newIndex = Number.parseInt(Math.random() * dictionary.length);
    correctWord = dictionary[newIndex].word;
    wordHint = dictionary[newIndex].hint;

    state.secret = correctWord.toUpperCase();
    state.hint = wordHint;

    if (isWinner) {
        const gameContainer = document.getElementById('gameContainer');
        const congratsImage = document.getElementById('congratsImage');
        gameContainer.removeChild(congratsImage);
        const game = document.createElement('div');
        game.id = `game`;
        gameContainer.appendChild(game);
    }
    const game = document.getElementById('game')
    const oldGrid = game.querySelector('.grid');
    if (oldGrid) {
        game.removeChild(oldGrid);
    }

    drawGrid(game);
    state.grid = Array(4).fill('').map(() => Array(4).fill(''));
    state.currentRow = 0;
    state.currentCol = 0;

    isWinner = false;
    isGameOver = false;

    const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
    box.classList.add('selected');
    console.log(state.secret);

    const footer = document.getElementById(`footer`);
    const prevHint = document.getElementById('hint');
    if (prevHint) {
        footer.removeChild(prevHint);
    }
    const prevGameOver = document.getElementById('gameOver');
    if (prevGameOver) {
        footer.removeChild(prevGameOver);
    }
    const prevWinner = document.getElementById('winner');
    if (prevWinner) {
        footer.removeChild(prevWinner);
    }

}

async function startup() {
    const game = document.getElementById('game');
    const loadingText = document.createTextNode(`Loading...`);
    game.appendChild(loadingText);

    dictionary = await getAPI();

    game.removeChild(loadingText);

    drawGrid(game);

    let pick = Number.parseInt(Math.random() * dictionary.length);
    correctWord = dictionary[pick].word;
    wordHint = dictionary[pick].hint;

    const box = document.getElementById(`box${state.currentRow}${state.currentCol}`);
    box.classList.add('selected');
    state.secret = correctWord.toUpperCase();
    state.hint = wordHint;

    registerKeyboardEvents();

    console.log(state.secret);
}

function lightDark() {
    if (light == true) {
        document.documentElement.style.setProperty('--default', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--black', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--selected', 'rgb(119, 212, 233');
        document.documentElement.style.setProperty('--footer', 'rgb(74, 74, 74');
        light = false;
    }
    else {
        document.documentElement.style.setProperty("--default", "rgb(255, 245, 223)");
        document.documentElement.style.setProperty('--black', 'rgb(0, 0, 0)')
        document.documentElement.style.setProperty('--selected', 'rgb(0, 0, 0');
        document.documentElement.style.setProperty('--footer', 'rgb(234, 227, 211');
        light = true;
    }
}

function hint() {
    if (isGameOver || isWinner) {
        return;
    }
    const footer = document.getElementById(`footer`);

    const prevHint = document.getElementById('hint');
    if (prevHint) {
        footer.removeChild(prevHint);
        return;
    }

    const hint = document.createElement('div');
    hint.classList.add('hint');
    hint.id = 'hint';
    const hintText = document.createTextNode(`Hint: ${state.hint}`);
    hint.appendChild(hintText);
    footer.appendChild(hint);
}

function instructions() {
    const game = document.getElementById(`gameContainer`);

    const prevInstructions = document.getElementById('instructions');
    if (prevInstructions) {
        game.removeChild(prevInstructions);
        return;
    }

    const instructions = document.createElement('div');
    instructions.classList.add('instructions');
    instructions.id = 'instructions';
    const instructionsTitle = document.createElement('strong');
    instructionsTitle.textContent = "How to Play";

    const instructionsText = document.createElement('ul');
    const instruction1 = document.createElement('li');
    instruction1.textContent = "Start typing. The letters will appear in the boxes";
    const instruction2 = document.createElement('li');
    instruction2.textContent = "Remove letters with backspace";
    const instruction3 = document.createElement('li');
    instruction3.textContent = "Hit Enter/Return to submit an answer";
    const instruction4 = document.createElement('li');
    instruction4.textContent = "Letters with green background are in the correct spot";
    const instruction5 = document.createElement('li');
    instruction5.textContent = "Letters with yellow background exist in the word, but are in the wrong spot";
    const instruction6 = document.createElement('li');
    instruction6.textContent = "Letters with grey background do not exist in the word";
    const instruction7 = document.createElement('li');
    instruction7.textContent = "If you need a hint you can press the ? button";
    instructionsText.appendChild(instruction1);
    instructionsText.appendChild(instruction2);
    instructionsText.appendChild(instruction3);
    instructionsText.appendChild(instruction4);
    instructionsText.appendChild(instruction5);
    instructionsText.appendChild(instruction6);
    instructionsText.appendChild(instruction7);

    instructions.appendChild(instructionsTitle);
    instructions.appendChild(instructionsText);
    game.appendChild(instructions);

}

startup();