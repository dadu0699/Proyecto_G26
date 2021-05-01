import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { SaleComponent } from './sale/sale.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'sale', component: SaleComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
