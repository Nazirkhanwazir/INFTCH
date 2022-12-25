# -*- coding: utf-8 -*-

{
  "name"                 :  "Pos Order Number",
  "summary"              :  "Pos Order",
  "category"             :  "Point Of Sale",
  "version"              :  "15.0",
  "author"               :  "HAK Technologies",
  "description"          :  """
                            Pos Order Number
                              """,
  "depends"              :  [
                             'point_of_sale'
                            ],

  "data"                 :  [
                            ],
  "assets"               : {

             			'point_of_sale.assets':
             					 [
                                     'am_pos_order_ref/static/src/js/main.js',
             						],
                       'web.assets_qweb': [
                           'am_pos_order_ref/static/src/xml/pos.xml',
                       ],

                 						    },
  "images"               :  ['static/description/image.png'],
  "application"          :  True,
  "installable"          :  True,
  "auto_install"         :  False,
  'license': 'LGPL-3',
}
