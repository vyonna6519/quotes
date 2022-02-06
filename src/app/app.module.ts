import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { MyformComponent } from './myform/myform.component';
import { QuotesinfoComponent } from './quotesinfo/quotesinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuotesComponent,
    MyformComponent,
    QuotesinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
