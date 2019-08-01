import { Component, OnInit } from '@angular/core';
import {InputService} from '../input.service';
import { Stocks } from '../Stocks';
import {stock} from '../stock';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  current_stock : stock ;
  past_stocks : stock[] = [];
  
  constructor(private inputservice :InputService) { }

  ngOnInit() {
  }

  setStocks(name :string): void
  {
    this.current_stock = this.inputservice.getStocks(name);

     this.current_stock.search_time =(new Date().toTimeString());
    this.past_stocks.push(this.current_stock);
    console.log(this.current_stock.price);
  
  }

 
 
}
