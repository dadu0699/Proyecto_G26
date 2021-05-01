import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sale } from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { Seller } from 'src/app/models/seller.model';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  public sale: Sale;
  public books: Array<Book>;
  public sellers: Array<Seller>;

  constructor(
    private _router: Router,
    private _saleService: SaleService,
    private _sellerService: SellerService,
    private _bookService: BookService,
  ) {
    this.sale = new Sale();
    this.books = new Array<Book>();
    this.sellers = new Array<Seller>();
  }

  async ngOnInit() {
    await this.getBooks();
    await this.getSellers();
  }

  private async getSellers(): Promise<void> {
    try {
      const data = await this._sellerService.getAll();
      if (data['code'] === '200') {
        this.sellers = data['data'];
      }
    } catch (err) {
      console.log(<any>err);
    }
  }

  private async getBooks(): Promise<void> {
    try {
      const data = await this._bookService.getAll();
      if (data['code'] === '200') {
        this.books = data['data'];
      }
    } catch (err) {
      console.log(<any>err);
    }
  }

  public async onSubmit() {
    try {
      await this._saleService.create(this.sale);
      this._router.navigate(['/']);
    } catch (err) {
      console.log(<any>err);
    }
  }
}
