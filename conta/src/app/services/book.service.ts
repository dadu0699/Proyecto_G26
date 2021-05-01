import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Global } from 'src/app/services/Global';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = `${Global.url}`;
  }

  public async getAll(): Promise<any> {
    return await this._httpClient.get(`${this.url}`).toPromise();
  }
}
