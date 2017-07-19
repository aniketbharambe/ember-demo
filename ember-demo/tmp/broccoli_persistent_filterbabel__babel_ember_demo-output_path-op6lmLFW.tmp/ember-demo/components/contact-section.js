define('ember-demo/components/contact-section', ['exports', 'ember', 'ember-validations'], function (exports, _ember, _emberValidations) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend(_emberValidations.default, {
        showErrors: false,
        validations: {
            name: {
                presence: { message: 'Please enter your name.' }
            },
            email: {
                presence: { message: 'Please enter your email Id.' },
                format: { with: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, allowBlank: true, message: 'Please enter valid email address.' }
            },
            phone: {
                presence: { message: 'Please enter your phone number' },
                format: { with: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, allowBlank: true, message: 'Please enter valid 10 digit phone number.' }
            },
            description: {
                presence: { message: 'Please enter description.' }
            }
        },
        actions: {
            submitContact: function submitContact() {
                var _this = this;

                this.validate().then(function () {
                    //write submit api call here
                    _this.set('isSubmitted', true);
                }).catch(function () {
                    _this.set("showErrors", true);
                    //console.log(this.get("errors"));   
                });
            }
        }
    });
});