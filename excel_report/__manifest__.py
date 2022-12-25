{
    'name': 'excel_report',
    'version': '15.0.1.0.0',
    'sequence': 0,
    'summary': '',
    'description': """N/A """,
    'website': 'https://www.odoo.com',
    'depends': ['report_xlsx',
                'hr_zk_attendance'],
    'data': ['security/ir.model.access.csv',
             'wizard/wizard.xml',
             'wizard/views.xml'

             ],
    'qweb': [],
    'demo': [],
    'installable': True,
    'auto_install': False,
    'application': True,

}
