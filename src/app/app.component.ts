import { Component, OnInit } from '@angular/core';
import { fillProperties } from '@angular/core/src/util/property';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  get userName() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: [''],
      subscribe: [false],
      username: ['', [Validators.required, Validators.minLength(5), forbiddenNameValidator(/password/)]],
      password: [''],
      confirmPassword: [''],

      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, { validator: passwordValidator });


    //nut checkbox
    this.registrationForm.get('subscribe').valueChanges.subscribe(
      checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();

      }
    );

    // this.registrationForm.get('subscribe').valueChanges
    //   .subscribe(checkedValue => {
    //     const email = this.registrationForm.get('email');
    //     if (checkedValue) {
    //       email.setValidators(Validators.required);
    //     } else {
    //       email.clearValidators();
    //     }
    //     email.updateValueAndValidity();
    //   });



  }





  // registrationForm = new FormGroup({

  //   username: new FormControl('DoHung'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),

  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })

  // });

  loadApi() {
    // this.registrationForm.setValue({

    //   username: 'LinhTN9',
    //   password: '123',
    //   confirmPassword: '123',

    //   address: {
    //     city: 'Hai Phong',
    //     state: '100',
    //     postalCode: '100'
    //   }


    // });

    this.registrationForm.patchValue({

      username: 'LinhTN9',
      password: '123',
      confirmPassword: '123',

      // address: {
      //   city: 'Hai Phong',
      //   state: '100',
      //   postalCode: '100'
      // }


    });




  }


  onSubmit(){
    // alert('OK');
    console.log(this.registrationForm.value);
  }




}
