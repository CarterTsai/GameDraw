var GameDraw = require('./game_draw.js');

var gi = [ 15.01, 15.01, 15.01, 15.01, 15.01 ];
var baseRange_test = 100;
var recode = [];
var tmpx = 0;
var game_draw = new GameDraw(gi, baseRange_test);

for (var i = 0; i < baseRange_test; i++) {
    var tmpx = game_draw.randomDarw();
    if(!recode[tmpx]) {
        recode[tmpx] = 0;
    }
    recode[tmpx] = recode[tmpx] + 1;
}

console.log(recode);
