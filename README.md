## MIME Hero 
> Content-type helpers

## Install
```
$ npm install --save mime-hero
```

## Usage
```javascript
var MimeHero = require("../index.js")

MimeHero.lookup("woowee.pdf")
//=> 'application/pdf'

// OR

MimeHero.lookup("pdf")
//=> 'application/pdf'
```
