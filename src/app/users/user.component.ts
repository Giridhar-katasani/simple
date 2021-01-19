import { ActivatedRoute } from '@angular/router';
import { UserService } from './../services/user.service';

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';



@Component({
    
    selector:'app-user-http',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit {

    @Input() userName:String;
    posts:any[];
    disp:boolean;
    val="Val";
    // private url = 'http://api.openweathermap.org/data/2.5/weather?q=guntur&appid=895b2324623bbd971f9444acea41bd64'
    
    constructor(private route : ActivatedRoute , private service : UserService) {
        
    }

    ngOnInit() {
        this.route.paramMap.subscribe((param) => {
            console.log(param);
        })
        this.route.queryParamMap.subscribe((queryParam) => {
            console.log(queryParam);
        })
    }

    getUser(input: HTMLButtonElement) {
        
        // this.service.getUser()
        //     .subscribe(
        //         response => {
        //             this.disp = !this.disp;  
        //             this.posts = response;
        //             console.log(this.posts[0]);
        // })

    
        // Observable.combineLatest([
        //     this.route.paramMap,
        //     this.route.queryParamMap
        // ]).subscribe(combined => {
        //     let param = combined[0];
        //     console.log(param);
        // })


        this.service.getUser()
            .subscribe(response => {
                this.posts = response;
            })
    }

    createUser(input) {
        let user ;
        this.service.createUser(user)
            .subscribe(
                res => {
                    user ={...res};
                    
                    user["title"] = input.value;
                    this.posts.splice(0,0,user);
                    console.log(user);
        },
        (error : Response) => {
            if(error.status === 400){

            }
            else {
                alert("un-expected error occurs");
            }
        });
    }

    updateUser(user) {
        this.service.updateUser(user)
            .subscribe(
                response => {
                    console.log(response);
                },
                (error:Response) => {
                    
                    alert("un-expected error occurs");
                })
    }

    updateInput(post) {
        this.val = post.title;
        console.log(post.title);
    }

    deleteUser(post) {
        
        this.service.deleteUser(884)
            .subscribe(
                response => {
                    let index = this.posts.indexOf(post);
                    
                    this.posts.splice(index,1);
                },  
                (error : Response)  => {
                    if(error.status == 404) {
                        console.log(error.status)
                        alert("this message is alerdy deleted"); 
                    } else {
                        alert("un-expected error occurs");   
                    }
                });
    }
}