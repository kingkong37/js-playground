var str = document.getElementById('word1').innerHTML;
var word2 = document.getElementById('word2');

var game = {};
game.word = str.split('');
game.btns = [];

function copyBtnText() {
    for (var i = 0; i < game.word.length; i++) {
        game.btns[i].innerHTML = game.word[i];
    }
}

for (var i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn);
}

var swap = function (event) {
    console.log('swap');
};

var rShift = function (event) {
    console.log('rShift');
    var s = game.word.pop();
    game.word.unshift(s);
    copyBtnText();
};

var lShift = function (event) {
    console.log('lShift');
    var s = game.word.shift();
    game.word.push(s);
    copyBtnText();
};