define('ember-demo/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/contact-section.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/contact-section.js should pass ESLint\n\n');
  });

  QUnit.test('components/footer-section.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/footer-section.js should pass ESLint\n\n');
  });

  QUnit.test('components/header-navigation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-navigation.js should pass ESLint\n\n');
  });

  QUnit.test('components/hero-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/hero-header.js should pass ESLint\n\n');
  });

  QUnit.test('components/our-team.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/our-team.js should pass ESLint\n\n');
  });

  QUnit.test('components/people-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/people-list.js should pass ESLint\n\n');
  });

  QUnit.test('components/redefining-web.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/redefining-web.js should pass ESLint\n\n');
  });

  QUnit.test('components/services-section.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/services-section.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});