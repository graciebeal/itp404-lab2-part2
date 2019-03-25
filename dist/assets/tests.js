'use strict';

define("midterm/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
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
  QUnit.test('routes/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/post.js should pass ESLint\n\n');
  });
  QUnit.test('routes/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user.js should pass ESLint\n\n');
  });
});
define("midterm/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('midterm/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'midterm/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('midterm/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'midterm/templates/index.hbs should pass TemplateLint.\n\nmidterm/templates/index.hbs\n  3:1  error  Incorrect indentation for `{{#each}}` beginning at L3:C1. Expected `{{#each}}` to be at an indentation of 2 but was found at 1.  block-indentation\n  5:1  error  Incorrect indentation for `<div>` beginning at L5:C1. Expected `<div>` to be at an indentation of 3 but was found at 1.  block-indentation\n  6:2  error  Incorrect indentation for `{{#link-to}}` beginning at L6:C2. Expected `{{#link-to}}` to be at an indentation of 3 but was found at 2.  block-indentation\n  7:3  error  Incorrect indentation for `{{user.firstName}}` beginning at L7:C3. Expected `{{user.firstName}}` to be at an indentation of 4 but was found at 3.  block-indentation\n');
  });
  QUnit.test('midterm/templates/post.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'midterm/templates/post.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('midterm/templates/user.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'midterm/templates/user.hbs should pass TemplateLint.\n\n');
  });
});
define("midterm/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/post-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user-test.js should pass ESLint\n\n');
  });
});
define("midterm/tests/test-helper", ["midterm/app", "midterm/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("midterm/tests/unit/models/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('user', {});
      assert.ok(model);
    });
  });
});
define("midterm/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("midterm/tests/unit/routes/post-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:post');
      assert.ok(route);
    });
  });
});
define("midterm/tests/unit/routes/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:user');
      assert.ok(route);
    });
  });
});
define('midterm/config/environment', [], function() {
  var prefix = 'midterm';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('midterm/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
