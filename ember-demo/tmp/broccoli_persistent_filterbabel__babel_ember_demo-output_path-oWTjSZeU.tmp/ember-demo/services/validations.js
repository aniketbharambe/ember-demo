define('ember-demo/services/validations', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var set = _ember.default.set;

  exports.default = _ember.default.Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });
});