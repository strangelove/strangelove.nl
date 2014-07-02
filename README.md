# strangelove.nl templates

## Requirements

- [Node.js][nodejs]
- `grunt-cli` - run `npm install -g grunt-cli` on the command line (might need
  `sudo`)

## Running it

If you did not clone this repository with the `--recursive` flag, make sure you
update submodules as well

```bash
$ git submodule update --init --recursive
```

Then, you can install the npm packages and run it

```bash
$ npm install
$ grunt
```

If the above `npm install` throws an error, you probably need `sudo`.

## Used fonts

- [Aleo][font-aleo]
- [Ubuntu][font-ubuntu]

[nodejs]: http://nodejs.org/
[font-aleo]: http://www.fontsquirrel.com/fonts/aleo
[font-ubuntu]: https://www.google.com/fonts/specimen/Ubuntu
