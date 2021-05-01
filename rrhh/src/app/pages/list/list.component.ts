import { Component, OnInit } from '@angular/core';

import { Seller } from 'src/app/models/seller';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public sellers: Seller[];

  constructor(
    private _sellerService: SellerService
  ) {
    this.sellers = [];
  }

  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  private async getData(): Promise<void> {
    try {
      const data = await this._sellerService.getAll();
      if (data['code'] === '200') {
        this.sellers = data['data'];
      }
    } catch (err) {
      console.log(<any>err);
    }
  }
}
