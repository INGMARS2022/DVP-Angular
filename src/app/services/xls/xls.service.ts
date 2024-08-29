import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { Defaulters } from 'src/app/interface/interface';
import {saveAs} from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class XlsService {
  private _workbook!:Workbook;
  constructor() { }
  generateXLS(data:Defaulters[],){
    //console.log(data);
    this._workbook = new Workbook();
    this._workbook.creator='WFM';
    this._table(data);
    this._workbook.xlsx.writeBuffer().then((data)=>{
      const blob = new Blob ([data]);
      saveAs(blob,'dvp.xlsx');
    })
  }
  private _table(data:Defaulters[]){
    const sheet = this._workbook.addWorksheet('Orders');
    sheet.getColumn('A').width = 25;
    sheet.getColumn('B').width = 15;
    sheet.getColumn('C').width = 30;
    sheet.getColumn('D').width = 30;
    sheet.getColumn('E').width = 30;
    sheet.getColumn('F').width = 30;
    sheet.getColumn('G').width = 30;
    sheet.getColumn('H').width = 30;
    sheet.getColumn('I').width = 30;
    sheet.getColumn('J').width = 30;
    sheet.getColumn('K').width = 30;
    sheet.getColumn('L').width = 30;
    sheet.getColumn('M').width = 30;
    sheet.getColumn('N').width = 30;
    sheet.getColumn('O').width = 30;
    sheet.getColumn('P').width = 30;
    sheet.getColumn('Q').width = 30;
    sheet.getColumn('R').width = 30;
    sheet.getColumn('S').width = 30;
    sheet.getColumn('T').width = 30;
    sheet.getColumn('W').width = 30;
    sheet.getColumn('X').width = 30;
    sheet.getColumn('Y').width = 30;
    sheet.getColumn('Z').width = 30;
    sheet.getColumn('AA').width = 30;
    sheet.getColumn('AB').width = 30;
    sheet.getColumn('AC').width = 30;
    sheet.getColumn('AD').width = 30;
    const headerRow = sheet.getRow(2);
    headerRow.values = [
      'Cuenta cliente',
      'CRM',
      'Nombre cuenta cliente',
      'Estatus cuenta cliente',
      'Clase cuenta cliente',
      'Cuenta Facturacion',
      'Nombre cuenta facturacion',
      'Subtipo cuenta facturacion',
      'Email cuenta facturacion',
      'Metodo de pago',
      'Ciclo',
      'Primera',
      'RPT',
      'Cuenta servicio',
      'Ciudad',
      'Direccion',
      'Cuenta',
      'Segmento',
      'Estatus',
      'Alta',
      'Telefono',
      'Ultimo pago',
      'Total ultima factura',
      'Saldo total',
      'Saldo vencido',
      'Saldo por vencer',
      'Antiguedad',
      'VIT'
    ]
    headerRow.font = {bold:true,size:12 };
    const rowsToInsert = sheet.getRows(3,data.length)!;
    for(let index=0;index<rowsToInsert?.length;index++){
      const item = data[index];
      const row = rowsToInsert[index];
      //let techId;
      //let techName;
      //if(item.flagRoute==0){techId='----';techName='----'}else{techId=item.technical.technicalId;techName=item.technical.technicalName}
      row.values =[
        item.customerAccount,
        item.origin,
        item.customername,
        item.customerStatus,
        item.customerClientClass,
        item.billingAccount,
        item.billingBusinessName,
        item.billingSubtype,
        item.billingEmail,
        item.billingPaymentMethod,
        item.billingCycle,
        item.billingFirstBill,
        item.billingRpt,
        item.serviceAccount,
        item.serviceCity,
        item.serviceAddress,
        item.brmAccount,
        item.brmSegment,
        item.brmStatusAccount,
        item.brmChargeDateAccount,
        item.brmPhoneMain,
        item.brmLastPayDate,
        item.brmTLBilling,
        item.brmTBalance,
        item.brmBalanceDue,
        item.brmBalanceForDue,
        item.brmAgeOfDebt,
        `${item.videoAssets}-${item.dataAssets}-${item.voiceAssets}`
      ]
    }
  }
}
