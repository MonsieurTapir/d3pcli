import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component'
import {BuildListComponent} from './build-list/build-list.component'

const routes: Routes = [{ path: 'items', component: ItemListComponent },
{ path: 'builds', component: BuildListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
