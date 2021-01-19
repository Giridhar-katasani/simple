import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent {

  constructor() { }
  
  @Output() personName = new EventEmitter();
  
  addPerson(value:String) {
    this.personName.emit(value);
  }
}
