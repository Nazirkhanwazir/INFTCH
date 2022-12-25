# -*- coding: utf-8 -*-
import json
from odoo import models, fields, api
import requests
# from twilio.rest import Client
import logging
from datetime import timedelta
from functools import partial

import psycopg2
import pytz
import re

from odoo import api, fields, models, tools, _
from odoo.tools import float_is_zero, float_round
from odoo.exceptions import ValidationError, UserError
from odoo.http import request
from odoo.osv.expression import AND
import base64
from odoo.exceptions import ValidationError, AccessError
from datetime import datetime, time
