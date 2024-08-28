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
    const headerRow = sheet.getRow(2);
    headerRow.values = [
      'Customer Account',
      'Customer Status',
      'Customer Client Class',
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
        item.customerStatus,
        item.customerClientClass,
      ]
    }
  }
}
