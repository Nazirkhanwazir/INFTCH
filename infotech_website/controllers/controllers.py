# -*- coding: utf-8 -*-
# from odoo import http


# class WebsiteHeaderExt(http.Controller):
#     @http.route('/website_header_ext/website_header_ext', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/website_header_ext/website_header_ext/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('website_header_ext.listing', {
#             'root': '/website_header_ext/website_header_ext',
#             'objects': http.request.env['website_header_ext.website_header_ext'].search([]),
#         })

#     @http.route('/website_header_ext/website_header_ext/objects/<model("website_header_ext.website_header_ext"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('website_header_ext.object', {
#             'object': obj
#         })
