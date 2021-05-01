import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Global } from 'src/app/services/Global';
import { Seller } from 'src/app/models/seller.model';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = `${Global.url}/seller`;
  }

  public async getAll(): Promise<any> {
    return await this._httpClient.get(this.url).toPromise();
  }
}
