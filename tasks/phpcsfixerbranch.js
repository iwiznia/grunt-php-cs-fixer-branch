/*
 * Grunt PHP Coding Standard Fixer
 * https://github.com/mgmcintyre/grunt-php-cs-fixer
 *
 * Licensed under the ISC license.
 */
'use strict';

module.exports = function(grunt) {

    var phpcsfixerbranch = require("./lib/phpcsfixerbranch").init(grunt);

    grunt.registerMultiTask("phpcsfixerbranch", "Fix PHP coding standards of current branch", function() {
        phpcsfixerbranch.setup(this);

        phpcsfixerbranch.run();
    });

};
