import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "ojo! , este mail no es valido" }
    ],
    password: [
      { type: "required", message: "El password es requerido" },
      { type: "minlength", message: "Minimo 5 letras" }
    ]
  };

  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  ngOnInit() {
  }

  loginUser(credentials) {
    //console.log(credentials)
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set('isUserLoggedIn' , true)
      this.navCtrl.navigateForward("/home");
    }).catch(err =>{
      this.errorMessage = err;
    });
  }
  goToRegister(){
    this.navCtrl.navigateForward('/register')
  }
}
