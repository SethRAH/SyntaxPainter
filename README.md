# SyntaxPainter
SyntaxPainter is a small code syntax highlighter page. It's mainly powered by highlight.js(https://highlightjs.org/) and AngularJs (https://angularjs.org/).

#### Why?
Working as a developer, I frequently need to share code snippets. When copying from IDE's that support syntax highlighting, I've never found that the styling will consistently make it into the clipboard with the code or, sometimes, it will come across with weird styling (like the entire codeblock will have a highlight of the same color as the text). I created this tool to consistently syntax highlight, or color, my code so that I can share it in an easier to read format.

#### How do I use this?
Hopefully the layout is fairly self explainatory (although I haven't done too much looking into UX stuff so bare with me.) 
Steps for using this include:
1. Copy your code into the "Input Code" text area. SyntaxPainter will not alter white space so if you have another tool that does that, I would recommend running your code through that first.
2. Click the Tint button at the bottom of the page (looks like an ink droplet). This will cause Syntax Painter to go through and highlight your code.

By default Syntax Painter is set to Auto-Detect the language. This is out of the box highlight.js functionality and I have found that it's not always amazing at correctly detecting my language (but hey, its better than what I created.) Because of that, I have added a drop down so you can select which language you are using.

Additionally, I noticed it felt a little weird copying the dark styled code into my emails so I added alternative styles (note: once again all these styles are provided by highlight.js).

#### What languages are supported?
* Apache
* Bash
* C++
* C#
* CoffeeScript
* CSS
* Diff
* HTML
* HTTP 
* Ini
* Java
* JavaScript
* JSON
* Makefile
* Markdown
* Nginx
* Objective-C
* Perl
* PHP
* Python
* Ruby
* SQL
* XML

#### Why did you choose those languages?
These are considered the 'Common' languages in highlight.js and come with the base .js file. There are additional .js files I could link to for other languages but this included all the languages I was going to use.

#### This whole thing is just a gui for highlight.js! What did you contribute?
Yeah, originally I had planned to pretty much implement highlight.js myself (but for less languages). When I found highlight.js, I took the easy way out. The tools goal was still to provide quick access to styling code and highlight.js doesn't have a front end so I think this still accomplishes my goal. At the end of the day, highlight.js was just a much more mature library (10 years old) and I thought the tool benefitted from it more than me trying to code out my own version.