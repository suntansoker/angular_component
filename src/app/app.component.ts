import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})
export class ProdComponent{
    head: String = 'Demonstration of Built-in directives and data binding';
    head2: String = 'Products list';
    name: String = ''
    quantity: number = 0
    prod = [];
    onClick(){
        if (isNaN(this.quantity)) {
            throw new Error("It is not a number");
          }
          this.prod.push([this.name, this.quantity ]);
      
     }
  }