# example-cleaner-node

This is an example project for those who are interested in cleaning codes.

## Dependencies

### Node.js/npm

Some tools including `cspell` are dependent on `node`.

1. Install node/npm following [the installation manual](https://nodejs.org/en/download/). Of course you can use [`nvm`](https://github.com/nvm-sh/nvm).
2. Run the following command to install the dependent packages

    ```console
    npm install
    ```

### pre-commit

Use `pre-commit` hooks to force cleaning, for example spell checking and linting, before every git commit.

1. Install `pre-commit` following [the installation manual](https://pre-commit.com/#installation).
2. Run the following to activate `pre-commit` settings.:

    ```console
    pre-commit install --install-hooks
    ```

## Spell checking

### Usage

Run `npm run lint:spell`. For example:

```console
$ npm run lint:spell

> lint:spell
> cspell '**'

1/4 ./cspell.config.yaml 271.35ms
2/4 ./package.json 75.01ms
3/4 ./README.md 35.54ms
4/4 ./src/cspell-example.ts 30.77ms
CSpell: Files checked: 4, Issues found: 0 in 0 files
```

Example for an error case:

[//]: # "cspell:disable"

```console
$ sed -n '29,30p' ./src/cspell-example.ts 
const spellEror = 'A exmaple of spelling error';
console.log(spellEror);
$ npm run lint:spell

> lint:spell
> cspell '**'

1/4 ./cspell.config.yaml 263.13ms
2/4 ./package.json 76.93ms
3/4 ./README.md 42.58ms
4/4 ./src/cspell-example.ts 33.89ms X
/tmp/cspell-example/src/cspell-example.ts:29:12 - Unknown word (Eror)
/tmp/cspell-example/src/cspell-example.ts:29:22 - Unknown word (exmaple)
/tmp/cspell-example/src/cspell-example.ts:30:18 - Unknown word (Eror)
CSpell: Files checked: 4, Issues found: 3 in 1 files
```

[//]: # "cspell:enable"

### Reject problematic commits by pre-commit hook

[//]: # "cspell:disable"

```console
$ git commit src/cspell-example.ts
cspell...................................................................Failed
- hook id: cspell
- exit code: 1

/tmp/cspell-example/src/cspell-example.ts:29:12 - Unknown word (Eror)
/tmp/cspell-example/src/cspell-example.ts:29:22 - Unknown word (exmaple)
/tmp/cspell-example/src/cspell-example.ts:30:18 - Unknown word (Eror)
```

[//]: # "cspell:enable"

### Ignore project-specific words

When the spell checker does not know your project-specific words and it treats them as errors, you can add the words to the project dictionary to make the checker ignore them. The dictionary file is `project-words.txt` in this repository. You can specify any file name as you like in the cspell config `cspell.config.yaml`.
