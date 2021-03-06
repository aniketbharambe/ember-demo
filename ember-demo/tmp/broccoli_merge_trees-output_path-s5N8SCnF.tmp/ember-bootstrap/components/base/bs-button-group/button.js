define('ember-bootstrap/components/base/bs-button-group/button', ['exports', 'ember', 'ember-bootstrap/components/bs-button'], function (exports, _ember, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = _ember.default.computed,
      isArray = _ember.default.isArray;
  exports.default = _bsButton.default.extend({

    /**
     * @property groupValue
     * @private
     */
    groupValue: null,

    /**
     * @property buttonGroupType
     * @type string
     * @private
     */
    buttonGroupType: false,

    /**
     * @property active
     * @type boolean
     * @readonly
     * @private
     */
    active: computed('buttonGroupType', 'groupValue.[]', 'value', function () {
      var _getProperties = this.getProperties('value', 'groupValue'),
          value = _getProperties.value,
          groupValue = _getProperties.groupValue;

      if (this.get('buttonGroupType') === 'radio') {
        return value === groupValue;
      } else {
        if (isArray(groupValue)) {
          return groupValue.indexOf(value) !== -1;
        }
      }
      return false;
    }).readOnly()

  });
});