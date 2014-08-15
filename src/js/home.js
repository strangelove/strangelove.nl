'use strict';

var behaviour = require('behaviour');

behaviour.register('data-slides', require('./modules/slides'));
behaviour.execute();

require('./modules/headers');
require('./modules/mood');
require('./modules/services');
require('./modules/cases');
require('./modules/team');
require('./modules/contact');
