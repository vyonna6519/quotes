import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
// import { quotesservice } from '../Services/quotes.sevice';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
  new Quote(1,'vyonna' ,'Live as if you were to die tomorrow.-by chinua',new Date(2020,3,14)),
  new Quote(1,'vyonna','You only live once,live it up -by Abel lexy',new Date(2020,3,14)),
  new Quote(1,'vyonna','Be who you are and say what you feel, because those who mind dont matter -by Litchaus',new Date(2020,3,14)),
  new Quote(1,'vyonna','We must not allow other peoples limited perceptions to define us -by Roxanna',new Date(2020,3,14))
];



//   quoteService: any;
  

  
  constructor(){}

  ngOnInit(){}

}
function constructor() {
  throw new Error('Function not implemented.');
}

