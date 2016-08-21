(function(){
    "use strict";

    var _paintUtil = {}

    _paintUtil.replaceAll = function(fullString, stringToReplace, replacementString, ignore){
        return fullString.replace(new RegExp(stringToReplace.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?replacementString.replace(/\$/g,"$$$$"):replacementString);
    };

    _paintUtil.escapeHTML = function(str){
        var result = _paintUtil.replaceAll(str, '&', '&amp;');
        result = _paintUtil.replaceAll(result, '"', '&quot;');
        result = _paintUtil.replaceAll(result, "'", '&#39;');
        result = _paintUtil.replaceAll(result, '<', '&lt;');
        result = _paintUtil.replaceAll(result, '>', '&gt;');
        result = _paintUtil.replaceAll(result, '/', '&#x2F;');

        return result;
    };

    _paintUtil.unescapeHTML = function(str){
        var result = _paintUtil.replaceAll(str, '&amp;', '&');
        result = _paintUtil.replaceAll(result, '&quot;', '"');
        result = _paintUtil.replaceAll(result, "&#39;", "'");
        result = _paintUtil.replaceAll(result, '&lt;', '<');
        result = _paintUtil.replaceAll(result, '&gt;', '>');
        result = _paintUtil.replaceAll(result, '&#x2F;', '/');
    };
       
    // Expose it as a public
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = _paintUtil;
        }
        exports.paintUtil = _paintUtil;
    } else {
        this.paintUtil = _paintUtil;
    }

    // AMD registration  
    if (typeof define === 'function' && define.amd) {
        define('paintUtil', [], function () {
        return _paintUtil;
        });
    }
}.call(this));