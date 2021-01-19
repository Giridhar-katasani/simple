import {  Component, OnInit, Input, ViewChild  } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  
  cars = ['tesla', 'jaguar',
            'land rover', 'Benz'];

  model:Hero = new Hero(18, 'Dr IQ', this.cars[0], 'chennai');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  log(x:any) {
    console.log(x)
  }
  check(y:any) {
    console.log(y)
  }
  submit(z:any) {
    console.log(z);
  }
}