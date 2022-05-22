import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, COMPONENTS } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiServices } from './services/apiServices';
import { BlockCopyPasterDirective } from './directive/block-copy-paste.directive';

//project-1093975686264

@NgModule({
  declarations: [
    AppComponent,
    BlockCopyPasterDirective,
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
  providers: [ApiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
