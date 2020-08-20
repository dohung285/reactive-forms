import { AbstractControl } from '@angular/forms';


export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  // console.log('Password is: ' + password);
  const confirmPassword = control.get('confirmPassword');
  // console.log('ConfirmPassword is: ' + confirmPassword);
  if (password.pristine || confirmPassword.pristine) {
    return null;
  }
  return password && confirmPassword && password.value != confirmPassword.value ? { 'misMatch': true } : null
}
