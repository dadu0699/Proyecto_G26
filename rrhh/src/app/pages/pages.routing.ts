import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { SellerComponent } from './seller/seller.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'seller', component: SellerComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
