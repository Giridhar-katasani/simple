import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector:"person-array",
    templateUrl:"./person.component.html"
})
export class PersonComponent implements OnInit {
    
    @Input() name:String;
    personArray=[];

    addItem(value:string) {
        console.log(value);
        this.personArray.push(value);
        console.log(this.personArray);
    }
    ngOnInit(): void {
    }
     
}