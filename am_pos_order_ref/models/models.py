# -*- coding: utf-8 -*-

from odoo import api, fields, models,_
from odoo.exceptions import ValidationError, Warning
from odoo.http import request
from functools import partial
import datetime
import logging
_logger = logging.getLogger(__name__)


class PosOrder(models.Model):
	_inherit = "pos.order"

	@api.model
	def get_order_ref(self,sequence_id):

		print(self)
		print(sequence_id)
		if sequence_id:
			sequence_id = self.env['ir.sequence'].browse(sequence_id)

			return sequence_id.number_next_actual
