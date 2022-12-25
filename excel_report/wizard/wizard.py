import datetime

import pytz

from odoo import models, fields



class HrEmployeewizard(models.TransientModel):

    _name = 'employee.attandce.wizard'
    _description = 'Employee Wizard'


    location_id = fields.Many2one('attendance.location', string="Location",required=True)
    date = fields.Date(string="Date",required=True)


    def hr_attendance_report(self):
        data = {}
        return self.env.ref('excel_report.hr_attendacne_xlsx_report').report_action(self,data=data)

class AttendanceEmployeeXlsx(models.AbstractModel):
    _name = 'report.excel_report.employee_attandce_wizard_xlsx'
    _inherit = 'report.report_xlsx.abstract'

    def generate_xlsx_report(self, workbook, data, rec):
        sheet = workbook.add_worksheet('Attendance Report')
        formathead = workbook.add_format({
            'font_size': 12,
            "bold": 1,
        })
        formatbody = workbook.add_format({
            'font_size': 12,
        })
        row = 0
        col = 0
        sheet.write(row + 0, col + 2, 'Location',formathead)
        sheet.write(row + 0, col + 3, rec.location_id.name,formatbody)
        sheet.write(row+0, col + 5, 'Date:',formathead)
        sheet.write(row+0, col + 6, str(rec.date),formatbody)
        sheet.write(row +2, col, 'Name',formathead)
        sheet.write(row +2, col + 1, 'Time',formathead)
        sheet.write(row +2, col + 2, 'Type',formathead)
        sheet.write(row +2, col + 3, 'Time',formathead)
        sheet.write(row +2, col + 4, 'Type',formathead)
        sheet.write(row +2, col + 5, 'Time',formathead)
        sheet.write(row +2, col + 6, 'Type',formathead)
        sheet.write(row +2, col + 7, 'Time',formathead)
        sheet.write(row +2, col + 8, 'Type',formathead)
        employees = self.env['hr.employee'].search([('location_id','=',rec.location_id.id)])
        for employee in employees:
            attendances = self.env['zk.machine.attendance'].search(
                [('employee_id', '=', employee.id), ('date', '=', rec.date)],order='punching_time asc')
            row+=1
            sheet.write(row + 2, col, employee.name, formatbody)
            main_col = 0
            for i,attendance in enumerate(attendances):
                local_tz = pytz.timezone(
                    self.env.user.tz or 'GMT')
                local_dt = local_tz.localize(attendance.punching_time, is_dst=None)
                utc_dt = local_dt.astimezone(pytz.utc)
                utc_dt = utc_dt.strftime("%Y-%m-%d %H:%M:%S")
                atten_time = datetime.datetime.strptime(
                    utc_dt, "%Y-%m-%d %H:%M:%S") +datetime.timedelta(hours=8)
                col+=1
                punch_type = dict(attendance._fields['punch_type'].selection).get(attendance.punch_type)
                sheet.write(row + 2, col, str(atten_time), formatbody)
                col += 1
                sheet.write(row + 2, col, punch_type, formatbody)
            col = 0





