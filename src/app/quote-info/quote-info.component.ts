import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Wisdom Quote', 'Judge the character of a man by how he treats those who can do nothing for him.'), 
  ]
  constructor() { }

  ngOnInit() :void {
  }

}
