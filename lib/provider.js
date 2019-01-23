'use strict';

/**
 * Create an instance of 'Provider'.
 */
class Provider {
  constructor() {
    // Initialize base properties
    let baseProperties = this._getBaseProperties();
    for (let prop in baseProperties) {
      if (!this[prop]) {
        this[prop] = baseProperties;
        if (typeof this[prop] === 'function') {
          this[prop] = this[prop]();
        }
      }
    }
  }

  // Define default properties
  _getBaseProperties() {
    return {
      description: this.name
    };
  }

  /**
   * Validate that required properties and methods are defined
   */
  _validateSubClass() {
    // Validate required properties
    if (!this.name) {
      throw new Error('Property name is required for this provider');
    }
    if (!this.description) {
      throw new Error(`Property description is required for the provider \`${this.name}\``);
    }

    // Validate required methods
    [
      'validate',
      'getParameters',
      'execute',
      'getStatus',
      'getResults'
    ].forEach((method) => {
      if (!this[method] || typeof this[method] !== 'function') {
        throw new Error(`Method \`${method}\` is required for the provider \`${this.name}\``);
      }
    });
  }
}

/**
 * Expose `Provider`.
 */
module.exports = {
  Provider
};
