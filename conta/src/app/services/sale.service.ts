import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Global } from 'src/app/services/Global';
import { Sale } from 'src/app/models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = `${Global.url}/sale`;
  }

  public async getAll(): Promise<any> {
    return await this._httpClient.get(this.url).toPromise();
  }

  public async create(sale: Sale): Promise<any> {
    const json = JSON.stringify(sale);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await this._httpClient.post(this.url, json, { headers: headers }).toPromise();
  }
}
