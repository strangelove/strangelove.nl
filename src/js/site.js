'use strict';

var behaviour = require('behaviour');

behaviour.register('data-slides', require('./modules/slides'));
behaviour.register('data-case-slides', require('./modules/case-slides'));
behaviour.execute();

require('./modules/contact');
require('./home');
