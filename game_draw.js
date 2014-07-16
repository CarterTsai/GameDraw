var GameDraw = function(_probability, _baseRange) {
    var self = this;
    self.probability = _probability || [];
    self.range = [];
    self.baseRange = _baseRange || 10000;
};

GameDraw.prototype.setProbability = function(_probability) {
    var self = this;
    self.probability = _probability;
};

GameDraw.prototype.setBaseRange = function(_baseRange) {
    var self = this;
    self.baseRange = _baseRange;
};

GameDraw.prototype.randomIntInc = function() {
    var self = this;
    var low = 0;
    var high = self.baseRange;
    return Math.floor(Math.random() * (high - low) + low);
};

GameDraw.prototype.getRange = function() {
    var self = this;
    var end = 0;
    var start = 0;
    for (var i = 0; i < self.probability.length; i++) { 
        end = start + Math.floor((self.baseRange * self.probability[i])/100); 
        self.range.push({"start": start, "end": end - 1});
        start = end;
    }
    return self.range;
};

GameDraw.prototype.randomDarw = function() {
    var self = this;
    var tmp = 0; 
    var _range = self.getRange();
    
    tmp = self.randomIntInc();
    for (var j = 0; j < _range.length; j++) {
        if(tmp >= _range[j].start && tmp <= _range[j].end) {
            return j;
        }
    }

};

var gi = [1, 79, 20];
var baseRange_test = 100000;
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
