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
  {id:1,name:'vyonna',quote:'Live as if you were to die tomorrow.-by chinua'},
  {id:1,name:'vyonna',quote:'You only live once,live it up -by Abel lexy '},
  {id:1,name:'vyonna',quote:'Be who you are and say what you feel, because those who mind dont matter -by Litchaus'},
  {id:1,name:'vyonna',quote:'We must not allow other peoples limited perceptions to define us -by Roxanna'}
];



//   quoteService: any;
  

  
  constructor(){}

  ngOnInit(){}

}
function constructor() {
  throw new Error('Function not implemented.');
}

