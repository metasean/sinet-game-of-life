function Cell() {
    this.currentState = true
}

Cell.prototype.state = function() {
    return this.currentState;
}

Cell.prototype.vacate = function() {
    
    this.currentState = false
}

Cell.prototype.flippy = function() {
    this.currentState = !this.currentState;
}

module.exports = Cell
