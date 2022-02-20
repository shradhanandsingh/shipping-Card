import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterCompoent } from './footer/footer.component';
import { NgMarqueeModule } from 'ng-marquee';
import {MaterialModule} from '../../material/material.module';
import {HomeRoutingModule, COMPONENTS} from './home.routing.module';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterCompoent,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    NgMarqueeModule,
    MaterialModule,
    HomeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService]
})
export class HomeModule { }
