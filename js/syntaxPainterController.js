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
                hljs.highlightBlock(block);
            }); 
        }

        vm.copyOutput = function(){
            window.clipboardData.setData("Text", vm.outputSource);
        }
        
        vm.clearEverything = function(){
            vm.inputSource = "";
            vm.outputSource = "";
            $('pre code').each(function(i, block){
                $(this).removeClass('hljs');
                $(this).removeClass('cs');
                $(this).removeClass('cpp');
                $(this).removeClass('css');
                $(this).removeClass('html');
                $(this).removeClass('http');
                $(this).removeClass('json');
                $(this).removeClass('java');
                $(this).removeClass('js');
                $(this).removeClass('sql');
                $(this).removeClass('xml');
            });
        }
    }
})();