import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ind-user',
  templateUrl: './ind-user.component.html',
  styleUrls: ['./ind-user.component.css'] 
})
export class IndUserComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe((param)=>{
    let id = +param.get("id");
  })

  
  }

}
