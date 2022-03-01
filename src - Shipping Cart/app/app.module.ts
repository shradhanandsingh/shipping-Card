import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, COMPONENTS } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header.component';
import { ProductComponent } from './component/product/product.component';
import { ApiService } from 'src_udan/app/shared/api.service';
import { FilterPipe } from './shared/filterPipe';

//project-1093975686264

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FilterPipe,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
