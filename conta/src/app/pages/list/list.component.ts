import { Component, OnInit } from '@angular/core';

import { Sale } from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public sales: Sale[];

  constructor(
    private _saleService: SaleService
  ) {
    this.sales = [];
  }

  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  private async getData(): Promise<void> {
    try {
      const data = await this._saleService.getAll();
      if (data['code'] === '200') {
        this.sales = data['data'];
      }
    } catch (err) {
      console.log(<any>err);
    }
  }
}
