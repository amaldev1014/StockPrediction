import { Injectable } from '@angular/core';
import { stock } from './stock';
import { Stocks } from './Stocks';

@Injectable()
export class InputService {
  private stocks : stock[] = Stocks;
  constructor() { }

  getStocks(name:string): stock
  {
    for(var i=0;i<this.stocks.length;i++)
    {
      if(this.stocks[i].name == name)
      {
        return this.stocks[i]; 
      }
    }
  }
  

  

}
