import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName,FormControlDirective, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {UserService} from '../../user.service';
import {User} from '../../user'
import {Router} from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})


export class SingupComponent implements OnInit {

  form:FormGroup

   user:any= [];

  constructor (private userService:UserService) { }


  createAccount(){

    //console.log("hello");
    console.log(this.form.value);
    this.userService.saveData(this.form.value).subscribe((res)=>{
      //this.notification.showSuccess("User registered successfully ","Success");
      //this.router.navigateByUrl("loginNew");
      console.log("data added ",res);
      alert("Registered Successfully!");
     // this.router.navigateByUrl("login");

    })

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      
      first_name:new FormControl("",),
      last_name:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
      confirm_password:new FormControl("")
  
  })

}
}