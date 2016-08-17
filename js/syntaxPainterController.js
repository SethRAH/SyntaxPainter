(function(){
    "use strict";

    angular.module("app-syntaxpainter")
        .controller("syntaxPainterController", syntaxPainterController);

    function syntaxPainterController(){
        var vm = this;

        vm.inputSource = "";
        vm.outputSource = "";

        vm.language = "xml";

        vm.highlightSyntax = function(){
            switch(vm.language){
                case "xml":
                    //do some xml painting (right now just copying the message)
                    vm.outputSource = vm.inputSource;
                    break;
                case "json":
                    //not yet supported
                    break;
                case "javascript":
                    //not yet supported
                    break;
                case "java":
                    //not yet supported
                    break;
                case "cSharp":
                    //not yet supported
                    break;
                case "sql":
                    //not yet supported
                    break;
            }
        }

        vm.copyOutput = function(){
            window.clipboardData.setData("Text", vm.outputSource);
        }
        vm.setLanguage = function(language){
            vm.language = language;
        }
        vm.clearEverything = function(){
            vm.inputSource = "";
            vm.outputSource = "";
        }
    }
})();