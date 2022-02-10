import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
      
   quotes = new Quote(0,'', '',);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.quotes);
  }
  
  constructor() {}

  ngOnInit() {}

}
