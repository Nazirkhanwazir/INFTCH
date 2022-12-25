# -*- coding: utf-8 -*-
{
    'name': "InfoTech Website",

    'summary': """
        """,

    'description': """
        
    """,

    'author': "Nazir Khan",
    'website': "",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'website'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    # 'assets': {
    #     'web.assets_frontend': [
    #         'website_header_ext/static/src/css/custom.css',
    #         'website_header_ext/static/src/js/custom.js',
    #         'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
    #         'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js'
    #     ],
    # },
}

