(function(){
    "use strict";

    angular.module("app-syntaxpainter")
        .controller("syntaxPainterController", ['$scope','$sce',syntaxPainterController]);

    function syntaxPainterController($scope, $sce){
        var vm = this;

        vm.inputSource = "";

        vm.language = "";

        vm.deliberatelyTrustHtml = function(html){
            return $sce.trustAsHtml(html);
        };

        vm.highlightSyntax = function(){
            $('pre code').each(function(i, block){
                clearHighlightingClasses($(this));
                $(block).addClass(vm.language);
                hljs.highlightBlock(block);
            }); 
        }

        vm.copyOutput = function(){
            window.clipboardData.setData("Text", vm.outputSource);
        }

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