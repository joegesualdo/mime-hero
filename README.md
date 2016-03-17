## MIME Hero 
> Content-type helpers

## Install
```
$ npm install --save mime-hero
```

## Usage
```javascript
var MimeHero = require("mime-hero")

MimeHero.lookup("woowee.pdf")
//=> 'application/pdf'

// OR

MimeHero.lookup("pdf")
//=> 'application/pdf'
```
