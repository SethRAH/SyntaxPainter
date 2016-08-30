(function(){
    "use strict";

    var _utility = {};

    _utility.mapArray = function(array, projectionFunction){
        var results = [];
        array.forEach(function(itemInArray){
            results.push(projectionFunction(itemInArray));
        });
        return results;
    }

    _utility.filterArray = function(array, predicate){
        var results = [];
        array.forEach(function(itemInArray){
            if(predicate(itemInArray)){
                results.push(itemInArray);
            }
        });
        return results;
    }

// Expose it as a public
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = _utility;
        }
        exports.utility = _utility;
    } else {
        this.utility = _utility;
    }

    // AMD registration  
    if (typeof define === 'function' && define.amd) {
        define('utility', [], function () {
        return _utility;
        });
    }
    
}.call(this));