

after running npm install

open file node_modules/mongodb/node_modules/bson/ext/index.js


change:

bson = require('../build/Release/bson');

to:

bson = require('bson');

