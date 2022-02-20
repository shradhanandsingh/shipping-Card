import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatTreeModule,
   MatSelectModule,
   MatFormFieldModule,
   MatToolbarModule,
   CdkAccordionModule,
   MatInputModule,
   MatRadioModule,
   MatMenuModule,
   MatCardModule,
   MatPaginatorModule,
   MatDatepickerModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatTreeModule,
   MatSelectModule,
   MatFormFieldModule,
   MatToolbarModule,
   CdkAccordionModule,
   MatInputModule,
   MatRadioModule,
   MatMenuModule,
   MatCardModule,
   MatPaginatorModule,
   MatDatepickerModule
  ]
})
export class MaterialModule { }
