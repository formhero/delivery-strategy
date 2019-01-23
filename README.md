An abstract class implementing [FormHero](http://formhero.io/)'s Delivery Service provider strategy API.

## Install

    $ npm install @formhero/delivery-strategy

## Usage

This module exports an abstract `Provider` class that is intended to be
subclassed when implementing a concrete Delivery Service provider strategy. Once
implemented, such a strategy can be used by FormHero's Delivery Service to
communicate its output artifacts to a specific target.

#### Subclass Strategy

Using ES6 syntax, define a new `AcmeProvider` implementation class which extends from `Provider`:

```javascript
'use strict';

const Provider = require('delivery-provider').Provider;

class ACMEProvider extends Provider {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.description = 'Provider from ACME Corporation';
    console.log(`${this.name} created`);
  }

  async validate(data) {
    console.log(`${this.name} validate`);
  }

  async getParameters(ctx) {
    console.log(`${this.name} getParameters`);
  }

  async execute(data) {
    console.log(`${this.name} execute`);
  }

  async getStatus(ctx) {
    console.log(`${this.name} getStatus`);
  }

  async getResults(ctx) {
    console.log(`${this.name} getResults`);
  }
}

module.exports = {
  ACMEProvider
};
```

#### Subclass Strategy

Using FormHero Studio product, configure the form submission node to use the `AcmeProvider` workflow activity.

## Tests

    $ npm install
    $ npm test

## License

[GNU General Public License, V3](http://opensource.org/licenses/gpl-license)

Copyright (c) 2019 FormHero Inc [http://formhero.io/]
