import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  quotes: Quote[] = [
    // new Quote(1,'Wisdom Quote', 'Judge the character of a man by how he treats those who can do nothing for him.', new Date(2020,3,14)), 
  ]

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  
  
    addNewQuote(quote) {
      let quoteLength = this.quotes.length;
      quote.id = quoteLength +1;
      quote.completeDate = new Date(quote.submitDate)
      this.quotes.push(quote)
    }
  constructor() { }

  ngOnInit() :void {
  }

}
function newDate(arg0: number, arg1: number, arg2: number): Date {
  throw new Error('Function not implemented.');
}

