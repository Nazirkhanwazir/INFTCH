# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class website_header_ext(models.Model):
#     _name = 'website_header_ext.website_header_ext'
#     _description = 'website_header_ext.website_header_ext'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
