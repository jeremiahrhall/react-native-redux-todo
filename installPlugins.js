var async = require('async');
var ChildProcess = require('child_process');
var _ = require('lodash');
var a = [
  "transform-strict-mode",
  "transform-es2015-arrow-functions",
  "transform-es2015-block-scoping",
  "transform-es2015-block-scoped-functions",
  "transform-es2015-classes",
  "transform-es2015-computed-properties",
  "transform-es2015-constants",
  "transform-es2015-destructuring",
  "transform-es2015-for-of",
  "transform-es2015-literals",
  "transform-es2015-modules-commonjs",
  "transform-es2015-object-super",
  "transform-es2015-parameters",
  "transform-es2015-shorthand-properties",
  "transform-es2015-spread",
  "transform-es2015-sticky-regex",
  "transform-es2015-template-literals",
  "transform-es2015-typeof-symbol",
  "transform-es2015-unicode-regex",
  "transform-exponentiation-operator",
  "transform-object-rest-spread",
  "transform-class-properties",
  "transform-react-display-name",
  "transform-react-jsx",
  "transform-react-inline-elements",
  "transform-react-display-name",
  "syntax-flow",
  "syntax-jsx",
  "transform-flow-strip-types"
];

var es2015preset = {
    "transform-es2015-template-literals": "^6.0.2",
    "transform-es2015-literals": "^6.0.2",
    "transform-es2015-function-name": "^6.0.2",
    "transform-es2015-arrow-functions": "^6.0.2",
    "transform-es2015-block-scoped-functions": "^6.0.2",
    "transform-es2015-classes": "^6.0.8",
    "transform-es2015-object-super": "^6.0.2",
    "transform-es2015-shorthand-properties": "^6.0.2",
    "transform-es2015-computed-properties": "^6.0.2",
    "transform-es2015-for-of": "^6.0.2",
    "transform-es2015-sticky-regex": "^6.0.2",
    "transform-es2015-unicode-regex": "^6.0.2",
    "transform-es2015-constants": "^6.0.2",
    "transform-es2015-spread": "^6.0.2",
    "transform-es2015-parameters": "^6.0.2",
    "transform-es2015-destructuring": "^6.0.2",
    "transform-es2015-block-scoping": "^6.0.2",
    "transform-es2015-typeof-symbol": "^6.0.2",
    "transform-es2015-modules-commonjs": "^6.0.2",
    "transform-regenerator": "^6.0.8"
};

var reactPreset = {
    "syntax-flow": "^6.0.2",
    "syntax-jsx": "^6.0.2",
    "transform-react-jsx": "^6.0.2",
    "transform-flow-strip-types": "^6.0.2"
};

var comList = a.concat(_.keys(es2015preset).concat(_.keys(reactPreset)));

var combined = _.keys(_.reduce(comList, function(result, v, k) {
    result[v] = true;
    return result;
}, {}));

async.eachSeries(combined, function(plugin, cb) {
    console.log('Starting ', plugin);
    var child = ChildProcess.exec('npm install --save babel-plugin-' + plugin, {
        env: _.extend(process.env, {})
    }, function(err, stdout, stderr) {
        if (err) {
            console.log('Error: ', err);
            cb(err);
        }
        console.log('Completed install of ' + plugin)
        cb();
    });

    child.stdout.pipe(process.stdout);
}, function(err) {
    console.log('Finished with ', err);
})
