import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
// import { FormComponent } from './form/form.component';
// import { QuotesComponent } from './quotes/quotes.component';
// import { MyformComponent } from './myform/myform.component';
// import { QuotesinfoComponent } from './quotesinfo/quotesinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardsComponent,
    FooterComponent,
    // FormComponent,
    // QuotesComponent,
    // MyformComponent,
    // QuotesinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
