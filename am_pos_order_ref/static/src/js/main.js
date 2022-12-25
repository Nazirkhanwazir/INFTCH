odoo.define('am_pos_order_ref.screens', function (require) {

    var models = require('point_of_sale.models');
    var db = require('point_of_sale.DB');
    var core = require('web.core');
    var rpc = require('web.rpc');
    var QWeb = core.qweb;
    var SuperPosModel = models.PosModel.prototype;
    const Registries = require('point_of_sale.Registries');
    const TicketScreen = require('point_of_sale.TicketScreen');
    const PosComponent = require('point_of_sale.PosComponent');
    const ProductScreen = require('point_of_sale.ProductScreen');
    const PaymentScreen = require('point_of_sale.PaymentScreen');

	const { useListener } = require('web.custom_hooks');
    var SuperOrder = models.Order.prototype;


    models.load_models([{
        model: 'ir.sequence',
        fields: [],
        domain: function (self) {
            return [
                ['id', '=', self.config.sequence_id[0]]
            ];
        },
        loaded: function (self, data) {
            if (data) {
              self.config.sequence = data[0]
            }
        },
    }, ], {
        'after': 'pos.config'
    });



    var SuperPosModel = models.PosModel.prototype;
    models.PosModel = models.PosModel.extend({
        update_order_ref: function () {

            var self = this;
            rpc.query({
                'method': 'get_order_ref',
                'model': 'pos.order',
                'args':[self.config.sequence_id[0]]
            }).then(function (data) {
              console.log('data',data)
              var seq = self.config.sequence;
              seq.number_next_actual = data
            }).catch(function (error){
                console.warn('Failed to send onmbmnbmnbmrders:', error);
                var seq = self.config.sequence;
                seq.number_next_actual +=1;
            });
        },
        _save_to_server: function (orders, options) {
            var self = this;
            return SuperPosModel._save_to_server.call(this, orders, options).then(function (return_dict) {
                if (return_dict) {
                  if (orders) {
                    self.update_order_ref();
                  }
                }
                return return_dict
            });
        },
    });



    models.Order = models.Order.extend({
        initialize: function (attributes, options) {
            var self = this;
            self.order_ref = false;
            var res = SuperOrder.initialize.call(self, attributes, options);
            return res;
        },
        export_for_printing: function () {
            var self = this
            var receipt = SuperOrder.export_for_printing.call(this)
            if (self.pos.config.sequence) {
              var seq = self.pos.config.sequence;
              var new_number = parseInt(seq.number_next_actual);
              const zeroPad = (num, places) => String(num).padStart(places, '0')
              console.log(seq.prefix , zeroPad(new_number, 4));
              receipt.order_ref = seq.prefix + zeroPad(new_number, 4);
            }
            return receipt
        },


    });

      //
      //
    	// const PaymentScreenWidget = (PaymentScreen) =>
    	// 	class extends PaymentScreen {
      //     constructor() {
      //       super(...arguments);
      //     }
    	// 		async validateOrder(isForceValidate) {
      //       var self = this;
      //       await super.validateOrder(...arguments);
  		// 			// super.validateOrder(isForceValidate);
      //       // var seq = self.env.pos.config.sequence;
      //       // var new_number = parseInt(seq.number_next_actual);
      //       // seq.number_next_actual +=1;
    	// 		}
    	// };
      //
    	// Registries.Component.extend(PaymentScreen, PaymentScreenWidget);







});
