import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public bikeForm?: FormGroup;
  public hasFormError: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.bikeForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      subname: new FormControl(''),
      nif: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      privacity: new FormControl(false, [Validators.requiredTrue]),
      description: new FormControl(''),
      phone: new FormControl('', [Validators.maxLength(10), Validators.minLength(9), Validators.pattern('^[0-9]+$')]),
    })
  }
  public sendData(){
    console.log(this.bikeForm?.value, this.bikeForm?.valid);

    if(this.bikeForm?.valid){
      this.hasFormError = false;
    } else{
      this.hasFormError = true;
    }
  }
}
