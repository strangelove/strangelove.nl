# strangelove.nl

This repository contains the frontend component of the
[strangelove.nl][strangelove] website. We've opted for a split front/backend
architecture to separate concerns. This allowed us to work on the website
simultaneously without getting in each other's way.

The frontend consists of a small node server, written with express, that does
API calls to the backend to retrieve its data, along with all the css and
javascript goodness, of course.

The javascript is written in CommonJS format and then compiled using
[wrapup][wrapup]. The css is written in `scss` format and then compiled using
[node-sass][sass]. Additionally, we're using [normalize.css][normalize] and
[bourbon][bourbon] to aid us.


## Installation

To run this website you'll need to meet the following requirements:

- [Node.js][nodejs]
- `grunt-cli` - run `npm install -g grunt-cli` on the command line

And then do this:

```bash
$ git clone https://github.com/strangelove/strangelove.nl.git
$ cd strangelove.nl
$ npm install
$ grunt
```

You can also choose to just use `nodemon` or `node app.js`, but `grunt` will
also handle watching and compiling scss and js files.


## Used fonts

- [Aleo][font-aleo]
- [Ubuntu][font-ubuntu]

[strangelove]: http://www.strangelove.nl/
[wrapup]: https://github.com/mootools/wrapup
[sass]: https://github.com/sass/node-sass
[normalize]: https://github.com/necolas/normalize.css
[bourbon]: http://bourbon.io/
[nodejs]: http://nodejs.org/
[font-aleo]: http://www.fontsquirrel.com/fonts/aleo
[font-ubuntu]: https://www.google.com/fonts/specimen/Ubuntu
