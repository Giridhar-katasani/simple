
import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static minimmumLength(control : AbstractControl):ValidationErrors {
        if((control.value as string).length < 8)
            return {
                minimmumLength : {
                    requiredLength : 8
                }
            }

            return null;
    }

    static capitalLetter(control : AbstractControl) : ValidationErrors {
        let reg = new RegExp("^(?=.*[A-Z])");
        
        // console.log(reg.test(control.value));
         if(!reg.test(control.value)) 
            return {
                capitalLetter : true
         }   
         return null;
    }

    

    static oneNumeberAtLeast(control : AbstractControl) : ValidationErrors {
        let reg = new RegExp("^(?=.*[0-9])");
        // let reg :string = "0123456789"
        // console.log(reg.test(control.value));
         if(!reg.test(control.value)) 
            return {
                oneNumeberAtLeast : true
         }   
         return null;
    }

    static oneSpecialcharacterAtleast(control : AbstractControl) : ValidationErrors {
        let reg = new RegExp("^(?=.*[!@#$%^&*()_+|:])");
        // let reg :string = "0123456789"
        // console.log(reg.test(control.value));
         if(!reg.test(control.value)) {
            console.log("helo");
            return {
                oneSpecialcharacterAtleast : true
         }  
         } 
         return null;
    }


    // static patternValidation(control: AbstractControl) : ValidationErrors {
    //     let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    //     if(reg.test(control.value))
    //     return {
    //         patternValidation : true
    //     }
    //     return null;
    // }
}