import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { TABLE_ROUTES } from './table.routes';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TABLE_ROUTES)
  ]
})
export class TableModule { }
