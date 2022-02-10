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
  {id:1,name:'vyonna',quote:'You only live once,live it up'},
  {id:1,name:'vyonna',quote:'You only live once,live it up'},
  {id:1,name:'vyonna',quote:'You only live once,live it up'},
  {id:1,name:'vyonna',quote:'You only live once,live it up'}
];



//   quoteService: any;
  

  
  constructor(){}

  ngOnInit(){}

}
function constructor() {
  throw new Error('Function not implemented.');
}

