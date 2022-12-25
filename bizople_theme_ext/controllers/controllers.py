# -*- coding: utf-8 -*-
# from odoo import http


# class ThemeTwelveBizolpeExt(http.Controller):
#     @http.route('/theme_twelve_bizolpe_ext/theme_twelve_bizolpe_ext', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/theme_twelve_bizolpe_ext/theme_twelve_bizolpe_ext/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('theme_twelve_bizolpe_ext.listing', {
#             'root': '/theme_twelve_bizolpe_ext/theme_twelve_bizolpe_ext',
#             'objects': http.request.env['theme_twelve_bizolpe_ext.theme_twelve_bizolpe_ext'].search([]),
#         })

#     @http.route('/theme_twelve_bizolpe_ext/theme_twelve_bizolpe_ext/objects/<model("theme_twelve_bizolpe_ext.theme_twelve_bizolpe_ext"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('theme_twelve_bizolpe_ext.object', {
#             'object': obj
#         })
