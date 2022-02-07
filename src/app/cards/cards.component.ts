import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  quotes: Quote[]=[new Quote('The purpose of our lives is to be happy', '— Dalai Lama.', 'Peter'),
  new Quote('You only live once, but if you do it right, once is enough.', '— Mae West.', 'jane'),
  new Quote(' Get busy living or get busy dying.', ' — Stephen King.', 'Peter'),

];


  constructor() { }

  ngOnInit() {
  }

}
