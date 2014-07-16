var GameDraw = function(_probability ,_baseRange) {
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

GameDraw.prototype.getMaxOfArray = function(numArray) {
    var self = this;
    var numArray = self.probability;
    var num = Math.max.apply(null, numArray);
    var index = numArray.indexOf(num);
    return index;
}

GameDraw.prototype.randomDarw = function() {
    var self = this;
    var tmp = 0; 
    var _range = self.getRange();
    
    tmp = self.randomIntInc();
    console.log(tmp)
    for (var j = 0; j < _range.length; j++) {
        if(tmp >= _range[j].start && tmp <= _range[j].end) {
            return j;
        }
    }

    return self.getMaxOfArray(); 
};

module.exports = GameDraw;
