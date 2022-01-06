# pactum-supertest

small plugin to start and stop server after testing similar to supertest

## Usage

Install the package

```
npm i --save-dev pactum-supertest
```

Import in your test files

```js
const app = require('./path/to/server');
require('pactum-supertest')(app);

it('some test', () => {
  return pactum.spec()
    .get('<url>')
    .expectStatus(200);
});
```