import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidation {
    
    static cannotContainSpace(control:AbstractControl) :ValidationErrors | null {
        if((control.value as String).indexOf(' ') >= 0) {
        //    console.log(control)
            return {
                cannotContainSpace : true
            }
        }
            return null;
    }

    static uniqNameValidation(control : AbstractControl) : Promise<ValidationErrors | null> {
        
        // console.log("helo")
        return new Promise((resolve, reject) => {
            
            setTimeout(() => {
                if(control.value === "giridhar") 

                    resolve({uniqNameValidation : true}) 
                
                else  resolve(null);
            }, 2000);
        });  
    }
}