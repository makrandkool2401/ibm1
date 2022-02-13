import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  logIn!:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.logIn= new FormGroup({
      'fName':new FormControl('',[Validators.required, Validators.minLength(4)]),
      'lName':new FormControl('',[Validators.required, Validators.minLength(4)]),
      'email': new FormControl('',[Validators.required, Validators.minLength(7)]),
      'password':new FormControl('',[Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    console.log(this.logIn);
  }

  
  get fname() {
    return this.logIn.controls['fName'];
  } 


  get lname(){
    return this.logIn.controls['lName']
  }

  get email(){
    return this.logIn.controls['email']
  }
  get password(){
    return this.logIn.controls['password']
  }
  
}
