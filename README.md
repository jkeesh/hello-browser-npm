# Hello Browser NPM

This repo contains a simple comparison of how to run JavaScript the old way, with just including a script tag, to the new way, using npm modules and build tools.

View two sample web pages showing the "old way" and the "new way" here.

## The Old Way

http://thekeesh.com/hellobrowsernpm/oldway.html

## The New Way

http://thekeesh.com/hellobrowsernpm/newway.html

## New Way Hello World Quickstart

### index.html

    <h1>Simple Web Page</h1>
    <script src=”simplebundle.js”></script>

### main.js

    var repeat = require(‘repeat-string’);
    console.log(repeat(‘hey’, 100));
    document.write(repeat(‘hey’, 10));

### npm command

    $ npm install repeat-string

### watchify command

    $ watchify main.js -o simplebundle.js
