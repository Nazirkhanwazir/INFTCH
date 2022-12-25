# -*- coding: utf-8 -*-
{
    'name': "POS Sequence & Sale Detials Report",

    'summary': """
       1.Added a new colomn in sales details report to show the total value.
       2.Sequence will not be changed if we delete the POS orders.""",

    'description': """
        1.Added a new colomn in sales details report to show the total value.
       2.Sequence will not be changed if we delete the POS orders.
    """,

    'author': "Hunain AK",
    'website': "http://www.haksolutions.com",
    'images': ['static/description/icon.png'],

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '15.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'point_of_sale'],


    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    'assets': {
        'web.assets_qweb': [
            "hak_pos_order/static/src/xml/pos.xml",
        ],
        'web.assets_backend': [
            'hak_pos_order/static/src/js/main.js',
            'hak_pos_order/static/src/js/ticket_screen.js',
        ],
    },
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],

}
