# SyntaxPainter
small html/js syntax highlighter. To be used for quick highlighting of code snippets when sharing via email/other html based communication.


## Test Secion

```html
<div class="container">
        <div data-ng-app="app-syntaxpainter">
            <div data-ng-controller="syntaxPainterController as vm">
                <form class="form" novalidate name="syntaxPainterForm" data-ng-submit="vm.highlightSyntax()">
                    <p>At this moment, Syntax Painter only highlights XML</p>
                    <div class="form-group">
                        <label class="control-label">Input Code</label>
                        <div>
                            <textarea class="form-control" id="taInputSyntaxSource" rows="10" data-ng-model="vm.inputSource"></textArea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Highlighted Output</label>
                        <pre id="preOutputSyntaxHighlight">{{vm.outputSource}}</pre>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <button class="btn btn-default" type="reset">Clear</button>
                            <button class="btn btn-primary" type="submit">Paint</button>
                            <a class="btn btn-info" data-ng-click="vm.copyOutput()"><i class="fa fa-copy"></i></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
```

```XML
<ns1:code>Here is some code </ns1:code>
<ns1:list size="2">
    <ns1:code>code 1</ns1:code>
    <ns1:code>code 2</ns1:code>
</ns1:code>
```