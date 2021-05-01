import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { ListComponent } from './list/list.component';
import { SellerComponent } from './seller/seller.component';

@NgModule({
  declarations: [
    PagesComponent,
    ListComponent,
    SellerComponent
  ],
  exports: [
    PagesComponent,
    ListComponent,
    SellerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
