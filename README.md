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

## Unit testing

This project uses [Jest](https://jestjs.io/) for unit testing.

### Usage

Run `npm test` to run unit tests. For example:

[//]: # "cspell:disable"

```console
$ npm test

> test
> jest --coverage

 PASS  __tests__/fizz-buzz.spec.ts
 PASS  __tests__/fibonacci.spec.ts
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |
 fibonacci.ts |     100 |      100 |     100 |     100 |
 fizz-buzz.ts |     100 |      100 |     100 |     100 |
--------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        1.778 s, estimated 2 s
Ran all test suites.
```

[//]: # "cspell:enable"

## Linting

This project uses [ESLint](https://eslint.org/) for linting.

### Usage

Run `npm run lint:eslint`. For example:

```console
$ npm run lint:eslint

> lint:eslint
> eslint src --ext .ts --max-warnings 0


/tmp/example-cleaner-node/src/lint-issues.ts
  1:10  warning  'greet' is defined but never used         @typescript-eslint/no-unused-vars
  1:40  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 2 problems (0 errors, 2 warnings)

ESLint found too many warnings (maximum: 0).
```

## Formatting

This project uses [Prettier](https://prettier.io/) for formatting.

### Usage

Run `npm run lint:format` to check your code is appropriately formatted. For example:

```console
$ npm run lint:format

> lint:format
> prettier --check src/**/*.ts

Checking formatting...
[warn] src/lint-issues.ts
[warn] Code style issues found in the above file. Forgot to run Prettier?
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

## Integration with your editor/IDE

### VS Code

All you have to do is just install the workspace recommended extensions. See the [instruction](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions).
