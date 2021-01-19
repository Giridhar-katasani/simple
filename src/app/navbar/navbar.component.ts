import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
isFormActive=false;
isUserActive=false; 
currentBrand = "ITC";
onFormClick() {
  
  this.isFormActive = !this.isFormActive;
  
}

onUserClick() {
this.isUserActive = !this.isUserActive;
console.log(this.isUserActive);
}

setFormClasses() {
  return {
    'active': this.isFormActive,
    'bg-success':this.isFormActive
  }
}

 setUserClasses() {
  return {
    'active': this.isUserActive,
    'bg-success':this.isUserActive
  }
}

  ngOnInit(): void {
  }

}
