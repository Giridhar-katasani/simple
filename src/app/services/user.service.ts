import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, retry} from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http : HttpClient) { }

  getUser():Observable<any> {
    
    return this.http.get(this.url).pipe(catchError(this.handleError)) 
   }

   handleError(error) {
     let errorMessage = ' ';
     if (error.error instanceof ErrorEvent) {
      //  client side
      console.log(error);
        errorMessage = `Error: ${error.error.message}`;
     }
     else {
      // server-side error
      console.log(error);
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    
   }

  createUser(user) {
    return this.http.post(this.url, JSON.stringify(user))
  }

  updateUser(user) {
    return this.http.patch(this.url+'/'+user.id,  JSON.stringify({isRead : true}))
  }

  deleteUser(id) {
    // return null;
    console.log("deleted")
    return this.http.delete(this.url+'/'+id)
  }
}
