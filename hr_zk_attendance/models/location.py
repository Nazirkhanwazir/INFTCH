from odoo import fields,models

class Locations(models.Model):
    _name = 'attendance.location'

    name = fields.Char()
    location_id = fields.Integer()