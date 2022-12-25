# -*- coding: utf-8 -*-
{
    'name': "bizlop_theme_ext",

    'category': 'Theme/Creative',
    'summary': """
        Customization in Theme Twelve Bizople""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Nazir Khan",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'website_sale', 'theme_twelve_bizople'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
