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

[nodejs]: http://nodejs.org/
