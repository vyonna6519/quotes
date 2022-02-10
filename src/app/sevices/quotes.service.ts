import { Injectable } from '@angular/core';
import {Quote} from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
getQuotes(){
  return [
    {id:1,name:'vyonna',quote:'You only live once,live it up'},
    {id:1,name:'vyonna',quote:'You only live once,live it up'},
    {id:1,name:'vyonna',quote:'You only live once,live it up'},
    {id:1,name:'vyonna',quote:'You only live once,live it up'}
  ];
}
  constructor() { }
}
