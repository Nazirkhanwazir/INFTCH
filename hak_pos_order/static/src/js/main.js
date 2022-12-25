odoo.define('pos_fixed_line_discount.models', function(require) {
	"use strict";

	var models = require('point_of_sale.models');
	var core = require('web.core');

	var _t = core._t;
    var utils = require('web.utils');
    var round_pr = utils.round_precision;


	// Start Order start

    var _super = models.Order.prototype;
    models.Order = models.Order.extend({
        initialize: function() {
            _super.initialize.apply(this,arguments);
        },


        decrease_sequence_number: function(){
            this.pos.pos_session.sequence_number = this.pos.pos_session.sequence_number-1;
        },

//        generate_unique_id: function() {
//        // Generates a public identification number for the order.
//        // The generated number must be unique and sequential. They are made 12 digit long
//        // to fit into EAN-13 barcodes, should it be needed
//
//        function zero_pad(num,size){
//            var s = ""+num;
//            while (s.length < size) {
//                s = "0" + s;
//            }
//            return s;
//        }
//        return 'POS/'+zero_pad(this.sequence_number,4);
//    },
	    // End Order start
    });

});
