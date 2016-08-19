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

}.call(this))