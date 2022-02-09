import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";

export default class Validation {

    static match(controleName : string, checkControlName : string) : ValidatorFn{
        return (controls: AbstractControl) => {
            const control = controls.get(controleName);
            const checkControl = controls.get(checkControlName);
      
            if (checkControl?.errors && !checkControl?.errors.matching) {
              return null;
            }
      
            if (control?.value !== checkControl?.value) {
              controls.get(checkControlName)?.setErrors({ matching: true });
              return { matching: true };
            } else {
              return null;
            }
    }
}
}
