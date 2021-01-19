import { FormArray, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent  {

  form = new FormGroup({
    courses : new FormArray([])
  })

  addCourse(course:HTMLInputElement) {
    
    this.courses.push(new FormControl(course.value));
    console.log(this.courses.controls);
    course.value = '';
  }  
  
  get courses() {
    return this.form.get("courses") as FormArray
  }

  remove(course:AbstractControl) {
    let index = this.courses.controls.indexOf(course.value);
    this.courses.removeAt(index)
  }
}
