

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/Models/login-dto';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: any;
  objLogin: any = new LoginDto("", "");
  emailFormat = '^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$';
  mail = 'challenge@alkemy.org';
  pass = 'react'

  

  constructor(private _service: LoginService, private route: Router, private _notification: NotificationService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.pattern(this.emailFormat),
          Validators.pattern(this.mail)
        ]
      )),
      password: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(this.pass)
        ]
        ))
      });
    }


  onSubmit(): void{

    

    if (this.formLogin.invalid){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Campos usuario/contraseña están vacíos o son incorrectos',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }
    this.formLogin.get("email").disable();
    this.formLogin.get("password").disable();

    this.objLogin = new LoginDto(this.formLogin.get("email").value, this.formLogin.get("password").value);
    
    
    this._service.loginUser(this.objLogin).subscribe( (information:any) => {
      this.formLogin.get("email").enable();
      this.formLogin.get("password").enable();

      


      if(this.formLogin.valid){
        this.formLogin.reset();
        this._service.saveUser(information);
        this.route.navigate(['/']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Ingreso correcto al sistema',
          showConfirmButton: false,
          timer: 2000
        })
      } 
    });
    
    }

  }
