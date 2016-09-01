(function(){
    "use strict";

    angular.module("app-syntaxpainter")
        .controller("syntaxPainterController", ['$scope','cssInjector',syntaxPainterController]);

    function syntaxPainterController($scope, cssInjector){
        var vm = this;

        vm.inputSource = "";

        vm.language = "";

        vm.style = "hybrid";

        cssInjector.add("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/hybrid.min.css");
        cssInjector.add("./css/hybridAccompany.css");

        vm.styles = [{
                "name": "atelierSulphurpoolDark", 
                "hljsCss": "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/atelier-sulphurpool.dark.min.css",
                "siteCss": "./css/atelierSulphurpoolDarkAccompany.css" },
            {
                "name": "dracula", 
                "hljsCss": "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/dracula.min.css",
                "siteCss": "./css/draculaAccompany.css" },
            {
                "name": "hybrid", 
                "hljsCss": "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/hybrid.min.css",
                "siteCss": "./css/hybridAccompany.css" },
            {
                "name": "kimbieLight", 
                "hljsCss": "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/kimbie.light.min.css",
                "siteCss": "./css/kimbieLightAccompany.css" },
            {
                "name": "vs", 
                "hljsCss": "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/vs.min.css",
                "siteCss": "./css/vsAccompany.css" }
        ];

        vm.highlightSyntax = function(){
            $('pre code').each(function(i, block){
                clearHighlightingClasses($(this));
                $(block).addClass(vm.language);
                hljs.highlightBlock(block);
            }); 
        }

        vm.changeStyle = function(styleName){
            var styleObject = utility.filterArray(vm.styles, function(itm){return itm.name === styleName;});
            if(styleObject.length > 0){
                cssInjector.removeAll();
                cssInjector.add(styleObject[0].hljsCss);
                cssInjector.add(styleObject[0].siteCss);
                vm.style = styleName;
            }
        };

        function clearHighlightingClasses($block){
            $block.removeClass('hljs');
            $block.removeClass('apache');
            $block.removeClass('apacheconf');
            $block.removeClass('bash');
            $block.removeClass('sh');
            $block.removeClass('zsh');
            $block.removeClass('coffeescript');
            $block.removeClass('coffee');
            $block.removeClass('cson');
            $block.removeClass('iced');
            $block.removeClass('cpp');
            $block.removeClass('c');
            $block.removeClass('cc');
            $block.removeClass('h');
            $block.removeClass('c++');
            $block.removeClass('h++');
            $block.removeClass('hpp');
            $block.removeClass('cs');
            $block.removeClass('csharp');
            $block.removeClass('css');
            $block.removeClass('diff');
            $block.removeClass('patch');
            $block.removeClass('http');
            $block.removeClass('https');
            $block.removeClass('ini');
            $block.removeClass('java');
            $block.removeClass('jsp');
            $block.removeClass('javascript');
            $block.removeClass('js');
            $block.removeClass('jsx');
            $block.removeClass('json');
            $block.removeClass('makefile');
            $block.removeClass('mk');
            $block.removeClass('mak');
            $block.removeClass('markdown ');
            $block.removeClass('md');
            $block.removeClass('mkdown');
            $block.removeClass('mkd');
            $block.removeClass('nginx');
            $block.removeClass('nginxconf');
            $block.removeClass('objectivec');
            $block.removeClass('mm');
            $block.removeClass('objc');
            $block.removeClass('obj-c');
            $block.removeClass('perl');
            $block.removeClass('pl');
            $block.removeClass('pm');
            $block.removeClass('php');
            $block.removeClass('php3');
            $block.removeClass('php4');
            $block.removeClass('php5');
            $block.removeClass('php6');
            $block.removeClass('python');
            $block.removeClass('py');
            $block.removeClass('gyp');
            $block.removeClass('ruby');
            $block.removeClass('rb');
            $block.removeClass('gemspec');
            $block.removeClass('prodspec');
            $block.removeClass('thor');
            $block.removeClass('irb');
            $block.removeClass('sql');
            $block.removeClass('xml');
            $block.removeClass('html');
            $block.removeClass('xhtml');
            $block.removeClass('rss');
            $block.removeClass('atom');
            $block.removeClass('xjb');
            $block.removeClass('xsd');
            $block.removeClass('xsl');
            $block.removeClass('plist');
        }
        
        vm.clearEverything = function(){
            vm.inputSource = "";
            vm.outputSource = "";
            $('pre code').each(function(i, block){
               clearHighlightingClasses($(this));
            });
        }
    }
})();