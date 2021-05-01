import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Seller } from 'src/app/models/seller';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  public seller: Seller;

  constructor(
    private _router: Router,
    private _sellerService: SellerService
  ) { }

  ngOnInit(): void {
    this.seller = new Seller();
  }

  async onSubmit() {
    try {
      await this._sellerService.create(this.seller);
      this._router.navigate(['/']);
    } catch (err) {
      console.log(<any>err);
    }
  }
}
