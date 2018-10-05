import {Component} from '@angular/core';

export class MyItems {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Used To Specify Title using Interpolation
  title = 'Working With Array In Angular 5';

  // Array where we are going to do CRUD operations
  myItems: MyItems[] = new Array();

  // Other variables
  IsForUpdate: boolean = false;
  newItem: any = {};
  updatedItem;

  // Provide some values to the array
  constructor() {
    this.myItems.push(
      // new MyItems("First Value"),
      // new MyItems("Second Value"),
      // new MyItems("Third Value"),
      // new MyItems("Forth Value"),
      // new MyItems("Fifth Value")
    );
  }

  // To add new item in array
  addItem() {
    this.myItems.push(
      this.newItem
    );
    console.log(this.newItem);
    this.newItem = {};
  }

  // When user selects edit option
  editItem(i) {
    this.newItem.value = this.myItems[i].value;
    this.updatedItem = i;
    this.IsForUpdate = true;
  }

  // When user clicks on update button to submit updated value
  updateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.myItems.length; i++) {
      if (i == data) {
        this.myItems[i].value = this.newItem.value;
      }
    }
    this.IsForUpdate = false;
    this.newItem = {};
  }

  // To delete specific item
  deleteItem(i) {
    this.myItems.splice(i, 1);
  }
}
