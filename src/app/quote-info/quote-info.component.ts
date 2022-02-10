import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  quotes:Quote[] = [
    {id:1,name:'vyonna',quote:'You only live once,live it up'},
    {id:1,name:'vyonna',quote:'You only live once,live it up'},
    {id:1,name:'vyonna',quote:'You only live once,live it up'},
    {id:1,name:'vyonna',quote:'You only live once,live it up'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
