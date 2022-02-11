import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
// import { quotesservice } from '../Services/quotes.sevice';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
  new Quote(1,'wisdom' ,'Live as if you were to die tomorrow.','-by chinua','jane',new Date(2020,3,14),0,0),
  new Quote(1,'life','You only live once,live it up', '-by Abel lexy','mary',new Date(2020,3,14),0,0),
  new Quote(1,'motivation','Be who you are and say what you feel, because those who mind dont matter ','-by Litchaus','Abel',new Date(2020,3,14),0,0),
  new Quote(1,'educational','We must not allow other peoples limited perceptions to define us', '-by Roxanna','George',new Date(2020,3,14),0,0)
];



addnewQuotes(quote: Quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

deleteQuote(isComplete, index) {
  if(isComplete){
    let toDelete = confirm(`Confirm delete of ${this.quotes[index].name}?`)
    
    if (toDelete) {
      this.quotes.splice(index, 1)
    }
  }
}
 
@Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  // deleteQuote(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }
  countLike() {
    this.quote.upvote +=1;
  }
  countDislike(){
    this.quote.downvote +=1;

  }

  

  
  constructor(){}

  ngOnInit(){}

}
function constructor() {
  throw new Error('Function not implemented.');
}

