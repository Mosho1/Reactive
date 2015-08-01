System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "stage": 0,
    "blacklist": [],
    "optional": []
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});

System.config({
  "depCache": {
    "npm:process@0.10.1.js": [
      "npm:process@0.10.1/browser.js"
    ],
    "github:jspm/nodelibs-process@0.1.1/index.js": [
      "npm:process@0.10.1.js"
    ],
    "github:jspm/nodelibs-process@0.1.1.js": [
      "github:jspm/nodelibs-process@0.1.1/index.js"
    ],
    "npm:rx-lite@2.5.2/rx.lite.js": [
      "github:jspm/nodelibs-process@0.1.1.js"
    ],
    "npm:rx-lite@2.5.2.js": [
      "npm:rx-lite@2.5.2/rx.lite.js"
    ],
    "app.js": [
      "npm:babel-core@5.8.19/polyfill.js",
      "lib/state.js"
    ],
    "state.js": [
      "npm:rx-lite@2.5.2.js",
      "npm:lodash.memoize@3.0.4.js"
    ],
    "npm:lodash.memoize@3.0.4.js": [
      "npm:lodash.memoize@3.0.4/index.js"
    ],
    "npm:lodash._baseget@3.7.2/index.js": [
      "github:jspm/nodelibs-process@0.1.1.js"
    ],
    "npm:lodash._baseget@3.7.2.js": [
      "npm:lodash._baseget@3.7.2/index.js"
    ],
    "npm:lodash.isarray@3.0.4.js": [
      "npm:lodash.isarray@3.0.4/index.js"
    ],
    "npm:lodash._topath@3.8.1/index.js": [
      "npm:lodash.isarray@3.0.4.js",
      "github:jspm/nodelibs-process@0.1.1.js"
    ],
    "npm:lodash._topath@3.8.1.js": [
      "npm:lodash._topath@3.8.1/index.js"
    ],
    "npm:lodash.get@3.7.0/index.js": [
      "npm:lodash._baseget@3.7.2.js",
      "npm:lodash._topath@3.8.1.js"
    ],
    "npm:lodash.get@3.7.0.js": [
      "npm:lodash.get@3.7.0/index.js"
    ],
    "lib/state.js": [
      "npm:rx-lite@2.5.2.js",
      "npm:lodash.memoize@3.0.4.js",
      "npm:lodash.get@3.7.0.js"
    ],
    "npm:core-js@0.9.18/modules/$.dom-create.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.shared.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.uid.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.redef.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.uid.js"
    ],
    "npm:core-js@0.9.18/modules/$.assert.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.array-includes.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.keyof.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.enum-keys.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.get-names.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.assign.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.enum-keys.js"
    ],
    "npm:core-js@0.9.18/modules/$.set-proto.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.ctx.js"
    ],
    "npm:core-js@0.9.18/modules/es6.object.to-string.js": [
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.redef.js"
    ],
    "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.get-names.js"
    ],
    "npm:core-js@0.9.18/modules/es6.function.name.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/es6.function.has-instance.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/modules/es6.number.constructor.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.redef.js"
    ],
    "npm:core-js@0.9.18/modules/es6.number.statics.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js"
    ],
    "npm:core-js@0.9.18/modules/es6.math.js": [
      "npm:core-js@0.9.18/modules/$.def.js"
    ],
    "npm:core-js@0.9.18/modules/es6.string.from-code-point.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/es6.string.raw.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js"
    ],
    "npm:core-js@0.9.18/modules/$.string-at.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.iter.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.shared.js"
    ],
    "npm:core-js@0.9.18/modules/$.iter-define.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.redef.js",
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/modules/es6.string.code-point-at.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.string-at.js"
    ],
    "npm:core-js@0.9.18/modules/es6.string.ends-with.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.throws.js"
    ],
    "npm:core-js@0.9.18/modules/es6.string.includes.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.def.js"
    ],
    "npm:core-js@0.9.18/modules/$.string-repeat.js": [
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/es6.string.starts-with.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.throws.js"
    ],
    "npm:core-js@0.9.18/modules/$.iter-call.js": [
      "npm:core-js@0.9.18/modules/$.assert.js"
    ],
    "npm:core-js@0.9.18/modules/$.iter-detect.js": [
      "npm:core-js@0.9.18/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/modules/es6.array.of.js": [
      "npm:core-js@0.9.18/modules/$.def.js"
    ],
    "npm:core-js@0.9.18/modules/$.unscope.js": [
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.species.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/modules/es6.array.copy-within.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.unscope.js"
    ],
    "npm:core-js@0.9.18/modules/es6.array.fill.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.unscope.js"
    ],
    "npm:core-js@0.9.18/modules/es6.array.find.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.array-methods.js",
      "npm:core-js@0.9.18/modules/$.unscope.js"
    ],
    "npm:core-js@0.9.18/modules/es6.array.find-index.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.array-methods.js",
      "npm:core-js@0.9.18/modules/$.unscope.js"
    ],
    "npm:core-js@0.9.18/modules/es6.regexp.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.redef.js",
      "npm:core-js@0.9.18/modules/$.replacer.js",
      "npm:core-js@0.9.18/modules/$.species.js"
    ],
    "npm:core-js@0.9.18/modules/$.for-of.js": [
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.iter-call.js"
    ],
    "npm:core-js@0.9.18/modules/$.mix.js": [
      "npm:core-js@0.9.18/modules/$.redef.js"
    ],
    "npm:core-js@0.9.18/modules/$.collection-strong.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.for-of.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.mix.js",
      "npm:core-js@0.9.18/modules/$.iter-define.js"
    ],
    "npm:core-js@0.9.18/modules/$.collection.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.for-of.js",
      "npm:core-js@0.9.18/modules/$.species.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.redef.js",
      "npm:core-js@0.9.18/modules/$.mix.js",
      "npm:core-js@0.9.18/modules/$.iter-detect.js",
      "npm:core-js@0.9.18/modules/$.cof.js"
    ],
    "npm:core-js@0.9.18/modules/es6.set.js": [
      "npm:core-js@0.9.18/modules/$.collection-strong.js",
      "npm:core-js@0.9.18/modules/$.collection.js"
    ],
    "npm:core-js@0.9.18/modules/$.collection-weak.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.for-of.js",
      "npm:core-js@0.9.18/modules/$.array-methods.js",
      "npm:core-js@0.9.18/modules/$.mix.js"
    ],
    "npm:core-js@0.9.18/modules/es6.weak-set.js": [
      "npm:core-js@0.9.18/modules/$.collection-weak.js",
      "npm:core-js@0.9.18/modules/$.collection.js"
    ],
    "npm:core-js@0.9.18/modules/$.own-keys.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.assert.js"
    ],
    "npm:core-js@0.9.18/modules/es7.array.includes.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.array-includes.js",
      "npm:core-js@0.9.18/modules/$.unscope.js"
    ],
    "npm:core-js@0.9.18/modules/es7.string.at.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.string-at.js"
    ],
    "npm:core-js@0.9.18/modules/$.string-pad.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.string-repeat.js"
    ],
    "npm:core-js@0.9.18/modules/es7.string.rpad.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.string-pad.js"
    ],
    "npm:core-js@0.9.18/modules/es7.regexp.escape.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.replacer.js"
    ],
    "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.own-keys.js"
    ],
    "npm:core-js@0.9.18/modules/es7.object.to-array.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js"
    ],
    "npm:core-js@0.9.18/modules/$.collection-to-json.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.for-of.js"
    ],
    "npm:core-js@0.9.18/modules/es7.set.to-json.js": [
      "npm:core-js@0.9.18/modules/$.collection-to-json.js"
    ],
    "npm:core-js@0.9.18/modules/js.array.statics.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.ctx.js"
    ],
    "npm:core-js@0.9.18/modules/$.partial.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.invoke.js",
      "npm:core-js@0.9.18/modules/$.assert.js"
    ],
    "npm:core-js@0.9.18/modules/web.immediate.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.task.js"
    ],
    "npm:core-js@0.9.18/modules/web.dom.iterable.js": [
      "npm:core-js@0.9.18/modules/es6.array.iterator.js",
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.shared.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.uid.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.def.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.redef.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.keyof.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.enum-keys.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.assert.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.get-names.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.string-at.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.iter.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.cof.js",
      "npm:core-js@0.9.18/library/modules/$.assert.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js",
      "npm:core-js@0.9.18/library/modules/$.shared.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.iter-define.js": [
      "npm:core-js@0.9.18/library/modules/$.def.js",
      "npm:core-js@0.9.18/library/modules/$.redef.js",
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.cof.js",
      "npm:core-js@0.9.18/library/modules/$.iter.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/library/fn/object/create.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/es6.object.to-string.js": [
      "npm:core-js@0.9.18/library/modules/$.cof.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js",
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.redef.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.ctx.js": [
      "npm:core-js@0.9.18/library/modules/$.assert.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.iter-call.js": [
      "npm:core-js@0.9.18/library/modules/$.assert.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.set-proto.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.assert.js",
      "npm:core-js@0.9.18/library/modules/$.ctx.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.species.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.dom-create.js": [
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.mix.js": [
      "npm:core-js@0.9.18/library/modules/$.redef.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.iter-detect.js": [
      "npm:core-js@0.9.18/library/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/modules/$.js": [
      "npm:core-js@0.9.18/modules/$.fw.js"
    ],
    "npm:core-js@0.9.18/modules/$.wks.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.shared.js",
      "npm:core-js@0.9.18/modules/$.uid.js"
    ],
    "npm:core-js@0.9.18/modules/$.def.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.redef.js"
    ],
    "npm:core-js@0.9.18/modules/$.ctx.js": [
      "npm:core-js@0.9.18/modules/$.assert.js"
    ],
    "npm:core-js@0.9.18/modules/es6.symbol.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.shared.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.redef.js",
      "npm:core-js@0.9.18/modules/$.keyof.js",
      "npm:core-js@0.9.18/modules/$.enum-keys.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.get-names.js",
      "npm:core-js@0.9.18/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/modules/es6.object.assign.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.assign.js"
    ],
    "npm:core-js@0.9.18/modules/es6.object.is.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.same.js"
    ],
    "npm:core-js@0.9.18/modules/es6.object.set-prototype-of.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.set-proto.js"
    ],
    "npm:core-js@0.9.18/modules/es6.string.iterator.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.string-at.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.iter-define.js"
    ],
    "npm:core-js@0.9.18/modules/es6.string.repeat.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.string-repeat.js"
    ],
    "npm:core-js@0.9.18/modules/es6.array.from.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.iter-call.js",
      "npm:core-js@0.9.18/modules/$.iter-detect.js"
    ],
    "npm:core-js@0.9.18/modules/es6.array.iterator.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.unscope.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.iter-define.js"
    ],
    "npm:core-js@0.9.18/modules/es6.array.species.js": [
      "npm:core-js@0.9.18/modules/$.species.js"
    ],
    "npm:core-js@0.9.18/modules/es6.map.js": [
      "npm:core-js@0.9.18/modules/$.collection-strong.js",
      "npm:core-js@0.9.18/modules/$.collection.js"
    ],
    "npm:core-js@0.9.18/modules/es6.weak-map.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.collection-weak.js",
      "npm:core-js@0.9.18/modules/$.collection.js",
      "npm:core-js@0.9.18/modules/$.redef.js"
    ],
    "npm:core-js@0.9.18/modules/es6.reflect.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.set-proto.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.own-keys.js"
    ],
    "npm:core-js@0.9.18/modules/es7.string.lpad.js": [
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.string-pad.js"
    ],
    "npm:core-js@0.9.18/modules/es7.map.to-json.js": [
      "npm:core-js@0.9.18/modules/$.collection-to-json.js"
    ],
    "npm:core-js@0.9.18/modules/web.timers.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.invoke.js",
      "npm:core-js@0.9.18/modules/$.partial.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.js": [
      "npm:core-js@0.9.18/library/modules/$.fw.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.wks.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.shared.js",
      "npm:core-js@0.9.18/library/modules/$.uid.js"
    ],
    "npm:core-js@0.9.18/library/modules/es6.string.iterator.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.string-at.js",
      "npm:core-js@0.9.18/library/modules/$.uid.js",
      "npm:core-js@0.9.18/library/modules/$.iter.js",
      "npm:core-js@0.9.18/library/modules/$.iter-define.js"
    ],
    "npm:core-js@0.9.18/library/modules/es6.array.iterator.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.unscope.js",
      "npm:core-js@0.9.18/library/modules/$.uid.js",
      "npm:core-js@0.9.18/library/modules/$.iter.js",
      "npm:core-js@0.9.18/library/modules/$.iter-define.js"
    ],
    "npm:babel-runtime@5.8.19/core-js/object/create.js": [
      "npm:core-js@0.9.18/library/fn/object/create.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.for-of.js": [
      "npm:core-js@0.9.18/library/modules/$.ctx.js",
      "npm:core-js@0.9.18/library/modules/$.iter.js",
      "npm:core-js@0.9.18/library/modules/$.iter-call.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.task.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.ctx.js",
      "npm:core-js@0.9.18/library/modules/$.cof.js",
      "npm:core-js@0.9.18/library/modules/$.invoke.js",
      "npm:core-js@0.9.18/library/modules/$.dom-create.js",
      "github:jspm/nodelibs-process@0.1.1.js"
    ],
    "npm:core-js@0.9.18/modules/$.cof.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/modules/$.array-methods.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.ctx.js"
    ],
    "npm:core-js@0.9.18/library/modules/$.cof.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/library/modules/web.dom.iterable.js": [
      "npm:core-js@0.9.18/library/modules/es6.array.iterator.js",
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.iter.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/library/modules/es6.promise.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.ctx.js",
      "npm:core-js@0.9.18/library/modules/$.cof.js",
      "npm:core-js@0.9.18/library/modules/$.def.js",
      "npm:core-js@0.9.18/library/modules/$.assert.js",
      "npm:core-js@0.9.18/library/modules/$.for-of.js",
      "npm:core-js@0.9.18/library/modules/$.set-proto.js",
      "npm:core-js@0.9.18/library/modules/$.same.js",
      "npm:core-js@0.9.18/library/modules/$.species.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js",
      "npm:core-js@0.9.18/library/modules/$.uid.js",
      "npm:core-js@0.9.18/library/modules/$.task.js",
      "npm:core-js@0.9.18/library/modules/$.mix.js",
      "npm:core-js@0.9.18/library/modules/$.iter-detect.js",
      "github:jspm/nodelibs-process@0.1.1.js"
    ],
    "npm:core-js@0.9.18/modules/es5.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.dom-create.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.invoke.js",
      "npm:core-js@0.9.18/modules/$.array-methods.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.array-includes.js",
      "npm:core-js@0.9.18/modules/$.replacer.js",
      "npm:core-js@0.9.18/modules/$.throws.js"
    ],
    "npm:core-js@0.9.18/library/modules/es6.symbol.js": [
      "npm:core-js@0.9.18/library/modules/$.js",
      "npm:core-js@0.9.18/library/modules/$.cof.js",
      "npm:core-js@0.9.18/library/modules/$.uid.js",
      "npm:core-js@0.9.18/library/modules/$.shared.js",
      "npm:core-js@0.9.18/library/modules/$.def.js",
      "npm:core-js@0.9.18/library/modules/$.redef.js",
      "npm:core-js@0.9.18/library/modules/$.keyof.js",
      "npm:core-js@0.9.18/library/modules/$.enum-keys.js",
      "npm:core-js@0.9.18/library/modules/$.assert.js",
      "npm:core-js@0.9.18/library/modules/$.get-names.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/library/fn/symbol/iterator.js": [
      "npm:core-js@0.9.18/library/modules/es6.string.iterator.js",
      "npm:core-js@0.9.18/library/modules/web.dom.iterable.js",
      "npm:core-js@0.9.18/library/modules/$.wks.js"
    ],
    "npm:core-js@0.9.18/library/fn/promise.js": [
      "npm:core-js@0.9.18/library/modules/es6.object.to-string.js",
      "npm:core-js@0.9.18/library/modules/es6.string.iterator.js",
      "npm:core-js@0.9.18/library/modules/web.dom.iterable.js",
      "npm:core-js@0.9.18/library/modules/es6.promise.js",
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:core-js@0.9.18/modules/$.task.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.invoke.js",
      "npm:core-js@0.9.18/modules/$.dom-create.js",
      "github:jspm/nodelibs-process@0.1.1.js"
    ],
    "npm:core-js@0.9.18/library/fn/symbol/index.js": [
      "npm:core-js@0.9.18/library/modules/es6.symbol.js",
      "npm:core-js@0.9.18/library/modules/$.js"
    ],
    "npm:babel-runtime@5.8.19/core-js/symbol/iterator.js": [
      "npm:core-js@0.9.18/library/fn/symbol/iterator.js"
    ],
    "npm:babel-runtime@5.8.19/core-js/promise.js": [
      "npm:core-js@0.9.18/library/fn/promise.js"
    ],
    "npm:core-js@0.9.18/modules/es6.promise.js": [
      "npm:core-js@0.9.18/modules/$.js",
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.for-of.js",
      "npm:core-js@0.9.18/modules/$.set-proto.js",
      "npm:core-js@0.9.18/modules/$.same.js",
      "npm:core-js@0.9.18/modules/$.species.js",
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.task.js",
      "npm:core-js@0.9.18/modules/$.mix.js",
      "npm:core-js@0.9.18/modules/$.iter-detect.js",
      "github:jspm/nodelibs-process@0.1.1.js"
    ],
    "npm:core-js@0.9.18/library/fn/symbol.js": [
      "npm:core-js@0.9.18/library/fn/symbol/index.js"
    ],
    "npm:core-js@0.9.18/shim.js": [
      "npm:core-js@0.9.18/modules/es5.js",
      "npm:core-js@0.9.18/modules/es6.symbol.js",
      "npm:core-js@0.9.18/modules/es6.object.assign.js",
      "npm:core-js@0.9.18/modules/es6.object.is.js",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of.js",
      "npm:core-js@0.9.18/modules/es6.object.to-string.js",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives.js",
      "npm:core-js@0.9.18/modules/es6.function.name.js",
      "npm:core-js@0.9.18/modules/es6.function.has-instance.js",
      "npm:core-js@0.9.18/modules/es6.number.constructor.js",
      "npm:core-js@0.9.18/modules/es6.number.statics.js",
      "npm:core-js@0.9.18/modules/es6.math.js",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point.js",
      "npm:core-js@0.9.18/modules/es6.string.raw.js",
      "npm:core-js@0.9.18/modules/es6.string.iterator.js",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at.js",
      "npm:core-js@0.9.18/modules/es6.string.ends-with.js",
      "npm:core-js@0.9.18/modules/es6.string.includes.js",
      "npm:core-js@0.9.18/modules/es6.string.repeat.js",
      "npm:core-js@0.9.18/modules/es6.string.starts-with.js",
      "npm:core-js@0.9.18/modules/es6.array.from.js",
      "npm:core-js@0.9.18/modules/es6.array.of.js",
      "npm:core-js@0.9.18/modules/es6.array.iterator.js",
      "npm:core-js@0.9.18/modules/es6.array.species.js",
      "npm:core-js@0.9.18/modules/es6.array.copy-within.js",
      "npm:core-js@0.9.18/modules/es6.array.fill.js",
      "npm:core-js@0.9.18/modules/es6.array.find.js",
      "npm:core-js@0.9.18/modules/es6.array.find-index.js",
      "npm:core-js@0.9.18/modules/es6.regexp.js",
      "npm:core-js@0.9.18/modules/es6.promise.js",
      "npm:core-js@0.9.18/modules/es6.map.js",
      "npm:core-js@0.9.18/modules/es6.set.js",
      "npm:core-js@0.9.18/modules/es6.weak-map.js",
      "npm:core-js@0.9.18/modules/es6.weak-set.js",
      "npm:core-js@0.9.18/modules/es6.reflect.js",
      "npm:core-js@0.9.18/modules/es7.array.includes.js",
      "npm:core-js@0.9.18/modules/es7.string.at.js",
      "npm:core-js@0.9.18/modules/es7.string.lpad.js",
      "npm:core-js@0.9.18/modules/es7.string.rpad.js",
      "npm:core-js@0.9.18/modules/es7.regexp.escape.js",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@0.9.18/modules/es7.object.to-array.js",
      "npm:core-js@0.9.18/modules/es7.map.to-json.js",
      "npm:core-js@0.9.18/modules/es7.set.to-json.js",
      "npm:core-js@0.9.18/modules/js.array.statics.js",
      "npm:core-js@0.9.18/modules/web.timers.js",
      "npm:core-js@0.9.18/modules/web.immediate.js",
      "npm:core-js@0.9.18/modules/web.dom.iterable.js",
      "npm:core-js@0.9.18/modules/$.js"
    ],
    "npm:babel-runtime@5.8.19/core-js/symbol.js": [
      "npm:core-js@0.9.18/library/fn/symbol.js"
    ],
    "npm:babel-runtime@5.8.19/regenerator/runtime.js": [
      "npm:babel-runtime@5.8.19/core-js/symbol.js",
      "npm:babel-runtime@5.8.19/core-js/symbol/iterator.js",
      "npm:babel-runtime@5.8.19/core-js/object/create.js",
      "npm:babel-runtime@5.8.19/core-js/promise.js",
      "github:jspm/nodelibs-process@0.1.1.js"
    ],
    "npm:babel-core@5.8.19/lib/polyfill.js": [
      "npm:core-js@0.9.18/shim.js",
      "npm:babel-runtime@5.8.19/regenerator/runtime.js"
    ],
    "npm:babel-core@5.8.19/polyfill.js": [
      "npm:babel-core@5.8.19/lib/polyfill.js"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.8.19",
    "babel-runtime": "npm:babel-runtime@5.8.19",
    "core-js": "npm:core-js@0.9.18",
    "lodash.get": "npm:lodash.get@3.7.0",
    "lodash.memoize": "npm:lodash.memoize@3.0.4",
    "lodash.set": "npm:lodash.set@3.7.4",
    "react": "npm:react@0.13.3",
    "rx": "npm:rx@2.5.3",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.3.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.8.19": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.3.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lodash._baseget@3.7.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._topath@3.8.1": {
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.get@3.7.0": {
      "lodash._baseget": "npm:lodash._baseget@3.7.2",
      "lodash._topath": "npm:lodash._topath@3.8.1"
    },
    "npm:lodash.set@3.7.4": {
      "lodash._topath": "npm:lodash._topath@3.8.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rx@2.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

