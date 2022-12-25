odoo.define('theme_twelve_bizople.gradient_color_option_js', function(require) {
    'use strict';
    var ajax = require('web.ajax');
    var core = require('web.core');
    var qweb = core.qweb;

    ajax.loadXML('/theme_twelve_bizople/static/src/xml/gradient_color_option.xml', qweb);

});