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
      'VIT',
      'Estatus cuenta cliente',
      'Clase cuenta cliente',
      'Cuenta facturacion',
      'Nombre cuenta facturacion',
      'Nombre cuenta cliente',
      'Metodo de pago',
      'Saldo total',
      'Saldo por vencer',
      'Ciclo',
      'Vencimiento',
      'Email cuenta facturacion',
      'RPT',
      'Ciudad',
      'Hit1',
      'Hit3',
      'Primera compra',
      'Fecha de instalacion',
      'Subtipo cuenta facturacion',
      'Direccion',
      'Dias Mora',
      'Bucket',
      'Cuenta servicio',
      'Telefono',
      'BRM Segmento',
      'BRM Estatus',
      'BRM Ultimo Pago',
      'BRM Total Factura',
      'BRM Saldo vencido',
      'BRM Antiguedad deuda'

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

        `${item.videoAssets}-${item.dataAssets}-${item.voiceAssets}`,
        item.customerStatus,
        item.customerClientClass,
        item.billingAccount,
        item.billingBusinessName,
        item.customername,
        item.billingPaymentMethod,
        item.brmTBalance,
        item.brmBalanceForDue,
        item.billingCycle,
        item.billingDueDate,
        item.billingEmail,
        item.billingRpt,
        item.serviceCity,
        item.hit1,
        item.hit3,
        item.billingFirstBill,
        item.brmChargeDateAccount,
        item.billingSubtype,
        item.serviceAddress,
        '',
        item.bucket,
        item.serviceAccount,
        item.brmPhoneMain,
        item.brmSegment,
        item.brmStatusAccount,
        item.brmLastPayDate,
        item.brmBalanceDue,
        item.brmTLBilling,
        item.brmAgeOfDebt,
      ]
    }
  }
}
