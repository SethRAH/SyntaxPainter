(function(){
    "use strict";

    var _paintXML = {};

    _paintXML.cssClasses = {
        tagName: "syntax-painter painted-code painted-xml painted-tag",
        attributeKey: "syntax-painter painted-code painted-xml painted-attribute",
        attributeValue: "syntax-painter painted-code painted-xml painted-attribute-value"
    };

    _paintXML.regexSelectors = {
        tagName: /<([[:alnum:]]+|\/[[:alnum:]]+)/g,
        attributeKey: /.+/,
        attributeValue: /.+/
    }

    _paintXML.htmlScaffolding = {
        prefix: '<span class="',
        affix: '">',
        suffix: "</span>"
    }

    _paintXML.highlightXML = function(str){
        return paintUtil.escapeHTML(str);
    }


     // Expose it as a public
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = _paintXML;
        }
        exports.paintXML = _paintXML;
    } else {
        this.paintXML = _paintXML;
    }

    // AMD registration  
    if (typeof define === 'function' && define.amd) {
        define('paintXML', [], function () {
        return _paintXML;
        });
    }


}.call(this));