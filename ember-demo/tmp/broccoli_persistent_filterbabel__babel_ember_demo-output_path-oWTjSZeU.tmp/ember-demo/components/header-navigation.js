define('ember-demo/components/header-navigation', ['exports', 'ember'], function (exports, _ember) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _ember.default.Component.extend({
		isShowingModal: false,
		actions: {
			toggleModal: function toggleModal() {
				this.toggleProperty('isShowingModal');
			}
		}
	});
});