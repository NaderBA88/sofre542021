import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  bgc = 'blue';
  constructor() { }

  ngOnInit(): void {
  }

  getInput(input : string){
    this.bgc = input;
  }

  getFirst() : void{
    this.bgc = 'blue';
  }

}
