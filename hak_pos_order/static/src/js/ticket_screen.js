odoo.define('hak_pos_order.TicketScreen', function (require) {
    'use strict';

    const TicketScreen = require('point_of_sale.TicketScreen');
    const Registries = require('point_of_sale.Registries');
    const { posbus } = require('point_of_sale.utils');
    const { parse } = require('web.field_utils');
    const { useState, useContext } = owl.hooks;

    const HAKTicketScreen = (TicketScreen) =>
        class extends TicketScreen {
            async _onDeleteOrder({ detail: order }) {
                debugger;
                const screen = order.get_screen_data();
                if (['ProductScreen', 'PaymentScreen'].includes(screen.name) && order.get_orderlines().length > 0) {
                    const { confirmed } = await this.showPopup('ConfirmPopup', {
                        title: this.env._t('Existing orderlines'),
                        body: _.str.sprintf(
                          this.env._t('%s has a total amount of %s, are you sure you want to delete this order ?'),
                          order.name, this.getTotal(order)
                        ),
                    });
                    if (!confirmed) return;
                }
                if (order && (await this._onBeforeDeleteOrder(order))) {
                    order.decrease_sequence_number();
                    order.destroy({ reason: 'abandon' });
                    posbus.trigger('order-deleted');
                }
            }
        };

    Registries.Component.extend(TicketScreen, HAKTicketScreen);


    return { TicketScreen };
});
