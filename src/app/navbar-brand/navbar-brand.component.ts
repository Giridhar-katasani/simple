import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-brand',
  templateUrl: './navbar-brand.component.html',
  styleUrls: ['./navbar-brand.component.css']
})
export class NavbarBrandComponent  {

  constructor() { }

  @Input() brandName:String;
}
